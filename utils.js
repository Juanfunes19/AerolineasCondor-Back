require(`dotenv`).config();
const nodemailer = require (`nodemailer`)


module.exports.enviarEmail = (nombre, mail, mensaje) => new Promise((res, rej) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        // host: "smtp.gmail.com", 
        // port: 587,
        // secure: false,
        auth:{
            type: 'OAuth2',
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
            clientId: process.env.ID_CLIENT,
            clientSecret: process.env.ID_SEC,
            refreshToken: process.env.REFRESH_TOKEN
        }
    })

    // let transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         type: 'OAuth2',
    //         user: credentials.MAIL_USERNAME,
    //         pass: credentials.MAIL_PASSWORD,
    //         clientId: credentials.OAUTH2_CLIENTID,
    //         clientSecret: credentials.OAUTH2_CLIENT_SECRET,
    //         refreshToken: credentials.OAUTH2_REFRESH_TOKEN
    //     }
    // });


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