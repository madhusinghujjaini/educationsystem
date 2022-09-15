const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })

  router.get('/signup',async (req , res)=>{

    if( !req.body.name){
      return res.status(400).send(' name require')
    }
    if( !req.body.email){
      return res.status(400).send('email require')
    }
    if( !req.body.mobile){
      return res.status(400).send('mobile no require')
    }


    const _result = await User.create({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile
    })

    res.status(200).send('user signup sucessfuly')
  })


  router.get('/getAllUser', (req, res) => {
    res.send('getAllUser api response')
  })

  module.exports = router