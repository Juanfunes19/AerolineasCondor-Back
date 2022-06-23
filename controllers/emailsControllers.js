const { transporter } = require("../config/mailer");
// const { enviarEmail } = require("../utils")

const emailControllers = async (req, res) => {
    const {nombre, mail} = req.body

    try {
        await transporter.sendMail({
            from: '"Fred Foo 👻" <aerolineascondor@gmail.com>', 
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




