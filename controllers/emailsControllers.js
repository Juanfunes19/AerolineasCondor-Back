// const { transporter } = require("../config/mailer");
const { enviarEmail } = require("../utils")

const emailControllers = async (req, res) => {
    const {nombre, mail} = req.body

    try {
        const envio = await enviarEmail(nombre, mail)
        return res.send({envio})
    } catch (error) {
        console.log(error)
        return res.send(error)
    }
}

module.exports = {
    emailControllers
}




