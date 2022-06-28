const {request} = require(`../db/request`)
const bcrypt = require(`bcrypt`)

module.exports.register = async(name, email, password) =>{
    const data = await request (`SELECT * FROM users WHERE email= "${email}"`)
    if(data.length > 0){
        return {
            msg:`El usuario ya existe`,
            error: true
    }
    }else{
        const user = await request(`INSERT INTO users (name, email, password, estado, type) VALUES("${name}","${email}", "${password}", 1 , "Cliente")`)
        return{
            id: user.insertId,
            email,
            existUser: true,
            msg: "Usuario creado"
        }
    }
}



module.exports.login = async(email, password) =>{
    const data = await request(`SELECT * FROM users WHERE email = "${email}"`)
    if(data.length === 0){
        return {
            msg: `Usuario no registrado`,
            error: true
        }
    } else{
        if(data[0].user.type === "admin" && bcrypt.compareSync(password, data[0].password)){
            return {
                user: data[0],
                logged: true,
                admin: true,
                msg: "Acesso correcto"
            }
        }else{
            if(bcrypt.compareSync(password, data[0].password)){
            return {
                user: data[0],
                logged: true,
                admin: false,
                msg: "Acesso correcto"
                }
        }else{            
            return {
                msg: "Usuario o contraseña equivocada",
                error: true
            }
            }
        }
    }
}