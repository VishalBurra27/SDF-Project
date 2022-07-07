const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name:String,
    username: String,
    email: String,
    password: String,
    authority:String,
    /* roles: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Role"
    //   }
    // ]
    // courses: [
    //   {
    //     course_id:String,
    //     score:Number,
    //     grade:String
    //   }
    ]*/
    
  })
);

module.exports = User;

/*
We'll make a new model, called Subs.
mongoose.model({
  user_id : String,
  course_id : String,
  score : Number,
  grade : String
}) 

Whenever we want to see student's courses, we'll summon this up and filter by user_id, 
and for students in a course, filter by course_id

For new subscriptions, simply create a new document of the same.
*/