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
        <h1>HDB Finder</h1>
        <p> Enter the email address associated with your account and we'll send you a link to reset your password.</p>
        <br></br>

        <div>
        <form> Email
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
          <p> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
             Don't have an account? <Link to="/">Sign up</Link></p>
        </div>
      </div>
     // </div>
  );
}

export default ResetPassword

  // </div>