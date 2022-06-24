require(`dotenv`).config();
const nodemailer = require (`nodemailer`)


module.exports.enviarEmail = (nombre, mail, mensaje) => new Promise((res, rej) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com', 
        port: 465,
        secure: true,
        auth:{
            user: mail,
            pass: 'mtedltlujzhuvbcp',
        },

    })

    let mailOptions = {
        from: mail,
        to: "aerolineascondor@gmail.com",
        subject: `Hola soy ${nombre}!`,
        text: mensaje
    }

    transporter.sendMail(mailOptions, function(err, data){
        if(err){
            rej(err)
        }else{
            res(true)
        }
    })
})
