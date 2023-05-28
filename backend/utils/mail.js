const nodemailler = require('nodemailer');

// Create a transporter object
const transporter = nodemailler.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
});


const sendMail = (email, subject, text) => {
    // Create a mailOptions object
    const mailOptions = {
        from: process.env.MAIL_FROM,
        to: email,
        subject: subject,
        text: text
    };

    // Send email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    }
    );
}

module.exports = sendMail;