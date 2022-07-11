module.exports = app => {
    const subs = require("../controllers/subs.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Course
    router.post("/", subs.create);

    //Default get for instructor
    // router.get("/", courses.findByInstructor);
  
    // Retrieve all Tutorials
    router.get("/", subs.findAll);
    router.get('/course', subs.findByCourse)

    //router.get("/mine/:username", courses.findMine)
  
    // // Retrieve all published Tutorials
    // router.get("/published", courses.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", courses.findOne);
  
    // // Update a Tutorial with id
    router.put("/:id", subs.update);
  
    // // Delete a Tutorial with id
    router.delete("/:id", subs.delete);
  
    // // Create a new Tutorial
    // router.delete("/", courses.deleteAll);
  
    app.use("/api/subs", router);
  };