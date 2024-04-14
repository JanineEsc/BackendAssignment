const mongoose = require ('mongoose')

const orderProductsSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  quantity: { }

 
})

module.exports = mongoose.model('orderProducts', orderProductsSchema)