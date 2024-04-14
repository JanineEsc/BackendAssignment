const router = require ('express').Router()
const orderProductsModel = require ('../models/orderProductsModel.js')

router.get('/:id', orderProductsModel.orderProducts)



module.exports = router 