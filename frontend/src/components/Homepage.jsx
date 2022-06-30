
import React, { useState } from "react";
import "./Homepage.css"


export default function Homepage() {

    return(<div className="home">
        <h1>IITH ed-on</h1>
        <h2>Welcome to the EMS project.</h2>
        <p>
            Please Login to continue.
        </p>
        <a href="/login/1">
            <button type="submit" width="100px"className="btn btn-primary btn-block mb-4">
                Login</button>
        </a>

        <p>If you are an instructor, please use this link.</p>
        <a href="/login/0">
            <button type="submit" width="100px"className="btn btn-primary btn-block mb-4">
                Login</button>
        </a>
        
    </div>);
}

