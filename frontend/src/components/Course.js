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
  console.log(currentCourse);
  const [message, setMessage] = useState("");
  const [currentUser, setcurrentUser] = useState(AuthService.getCurrentUser());
  const [sub, updateSub] = useState(false);
  const [currentSub, setCurrentSub] = useState(currentUser.username && currentCourse.title ? SubService.getUserSubByID(currentUser.username, currentCourse.title) : initialSubState);
  const [students, setStudents] = useState([])
  const [currentStudentIndex, setStudentIndex] = useState(-1)

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

  const getSub = () => {
    SubService.getUserSubByID(currentUser.username, currentCourse.title)
    .then(response => {
      console.log(currentUser.username);
      console.log(currentCourse ? currentCourse.id : "Barthilla.");
      setCurrentSub(response.data[0]);
      updateSub(response.data.length > 0)
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

    getSub();
  }, [id]);

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

  const handleGrading = event => {
    event.preventDefault();
    console.log("This isn't working.");
  }

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

  return (
    <div>
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

            {currentUser.authority === "Instructor" && (<div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentCourse.published ? "Published" : "Pending"}
            </div>)}

            {currentSub && (<div>
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

          {currentUser.authority === "Instructor" && (<div>
          {currentCourse.published ? (
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
          )}

          <button className="badge badge-danger mr-2" onClick={deleteCourse}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success mr-2"
            onClick={updateCourse}
          >
            Update
          </button>
          {currentCourse && (
            <div>
          <button className="badge badge-success" onClick={() => getStudents()}>
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
                    {student.user_id}
                    
                    {(index === currentStudentIndex) && (<form>
                    <label htmlFor="studntScore">Score</label>
                      <input
                      type="text"
                      className="form-control"
                      id="studentScore"
                      name="studentScore"
                      value={student.score}
                      onChange={handleGrading}
                      />
                      <label htmlFor="studentGrade">Grade</label>
                      <input
                      type="text"
                      className="form-control"
                      id="studestudentGradentScore"
                      name="studentGrade"
                      value={student.grade}
                      onChange={handleGrading}
                      />
                      
                    </form>)}

                  </li>
                )}
              </ul>
                <button className="badge" onClick={() => setStudents([])}>
                  Hide Students
                </button>
              </div>
              )}
            </div>
          )}
            </div>)}

            {currentUser.authority === "Student" && (<div>

              <button className="badge mr-2" onClick={() => getSub()}>
                View grade
              </button>
              {!sub ? (
              <button className="badge mr-2" onClick={() => {subscribe();
              navigate('/courses');
              }}>
                Subscribe
              </button>
               ) 
              :
              (<button className="badge mr-2 badge-danger" onClick={() => {
                  unsubscribe();
                  navigate('/courses');
                  }}>
                Unsubscribe
              </button>)} 
            </div>)}

          <button className="badge badge-danger mr-2" onClick={() => {navigate('/courses')}}>
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
