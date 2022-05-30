const {allFilms, idFilms, deleteFilms, createFilms, updateFilms} = require(`../models/filmsModels`)

module.exports.allFilmsControllers = async (req, res ) =>{
    try {
        const films = await allFilms()
        return res.send(films)
    } catch (error) {
        return res.send(`Se produjo un error en la obtencion de todas las peliculas`)
    }
}

module.exports.idFilmsControllers = async (req, res) =>{
    const {id} = req.params
    try {
        const films = await idFilms(id)
        return res.send(films)
    } catch (error) {
        return res.send()
    }
}


module.exports.createFilmsControllers = async (req, res) =>{
    const {name, publish_date, disponible} = req.body
    try {
        const films = await createFilms({name, publish_date, disponible})
        return res.send(films)
    } catch (error) {
        return res.send(`Se produjo un error en la creacion de la peliculas`)
    }
}

module.exports.updateFilmsControllers = async (req, res) =>{
    const {id} = req.params
    const {name, publish_date, disponible} = req.body
    try {
        const films = await updateFilms({id,name, publish_date, disponible})
        return res.send(films)
    } catch (error) {
        return res.send(`Se produjo un error en la actualizacion de pelicula`)
    }
}

module.exports.deleteFilmsControllers = async (req, res) =>{
    const {id} = req.params
    try {
        const films = await deleteFilms(id)
        return res.send(films)
    } catch (error) {
        return res.send(`Se produjo un error en la eliminacion de la pelicula ${id}`)
    }
}