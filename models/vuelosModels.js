const {request} = require(`../db/request`)

module.exports.allVuelos = async() =>{
    const data = await request(`SELECT * FROM vuelos`)
    return{
        vuelos:data
    } 
}

module.exports.idVuelos= async(id) =>{
    const data = await request(`SELECT * FROM vuelos WHERE id = ${id}`)
    return {
        vuelo : data[0]
    }
}

module.exports.createVuelos = async ({origen, destino, fecha,  descripcion, precio, imagen}) =>{
    const data = await request(`INSERT INTO vuelos (origen, destino, fecha, descripcion, precio, imagen) VALUES("${origen}", "${destino}", "${fecha}", "${descripcion}", "${precio}", "${imagen}")`)
    return {
        id: data.insertId,
        origen,
        destino,
        fecha,
        status: `Vuelo creado exitosamente` 
    }
}

module.exports.updateVuelos = async({id, origen, destino, fecha, descripcion, precio}) =>{
    const data = await request(`UPDATE vuelos SET origen = "${origen}", destino="${destino}", fecha="${fecha}", descripcion="${descripcion}", precio="${precio}" WHERE id ="${id}"`)
    return{
        id,
        origen,
        destino,
        fecha,
        uptdate: data.affectedRows ? true : false
    }
}


module.exports.deleteVuelos = async(id) =>{
    const data = await request(`DELETE FROM vuelos WHERE id = ${id}`)
    return{
        id,
        deleted: data.affectedRows ? true : false,
        status: `Vuelo eliminado`
    }
}

