const express = require(`express`)
const app = express()
const PORT = process.env.PORT || 8000
const filmsRoutes = require(`./rutes/films`)

app.use(express.json())

app.use(`/films`, filmsRoutes)

app.listen(PORT, () => console.log(`Servidor andando en el puerto ${PORT}`))