import axios from "axios";
import AuthService from "./auth.service";

const API_URL = "http://localhost:5000/api";
const user = AuthService.getCurrentUser();

const getAllCourses = () => {
  const response = axios.get(API_URL + "/courses");
  console.log(response);
  return response;
};

const getCourseByID = id => {
  const response = axios.get(API_URL + `/courses/${id}`);
  return response;
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
  getCourseByTitle,

};

export default CourseService;
