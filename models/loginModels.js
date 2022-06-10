const {request} = require(`../db/request`)
// const bcrypt = require(`bcrypt`)

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
        if(password  === data[0].password){
            return data[0]
        }else
        {
            return `Usuario o contraseña incorrecto`
        }
    }
}

// if (data.length === 0) {
//     return "Usuario no registrado"
// } else {
//     return "Usuario o contraseña incorrecta"
// }