const { enviarEmail } = require("../utils")

module.exports.emailControllers = async (req, res) => {
    const {nombre, mail, mensaje} = req.body

    try {
        const envio = await enviarEmail(nombre, mail, mensaje)
        return res.send({envio})
    } catch (error) {
        return res.send({envio: false})
    }
}