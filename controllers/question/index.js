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
    }
}
module.exports = questionController;