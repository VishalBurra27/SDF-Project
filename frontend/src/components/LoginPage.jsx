import { useState } from "react";
import React from "react";
import axios from 'axios';


const LoginPage = () => {
    const [contact, setContact] = useState({
        uname:"",
        pwrd:""
    });

    const [valid, setValid] = useState(false);
    
    function updateContact(event){
        event.preventDefault();
        const val = event.target.value;
        const n = event.target.name;

        setContact(prev => ({...prev, [n]:val})
        )
    }

    const Link = "/" + contact.uname + "/Dash"

    return(
        <div>
            <form>
                <h1> Hello, {contact.uname}. </h1>
                <input name="uname" onChange={updateContact} placeholder="Username." />
                <input type="password" name="pass" placeholder="Password" />
                
                <button onClick={e => {
                    e.preventDefault(); 
                setValid(async () => {
                        const res = await axios.get('localhost:5001/users');
                        const authorization = res.match(contact);
                        return authorization;
                        });
                    }}><a href={Link}>Login.</a></button>
            </form>
        </div>
    );
};

export default LoginPage;