const mongoose=require('mongoose');

const student=new mongoose.Schema({
    name:String,
    course:String
});

const studentModel=mongoose.model('student',student);

module.exports=studentModel;