const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assessmentSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
        

    },
    negativeMarking: {
        type: Boolean,
        
        
   
        
    } ,
    questions:[{

        question: {
            type: Schema.Types.ObjectId,
            ref: 'question'
        },
       


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

module.exports = mongoose.model('assessment', assessmentSchema);