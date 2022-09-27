const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    duration:{
        type: String,
    },
    
    image: {
        type: String,        
    },  
    marks: {
        type: String,
        require: true
    } ,
    answer:{
        type: String,
    } ,
    options:[{
        title: {
            type: String,
            require: true,
        },
        correct: { 
            type: Boolean,
        }
}],
createdAt:{
    type: Date,
    default: Date.now()
},
updatedAt:{
    type: Date,
    default: Date.now()
}

});

module.exports = mongoose.model('question', questionSchema);