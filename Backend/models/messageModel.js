const Message = require ('../schema/messageSchema')

exports.postMessage = async (req, res) => {
  try {

    const { name, email, message } = req.body 

    if (!name || !email || !message) {
      res.status(400) 
      throw new Error ('please write all the fields')
    }

    const postMessage = await Message.create ({ name, email, message })
    res.status(200).json(postMessage)
    

  } catch (err) {
    res.json ({
      message: err.message
    })
  }
}