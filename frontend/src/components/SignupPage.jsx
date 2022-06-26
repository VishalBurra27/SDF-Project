
import { useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [contact, setContact] = useState({
        fname:"",
        lname:"",
        email:""
    });

    const [password, setPassword] = useState('');
    const history = useNavigate();
    
    function updateContact(event){
        event.preventDefault();
        const val = event.target.value;
        const n = event.target.name;

        setContact(prev => ({...prev, [n]:val})
        )
    }

    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('localhost:5001/', {
            contact: contact,
            password: password
        });
        history.push("/");
    }

    return(
        <div>
            <form>
                <h1> Hello, {contact.fname} {contact.lname}. </h1>
                <input name="fname" onChange={updateContact} placeholder="First Name." />
                <input name="lname" onChange={updateContact} placeholder="Last name." />
                <input name="email" onChange={updateContact} placeholder="Email." />
                <input name="pwrd" onChange={(e) => setPassword(prev => e.target.value)} type="password"/>

                <button onClick={e => {e.preventDefault(); saveProduct(e);} }>Submit.</button>
            </form>
        </div>
    );
};

export default SignupPage;