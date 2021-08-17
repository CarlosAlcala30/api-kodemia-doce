const Koder = require('../models/koders');
const bcrypt = require("../lib/bcrypt");

function getAll(){
    return Koder.find();
}

async function create(koder){
    const {email,password} = koder;
    const koderFind = await Koder.findOne({email});
    if(koderFind) throw new Error("Email alredy exists");
    //encriptar passwors
    const encryptedPassword = await bcrypt.hash(password);
    return Koder.create({...koder,password:encryptedPassword});
}

function deleteById(id){
    return Koder.findByIdAndDelete(id);
}

async function updateById(id,koder){
    const {password} = koder;
    const encryptedPassword = await bcrypt.hash(password);
    return Koder.findByIdAndUpdate(id,{...koder,password:encryptedPassword},{new:true});
}

module.exports = {
    getAll,create,deleteById,updateById
}