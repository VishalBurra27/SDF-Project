
import { useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, Route, Router, Routes, useNavigate } from 'react-router-dom';
import "./SignupPage.css"

const SignupPage = () => {
  
    const [newUser, makeNewUser] = useState({
      name:String,
      username:String,
      email:String,
      password:String
    })
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

    const addInfo = (e) => {
      const val = e.target.value;
      const n = e.target.name;
      makeNewUser(prev => {
        return{
          ...prev,
          [n]: val
        }
      });
    }

      const { role } = useParams();
      const Link = role == 1? "/StudentDash/" : "/InstructorDash/";
      console.log(Link)
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
                    <input name="name" type="text" onChange={e => addInfo(e)} id="form3Example1" className="form-control" />
                    <label className="form-label" htmlFor="form3Example1">Full name</label>
                  </div>
                </div>
              </div>

              <div className="form-outline mb-4">
                <input type="email" name="email" onChange={e => addInfo(e)} id="form3Example2" className="form-control" />
                <label className="form-label" htmlFor="form3Example2">Email address</label>
              </div>

              <div className="form-outline mb-4">
                <input type="text" name="username" onChange={e => addInfo(e)} id="form3Example3" className="form-control" />
                <label className="form-label" htmlFor="form3Example3">Username</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" name="password" onChange={e => addInfo(e)} id="form3Example4" className="form-control" />
                <label className="form-label" htmlFor="form3Example4">Password</label>
              </div>

              
            <a href={Link + "-1"}>
              <button type="button" onClick={console.log(newUser)} className="btn btn-info btn-block mb-4">
                Sign up
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
              </div>
              <div className="login">
                <p>Already have an account?</p>
                <a href={"/login/" + role}>
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


