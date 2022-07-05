import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";

const AddCourse = () => {
  const navigate = useNavigate();
  const initialCourseState = {
    id: null,
    title: "",
    description: "",
    instructor: "",
    published: false
  };
  const [course, setCourse] = useState(initialCourseState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCourse({ ...course, [name]: value });
  };

  const saveCourse = () => {
    var data = {
      title: course.title,
      description: course.description,
      instructor: course.instructor
    };

    CourseService.createCourse(data)
      .then(response => {
        setCourse({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          instructor: response.data.instructor,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newCourse = () => {
    setCourse(initialCourseState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="m-3 btn btn-sm btn-success" onClick={newCourse}>
            Add
          </button>
          
          <button className="m-3 btn btn-sm btn-success" onClick={() => {navigate('/courses')}}>
            Finish
          </button>
          
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={course.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={course.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <div className="form-group">
            <label htmlFor="instructor">Instructor</label>
            <input
              type="text"
              className="form-control"
              id="instructor"
              required
              value={course.instructor}
              onChange={handleInputChange}
              name="instructor"
            />
          </div>

          <button onClick={saveCourse} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddCourse;
