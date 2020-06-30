const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'germantastico.web@gmail.com',
        pass: 'germantastico'
    }
})

module.exports = transporter