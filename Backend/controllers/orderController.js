const router = require ('express').Router()
const orderModel = require ('../models/orderModel.js')

router.post('/:id', orderModel.placeOrders)


module.exports = router 