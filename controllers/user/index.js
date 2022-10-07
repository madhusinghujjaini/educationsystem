const user = require('../../models/user');
const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config')

const userController = {
    signUp: async (req, res) => {
        try {
            const { name, email, mobile, password } = req.body;

            let _password = req.body.password;
            const salt = await bcrypt.genSalt(10);
            _password = await bcrypt.hash(_password, salt);

            console.log(_password);
            const _result = await User.create({
                name,
                email,
                mobile,
                password: _password
            })

            const payload = {
                user: {
                    id: _result._id
                }
            };
            const token = await jwt.sign(payload, config.JWT_SECRET, { expiresIn: 240000 });

            res.status(200).send({
                message: "registered Successfully",
                token
            })
        } catch (error) {
            console.log(error.message)
            return res.status(400).send({ error: error.message })
        }
    },
    signIn: async (req, res) => {

        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(400).send({ message: 'user doesnot exist' })
            }
            const passwordIsCorrect = await bcrypt.compare(password, user.password);
            if (!passwordIsCorrect) {
                return res.status(400).send({ message: 'user email or password incorrect' })
            }

            res.status(200).send({ message: 'login sucessfully' });
        } catch (error) {
            console.log(error.message)
            return res.status(400).send({ error: error.message });
        }
    },
    userApi: (req, res) => {
        res.status(200).send('user signup sucessfuly')
    }

    
}

module.exports = userController;