import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import APIService from './APIService'
import "../css/LoginRegister.css";
import btoBuilding from "../images/Housingbuilding.jpg";



function Login() {
  
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setLogin] = useState(true);

  const loginBtn = () => {
    if (username.trim().length !== 0 && password.trim().length) {
      console.log("Username And Password Are Set");
    } else {
      console.log("Username And Password Are Not Set");
    }
  };

  const RegisterBtn = () => {
    if (username.trim().length !== 0 && password.trim().length !== 0) {
      console.log("Username and password are set");
    } else {
      console.log("Username and password are not set");
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
              value={username}
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
                  className="btn btn-primary btn-loginRegister-primary"
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
                  className="btn btn-primary btn-loginRegister-primary"
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