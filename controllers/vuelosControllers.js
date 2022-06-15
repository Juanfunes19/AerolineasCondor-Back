// const fs = require ('fs')
const {allVuelos, idVuelos, deleteVuelos, createVuelos, updateVuelos} = require(`../models/vuelosModels`)

module.exports.allVuelosControllers = async (req, res ) =>{
    try {
        const vuelos = await allVuelos()
        return res.send(vuelos)
    } catch (error) {
        return res.send(`Se produjo un error en la obtencion de todos los vuelos`)
    }
}

module.exports.idVuelosControllers = async (req, res) =>{
    const {id} = req.params
    try {
        const vuelos = await idVuelos(id)
        return res.send(vuelos)
    } catch (error) {
        return res.send()
    }
}


module.exports.createVuelosControllers = async (req, res) =>{
    const {origen, destino, fecha, descripcion, precio} = req.body
    // const ext = req.file.mimetype.split('/', 2)[1]
    // const imagen = `${origen}.${ext}`
    // fs.renameSync(req.file.path, `imagenes/${imagen}`)

    try {
        const vuelos = await createVuelos({origen, destino, fecha, descripcion, precio})
        return res.send(vuelos)
    } catch (error) {
        return res.send(`Se produjo un error en la creacion de un nuevo vuelo`)
    }
}

module.exports.updateVuelosControllers = async (req, res) =>{
    const {id} = req.params
    const {origen, destino, fecha, descripcion, precio} = req.body
    try {
        const vuelos = await updateVuelos({id, origen, destino, fecha, descripcion, precio})
        return res.send(vuelos)
    } catch (error) {
        console.log(error)
        return res.send(`Se produjo un error en la actualizacion de pelicula`)
    }
}

module.exports.deleteVuelosControllers = async (req, res) =>{
    const {id} = req.params
    try {
        const vuelos = await deleteVuelos(id)
        return res.send(vuelos)
    } catch (error) {
        console.log(error)
        return res.send(`Se produjo un error en la eliminacion del vuelo ${id}`)
    }
}