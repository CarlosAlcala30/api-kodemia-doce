const Mentor = require("../models/mentors");

function getAll(){
    return Mentor.find();
}

function getById(id){
    return Mentor.findById(id);
}

function create(mentor){
    return Mentor.create(mentor);
}

function deleteById(id){
    return Mentor.findByIdAndDelete(id);
}

function updateById(id,mentor){
    return Mentor.findByIdAndUpdate(id,mentor,{new: true, runValidators: true});
}


module.exports = {getAll,getById,create,deleteById,updateById}