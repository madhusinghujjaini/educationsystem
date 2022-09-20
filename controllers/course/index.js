const Course = require('../../models/course');
const bcrypt = require('bcryptjs');


const courseController = {
    creatCourse: async (req, res) => {
        try {
            const { title, description, duration, price, discount, instructor, videos } = req.body;
            const course = new Course({
                title,
                description,
                duration,
                price,
                discount,
                instructor,
                videos
            })
            await course.save();
            res.status(200).send({
                status: true,
                message: "Course created successfully"

            });
        }
        catch (err) {
            res.status(400).send({
                status: false,
                message: "error" + err.message,
            });
        }
    },

    UpdateCourse: async (req, res) => {
        try {
            const { id, title, description, duration, price, discount, instructor, videos } = req.body;
            const course = await Course.findById(id);
            course.title = title;
            course.description = description;
            course.duration = duration;
            course.price = price;
            course.discount = discount;
            course.instructor = instructor;
            course.videos = videos

            await course.save();
            res.status(200).send({
                status: true,
                message: "Course updated successfully"

            });
        }
        catch (err) {
            res.status(400).send({
                status: false,
                message: "error" + err.message,
            });
        }
    },
    getAllCourse: async (req, res) => {
        try {
            const course = await Course.find({});
            res.status(200).send({ data: course })

        } catch (err) {
            res.status(400).send({
                status: false,
                message: "error" + err.message,
            });
        }
    },
    getCourseById: async(req,res) =>{
        try{
            const {id} = req.body;
            const course = await Course.findById(id);
            res.status(200).send({ data: course })
            
        }catch (err) {
            res.status(400).send({
                status: false,
                message: "error" + err.message,
            });
        }
    },
    deleteCourse: async(req,res) =>{
        try{
            const {id} = req.body;
            const course = await Course.findById(id);
            await course.deleteOne();
            res.status(200).send({message: 'course deleted'})

        }catch (err) {
            res.status(400).send({
                status: false,
                message: "error" + err.message,
            });
        }
    }


}
module.exports = courseController;