var nodemailer = require('nodemailer');

var connection = 'smtps://:@smtp.';

var transporter = nodemailer.createTransport(connection);
var mailOptions = {
    from: '<>',
    to: '',
    subject: 'Invoice #4',
    text: 'Please find attached your invoice',
    
};

transporter.sendMail(mailOptions, function(err, info) {
    if (err) throw err;
    console.log('Message sent: ' + info.response);
});