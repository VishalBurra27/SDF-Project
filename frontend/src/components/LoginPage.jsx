import { useState } from "react";
import React from "react";

const LoginPage = () => {
    const [contact, setContact] = useState({
        uname:"",
        pwrd:""
    });
    
    function updateContact(event){
        event.preventDefault();
        const val = event.target.value;
        const n = event.target.name;

        setContact(prev => ({...prev, [n]:val})
        )
    }

    function Auth(e){
        e.preventDefault();
        const res = await https.get('localhost:5001');
        res.match(contact);
    }

    const Link = "/" + contact.uname + "/Dash"

    return(
        <div>
            <form>
                <h1> Hello, {contact.uname}. </h1>
                <input name="uname" onChange={updateContact} placeholder="Username." />
                <input name="pass" value='*' placeholder="Password" />
                
                <button onClick={e => Auth(e)}><a href={Link}>Login.</a></button>
            </form>
        </div>
    );
};

export default LoginPage;