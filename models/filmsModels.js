const {request} = require(`../db/request`)

module.exports.allFilms = async() =>{
    const data = await request(`SELECT * FROM films`)
    return{
        films:data
    } 
}

module.exports.idFilms = async(id) =>{
    const data = await request(`SELECT * FROM films WHERE id = ${id}`)
    return {
        films : data[0]
    }
}

module.exports.createFilms = async ({name, publish_date, disponible}) =>{
    const data = await request(`INSERT INTO films (name, publish_date, disponible) VALUES("${name}", "${publish_date}", "${disponible}")`)
    return {
        id: data.insertId,
        name, 
        status: `Creado` 
    }
}

module.exports.updateFilms = async({id, name, publish_date, disponible}) =>{
    const data = await request(`UPDATE films SET name = "${name}", publish_date="${publish_date}", disponible="${disponible}" WHERE id ="${id}"`)
    return{
        id,
        name,
        publish_date,
        disponible,
        uptdate: data.affectedRows ? true : false
    }
}


module.exports.deleteFilms = async(id) =>{
    const data = await request(`DELETE FROM films WHERE id = ${id}`)
    return{
        id,
        deleted: data.affectedRows ? true : false,
        status: `Pelicula eliminada`
    }
}

