const db = require('../models');
const Sub = db.subs;

exports.create = (req, res) => {
    const sub = new Sub({
        user_id : req.body.user_id,
        course_id : req.body.course_id,
        score : req.body.score ? req.body.score : "0",
        grade : req.body.grade ? req.body.grade : "NA"
    })
    
    sub
    .save(sub)
    .then(data => {
      res.send(data);
      console.log("Subscription added.");
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Course."
      });
    });
};

exports.findAll = (req, res) => {
    const user_id = req.query.user_id;
    const course_id = req.query.course_id;
    // console.log("Backend.");
    // console.log(user_id + '   ' + course_id);

    //ADDED COURSE_ID. LOOK OUT.
    var condition = user_id && course_id ? { user_id : { $regex: new RegExp(user_id), $options: "i" }, 
                            course_id :  { $regex: new RegExp(course_id), $options: "i" }} : {};
  
    Sub.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving courses."
        });
      });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Sub.deleteOne({_id : id})
  .then(data => console.log(data))
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving courses."
    });
  });
}

exports.findByCourse = (req, res) => {
  const id = req.query.course_id;
  Sub.find({course_id : id})
  .then(data => res.send(data))
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving courses."
    });
  });
}

exports.update = (req, res) => {
  const id = req.params.id;
  Sub.updateOne({_id : id}, {$set : {score : req.body.score, grade : req.body.grade}})
  .then(data => res.send(data))
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while updating courses."
    });
  });
}