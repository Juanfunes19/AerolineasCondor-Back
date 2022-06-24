require(`dotenv`).config();
const nodemailer = require (`nodemailer`)


module.exports.enviarEmail = (nombre, mail) => new Promise((res, rej) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com', 
        port: 465,
        secure: true,
        auth:{
            user: 'aerolineascondor@gmail.com',
            pass: 'xzihagtzsantgnux',
        },

    })

    let mailOptions = {
        from: mail,
        to: 'aerolineascondor@gmail.com',
        subject: `Hola ${nombre}, bienvenido a nuestra comunidad! ✈🌍`,
        text: `Hola ${nombre}, te suscribiste a nuestro Newletter semanal.
        Recibiras cientos de ofertas para que hagas ese viaje que necesitas. Escapemosno juntos 🏖🏞!`
    }

    transporter.sendMail(mailOptions, function(err, data){
        if(err){
            rej(err)
        }else{
            res(true)
        }
    })
})
