
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';


const CourseList = (params) => {
    async function getCourses(){
        const res = await axios.get('https://localhost:5000/courses');
        theCourses(res.data)
    }
    var [courses, theCourses] = useState(["No courses"]);
    useEffect(() => {
        getCourses();
    }, []);
    
    // const [out, setOut] = useState()
    // console.log(params);
    // setOut(getCourses.data);


    //this be the first frontend-backend information 
    return(<div>
    <h1>Out.</h1>
    <ul>
        {/* {courses.map((item, index) => {
            return(<li> <h2>{item}</h2></li>)
        })} */}
    </ul></div>)
}

export default CourseList;