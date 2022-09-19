const user = require('../../models/user')
const User = require('../../models/user')
const becrypt = require('bcryptjs')
const userController = {
    signUp: async (req, res) => {

        if (!req.body.name) {
            return res.status(400).send(' name require')
        }
        if (!req.body.email) {
            return res.status(400).send('email require')
        }
        if (!req.body.mobile) {
            return res.status(400).send('mobile no require')
        }
        if (!req.body.password) {
            return res.status(400).send('password require')
        }

        let _password = req.body.password;
        const salt  = becrypt.genSaltSync(10);
        _password = becrypt.hashSync(_password , salt);

        console.log(_password);
        const _result = await User.create({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: _password
        })

        res.status(200).send('user signup sucessfuly')
    },
    signIn: async (req, res) => {

        if (!req.body.email) {
            return res.status(400).send('Please enter the email require')
        }
        if (!req.body.password) {
            return res.status(400).send('Please enter the password')
        }

        const _user = await User.findOne({ email: req.body.email });
        if (_user.password == req.body.password) {
            return res.status(200).send('user loged in')
        }else{
            return res.status(400).send('email id or password is incorrect');
        }
    },
    userApi: (req, res) => {
        res.status(200).send('user signup sucessfuly')
    }
}

module.exports = userController;