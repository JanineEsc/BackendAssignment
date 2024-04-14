const OrderProducts = require ('../schema/orderProductsSchema.js')



exports.orderProducts = async (req, res) => {
  try {
    const { productId, quantity,  } = req.body

 
    if (!productId)  {
      res.status(400)
      throw new Error ('You need to have a productId')  
    }
    if (!quantity) {
      res.status(400)
      throw new Error('Your need to have a quantity in your order')
    }
  

    const order = await OrderProducts.create({ productId, quantity})
    res.status(201).json(order)

  } catch (err) {
    res.json ({
      message: err.message
    })
  }
}