import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import APIService from './APIService'
import '../css/RegisterPage.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


 const ResetPassword = () => {

  const [email, setEmail] = useState("nyanmawhtun@gmail.com");
  console.log(email);


  const confirmReset = () => {
    APIService.ResetPasswordAPI(email)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    }


  return (

    //<div class = "ResetPasswordBackground">
      <div className="ResetPassword-container">

        <div className="ResetPassword__content">
        <h1>Reset Password</h1>
        <p class="short-text"> Enter your email address to verify your credentials.</p>
        <br></br>

        <div>
        <form>
          Email
          <input
            type="text"
            value={email}
            className=""
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
        </div>

          <div>
            <NavLink to="/ResetPasswordSent" className="">
              <button className="btn btn-resetPassword-primary"
                      onClick={confirmReset}>
                Continue
              </button>
            </NavLink>
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