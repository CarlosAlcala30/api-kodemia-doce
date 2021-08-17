const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
    name:{
        type:String,
        minLength:2,
        maxLength:100,
        trim:true,
        require:true
    },
    lastName:{
        type:String,
        minLength:2,
        maxLength:100,
        trim:true,
        require:true
    },
    module:[
        {
            type:String,
            enum: ['Maquetado', 'JS', 'Cloud', 'Backend', 'React'],
            required:true
        }
    ],
    gender:{
        type: String,
        enum: ['Male', 'Female'],
        required: true
    }

});

const model = mongoose.model("mentors",mentorSchema);

module.exports = model;