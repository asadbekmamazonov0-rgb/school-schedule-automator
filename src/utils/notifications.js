const nodemailer = require('nodemailer');

// Function to send email notifications
async function sendEmailNotification(email, message) {
    // Create a transporter object using SMTP
    let transporter = nodemailer.createTransport({
        host: 'smtp.example.com', // Replace with your SMTP server
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'your_email@example.com', // replace with your email
            pass: 'your_email_password' // replace with your email password
        }
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'your_email@example.com', // sender address
        to: email, // list of receivers
        subject: 'Schedule Change Notification', // Subject line
        text: message, // plain text body
    });

    console.log('Message sent: %s', info.messageId);
}

// Example usage (replace with actual values) 
// sendEmailNotification('student@example.com', 'Your schedule has been updated.');

module.exports = sendEmailNotification;