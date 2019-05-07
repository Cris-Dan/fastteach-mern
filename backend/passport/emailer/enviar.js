const nodemailer = require('nodemailer');
const jwt  =    require('jsonwebtoken');


const exp = module.exports ={};

exp.enviar = async (data,req)=>{


try {
    const token  = jwt.sign({data},process.env.JWTSECRET,{expiresIn: '24h'});  /*Vencimiento de token en un día*/

    //const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.EMAILPASSWORD // generated ethereal password
        }
    });
    const mailOptions = { from: process.env.EMAIL, to: data.email, subject: 'Verificación de cuenta de alumno ---- FastTeach Corporation', text: 'Hola,\n\n' + 'Buenos días futuro alumno, por favor verifique su cuenta de alumno dandole click a este link: \nhttp:\/\/' + req.headers.host + '\/api/confirmation\/' + token + '.\n' };
    const info = await transporter.sendMail(mailOptions);

    console.log(mailOptions.text);
    console.log("Message sent: %s", info.messageId);
    //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}catch (e) {
    console.log(e);
}

};
