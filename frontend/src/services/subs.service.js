import axios from "axios";
import AuthService from "./auth.service";

const API_URL = "http://localhost:5000/api";
const user = AuthService.getCurrentUser();

const getAllSubs = () => {
  const response = axios.get(API_URL + "/subs");
  console.log(response);
  return response;
};

const getCourseByID = id => {
  return axios.get(API_URL + `/courses/${id}`);
};

const createSub = data => {
  return axios.post(API_URL + "/subs", data);
};

const updateCourse = (id, data) => {
  return axios.put(API_URL + `/courses/${id}`, data);
};

const removeSub = id => {
  return axios.delete(API_URL + `/subs/${id}`);
};

const removeAllCourses = () => {
  return axios.delete(API_URL + `/courses`);
};

const getCourseByTitle = title => {
  return axios.get(API_URL + `/courses?title=${title}`);
};

const getUserSubByID = (user_id, course_id) => {
    console.log(user_id + '   ' + course_id);
    return axios.get(API_URL + '/subs?user_id=' + user_id + '&course_id=' + course_id);
}

const getSubsForCourse = (course_id) => {
  return axios.get(API_URL + '/subs/course?course_id=' + course_id);
}

const SubService = {
  getAllSubs,
  //getCourseByID,
  createSub,
  //updateCourse,
  //removeCourse,
  //removeAllCourses,
  //getCourseByTitle,
  removeSub,
  getUserSubByID,
  getSubsForCourse
};

export default SubService;
