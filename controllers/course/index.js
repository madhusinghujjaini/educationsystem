const Course = require('../../models/course');

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
    getCourseById: async (req, res) => {
        try {
            const { id } = req.body;
            const course = await Course.findById(id);
            res.status(200).send({ data: course })

        } catch (err) {
            res.status(400).send({
                status: false,
                message: "error" + err.message,
            });
        }
    },
    deleteCourse: async (req, res) => {
        try {
            const { id } = req.body;
            const course = await Course.findById(id);
            await course.deleteOne();
            res.status(200).send({ message: 'course deleted' })

        } catch (err) {
            res.status(400).send({
                status: false,
                message: "error" + err.message,
            });
        }
    },
    updateInstructor: async (req, res) => {
        try {
            const { courseId, instructorId, name, experience, social } = req.body;
            let course = await Course.findById({ "_id": courseId });
            course.instructor.forEach(ele => {
                if (ele._id == instructorId) {
                    ele.name = name;
                    ele.experience = experience;
                    ele.social = social
                }
            })

            await course.save();
            res.status(200).send({ massage: 'instructor  updated' })

        } catch (err) {
            res.status(400).send({
                status: false,
                message: "error" + err.message,
            });
        }
    },
    addInstructor: async (req, res) => {
        try {
            const { courseId, name, experience, social } = req.body;
            let course = await Course.findById({ "_id": courseId });
            let newInstructor = {
                name,
                experience,
                social
            }
            course.instructor.push(newInstructor)

            await course.save();
            res.status(200).send({ massage: 'instructor Added successfuly' });

        } catch (err) {
            res.status(400).send({
                status: false,
                message: "error" + err.message,
            });

        }
    },
    updateVideo: async (req, res) => {
        try {
            const { courseId, videoId, title, url, description } = req.body;
            let course = await Course.findById({ "_id": courseId });
            course.videos.forEach(ele => {
                if (ele._id == videoId) {
                    ele.title = title;
                    ele.url = url;
                    ele.description = description
                }
            })

            await course.save();
            res.status(200).send({ massage: 'videos updated' })

        } catch (err) {
            res.status(400).send({
                status: false,
                message: "error" + err.message,
            });
        }
    },
    addVideo: async (req, res) => {
        try {
            const { courseId, title, url, description } = req.body;
            let course = await Course.findById({ "_id": courseId });
            let newVideo = {
                title,
                url,
                description
            }
            course.videos.push(newVideo)

            await course.save();
            res.status(200).send({ massage: 'video Added successfuly' });

        } catch (err) {
            res.status(400).send({
                status: false,
                message: "error" + err.message,
            });

        }
    }


}
module.exports = courseController;