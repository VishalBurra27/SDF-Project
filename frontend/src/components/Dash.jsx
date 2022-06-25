import { useParams } from "react-router-dom"
import CourseList from "./course";

const Dashboard = () => {
    const { id } = useParams();
    return(<div>
        <nav><a href="/">Logout</a></nav>
        <CourseList user={id}/>
    </div>)
}

export default Dashboard;