const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    title: {
        type: String,
        require: true
    },
   description: {
        type: String,
        require: true

    },
    duration: {
        type: String,
        require: true
    },  
    price: {
        type: String,
        require: true
    },
    discount:{
        type: Number,
    } ,
    instructor: [{
        instructorId:{
            type: Schema.Types.ObjectId
        },
        name: {
            type: String,
            require: true
        },
        experience: {
            type: Number,
        },
        social: {
            type: String,

        }

    }] ,
    videos:[{
        videoId:{
            type: Schema.Types.ObjectId
        },
        title:{
         type: String,
        },
        url:{
            type: String,

        },
        description:{
            type: String,
        }
    }]
});

module.exports = mongoose.model('Course', CourseSchema);