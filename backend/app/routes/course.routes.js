module.exports = app => {
    const courses = require("../controllers/course.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", courses.create);
  
    // Retrieve all Tutorials
    router.get("/", courses.findAll);
  
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
  