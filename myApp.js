// Creamos el objeto express app object
let express = require('express')
let app = express() 

// Class 1 - Meet the Node console
console.log('Hello world')

console.log('this is a change using nodemon')
console.log('this is antoher change using nodemon')



// Class 1 - Meet the Node console
app.get("/", (req, res)=> {
    res.send('Hello Express')
})








module.exports = app










