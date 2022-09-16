const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user')


router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.get('/signup', userController.signUp),
router.get('/userApi', userController.userApi)


module.exports = router