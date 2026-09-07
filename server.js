const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: "Too many contact requests. Please try again later."
});


app.post("/send", contactLimiter, async (req, res) => {

    const { name, email, message } = req.body;
if(!name || !email || !message){ return res.status(400).send("Missing fields"); }
if(String(message).length > 5000){ return res.status(400).send("Message too long"); }

    try {

        const transporter = nodemailer.createTransport({

            service: "gmail",

            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }

        });

        await transporter.sendMail({

            from: process.env.EMAIL,

            to: process.env.EMAIL,

            subject: `New Message From ${name}`,

            html: `
                <h2>Gamers Burnout Contact Form</h2>

                <p><b>Name:</b> ${name}</p>

                <p><b>Email:</b> ${email}</p>

                <p><b>Message:</b></p>

                <p>${message}</p>
            `

        });

        res.send("Message Sent Successfully");

    } catch (error) {
        console.error(error);
        res.status(500).send("Error Sending Message");
    }

});

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.info(`Server running on port ${PORT}`);
});

server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
        console.error(`Port ${PORT} is already in use. Please stop the current process or set a different PORT.`);
        process.exit(1);
    }
    throw error;
});
