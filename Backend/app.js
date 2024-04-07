const express = require ('express')
const app = express()

//Middlewear 
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// controllers 
app.use('/api/server', require ('./controllers/userController'))

module.exports = app 