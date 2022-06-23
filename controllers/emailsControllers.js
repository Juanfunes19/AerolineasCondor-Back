// const { transporter } = require("../config/mailer");
const { enviarEmail } = require("../utils")



const emailControllers = async (req, res) => {
    const {nombre, mail, mensaje} = req.body

    try {
        const envio = await enviarEmail(nombre, mail, mensaje)
        return res.send({envio})
    } catch (error) {
        console.log(error)
        return res.send(error)
    }
}

module.exports = {
    emailControllers
}




