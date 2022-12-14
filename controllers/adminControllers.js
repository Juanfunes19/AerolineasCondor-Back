const { allAdmin, createAdmin } = require("../models/adminModels")
const bcrypt = require (`bcrypt`)



module.exports.allAdminControllers = async (req, res ) =>{
    try {
        const admin = await allAdmin()
        return res.send(admin)
    } catch (error) {
        return res.send(`Se produjo un error en la obtencion de todos los Administradores`)
    }
}


module.exports.createAdminControllers = async (req, res) =>{
    let {name, email, password} = req.body
    password = bcrypt.hashSync(password, 10)
    

    try {
        const admin = await createAdmin({name, email, password})
        return res.send(admin)
    } catch (error) {
        console.log(error)
        return res.send(`Se produjo un error en la creacion de un nuevo admin`)
    }
}