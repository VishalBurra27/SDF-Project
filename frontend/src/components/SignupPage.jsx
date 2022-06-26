
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [User, makeUser] = useState({
        name:"",
        email:"",
        username:"",
        password:""
    })
    //const history = useNavigate();
    
    function updateUser(event){
        event.preventDefault();
        const val = event.target.value;
        const n = event.target.name;

        makeUser(prev => ({...prev, [n]:val})
        )
    }

    async function saveUser (e) {
        // e.preventDefault();
        // await axios.post('localhost:5001/', User);
        // history.push("/");

        console.log(User);
    }

    return(
        <div>
            <form>
                <h1> Dive right in. </h1>
                <input name="name" onChange={updateUser} placeholder="Full Name." />
                <input name="email" onChange={updateUser} placeholder="Email." />
                <input name="username" onChange={updateUser} placeholder="Username." />
                <input name="password" onChange={updateUser} type="password"/>

                <button onClick={e => {saveUser(e);} }><a href="/">Submit.</a></button>
            </form>
        </div>
    );
};

export default SignupPage;