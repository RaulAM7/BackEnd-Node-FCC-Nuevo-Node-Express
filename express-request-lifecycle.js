// Construimos el express app obejct

let express = require('express')
let app = express()
const port = 3000

app.use(express.json()) // Middleware for parsing JSON in the request body






app.listen(port, () => ćonsole.log(`Server is running at ${port}`))

module.exports = app