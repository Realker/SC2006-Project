import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import APIService from './APIService'
import '../css/RegisterPage.css';
import { Link } from 'react-router-dom';


 const ResetPassword = () => {
  return (

    //<div class = "ResetPasswordBackground">
      <div className="ResetPassword-container">

        <div className="ResetPassword__content">
        <h1>Reset Password</h1>
        <p class="short-text"> Enter your username and email address to verify your credentials</p>
        <br></br>

        <div>
        <form> 
          Username
          <input
            type="text" 
            //value={email}
            className=""
            placeholder=""
            //onChange={(e) => setUsername(e.target.value)}
          />
          Email
          <input
            type="text" 
            //value={email}
            className=""
            placeholder=""
            //onChange={(e) => setUsername(e.target.value)}
          />
        </form>
        </div>

          <div>
            <button
              //onClick={loginBtn}
              className="btn btn-resetPassword-primary"
            > Continue
            </button>
          </div>

          <br></br><br></br><br></br>
          <p class="short-text"> 
             Don't have an account? &nbsp; 
             <Link to="/">Sign up</Link></p>


        </div>
      </div>
     // </div>
  );
}

export default ResetPassword

  // </div>