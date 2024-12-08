// ---------------DEPENDENCIAS-------------------------

// Cargamos el .env file con dotenv
let dotenv = require('dotenv').config()
console.log('MESSAGE_STYLE:', process.env.MESSAGE_STYLE);

// Creamos el objeto express app object
let express = require('express')
let app = express() 

// Middleware dependencies
const bodyParser = require('body-parser')

// ---------------DEPENDENCIAS-------------------------

// Class 1 - Meet the Node console
console.log('Hello world')

console.log('this is a change using nodemon')
console.log('this is antoher change using nodemon')


// Clase 4 -> Usando middleware antes de ver qué es el middleware
// MIDDLEWARE BLOCK
// Montamos middleware para servir archivos estaticos desde el directorio /public

// Globales App
app.use((req, res, next) => {
    console.log('Empiezan los middleware')
    next()
})

// Middleware de terceros
app.use(bodyParser.json()) 


app.use(express.static(__dirname + "/public")) 
app.use(express.static(__dirname + "/views")) // Le decimos a la app que en cualquier momento puede usar los archivos de ambos directorios 


// Middleware hecho por nosotros
// Logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
})


// Route specific
app.use("/public", express.static(__dirname + "/public")) // Le decimos a la app que puede la ruta /public usar los archivos del directorio /public





// Class 2 - Start a working Express server
app.get("/", (req, res)=> {
    const absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
})

// Clase 4 - Serving json on a route
app.get("/json", (req, res) => 
{
    let messageRoute = "Hello json"
    if (process.env.MESSAGE_STYLE === "uppercase") 
    {
        messageRoute = messageRoute.toUpperCase()
    } else 
    {
        messageRoute = messageRoute.toLowerCase()
    }
    res.json( {message: messageRoute} )
})


// Class 3 - Route handlers responses types
app.get("/send-1", (req, res) => {
    res.send('Esto es un texto mandado por .send')
})
app.get("/send-2", (req, res ) => {
    res.send('<h1>This is an h1 sent by the .send method of the handler of this route</h1>')
})
app.get("/json-1", (req, res)=> {
    res.json( {"name": "Raul"} )
})
app.get("/sendFile-1", (req, res) => {
    const filePath = __dirname + "/views/index.html"
    res.sendFile(filePath)
})
app.get("/redirect", (req, res) => {
    res.redirect("/redirected")
})
app.get("/redirected", (req, res) => {
    res.send("You have been redirected")
})





module.exports = app










