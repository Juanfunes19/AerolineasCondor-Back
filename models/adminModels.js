const {request} = require(`../db/request`)

module.exports.allAdmin = async() =>{
    const data = await request(`SELECT * FROM users WHERE type = "admin"`)
    return{
        vuelos:data
    } 
}

module.exports.createAdmin = async ({name, email, password}) =>{
    const data = await request(`INSERT INTO users (name, email, password, estado, type) VALUES("${name}", "${email}", "${password}", "1", "admin")`)
    return {
        id: data.insertId,
        name,
        email,
        password,
        status: `Admin creado exitosamente` 
    }
}