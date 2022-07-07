exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

// const showUserBoard = () => {
//   const userBoard = {
//     num_courses : "",
//     CGPA: ""
//   }

//   return(userBoard)
// }

exports.userBoard = (req, res) => 
  res.status(200).send("Not User content");

// exports.userBoard = (req, res) => {
//   res.status(200).send(() => {
//     const userBoard = {
//       num_courses : "3",
//       CGPA: "10"
//     }
  
//     return(userBoard)
//   });
// };

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

/*
If student : 
  Buttons shown: 
    Drop if taken, add if not taken
    Take test.
    Submit assignment.
    Show all courses <--> Show my courses (default)
If instructor:
  Buttons shown:
    Publish
    Update
    Delete : terminates the course.
    Show all courses <--> Show my courses (default)
*/