const {request} = require(`../db/request`)
const bcrypt = require(`bcrypt`)

module.exports.register = async(email, password) =>{
    const data = await request (`SELECT * FROM users WHERE email= "${email}"`)
    if(data.length > 0){
        return `El usuario ya existe`
    }else{
        const user = await request(`INSERT INTO users (email, password, type) VALUES("${email}", "${password}", "Usuario")`)
        return{
            id: user.insertId,
            email
        }
    }
}

module.exports.login = async(email, password) =>{
    const data = await request(`SELECT * FROM users WHERE email = "${email}"`)
    if(data.length === 0){
        return `Usuario no registrado`
    } else{
        if(bcrypt.compareSync(password ,data[0].password)){
            return {
                user: data[0],
                logged: true
            }
        }else{
            return `Usuario o contraseña incorrecto`
        }
    }
}