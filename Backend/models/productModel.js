// const productSchema = require('../schema/productSchema')
const Product = require('../schema/productSchema')

exports.createProduct = async (req, res) => {
  try {

    const { name, price, description, category, images } = req.body

    if (!name || !price || !description || !category || !images )  {
      res.status(400)
      throw new Error ('Please complete all the fields')  
    }

    const order = await Product.create ({ name, price, description, category, images })
    res.status(200).json(order)
   

  }catch (err) {
    res.json({
      message: err.message
    })
  }
}

exports.getAllProducts = async (req, res) => {
  try {
    const filter = {}

    const allProducts =  await Product.find(filter)
    res.status(200).json(allProducts)


  } catch (err) {
    res.json({
      message: err.message
    })
  }
}

exports.getSingleProduct = async (req, res ) => {
  try {

    const { id } = req.params
    const singleProduct = await Product.findById(id)
    res.status(200).json(singleProduct) 

  } catch (err) {
    res.json({
      message: err.message
    })
  }
}

exports.updateProduct = async (req, res) => {
  try {

    const { id } = req.params
    const newData = req.body

    const updateProduct = await Product.findByIdAndUpdate(id, newData, { new: true })
    res.status(200).json(updateProduct)

  } catch (err) {
    res.json({
      message: err.message
    })
  }

}

exports.deleteProduct = async (req, res) => {
  try {

    const { id } = req.params
    const newData = req.body

    const deleteProduct = await Product.findByIdAndDelete ( id, newData, { new: true })
    res.status(200).json(deleteProduct)
    

  }catch (err) {
    res.json({
      message: err.message
    })
  }
}


