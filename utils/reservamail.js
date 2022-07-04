require(`dotenv`).config();
const nodemailer = require (`nodemailer`)


module.exports.enviarEmail = (mail) => new Promise((res, rej) => {
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
        from: 'aerolineascondor@gmail.com',
        to: mail,
        subject: `Hola 👋, confirmamos tu reserva! ✈🌍`,
        text: `
        Acabas de reservar tu vuelo!.
        En unos minutos recibiras un correo con toda la informacion de tu viaje. 
        Escapemosno juntos 🏖🏞!`
    }

    transporter.sendMail(mailOptions, function(err, data){
        if(err){
            rej(err)
        }else{
            res(true)
        }
    })
})