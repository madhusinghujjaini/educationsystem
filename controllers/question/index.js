const  Question = require('../../models/question');

const questionController = {
    creatQuestion: async (req, res) => {
        try {
            const { title, description, duration, image, marks, answer, options } = req.body;
            const question = new Question({
                title,
                description,
                duration,
                image,
                marks,
                answer,
                options
            })
            await question.save();
            res.status(200).send({
                status: true,
                message: "question created successfully"

            });
        }
        catch (err) {
            res.status(400).send({
                status: false,
                message: "error : " + err.message,
            });
        }
    },


UpdateQuestion: async (req, res) => {
    try {
        const {id, title, description, duration, image, marks, answer,options } = req.body;
        // const course = await Course.findById(id);
        // course.title = title;
        // course.description = description;
        // course.duration = duration;
        // course.price = price;
        // course.discount = discount;
        // course.instructor = instructor;
        // course.videos = videos

        // await course.save();

        // using set 
        const question = await Question.findByIdAndUpdate(id,{$set:{
            title,
            description,
            duration,
            image,
            marks,
            answer,
            options
        }});
        res.status(200).send({
            status: true,
            message: "question updated successfully"

        });
    }
    catch (err) {
        res.status(400).send({
            status: false,
            message: "error" + err.message,
        });
    }
},
getAllQuestion: async (req, res) => {
    try {
        const question = await Question.find({});
        res.status(200).send({ data: question })

    } catch (err) {
        res.status(400).send({
            status: false,
            message: "error" + err.message,
        });
    }
},








}

module.exports = questionController;