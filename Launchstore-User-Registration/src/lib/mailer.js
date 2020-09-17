const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "16bcda35a6c961",
      pass: "181601ebc2f65b"
    }
  });