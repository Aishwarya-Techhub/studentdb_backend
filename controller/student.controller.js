const student=require('../data/studentmodel');

exports.addStudent=async(req,res)=>{
    const {name,course}=req.body;
    try{
        const newStudent=new student({name,course});
        await newStudent.save();
        res.status(201).json({
            message:"Student added successfully",
            data:newStudent
        });
    }catch(err){
        res.status(500).json({
            message:"Error in adding the student data",
            error:err.message
        });
    }
};

exports.getStudents=async(req,res)=>{
    try{
        const students=await student.find();
        res.status(200).json({
            message:"Student is retrieved",
            data:students
        });
    }catch(err){
        res.status(500).json({
            message:"error in retrieving the data",
            error:err.message
        });
    }
};

exports.updateStudent = async (req, res) => {
    console.log('updateStudent called', { id: req.params.id, body: req.body });
    try {
        const updated = await student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updated) return res.status(404).json({ message: 'Student not found' });
        res.status(200).json({ message: 'Student updated', data: updated });
    } catch (error) {
        console.error('updateStudent error', error);
        res.status(500).json({ message: error.message });
    }
};


exports.deleteStudent = async (req, res) => {
    try {
        const deleted = await student.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Student not found' });
        res.status(200).json({ message: 'Student deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};