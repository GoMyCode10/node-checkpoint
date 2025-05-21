var nodemailer = require('nodemailer');

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mohamed.lakhdar933@gmail.com',
    pass: 'Az01'
  }
});

var mailOptions = {
  from: 'mohamed.lakhdar933@gmail.com',
  to: 'ridha_lakhdar@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});