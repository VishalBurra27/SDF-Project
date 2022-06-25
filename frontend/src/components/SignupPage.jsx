
import { useState } from "react";
import React from "react";

const SignupPage = () => {
    const [contact, setContact] = useState({
        fname:"",
        lname:"",
        email:""
    });
    
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
                <h1> Hello, {contact.fname} {contact.lname}. </h1>
                <input name="fname" onChange={updateContact} placeholder="First Name." />
                <input name="lname" onChange={updateContact} placeholder="Last name." />
                <input name="email" onChange={updateContact} placeholder="Email." />

                <button onClick={e => {e.preventDefault(); console.log("Password generated.")}}>Submit.</button>
            </form>
        </div>
    );
};

export default SignupPage;