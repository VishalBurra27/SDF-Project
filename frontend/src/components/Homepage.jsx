
import React, { useState } from "react";

export default function Homepage() {

    return(<div>
        <h1>Homepage</h1>
        <h2>Welcome to the EMS project.</h2>
        Click on Login to continue. If you don't have an account, click on Signup to create one.
        
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
        
        
    </div>);
}

