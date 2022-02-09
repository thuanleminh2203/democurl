const express = require('express')
require('./config/dbConfig')
const port = 3000
const app = express()
app.use(express.json())



const oauthController = require('./controller/oauthController')
app.use('/oauth',oauthController)

app.listen(port, () => console.log(`Example app listening on port ${port}`))