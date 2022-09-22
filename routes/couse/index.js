const express = require('express')
const router = express.Router()
const courseController = require('../../controllers/course');


router.post('/createCourse', courseController.creatCourse)
router.put('/UpdateCourse', courseController.UpdateCourse)
router.get('/getAllCourse', courseController.getAllCourse)
router.get('/getCourseById', courseController.getCourseById)
router.delete('/deleteCourse', courseController.deleteCourse)
router.post('/addInstructor', courseController.addInstructor)
router.put('/updateInstructor', courseController.updateInstructor)
router.post('/addVideo', courseController.addVideo)
router.put('/updateVideo', courseController.updateVideo)



module.exports = router