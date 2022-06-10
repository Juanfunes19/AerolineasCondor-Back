const {request} = require(`../db/request`)
// const bcrypt = require(`bcrypt`)

module.exports.register = async(email, password) =>{
    const data = await request (`SELECT * FROM users WHERE email= "${email}"`)
    if(data.length > 0){
        return `El usuario ya existe`
    }else{
        const user = await request(`INSERT INTO users (email, password, estado, type) VALUES("${email}", "${password}", 1 , "Cliente")`)
        return{
            id: user.insertId,
            email,
            msg: "Usuario creado"
        }
    }
}


module.exports.login = async(email, password) =>{
    const data = await request(`SELECT * FROM users WHERE email = "${email}"`)
    if(data.length === 0){
        return `Usuario no registrado`
    } else{
        // if(password  === data[0].password){
        //     return data[0]
        // }else{
            return data[0]
        }
    }
// }
