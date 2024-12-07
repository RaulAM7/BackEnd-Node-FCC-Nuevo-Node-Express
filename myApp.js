// Creamos el objeto express app object
let express = require('express')
let app = express() 

// Class 1 - Meet the Node console
console.log('Hello world')

console.log('this is a change using nodemon')
console.log('this is antoher change using nodemon')



// Class 2 - Start a working Express server
app.get("/", (req, res)=> {
    res.send('Hello Express')
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










