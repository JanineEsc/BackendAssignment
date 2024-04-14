const router = require ('express').Router()
const messageModel = require ('../models/messageModel')

router.post('/', messageModel.postMessage )

module.exports = router 