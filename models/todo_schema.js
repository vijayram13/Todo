//import mongoose library
const mongoose = require('mongoose');



// create schema object in MongoDB
const todoSchema = new mongoose.Schema({
    description :{
        type: 'string',
        required: true
    },
    category : {
        type: 'string',
        required: true
    },
    date:{
        type:"string",
        required: true
    }
});

//create model object
const todoModel = new mongoose.model("activity", todoSchema);



//export model object
module.exports = todoModel;
