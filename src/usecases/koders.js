const Koder = require('../models/koders');

function getAll(){
    return Koder.find();
}

function create(doc){
    return Koder.create(doc);
}

function deleteOne(doc){
    return Koder.findOneAndDelete(doc);
}

module.exports = {
    getAll,create,deleteOne
}