const express = require('express')
const router = express.Router()
const questionController = require("../../controllers/question")




router.post('/createQuestion', questionController.creatQuestion)

module.exports = router