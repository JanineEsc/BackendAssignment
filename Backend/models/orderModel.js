const Order = require ('../schema/orderSchema.js')



exports.placeOrders = async (req, res) => {
  try {
    const { user, totalPrice, products } = req.body

 
    if (!user)  {
      res.status(400)
      throw new Error ('Please log in if you want to make an order')  
    }
    if (!totalPrice) {
      res.status(400)
      throw new Error('Your order dont have a totalprice')
    }
    if (!products) {
      res.status(400)
      throw new Error('Choose products ')
    }

    const orders = await Order.create({ user, totalPrice, products})
    res.status(201).json(orders)

  } catch (err) {
    res.json ({
      message: err.message
    })
  }
}
