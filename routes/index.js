const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const courseRouter = require('./couse');

router.use('/user', userRouter)
router.use('/course',courseRouter)

module.exports = router;