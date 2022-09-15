const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const user = require('./routes/user')

const app = express();
const port = 7000;

app.use(cors());
const connectToDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:jVHiJLkct5eGonxs@todoapp.ysdlh3a.mongodb.net/?retryWrites=true&w=majority');
        console.log('connected to db');
    } catch (error) {
        console.log(error)
    }
}
connectToDB();

app.use('/user', user)

app.listen(port, () => {
    console.log("server is up on port: ", port);
});

app.get('/', (req, res) => {
    console.log("default api called");
    res.status(200).send('defult url call')
})
