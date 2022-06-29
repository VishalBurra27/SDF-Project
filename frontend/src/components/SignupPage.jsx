
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';


const SignupPage = () => {
    const history = useNavigate();
    const { role } = useParams();
    const [User, makeUser] = useState({
        name:"",
        email:"",
        username:"",
        password:"",
        role: (role == 1? "Student" : "Instructor")
    })
    //const history = useNavigate();
    
    function updateUser(event){
        event.preventDefault();
        const val = event.target.value;
        const n = event.target.name;

        makeUser(prev => ({...prev, [n]:val}))
    }

    const saveUser = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/user', User);
        history.push("/");
    }

    return(
        <div>
            <form action="/signup">
                <h1> Dive right in. </h1>
                <input name="name" onChange={updateUser} placeholder="Full Name." />
                <input name="email" onChange={updateUser} placeholder="Email." />
                <input name="username" onChange={updateUser} placeholder="Username." />
                <input name="password" onChange={updateUser} type="password"/>

                <p><button onClick={e => saveUser(e) }><a href="/">Signup.</a></button></p>

            </form>
        </div>
    );
};

export default SignupPage;