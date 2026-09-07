====================================================
GAMERS BURNOUT WEBSITE
Developer Handover & Deployment Guide
====================================================

Author:
Harshit

Date of Delivery:
02 June 2026

Project Type:
Gaming Cafe Website

Version:
1.0

====================================================
PROJECT OVERVIEW
====================================================

This website has been developed as a complete
gaming cafe website with:

- Homepage
- Games Page
- Gallery Page
- Contact Page
- Responsive Design
- Backend Contact Form
- Email Integration
- Rate Limiting Protection

The project source code is being provided in
working condition.

====================================================
BEFORE RUNNING THE PROJECT
====================================================

Install the following:

1. Node.js (Latest LTS Recommended)

Download:
https://nodejs.org
Or, just downoad it from the preinstalled application in pendrive

After installation, verify:

node -v
npm -v

====================================================
RUNNING THE WEBSITE LOCALLY
====================================================

Step 1:
Open terminal inside the project folder.

Step 2:
Install dependencies.

Command:
npm install

Step 3:
find file named:

.env

Example:

EMAIL=your_email@gmail.com
PASSWORD=your_gmail_app_password

IMPORTANT:
Use a Gmail App Password.
Do NOT use your normal Gmail password.

Step 4:
Start the server.

Command:
npm start

Step 5:
Open browser and visit:

http://localhost:3000

The website should now be running locally.

====================================================
TESTING BEFORE DEPLOYMENT
====================================================

Verify:

✓ Homepage loads correctly
✓ Navigation works
✓ Games page works
✓ Gallery page loads
✓ Contact page opens
✓ Contact form sends emails
✓ Mobile layout looks correct

====================================================
CONTACT FORM CONFIGURATION
====================================================

The contact form sends messages to the email
specified in the .env file.

To change receiving email:

Open .env

Change:

EMAIL=your_email@gmail.com

====================================================
IMPORTANT REMINDER BEFORE DEPLOYMENT
====================================================

Before deploying the website, replace all
placeholder images and videos with actual
Gaming Cafe media.

It is strongly recommended to complete
this step before deployment so that visitors
see the final content immediately after the
website goes live.

Change the email, contact number and location in contact tab before deployment. 

====================================================
ADDING PHOTOS TO GALLERY
====================================================

1. Locate the images folder used by the gallery.

2. Copy actual cafe photos into that folder.

Recommended images:

- Gaming setups
- PS5 stations
- PC gaming area
- Tournaments
- Cafe interior
- Customer gaming sessions

3. Replace placeholder images or update image paths.

4. Save changes and test locally.

IMPORTANT:

If image file names are changed, the file names
must also be updated inside the HTML code.
Otherwise the images will not appear.

====================================================
ADDING VIDEOS TO GALLERY
====================================================

1. Locate the videos folder.

2. Copy desired video files into the folder.

Recommended videos:

- Gameplay recordings
- Tournament highlights
- Gaming setup showcase
- Cafe walkthrough

3. Update video paths if required.

4. Test locally before deployment.

====================================================
VERIFY BEFORE DEPLOYMENT
====================================================

✓ All gallery images are visible

✓ All videos load correctly

✓ No placeholder media remains

✓ No missing file errors appear

✓ Images display properly on mobile devices

✓ Videos play correctly

====================================================
AFTER DEPLOYMENT
====================================================

If media files are added after deployment,
the website must be updated and redeployed
(or uploaded through the hosting provider's
management panel depending on the platform).

For best results, finalize all photos and
videos before deployment.

====================================================
DEPLOYMENT METHODS
====================================================

METHOD 1 (EASIEST)
GUI-Based Deployment Platforms
----------------------------------------------------

Examples:

- Render
- Railway
- Hostinger
- Other Node.js Hosting Providers

General Process:

1. Upload source code
2. Install dependencies
3. Add environment variables
4. Deploy application

No coding knowledge is usually required.

====================================================
METHOD 2
VPS Server Deployment
----------------------------------------------------

Examples:

- DigitalOcean
- AWS EC2
- Hostinger VPS
- Contabo

General Process:

1. Create VPS
2. Install Node.js
3. Upload project files
4. Run npm install
5. Create .env file
6. Start application

Recommended:

- PM2
- Nginx

====================================================
METHOD 3
Personal Computer as Server
----------------------------------------------------

The project can run on:

- Windows PC
- Linux PC

Requirements:

- Stable internet
- Node.js installed
- Port forwarding configured
- Static IP or Dynamic DNS

This method is not recommended for business use.

====================================================
BACKUP RECOMMENDATIONS
====================================================

Keep backups of:

- Complete source code
- Images
- Videos
- .env file
- package.json

Store at least one backup separately.

====================================================
UPDATING WEBSITE CONTENT
====================================================

Common changes:

- Replace gallery images
- Change pricing
- Update contact details
- Add new games
- Update announcements

These changes can be made directly in
the website files.

====================================================
PROJECT FILES
====================================================

Important Files:

server.js
Main backend server

package.json
Project dependencies

.env
Email configuration

public/
Website pages and assets

====================================================
PROJECT DELIVERY NOTE
====================================================

This source code is being delivered in
working condition.

The buyer receives the source code and
ownership of the delivered project files.

Future hosting, deployment, maintenance,
content updates, modifications, backups,
security management, domain management,
and operational responsibilities are to
be managed by the website owner unless
a separate agreement is made.

====================================================
END OF DOCUMENT
====================================================
