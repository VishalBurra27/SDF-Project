import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import CourseDataService from "../services/course.service";
import AuthService from "../services/auth.service";
import SubService from "../services/subs.service";

const Course = props => {
  const { id } = useParams();
  let navigate = useNavigate();

  const initialCourseState = {
    id: null,
    title: "",
    description: "",
    instructor: "",
    published: false
  };

  const initialSubState = {
    user_id : "",
    course_id : "",
    score : "0",
    grade : ""
  }
  
  const [currentCourse, setCurrentCourse] = useState(id ? CourseDataService.getCourseByID(id) : initialCourseState);
  // console.log(currentCourse);
  const [message, setMessage] = useState("");
  const [currentUser, setcurrentUser] = useState(AuthService.getCurrentUser());
  const [sub, updateSub] = useState(false);
  const [currentSub, setCurrentSub] = useState(currentUser.username && currentCourse.title ? SubService.getUserSubByID(currentUser.username, currentCourse.title)
  // .then(response => {
  //   // console.log(currentUser.username);
  //   // console.log(currentCourse !== undefined? currentCourse.id : "Barthilla.");
  //   setCurrentSub(response.data[0]);
  //   updateSub(response.data.length > 0)
  //   // console.log(currentSub.score);
  // })
  // .catch(e => {
  //   console.log(e);
  // }) 
  : initialSubState);
  const [students, setStudents] = useState([])
  const [currentStudentIndex, setStudentIndex] = useState(-1);
  // const [grade, setGrade] = useState({
  //   score : "",
  //   grade : ""
  // });

  // const [currentStudent, setCurrentStudent] = useState(initialSubState);

  const [result, setResult] = useState({
    score:"",
    grade:""
  });

  const subscribe = () => {
    SubService.createSub({
      user_id : currentUser.username,
      course_id : currentCourse.title,
    })
    .then(response => {
      updateSub(true);
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }

  const unsubscribe = () => {
    getSub();
    alert('This will remove you from the course. Do you wish to proceed?')
    SubService.removeSub(currentSub._id)
    .then(res => console.log(res))
    .catch(e => {
      console.log(e);
    });
  }

  const getSub = async () => {
    await SubService.getUserSubByID(currentUser.username, currentCourse.title)
    .then(response => {
      console.log(currentUser.username);
      // console.log(currentCourse !== undefined? currentCourse.id : "Barthilla.");
      setCurrentSub(response.data[0]);
      console.log(response.data);
      updateSub(response.data.length > 0);
      console.log(currentSub.score);
    })
    .catch(e => {
      console.log(e);
    });


  }

  const getCourse = id => {
    CourseDataService.getCourseByID(id)
      .then(response => {
        setCurrentCourse(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getCourse(id);

    
  }, [id]);

  // useEffect(() => {
  //   let ignore = false;
  //   setTimeout(() => {if(!ignore){getSub();}}, 10)
  //  return () => ignore = true}, [])

  const handleInputChange = event => {
    getSub();
    if(currentUser.authority === "Student"){
      return;
    }
    const { name, value } = event.target;
    setCurrentCourse({ ...currentCourse, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentCourse.id,
      title: currentCourse.title,
      description: currentCourse.description,
      instructor: currentCourse.instructor,
      published: status
    };

    CourseDataService.updateCourse(currentCourse.id, data)
      .then(response => {
        setCurrentCourse({ ...currentCourse, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateCourse = () => {
    CourseDataService.updateCourse(currentCourse.id, currentCourse)
      .then(response => {
        console.log(response.data);
        setMessage("The tutorial was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

//   const handleEval = (e) => {
//     getStudents();
//     console.log(currentStudent);
//     const { name, value } = e.target;
//     setCurrentStudent({ user_id: students[currentStudentIndex].username, course_id: currentCourse.title, [name]: value });
// }

//   const handleGrading = (event) => {
//     event.preventDefault();
//     SubService.gradeStudent(currentStudent._id, {score: currentStudent.score, grade : currentStudent.grade})
//   }

  const deleteCourse = () => {
    CourseDataService.removeCourse(currentCourse.id)
      .then(response => {
        console.log(response.data);
        navigate("/tutorials");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const getStudents = () => {
    SubService.getSubsForCourse(currentCourse.title)
    .then(res => setStudents(res.data))
    .catch(e => {
      console.log(e);
    });
    console.log(students);
  }

  const handleEval = async (e, student) => {
    const user_id = student.user_id;
    const course_id = student.course_id;
    const {score, grade} = result;
    await SubService.gradeStudent(student._id, {user_id:user_id, course_id:course_id, score:score, grade:grade})
    .then(response => {
      console.log(response.data);
      setMessage("Graded.");
    })
    .catch(e => {
      console.log(e);
    });
    }
  return (
    <div>
    {/* {useEffect(() => {
      let ignore = false;
      setTimeout(() => {if(!ignore){getSub();}}, 10)
      return () => ignore = true}, [])} */}

      {currentCourse ? (
        <div className="edit-form">
          {/* {console.log(currentCourse.id)} */}
          <h4>Course</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentCourse.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentCourse.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="instructor">Instructor</label>
              <input
                type="text"
                className="form-control"
                id="instructor"
                name="instructor"
                value={currentCourse.instructor}
                onChange={handleInputChange}
              />
            </div>

            {/* {currentUser.authority === "Instructor" && (<div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentCourse.published ? "Published" : "Pending"} 
            </div>)}*/}

            {sub && (<div>
            {currentUser.authority === "Student" && (
              <div>
              <label htmlFor="score">Score</label>
              <input
                type="text"
                className="form-control"
                id="score"
                name="score"
                value={currentSub ? currentSub.score : "Unevaluated"}
                onChange={handleInputChange}
              />
              </div>
            )}
            {currentUser.authority === "Student" && (
              <div>
              <label htmlFor="grade">Grade</label>
              <input
                type="text"
                className="form-control"
                id="grade"
                name="grade"
                value={currentSub ? currentSub.grade : "Ungraded"}
                onChange={handleInputChange}
              />
              </div>
            )}
            </div>)}
          </form>
{/* instructor buttons */}
          {currentUser.authority === "Instructor" && (<div>
          {/* {currentCourse.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )} */}

          <button className="btn btn-danger m-2" onClick={deleteCourse}>
            Delete
          </button>

          <button
            type="submit"
            className="btn btn-success m-2"
            onClick={updateCourse}
          >
            Update
          </button>

          {currentCourse && (
            <div>
          <button className="btn btn-info m-2" onClick={() => getStudents()}>
            Show students
          </button>
            {students.length > 0 && (
              <div>
              <ul>
                
                {students.map((student, index) => 
                  <li 
                  className={
                  "list-group-item "
                   + (index === currentStudentIndex ? "active" : "")
                }
                onClick={() => setStudentIndex(index)}
                key={index}>
                    {student.user_id} : {student.score} : {student.grade}
                    
                    {(index === currentStudentIndex) && (<form>
                    <label htmlFor="score">Score</label>
                      <input
                      type="text"
                      className="form-control"
                      id="score"
                      name="score"
                      // value={currentStudent.score}
                      onChange={(e) => setResult(prev => {
                        return {...prev, [e.target.name] : e.target.value}})}
                      />
                      <label htmlFor="studentGrade">Grade</label>
                      <input
                      type="text"
                      className="form-control"
                      id="grade"
                      name="grade"
                      // value={currentStudent.grade}
                      onChange={(e) => setResult(prev => {
                        return {...prev, [e.target.name] : e.target.value}})}
                      />

                      <button className="btn btn-warning m-2"onClick={(e) => handleEval(e, student)}>
                        Commit grade
                      </button>
                      
                    </form>)}

                  </li>
                )}
              </ul>
                <button className="btn btn-info m-2" onClick={() => setStudents([])}>
                  Hide Students
                </button>
              </div>
              )}
            </div>
          )}
            </div>)}
{/* Starting student buttons */}
            {currentUser.authority === "Student" && (<div>

              <button className="btn btn-info m-2" onClick={() => getSub()}>
                View grade
              </button>
              {!currentSub ? (
                
              <button className="btn btn-info m-2" onClick={() => {subscribe();
              navigate('/courses');
              }}>
              Subscribe
              </button>
              
               ) 
              :
              (<button className="btn m-2 btn-danger" onClick={() => {
                  unsubscribe();
                  navigate('/courses');
                  }}>
                Unsubscribe
              </button>)} 
            </div>)}

          <button className="btn btn-danger m-2" onClick={() => {navigate('/courses')}}>
            Finish
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Course...</p>
        </div>
      )}
    </div>
  );
};

export default Course;
