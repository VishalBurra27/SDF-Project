import { useParams, useEffect } from "react-router-dom"
import CourseList from "./course";
import axios from "axios";


const Dashboard = () => {
    // useEffect(() => {
    //     getProductById();
    // }, []);

    // const getProductById = async () => {
    //     const response = await axios.get(`localhost:5001/users/${id}`);
    // }

    const { id } = useParams();
    return(<div>
        <nav><a href="/">Logout</a></nav>
        {/* <CourseList user={id}/> */}
        <h1>Yoohoo.</h1>
    </div>)
}

export default Dashboard;