require(`dotenv`).config();
const cookieParser = require(`cookie-parser`)
const express = require(`express`)
const app = express()
var cors = require('cors')
const PORT = process.env.PORT || 8000
const filmsRoutes = require(`./rutes/films`)
const loginRouter = require(`./rutes/loginRoutes`)

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use(`/films`, filmsRoutes)
app.use(`/login`, loginRouter)

app.listen(PORT, () => console.log(`Servidor andando en el puerto ${PORT}`))