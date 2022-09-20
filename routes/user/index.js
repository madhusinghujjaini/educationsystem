const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user')

router.post('/signup', userController.signUp),
router.post('/signIn', userController.signIn),
router.get('/userApi', userController.userApi)


module.exports = router