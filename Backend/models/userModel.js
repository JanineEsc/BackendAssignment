const User = require ('../schema/userSchema')


//en funktion för att skapa en user 
exports.addUser = async (req, res) => {
  try {
    const { email, password } = req.body

    //om det inte finns email eller password skickas det en status kod 400 
    if (!email || !password ) {
      res.status(400)
      throw new Error ('Please enter all the fields')  
    }

    //skapar en user 
    const user = await User.create({ email, password})
    res.status(201).json(user)

  } catch (err) {
    res.json ({
      message: err.message
    })
  }
}