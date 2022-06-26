import { useState } from "react";
import React from "react";
import axios from 'axios';


const LoginPage = () => {
    const [ID, setID] = useState({
        email:"",
        password:""
    });

    // const [valid, setValid] = useState(false);
    
    function updateID(event){
        event.preventDefault();
        const val = event.target.value;
        const n = event.target.name;

        setID(prev => ({...prev, [n]:val}))
    }

    

    return(
        <div>
            <form>
                <h1> Hello, {ID.uname}. </h1>
                <input name="email" onChange={updateID} placeholder="Email ID." />
                <input type="password" onChange={updateID} name="password" placeholder="Password" />
                
                <button onClick={console.log(ID)
                    //e => {
                    //e.preventDefault(); 
                    //axios.post('localhost:5001/login');
                    //}
                }
                ><a href="/Dash/-1">Login.</a></button>
            </form>
        </div>
    );
};

export default LoginPage;