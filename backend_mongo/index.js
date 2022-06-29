import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import courserouter from './course.js'; 
import cors from 'cors'

const app = express();
const router = express.Router();
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost:27017/EMSDB", {useNewUrlParser : true});
const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type: String,
        enum: ["Student", "Instructor"],
        required: true
    }
});

const userModel = mongoose.model("User", userSchema);

const courseSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    instructor:{
        type:String,
        required:true
    },
    credits:{
        type:Number,
        required:true
    }
    //further additions
});

const courseModel = mongoose.model("Course", courseSchema);

app.post("/user", (req, res) => {
    res.send("Go home.");
});
app.use(cors)
app.use('/courses', courserouter)
//export default app;
app.listen(5000, () => console.log("5k"));