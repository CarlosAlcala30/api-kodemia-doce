const mongoose = require('mongoose')

// Schema
const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true,
        trim: true
    },
    age:  {
        type: Number,
        min: 0,
        max: 90,
        required: true,
    },
    gender: {
        type: String,
        enum: ['m', 'f'],
        required: true
    },
    generation:{
        type:Number,
        required:true,
        min:1
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        match: /.+@.*\..*/

    }
})

// model

const model = mongoose.model('koders', koderSchema)

module.exports = model