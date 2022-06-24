require(`dotenv`).config();
const nodemailer = require (`nodemailer`)


module.exports.enviarEmail = (nombre, mail, mensaje) => new Promise((res, rej) => {
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
        to: "juan.funes1996@gmail.com",
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
