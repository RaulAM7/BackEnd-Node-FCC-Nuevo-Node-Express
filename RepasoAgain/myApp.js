let express = require('express')
let app = express()

console.log('Hello World')



app.get("/", (req,res) => {
    console.log('Hello Express')
    let absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath)
})




module.exports = app
