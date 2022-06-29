
import React, { useState } from "react";
import "./Homepage.css"


export default function Homepage() {

    return(<div className="home">
        <h1>IITH ed-on</h1>
        <h2>Welcome to the EMS project.</h2>
        <p>
            Please Login to continue. If you do not have an account, please sign up.
        </p>
        <a href="/login/1">
            <button type="submit" width="100px"className="btn btn-primary btn-block mb-4">
                Login</button>
        </a>
        <a href="/signup/1">
            <button type="submit" width="100px"className="btn btn-primary btn-block mb-4">
                Sign up</button>
        </a>

        <p>If you are an instructor, please use these links.</p>
        <a href="/login/0">
            <button type="submit" width="100px"className="btn btn-primary btn-block mb-4">
                Login</button>
        </a>
        <a href="/signup/0">
            <button type="submit" width="100px"className="btn btn-primary btn-block mb-4">
                Sign up</button>
        </a>
        
        
    </div>);
}

