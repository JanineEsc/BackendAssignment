const router = require ('express').Router()
const productModel = require ('../models/productModel.js')

router.post('/', productModel.createProduct)
router.get('/', productModel.getAllProducts)
router.get('/:id', productModel.getSingleProduct)
router.patch('/:id', productModel.updateProduct)
router.delete('/:id', productModel.deleteProduct)

module.exports = router 