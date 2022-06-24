require(`dotenv`).config();
const nodemailer = require (`nodemailer`)


module.exports.enviarEmail = (nombre, mail, mensaje) => new Promise((res, rej) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com', 
        port: 465,
        secure: true,
        auth:{
            user: 'juan.funes1996@gmail.com',
            pass: 'mtedltlujzhuvbcp',
        },

    })

    let mailOptions = {
        from: "aerolineascondor@gmail.com",
        to: mail,
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
    
    transporter.verify(function (error, success) {
        if (error) {
        console.log(error);
        } else {
        console.log("Server is ready to take our messages");
        }
    });
})
