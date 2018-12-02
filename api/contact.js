const axios = require('axios');

export default function (req, res, next) {
    // req is the Node.js http request object
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
        } else {
          // Something went wrong.
        }
      })
      .catch(function (error) {
        // Something went wrong when verifying recapatcha
      })

      res.send('OK')
    }
    // res is the Node.js http response object

    // next is a function to call to invoke the next middleware
    // Don't forget to call next at the end if your middleware is not an endpoint!
}

function sendMail(client_response) {
  // Use Nodemailer to send email from here.
}
