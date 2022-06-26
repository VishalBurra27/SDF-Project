import { useState } from "react";
import React from "react";
import axios from 'axios';


const LoginPage = () => {
    const [contact, setContact] = useState({
        email:"",
        pwrd:""
    });

    // const [valid, setValid] = useState(false);
    
    function updateContact(event){
        event.preventDefault();
        const val = event.target.value;
        const n = event.target.name;

        setContact(prev => ({...prev, [n]:val})
        )
    }

    

    return(
        <div>
            <form>
                <h1> Hello, {contact.uname}. </h1>
                <input name="email" onChange={updateContact} placeholder="Email ID." />
                <input type="password" name="pass" placeholder="Password" />
                
                <button onClick={e => {
                    e.preventDefault(); 
                    axios.post('localhost:5001/login');
                    }}>Login.</button>
            </form>
        </div>
    );
};

export default LoginPage;