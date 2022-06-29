
import { useState } from "react";
import React from "react";
import axios from "axios";
import { Link, Route, Router, Routes, useNavigate } from 'react-router-dom';
import "./SignupPage.css"

const SignupPage = () => {
    // const [contact, setContact] = useState({
    //     fname:"",
    //     lname:"",
    //     email:""
    // });

    // const [password, setPassword] = useState('');
    // const history = useNavigate();
    
    // function updateContact(event){
    //     event.preventDefault();
    //     const val = event.target.value;
    //     const n = event.target.name;

    //     setContact(prev => ({...prev, [n]:val})
    //     )
    // }

    // const saveProduct = async (e) => {
    //     e.preventDefault();
    //     await axios.post('localhost:5001/users', {
    //         contact: contact,
    //         password: password
    //     });
    //     history.push("/");
    // }

    return(
        
<section className="text-center text-lg-start">



  <div className="container py-4">
    <div className="row g-0 align-items-center">
      <div className="col-lg-6 mb-5 mb-lg-0">
        <div className="hicascading-right" style={{
            
            }}>
          <div className="card-body p-5 shadow-5 text-center">
            <h2 className="fw-bold mb-5">Sign up now</h2>
            <form>

              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="form3Example1" className="form-control" />
                    <label className="form-label" htmlFor="form3Example1">First name</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="form3Example2" className="form-control" />
                    <label className="form-label" htmlFor="form3Example2">Last name</label>
                  </div>
                </div>
              </div>

              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control" />
                <label className="form-label" htmlFor="form3Example3">Email address</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="form3Example4" className="form-control" />
                <label className="form-label" htmlFor="form3Example4">Password</label>
              </div>

              

              <button type="submit" className="btn btn-info btn-block mb-4">
                Sign up
              </button>


              <div className="text-center">
                <p>or sign up with:</p>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-google"></i>
                </button>
              </div>
              <div className="login">
                <p>Already have an account?</p>
                <a href="/login">
                  <button type="button" className="btn btn-info" >Login</button>
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

export default SignupPage;


