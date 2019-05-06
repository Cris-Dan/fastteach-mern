const nodemailer = require('nodemailer');



const exports = module.exports ={};

exports.enviar = async (data)=>{

    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass // generated ethereal password
        }
    });
    const mailOptions = { from: '"Fred Foo 👻" <foo@example.com>', to: "bar@example.com, baz@example.com", subject: 'Account Verification Token', text: 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirmation\/' + token.token + '.\n' };
    const info = await transporter.sendMail(mailOptions);

    console.log(mailOptions.text);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

};
