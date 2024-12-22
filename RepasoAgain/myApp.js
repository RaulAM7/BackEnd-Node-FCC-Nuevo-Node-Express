/*
----------- DEPENDENCIES
*/
let express = require('express')
let app = express()

console.log('Hello World')


/*
----------- MIDDLEWARE
*/

app.use('/public', express.static(__dirname + "/public"))

/*
----------- ROUTES
*/

app.get("/", (req,res) => {
    let absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
})

app.get("/json", (req, res) => {
    let message = 'Hello json'
    res.json({"message": message})
})


module.exports = app
