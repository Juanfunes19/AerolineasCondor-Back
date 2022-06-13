const {register, login} = require(`../models/loginModels`)
const bcrypt = require (`bcrypt`)
// const {createToken} = require(`../utils/token`)
const {timeCookie} = require ("../utils/time")

module.exports.registerControlllers = async (req, res) =>{
    let {name, email, password} = req.body
    password = bcrypt.hashSync(password, 10)

    try {
        const user = await register(name, email, password)

        if(user.existUser){
            res.cookie("session", user, {maxAge: timeCookie(3)})
        }
        return res.status(201).send(user)
    } catch (error) {
        console.log(error)
        return res.status(500).send(`Hubo un error en el registro`)
    }
}

module.exports.loginControllers = async(req,res) =>{
    const {email, password} = req.body

    try {
        const user = await login(email, password)

        return res.status(200).send(user)
    } catch (error) {
        console.log(error)
        return res.status(500).send(`Hubo un error en el ingreso`)
    }
}