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
            type: this.schema.types.objectId,
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

module.exports = Assessmet = mongoose.model('assessment', assessmentSchema);