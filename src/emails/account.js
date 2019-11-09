const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'leadindia1600@gmail.com',
        subject: 'Welcome to the Task Manager',
        text: `Welcome to the app, ${name}. Kindly let us know how was your experience with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'leadindia1600@gmail.com',
        subject: 'We are sorry to see you go... :(',
        text: `Alvida ${name}. We are sorry to not stay upto your expectations. We hope to serve you again.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}