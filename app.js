const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const apiroutes = require('./routes')

const app = express();
const port = 7000;

app.use(cors());
app.use(bodyParser.json())
const connectToDB = async () => {
    try {
        await mongoose.connect('');
        console.log('connected to db');
    } catch (error) {
        console.log(error)
    }
}
connectToDB();

app.use('/api', apiroutes)


app.listen(port, () => {
    console.log("server is up on port: ", port);
});

// app.get('/', (req, res) => {
//     console.log("default api called");
//     res.status(200).send('defult url call')
// })
