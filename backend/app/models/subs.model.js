const mongoose = require("mongoose");

const Subs = mongoose.model(
  "Sub",
  new mongoose.Schema({
    user_id : String,
    course_id : String,
    score : String,
    grade : String
  })
);

module.exports = Subs;