import React, {Component} from 'react';
import NavBar from './NavBar'
import HDB from '../images/HDBFAQ.jpg'
import '../css/ChangePassword.css';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import DivisionNavBar from './DivisionNavBar';

const ChangePassword = () => {
    return (
        <div className="ChangePasswordBackground">
            <NavBar/>

            {/* These code are for Home Icon > FAQ */}
            <div className="second-nav">
                <a href="/Homepage"><FontAwesomeIcon icon={faHome} className="homeicon"/></a>&nbsp;&nbsp;
                <FontAwesomeIcon icon={faChevronRight} className="arrow-right"/>&nbsp;&nbsp;Change Password
            </div>

            <div className='ChangePassword__bg'>
                <h1>Change Password</h1>

                <div className='ChangePasswordCard'>
                <div className='ChangePassword-container'>
                <p class="short-text">Enter a new password (longer than 5 characters) into the fields below. Do not reuse any old passwords.</p>
                <br />
                <div>
                <form>
                    <b>Old Password</b>
                    <input
                        type="password"
                        //value={password}
                        className=""
                        placeholder="Password"
                    />
                    <b>New Password</b>
                    <input
                        type="password"
                        //value={password}
                        className=""
                        placeholder="Password"
                    />
                    <b>Confirm Password</b>
                    <input
                        type="password"
                        //value={password}
                        className=""
                        placeholder="Password"
                    />

                </form>
                </div>

                <div>
                {/* Once user successfully changed password, Reroute back to homepage */}
                <Link to="/Homepage"><button
                    //onClick={loginBtn}
                    className="btn btn-CP-primary"
                    > Confirm Change Password
                </button></Link>
                </div>
                </div>
                </div>

                
            </div>

        </div>
    )
}


export default ChangePassword;