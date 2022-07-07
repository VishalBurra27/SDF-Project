module.exports = app => {
    const courses = require("../controllers/course.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Course
    router.post("/", courses.create);

    //Default get for instructor
    // router.get("/", courses.findByInstructor);
  
    // Retrieve all Tutorials
    router.get("/", courses.findAll);

    //router.get("/mine/:username", courses.findMine)
  
    // Retrieve all published Tutorials
    router.get("/published", courses.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", courses.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", courses.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", courses.delete);
  
    // Create a new Tutorial
    router.delete("/", courses.deleteAll);
  
    app.use("/api/courses", router);
  };
  