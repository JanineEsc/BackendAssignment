const express = require ('express')
const app = express()

//Middlewear 
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// controllers /routes
app.use('/api/server', require ('./controllers/userController'))
app.use('/api/product', require ('./controllers/productController'))
app.use('/api/message', require('./controllers/messageController'))


app.use('/api/orderProduct', require ('./controllers/orderProductsController'))
app.use('/api/order', require ('./controllers/orderController'))


module.exports = app 
