import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import APIService from './APIService'
import "../css/LoginRegister.css";
import btoBuilding from "../images/Housingbuilding.jpg";
import ResetPassword from './ResetPassword';
import { Link } from 'react-router-dom';
import TNC from './TNC';



function Login() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setLogin] = useState(true);
  const [error, setError] = useState(null);
  const [agree, setAgree] = useState(false);
  const [cookies, setCookie] = useCookies(['auth_token']);
  const navigate = useNavigate();
  const [linkTNC, setLinkTNC] = useState(false);

  //Terms & Conditions checkbox
  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
  }

  const loginBtn = () => {
    if (email.trim().length !== 0 && password.trim().length) {
      APIService.LoginUser(email, password)
        .then((response) => {
          if (response.non_field_errors) {
            console.log("Unable to authenticate with provided credentials.");
          }
          if (response.email == "Enter a valid email address.") {
            console.log("Enter a valid email address.");
          }
          if (response.token) {
            setCookie('token', response.token); // Save token in cookie
            console.log("Login successfully, created token.");
            //console.log(response.token); //For debugging
            navigate('homepage'); // Redirect to homepage
          }
          //console.log(response); //For debugging
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('Email And Password Are Not Set');
    }
  };

  const RegisterBtn = () => {

    if (email.trim().length !== 0 && password.trim().length) {
      APIService.RegisterUser(email, password, name)
        .then((response) => {
          if (response.email == "Enter a valid email address.") {
            console.log("Enter a valid email address.");
          }
          if (response.email == "user with this email already exists.") {
            console.log("User with this email already exists.");
          }
          if (response.password == "Ensure this field has at least 5 characters.") {
            console.log("Ensure password field has at least 5 characters.");
          }
          if (response.name) {
            console.log("Account created successfully. You may try logging in.");
            setLogin(true); //Directs user to login
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('Email And Password Are Not Set');
    }
  };


  return (

    <div className="LoginRegister-container">

      <div className="LoginRegister__content">

        <h1>{isLogin ? "Login" : "Register"}</h1>

        <div>
          <form>
            <b>Email</b>
            <input
              type="text"
              value={email}
              className=""
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            {isLogin ?
            ""
              :
              <><b>Username</b><input
              type="text"
              value={name}
              className=""
              placeholder="Username"
              onChange={(e) => setName(e.target.value)} /></>
            }
            <br></br>
            <b>Password</b>
            <input
              type="password"
              value={password}
              className=""
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>

          <div>
            {isLogin ? (
              <div>
                <button
                  className="btn btn-loginRegister-primary"
                  onClick={loginBtn}
                >
                  Login
                </button>
                <div className="LoginRegister__content__secondary-btns">
                  <button
                    className="btn btn-loginRegister-secondary"
                    onClick={() => setLogin(false)}
                  >
                    Register
                  </button>
                  <button
                    className="btn btn-forgetpass"
                    onClick={() => setLogin(false)}
                  >
                    <Link to ="/ResetPassword">Forget Password?</Link>
                  </button>
                </div>
              </div>
            ) : (

              <div>

                <div>
                  I accept the <label htmlFor="agree"><b><u><a href="#" onClick={() => setLinkTNC(true)}>Terms and Conditions</a></u></b></label>
                  <input type="checkbox" id="agree" onChange={checkboxHandler} />
                    <TNC trigger={linkTNC} setTrigger={setLinkTNC}>
                      <p><b>Terms & Conditions</b></p>
                    </TNC>
                </div>

                <button disabled={!agree}
                  className="btn1"
                  onClick={RegisterBtn}
                    >Register</button>

                <div className="LoginRegister__content__secondary-btns">
                  <button
                    className="btn btn-loginRegister-secondary"
                    onClick={() => setLogin(true)}
                    >Sign in instead</button>

                  <button
                    className="btn btn-forgetpass"
                    onClick={() => setLogin(false)}>
                    <Link to ="/ResetPassword">Forget Password?</Link>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="LoginRegister__image">
        <img src={btoBuilding} alt="HDB Buildings" />
      </div>
    </div>
  );
}

export default Login;