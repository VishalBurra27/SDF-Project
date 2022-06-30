import express from 'express';

const courserouter = express.Router();
const getAllCourses = (req, res) => {
    //We want this function to go to the collection Courses, look through all of them and render only
    //the ones which have the student with the given id.
    console.log(req.params.id)


    res.send("Aal da corsas.")
}

courserouter.get('/:id', getAllCourses);
export default courserouter;