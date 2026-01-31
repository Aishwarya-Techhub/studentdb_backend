const express=require('express');
const app=express();

require('dotenv').config(); 
require('./data/mongo');

app.use(express.json());

const studentRoutes=require('./router/student.route');
app.use('/students',studentRoutes);

app.listen(5000,()=>{
    console.log("server is running on http://localhost:5000");
});



