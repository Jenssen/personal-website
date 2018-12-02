const axios = require('axios');
const nodemailer = require('nodemailer');

let smtpConfig = {
  host: process.env.SMTP_SERVER,
  port: process.env.SMTP_SERVER_PORT,
  secure: false, // upgrade later with STARTTLS
  auth: {
      user: process.env.USERNAME_EMAIL,
      pass: process.env.PASSWORD_EMAIL
  }
}

export default function (req, res, next) {
    if (req.method == 'POST') {
      const client_response = req.body
      const secretkey = process.env.G_SECRET_KEY

      // Verify recaptcha against google server
      axios.post('https://www.google.com/recaptcha/api/siteverify',
      {},
      {
        params: {
          secret: secretkey,
          response: client_response.validate
        }
      })
      .then(function (response) {
        if (response.data.success == true) {
          sendMail(client_response)
        }
      })

      res.send('OK')
    }
}

function sendMail(client_response) {
  // Use Nodemailer to send email from here.
  let transporter = nodemailer.createTransport(smtpConfig)

  let message = {
    from: process.env.USERNAME_EMAIL,
    to: process.env.EMAIL_SEND_TO,
    subject: 'Kontaktformulär robertjenssen.se',
    text: client_response.message,
    replyTo: client_response.email
  }

  transporter.sendMail(message)
}
