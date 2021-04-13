import nodemailer from 'nodemailer';
var Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nhat.bh160802@gmail.com',
      pass: 'nhat1234'
    }
  });
export default class Gmail {
    static sendEmail(to,subject,text) {
        var mailOptions = {
            from: 'nhat.bh160802@gmail.com',
            to: to,
            subject: subject,
            text: text
        };
        Transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        });
    }
    static sendHTML(to,subject,html) {
        var mailOptions = {
            from: 'nhat.bh160802@gmail.com',
            to: to,
            subject: subject,
            html: html
        };
        Transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        });
    }
}




