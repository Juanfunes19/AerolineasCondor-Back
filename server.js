require(`dotenv`).config();
const cookieParser = require(`cookie-parser`)
const express = require(`express`)
const app = express()
var cors = require('cors')
const PORT = process.env.PORT || 8000
const vuelosRoutes = require(`./rutes/vuelos`)
const loginRouter = require(`./rutes/loginRoutes`)
const mailsRoutes = require (`./rutes/mailsRoutes`)
const adminRoutes = require (`./rutes/adminRoutes`)
// const imgRoutes = require (`./rutes/imgRoutes`)

app.use(cors())
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Headers, *, Access-Control-Allow-Origin', 'Origin, X-Requested-with, Content_Type,Accept,Authorization','http://localhost:4200');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});



app.use(cookieParser())
app.use(express.json())

app.use(`/vuelos`, vuelosRoutes)
app.use(`/login`, loginRouter)
app.use(`/email`, mailsRoutes )
app.use(`/createadmin`, adminRoutes)
 
// app.use(`/imagen`,imgRoutes )

app.listen(PORT, () => console.log(`Servidor andando en el puerto ${PORT}`))