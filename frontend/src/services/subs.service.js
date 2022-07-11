import axios from "axios";
import AuthService from "./auth.service";

const API_URL = "http://localhost:5000/api";
const user = AuthService.getCurrentUser();

const getAllSubs = async () => {
  const response = await axios.get(API_URL + "/subs");
  console.log(response);
  return response;
};

const gradeStudent = async (id, data) => {
  const response = await axios.put(API_URL + `/subs/${id}`, data);
  return response;
}

// const getCourseByID = id => {
//   return axios.get(API_URL + `/courses/${id}`);
// };

const createSub = async data => {
  const response = await axios.post(API_URL + "/subs", data);
  return response;
};

// const updateCourse = (id, data) => {
//   return axios.put(API_URL + `/courses/${id}`, data);
// };

const removeSub = id => {
  return axios.delete(API_URL + `/subs/${id}`);
};

// const removeAllCourses = () => {
//   return axios.delete(API_URL + `/courses`);
// };

// const getCourseByTitle = title => {
//   return axios.get(API_URL + `/courses?title=${title}`);
// };

const getUserSubByID =  (user_id, course_id) => {
    // console.log(user_id + '   ' + course_id);
    const response =  axios.get(API_URL + '/subs?user_id=' + user_id + '&course_id=' + course_id);
    return response;
}

const getSubsForCourse = async (course_id) => {
  return await axios.get(API_URL + '/subs/course?course_id=' + course_id);
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
  getSubsForCourse,
  gradeStudent
};

export default SubService;
