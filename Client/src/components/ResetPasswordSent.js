import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import APIService from './APIService'
import '../css/RegisterPage.css';
import { Link } from 'react-router-dom';


 const ResetPasswordSent = () => {
  return (

    //<div class = "ResetPasswordBackground">
      <div className="ResetPassword-container">

        <div className="ResetPassword__content">
        <h1>Reset Password</h1>
        <p class="short-text"> Password reset email has been sent.
        We’ve emailed you instructions for setting your password, if an account exists with the email you entered. You should receive them shortly.

        If you don’t receive an email, please make sure you’ve entered the address you registered with, and check your spam folder.
        </p>
        <br></br>

          <div>
            <Link to="/">
            <button
              //onClick={loginBtn}
              className="btn btn-resetPassword-primary"
            > Return to Login
            </button>
            </Link>
          </div>

          <br></br><br></br><br></br>

        </div>
      </div>
     // </div>
  );
}

export default ResetPasswordSent

  // </div>