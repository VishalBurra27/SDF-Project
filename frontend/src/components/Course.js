import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import CourseDataService from "../services/course.service";

const Course = props => {
  const { id }= useParams();
  let navigate = useNavigate();

  const initialCourseState = {
    id: null,
    title: "",
    description: "",
    instructor: "",
    published: false
  };
  const [currentCourse, setCurrentCourse] = useState(initialCourseState);
  const [message, setMessage] = useState("");

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

  const handleInputChange = event => {
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

  return (
    <div>
      {currentCourse ? (
        <div className="edit-form">
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

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentCourse.published ? "Published" : "Pending"}
            </div>
          </form>

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
