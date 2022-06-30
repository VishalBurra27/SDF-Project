
import axios from 'axios'
import { useState } from 'react';

async function getCourses(){
    await axios.get('https://localhost:5000/courses');
}
const CourseList = (params) => {
    // const [out, setOut] = useState()
    // console.log(params);
    // setOut(getCourses.data);
    return(<div>
        <h1>Out</h1>
    </div>)
}

export default CourseList;