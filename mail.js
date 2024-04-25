const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "enter your api_key",
    domain: "enter your domain",
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: email,
    to: "abhiik1029@gmail.com",
    subject,
    text,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;
