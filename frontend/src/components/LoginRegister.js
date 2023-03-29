import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import APIService from './APIService'
import "../css/LoginRegister.css";
import btoBuilding from "../images/Housingbuilding.jpg";
import ResetPassword from './ResetPassword';
import { Link } from 'react-router-dom';
import TNC from './TNC';
import TNCWriteup from './TNCWriteup';
//import ErrorMessage from './LoginErrorMsg';

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

  //Login or Register Error Messages
  const [isBadEmail, setIsBadEmail] = useState(false);
  const [isNoCred, setIsNoCred] = useState(false);
  const [isExistEmail, setIsExistEmail] = useState(false);
  const [isBadPass, setBadPass] = useState(false);
  const [isUnfilled, setUnfilled] = useState(false);

  //Terms & Conditions checkbox
  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
  }

  const loginBtn = () => {
    setIsBadEmail(false);
    setIsNoCred(false);
    setIsExistEmail(false);
    setBadPass(false);
    if (email.trim().length !== 0 && password.trim().length) {
      APIService.LoginUser(email, password)
        .then((response) => {
          if (response.non_field_errors) {
            console.log("Unable to authenticate with provided credentials.");
            setIsNoCred(true);
          }
          if (response.email == "Enter a valid email address.") {
            console.log("Enter a valid email address.");
            setIsBadEmail(true);
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
      console.log('Email and/or Password Are Not Set');
      setUnfilled(true);
    }
  };

  const RegisterBtn = () => {
    setIsBadEmail(false);
    setIsNoCred(false);
    setIsExistEmail(false);
    setBadPass(false);
    if (email.trim().length !== 0 && password.trim().length && name.trim().length !== 0) {
      APIService.RegisterUser(email, password, name)
        .then((response) => {
          console.log(response);
          if (response.email == "Enter a valid email address.") {
            console.log("Enter a valid email address.");
            setIsBadEmail(true);
          }
          if (response.email == "user with this email already exists.") {
            console.log("User with this email already exists.");
            setIsExistEmail(true);
          }
          if (response.password == "Ensure this field has at least 5 characters.") {
            console.log("Ensure password field has at least 5 characters.");
            setBadPass(true);
          }
          if (response.name == "Ensure this field has at least 5 characters.") {
            console.log("Ensure password field has at least 5 characters.");
            setBadPass(true);
          }
          if (response.name == name) {
            console.log("Account created successfully. You may try logging in.");
            setIsBadEmail(false);
            setIsNoCred(false);
            setIsExistEmail(false);
            setBadPass(false);
            setUnfilled(false);
            setLogin(true); //Directs user to login
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('Email, Username and/or Password Are Not Set');
      setUnfilled(true);
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
                    onClick={() => (  setLogin(false),
                                      setIsBadEmail(false),
                                      setIsNoCred(false),
                                      setIsExistEmail(false),
                                      setBadPass(false),
                                      setUnfilled(false))}
                  >
                    Register
                  </button>
                  <button
                    className="btn btn-forgetpass"
                    onClick={() => (  setLogin(false),
                                      setIsBadEmail(false),
                                      setIsNoCred(false),
                                      setIsExistEmail(false),
                                      setBadPass(false),
                                      setUnfilled(false))}
                  >
                    <Link to ="/ResetPassword">Forget Password?</Link>
                  </button>
                </div>
                <>
                  <div className = "errorMessage">
                    {isBadEmail ?
                      (
                        <div>
                          - Email format is invalid. Enter a valid email address.
                        </div>
                      )
                      :
                      (
                        <div>

                        </div>
                      )}
                  </div>
                  <div className = "errorMessage">
                    {isNoCred ?
                      (
                        <div>
                        - Unable to authenticate with provided credentials.
                        </div>
                      )
                      :
                      (
                        <div>

                        </div>
                      )}
                  </div>
                  <div className = "errorMessage">
                    {isExistEmail ?
                      (
                        <div>
                          - User with this email already exists.
                        </div>
                      )
                      :
                      (
                        <div>

                        </div>
                      )}
                  </div>
                  <div className = "errorMessage">
                    {isBadPass ?
                      (
                        <div>
                          - Ensure password field has at least 5 characters.
                        </div>
                      )
                      :
                      (
                        <div>

                        </div>
                      )}
                  </div>
                  <div className = "errorMessage">
                    {isUnfilled ?
                      (
                        <div>
                          - Ensure all fields are filled.
                        </div>
                      )
                      :
                      (
                        <div>

                        </div>
                      )}
                  </div>
                </>
              </div>
            ) : (

              <div>

                <div>
                  I accept the <label htmlFor="agree"><b><u><a href="#" onClick={() => setLinkTNC(true)}>Terms and Conditions</a></u></b></label>
                  <input type="checkbox" id="agree" onChange={checkboxHandler} />
                    <TNC trigger={linkTNC} setTrigger={setLinkTNC}>
                      <TNCWriteup/>
                    </TNC>
                </div>

                <button disabled={!agree}
                  className="btn1"
                  onClick={RegisterBtn}
                    >Register</button>

                <div className="LoginRegister__content__secondary-btns">
                  <button
                    className="btn btn-loginRegister-secondary"
                    onClick={() => (  setLogin(true),
                                      setIsBadEmail(false),
                                      setIsNoCred(false),
                                      setIsExistEmail(false),
                                      setBadPass(false),
                                      setUnfilled(false))}
                    >Sign in instead</button>

                  <button
                    className="btn btn-forgetpass"
                    onClick={() => setLogin(false)}>
                    <Link to ="/ResetPassword">Forget Password?</Link>
                  </button>
                </div>
                <>
                  <div className = "errorMessage">
                    {isBadEmail ?
                      (
                        <div>
                          - Email format is invalid. Enter a valid email address.
                        </div>
                      )
                      :
                      (
                        <div>

                        </div>
                      )}
                  </div>
                  <div className = "errorMessage">
                    {isNoCred ?
                      (
                        <div>
                          - Unable to authenticate with provided credentials.
                        </div>
                      )
                      :
                      (
                        <div>

                        </div>
                      )}
                  </div>
                  <div className = "errorMessage">
                    {isExistEmail ?
                      (
                        <div>
                          - User with this email already exists.
                        </div>
                      )
                      :
                      (
                        <div>

                        </div>
                      )}
                  </div>
                  <div className = "errorMessage">
                    {isBadPass ?
                      (
                        <div>
                          - Ensure password field has at least 5 characters.
                        </div>
                      )
                      :
                      (
                        <div>

                        </div>
                      )}
                  </div>
                  <div className = "errorMessage">
                    {isUnfilled ?
                      (
                        <div>
                          - Ensure all fields are filled.
                        </div>
                      )
                      :
                      (
                        <div>

                        </div>
                      )}
                  </div>
                </>

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