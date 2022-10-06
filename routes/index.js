const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const courseRouter = require('./couse');
const questionRouter = require('./question');
const assessmentRouter = require('./assessment');

router.use('/user', userRouter)
router.use('/course',courseRouter)
router.use('/ques', questionRouter)
router.use('/assessment',assessmentRouter)

module.exports = router;