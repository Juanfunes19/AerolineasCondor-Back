require(`dotenv`).config();
const nodemailer = require (`nodemailer`)


module.exports.enviarEmail = (nombre, mail, mensaje) => new Promise((res, rej) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com", 
        port: 587,
        secure: false,
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    let mailOptions = {
        from: "aerolineascondor@gmail.com",
        to: mail,
        subject: `Hola soy ${nombre}!`,
        text: mensaje
    }

    transporter.sendMail(mailOptions, function(err, data){
        if(err){
            res(err)
        }else{
            res(true)
        }
    })
})