require(`dotenv`).config();
const cookieParser = require(`cookie-parser`)
const express = require(`express`)
const app = express()
var cors = require('cors')
const PORT = process.env.PORT || 8000
const vuelosRoutes = require(`./rutes/vuelos`)
const loginRouter = require(`./rutes/loginRoutes`)
const mailsRoutes = require (`./rutes/mailsRoutes`)

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use(`/vuelos`, vuelosRoutes)
app.use(`/login`, loginRouter)
app.use(`/email`, mailsRoutes )

app.listen(PORT, () => console.log(`Servidor andando en el puerto ${PORT}`))