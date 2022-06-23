const { transporter } = require("../config/mailer");
// const { enviarEmail } = require("../utils")


const emailControllers = async (req, res) => {
    const {nombre, mail, mensaje} = req.body

    try {
        await transporter.sendMail({
            from: '"Fred Foo 👻" <juan.funes1996@gmail.com>', 
            to: mail,
            subject: `Hola soy ${nombre}!`,
            text: "Su vuelo ha sido reservado", 
        });
        // const envio = await enviarEmail(nombre, mail, mensaje)
        // return res.send({envio})
    } catch (error) {
        console.log(error)
        return res.send("No anda")
    }
}

module.exports = {
    emailControllers
}




