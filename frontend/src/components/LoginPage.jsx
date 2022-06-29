import { useState } from "react";

import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import './LoginPage.css';

const LoginPage = () => {
  const [ID, setID] = useState({
    email:"",
    password:""
});
const { role } = useParams();

// const [valid, setValid] = useState(false);

function updateID(event){
    event.preventDefault();
    const val = event.target.value;
    const n = event.target.name;

    setID(prev => ({...prev, [n]:val}))
}
var Link = "";

if(role==1)
{Link = "/StudentDash/"}
else{Link = "/FacultyDash/"}

console.log(Link)


    return(

        
<section className="text-center text-lg-start">
      
    


  <div className="container py-4">
    <div className="row g-0 align-items-center">
      <div className="col-lg-6 mb-5 mb-lg-0">
        <div className="cascading-right" >
          <div className="card-body p-5 shadow-5 text-center">
            <h2 className="fw-bold mb-5">Login</h2>
            
            <form>

              <div className="form-outline mb-4">
                <input name="email" onChange={updateID} placeholder="eg : abc123@gmail.com" type="email" id="form3Example3" className="form-control"/>
                <label className="form-label" htmlFor="form3Example3">Email address</label>
              </div>

              <div className="form-outline mb-4">
                <input onChange={updateID} name="password"  type="password" id="form3Example4" className="form-control" />
                <label className="form-label" htmlFor="form3Example4">Password</label>
              </div>

              

              <a href={Link + "-1"}>
              <button onClick={console.log(ID)
                //e => {
                //e.preventDefault(); 
                //axios.post('localhost:5001/login');
                //}
              } 
              type="submit" className="btn btn-info btn-block mb-4">
                Login
              </button>
                </a>
              


              <div className="text-center">
                <p>or sign up with:</p>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-google"></i>
                </button>

                
                
                <p>Don't have an account?</p>
                <a href={"/signup/" + role}>
                  <button type="button" className="btn btn-info" >Signup</button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0">
        <img src="https://i.pinimg.com/736x/23/1e/23/231e23bbfaad9a0c7afc9b83eb510ee5.jpg" className="w-100 rounded-4 shadow-4"/>
      </div>
    </div>
  </div>

</section>

    );
};

export default LoginPage;
