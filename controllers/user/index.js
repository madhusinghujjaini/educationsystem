const User = require('../../models/user')
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
        if(!req.body.password){
            return res.status(400).send('password require') 
        }


        const _result = await User.create({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            password: req.body.password
        })

        res.status(200).send('user signup sucessfuly')
    },
    userApi:(req,res)=>{
        res.status(200).send('user signup sucessfuly')
    }
}

module.exports = userController;