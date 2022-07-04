const { enviarEmail } = require("../utils/reservamail")

const reservaControllers = async (req, res) => {
    const {mail} = req.body

    try {
        const envio = await enviarEmail(mail)
        return res.send({envio})
    } catch (error) {
        console.log(error)
        return res.send(error)
    }
}

module.exports = {
    reservaControllers
}
