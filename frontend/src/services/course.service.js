import axios from "axios";

const API_URL = "http://localhost:5000/api";

const getAllCourses = () => {
  return axios.get(API_URL + "/courses");
};

const getCourseByID = id => {
  return axios.get(API_URL + `/courses/${id}`);
};

const createCourse = data => {
  return axios.post(API_URL + "/courses", data);
};

const updateCourse = (id, data) => {
  return axios.put(API_URL + `/courses/${id}`, data);
};

const removeCourse = id => {
  return axios.delete(API_URL + `/courses/${id}`);
};

const removeAllCourses = () => {
  return axios.delete(API_URL + `/courses`);
};

const getCourseByTitle = title => {
  return axios.get(API_URL + `/courses?title=${title}`);
};

const CourseService = {
  getAllCourses,
  getCourseByID,
  createCourse,
  updateCourse,
  removeCourse,
  removeAllCourses,
  getCourseByTitle
};

export default CourseService;
