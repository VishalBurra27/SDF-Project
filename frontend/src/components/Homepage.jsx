
import React, { useState } from "react";

export default function Homepage() {

    return(<div>
        <h1>Homepage</h1>
        <h2>Welcome to the EMS project.</h2>
        Click on <a href="/login/1">Login</a> to continue. If you don't have an account, click on <a href="/signup/1">Signup</a> to create one.
        
        If you are an instructor, use these links instead: <p><a href="/login/0">Login</a></p> <p><a href="/signup/0">Signup</a></p>
        
        
        
    </div>);
}

