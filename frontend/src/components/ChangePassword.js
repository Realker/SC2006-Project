import React, { useState, Component } from 'react';
import NavBar from './NavBar'
import APIService from './APIService'
import HDB from '../images/HDBFAQ.jpg'
import '../css/ChangePassword.css';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import DivisionNavBar from './DivisionNavBar';

const ChangePassword = () => {

    const [changed, setChanged] = useState(false);
    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);

    const [validOldPassword, setValidOldPassword] = useState(true);

    const [oldName, setOldName] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [oldEmail, setOldEmail] = useState('');

    function getCookie(name) {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
          return cookie.substring(name.length + 1);
        }
      }
      return null;
    }
    const userToken = getCookie('token');

    APIService.RetrieveUserDetails(userToken)
    .then((response) => {
      setOldName(response.name);
      setOldEmail(response.email);
    })
    .catch((error) => {
      console.log(error);
    });

    const [newName, setNewName] = useState(oldName);
    const [newPassword, setNewPassword] = useState(oldPassword);
    const [newConfPassword, setNewConfPassword] = useState(oldPassword);
    const [newEmail, setNewEmail] = useState(oldEmail);

    const confirmChange = () => {
        APIService.LoginUser(oldEmail, oldPassword)
        .then((response) => {
            if (response.non_field_errors) {
            console.log("Unable to authenticate with provided credentials.");
            setValidOldPassword(false);
            //setIsNoCred(true);
            }
            if (response.token) {
            console.log("Correct Old Password");
            setValidOldPassword(true);
            }
            else {setChanged(false);}
        })
        .catch((error) => {
            console.log(error);
        });

        if (oldPassword == "" || newPassword == "" || newConfPassword == "")
        {
          setChanged(false);
          setError1(true);
          setError2(false);
        }

        if (validOldPassword && newPassword == newConfPassword && newPassword)
        {
            APIService.ChangeUserPassword(userToken, newPassword)
            .then((response) => {
              setChanged(true);
              setError1(false);
              setError2(false);
            })
            .catch((error) => {
              console.log(error);
            });
        }
        else if (newPassword != newConfPassword)
        {
            setChanged(false);
            setError1(false);
            setError2(true);
            console.log("Passwords do not match. Reconfirm.")
        }

    }

    return (
        <div className="ChangePasswordBackground">
            <NavBar/>



            <div className='ChangePassword__bg'>
                <h1>Change Password</h1>

                <div className='ChangePasswordCard'>
                <div className='ChangePassword-container'>
                <p class="short-text">Enter a new password (longer than 5 characters) into the fields below.</p>
                <br />
                <div>
                <form>
                    <b>Old Password</b>
                    <input
                        type="password"
                        value={oldPassword}
                        className=""
                        placeholder="Password"
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <b>New Password</b>
                    <input
                        type="password"
                        value={newPassword}
                        className=""
                        placeholder="Password"
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <b>Confirm Password</b>
                    <input
                        type="password"
                        value={newConfPassword}
                        className=""
                        placeholder="Password"
                        onChange={(e) => setNewConfPassword(e.target.value)}
                    />

                </form>
                </div>

                <div>
                {/* Once user successfully changed password, Reroute back to homepage */}
                <button
                    onClick={confirmChange}
                    className="btn btn-CP-primary"
                    > Confirm Change Password
                </button>
                </div>
                <br></br>
                <div className = "changedMessage">
                    {changed ?
                    (
                        <div>
                        User details successfully changed.
                        </div>
                    )
                    :
                    (
                        <div>

                        </div>
                    )}
                </div>
                <div className = "errorMessage">
                    {error1 ?
                    (
                        <div>
                        All fields need to be filled to confirm profile updates.
                        </div>
                    )
                    :
                    (
                        <p />
                    )}
                </div>
                <div className = "errorMessage">
                    {validOldPassword ?
                    (
                        <div>

                        </div>
                    )
                    :
                    (
                        <div>
                        Incorrect old password. Please re-enter.
                        </div>
                    )}
                </div>
                <div className = "errorMessage">
                    {error2 ?
                    (
                        <div>
                        New passwords do not match.
                        </div>
                    )
                    :
                    (
                        <p />
                    )}
                </div>

                </div>
                </div>


            </div>

        </div>
    )
}


export default ChangePassword;