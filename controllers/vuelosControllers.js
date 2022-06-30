const {allVuelos, idVuelos, deleteVuelos, createVuelos, updateVuelos} = require(`../models/vuelosModels`)
const {uploadFile, getFileStream, deleteFile } = require ('../utils/s3')

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





// PRUEBA IMG
module.exports.createVuelosControllers = async (req, res) =>{
    const {origen, destino, fecha, descripcion, precio} = req.body
    console.log("Controller: ", req.file)
    const file = req.file
    const image = await uploadFile(file)
    const imagen = image.key
    console.log("Controller image: ", imagen)
    console.log(req.body, origen, destino,fecha, descripcion, precio )

    try {
        const vuelos = await createVuelos({origen, destino, fecha, descripcion, precio, imagen})
        return res.status(201).send(vuelos)
    } catch (error) {
        return res.send(`Se produjo un error en la creacion de un nuevo vuelo`)
    }
}








// module.exports.createVuelosControllers = async (req, res) =>{
//     const {origen, destino, fecha, descripcion, precio, imagen} = req.body

//     try {
//         const vuelos = await createVuelos({origen, destino, fecha, descripcion, precio, imagen})
//         return res.send(vuelos)
//     } catch (error) {
//         return res.send(`Se produjo un error en la creacion de un nuevo vuelo`)
//     }
// }

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