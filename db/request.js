require(`dotenv`).config();
const mysql = require(`mysql`)
const config = require(`./db.config`)


module.exports.request = (query) => new Promise((res, rej) => {
    const connection = mysql.createPool({
        host: process.env.LOCAL ? `localhost` : config.HOST,
        port: 3306,
        user: process.env.LOCAL ? `root` : config.USER,
        password: process.env.LOCAL ? `` : config.PASSWORD,
        database: process.env.LOCAL ? `proyectofinal` : config.DB
    })


    connection.query(query,(error, data, fiels) =>{
        if(error) rej(error)

        connection.end((err)=>{
            if(err) rej(err)
            res(data)
        })
    })
})