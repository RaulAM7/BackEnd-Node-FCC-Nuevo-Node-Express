// Construimos el express app obejct

let express = require('express')
let app = express()
const port = 3000

app.use(express.json()) // Middleware for parsing JSON in the request body


// Ruta /example
app.get("/example", (req, res) => {
    res.send('Hello from the example handler!')
})



app.listen(port, () => console.log(`Server is running at ${port}`))

module.exports = app