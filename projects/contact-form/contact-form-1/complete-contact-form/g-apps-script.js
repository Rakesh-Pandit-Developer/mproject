// Google Sheet URL: Google-Sheet-URL 

// target sheet no: target-sheet

// Admin Email: kartikdigitalhub@gmail.com

// adminEmailSubject = ` New Contact Form Submission '

// adminEmailBody = ` You have received a new message from the contact form '

// userEmailSubject = "Thank You for Contacting Kartik Digital Hub!"

// Thank you for contacting us. We will get back to you shortly.

// If you need immediate assistance, feel free to contact us via

// Whatsapp: 9779745604597

// call: 9779745604597

// google Map: https://goo.gl/maps/xyz

// If you'd like to stay connected, follow us on our social media

// facebook: https://www.facebook.com/YourPage

// youtube: https://www.youtube.com/YourChannel

// tiktok: https://www.tiktok.com/@YourUsername

// instagram: https://www.instagram.com/YourInstagram

// Best regards,<br>: Kartik Digital Hub




function doPost(e) {
  try {
    // Google Sheet Setup
    const sheet = SpreadsheetApp.openByUrl("Google-Sheet-URL");
    const sheetName = sheet.getSheetByName("target-sheet");

    // Extract Form Data
    const name = e.parameter.name || "No Name Provided";
    const email = e.parameter.email || "No Email Provided";
    const phone = e.parameter.phone || "No Phone Provided";
    const subject = e.parameter.subject || "No Subject Provided";
    const message = e.parameter.message || "No Message Provided";

    // Append Data to Google Sheet
    sheetName.appendRow([new Date(), name, email, phone, subject, message]);

    // Send Email Notification to Admin
    const adminEmail = "kartikdigitalhub@gmail.com";
    const adminEmailSubject = `New Contact Form Submission: ${subject}`;
    const adminEmailBody = `
      You have received a new message from the contact form:

      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Subject: ${subject}
      Message: ${message}
    `;
    GmailApp.sendEmail(adminEmail, adminEmailSubject, adminEmailBody);

    // Send Thank You Email to User with Styled Content
    if (email !== "No Email Provided") {
      const userEmailSubject = "Thank You for Contacting Kartik Digital Hub!";
      const userEmailBody = `
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f7fa;
              margin: 0;
              padding: 0;
              color: #333;
            }
            .email-container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            h1 {
              font-size: 24px;
              color: #007bff;
              margin-bottom: 10px;
            }
            p {
              font-size: 16px;
              line-height: 1.6;
            }
            .contact-link {
              display: inline-block;
              padding: 12px 25px;
              color: white;
              font-size: 18px;
              text-decoration: none;
              border-radius: 5px;
              margin-top: 20px;
              transition: background-color 0.3s;
              text-align: center;
            }
            .whatsapp-link {
              background-color: #25d366; /* WhatsApp green */
            }
            .whatsapp-link:hover {
              background-color: #128c7e;
            }
            .call-link {
              background-color: #25d366; /* Call button color, can match WhatsApp */
            }
            .call-link:hover {
              background-color: #128c7e;
            }
            .map-link {
              background-color: #4285f4; /* Google Maps blue */
            }
            .map-link:hover {
              background-color: #3367d6;
            }
            .social-links {
              margin-top: 20px;
            }
            .social-links a {
              margin: 0 10px;
              font-size: 18px;
              color: #333;
              text-decoration: none;
            }
            .social-links a.facebook {
              color: #3b5998; /* Facebook blue */
            }
            .social-links a.youtube {
              color: #ff0000; /* YouTube red */
            }
            .social-links a.tiktok {
              color: #000; /* TikTok black */
            }
            .social-links a.instagram {
              color: #e4405f; /* Instagram pink */
            }
            .footer {
              margin-top: 30px;
              font-size: 14px;
              color: #777;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <h1>Hi, ${name}!</h1>
            <p>Thank you for contacting us. We will get back to you shortly.</p>
            <p>If you need immediate assistance, feel free to contact us via:</p>
            <p>
              <a href="https://wa.me/9779745604597" class="contact-link whatsapp-link">WhatsApp</a>
              <a href="tel:+9779745604597" class="contact-link call-link">Call Us</a>
              <a href="https://goo.gl/maps/xyz" class="contact-link map-link">View on Map</a>
            </p>
            <p>If you'd like to stay connected, follow us on our social media:</p>
            <div class="social-links">
              <a href="https://www.facebook.com/YourPage" class="facebook" target="_blank">Facebook</a>
              <a href="https://www.youtube.com/YourChannel" class="youtube" target="_blank">YouTube</a>
              <a href="https://www.tiktok.com/@YourUsername" class="tiktok" target="_blank">TikTok</a>
              <a href="https://www.instagram.com/YourInstagram" class="instagram" target="_blank">Instagram</a>
            </div>
            <div class="footer">
              <p>Best regards,<br>Kartik Digital Hub</p>
            </div>
          </div>
        </body>
        </html>
      `;
      GmailApp.sendEmail(email, userEmailSubject, "", { htmlBody: userEmailBody });
    }

    // Success Response
    return ContentService.createTextOutput("Form submitted successfully!");
  } catch (error) {
    // Error Handling
    return ContentService.createTextOutput("Error occurred: " + error.message);
  }
}
