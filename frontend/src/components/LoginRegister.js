import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import APIService from './APIService'
import "../css/LoginRegister.css";
import btoBuilding from "../images/Housingbuilding.jpg";

function Login() {

  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setLogin] = useState(true);
  const [error, setError] = useState(null);

  const [cookies, setCookie] = useCookies(['auth_token']);
  const navigate = useNavigate();

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
      APIService.RegisterUser(email, password)
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
            <input
              type="text"
              value={email}
              className=""
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
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
                  onClick={loginBtn}
                  className="btn btn-loginRegister-primary"
                >
                  Login
                </button>
                <div className="LoginRegister__content__secondary-btns">
                  <button
                    onClick={() => setLogin(false)}
                    className="btn btn-loginRegister-secondary"
                  >
                    Register
                  </button>
                  <button
                    onClick={() => setLogin(false)}
                    className="btn btn-forgetpass"
                  >
                    Forget Password?
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <button
                  onClick={RegisterBtn}
                  className="btn btn-loginRegister-primary"
                >
                  Register
                </button>
                <div className="LoginRegister__content__secondary-btns">
                  <button
                    className="btn btn-loginRegister-secondary"
                    onClick={() => setLogin(true)}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setLogin(false)}
                    className="btn btn-forgetpass"
                  >
                    Forget Password?
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