const express = require('express')
const router = express.Router()
const questionController = require("../../controllers/question")




router.post('/createQuestion', questionController.creatQuestion)
router.put('/UpdateQuestion', questionController.UpdateQuestion)
router.get('/getAllQuestion', questionController.getAllQuestion)


module.exports = router