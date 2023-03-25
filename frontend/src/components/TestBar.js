import React, {useState,useEffect} from 'react'
import {useCookies} from 'react-cookie';
import { NavLink, Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import '../css/Testt.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import '../css/FilterByParameters.css'


//CurrentTab
const currentTab = ({ isActive }) => {
  return isActive
      ? "p-3 btn btn-light text-danger gap-3 d-flex align-items-center"
      : "p-3 btn btn-primary gap-3 d-flex align-items-center"
}

export default function TestBar() {
  // TODO : replace with currently authenticated user context
  
  //MyAccount Bar
 
  //Notification Bar
  const [isShowing, setIsShowing] = useState(false);

  const handleClick = () => {
    setIsShowing(true);
  };

  const handleClose = () => {
    setIsShowing(false);
  };
  //
 
  return (

      <div>
          <nav class = "TestBar">
              {/* Logo */}
              <Link to="/Homepage" className= "Logo">
                  <p className='Logo'>HDBFinder</p>
              </Link>

              {/* Menu links */}
              <ul class = "TestBarLink">
                  <NavLink to="/ExploreHouses" className="TestBarLink">
                      
                      <li class = "NavBarLink">Explore</li>
                  </NavLink>
                  <NavLink to="/FAQ" className="TestBarLink">
                      
                      <li class = "TestBarLink">FAQ</li>
                  </NavLink>
                  <NavLink to="/MyActivities" className="TestBarLink">
                     
                      <li class = "TestBarLink">My Activities</li></NavLink>
                 
              </ul>
            
              <button className="btn notification-click" onClick={handleClick}><FontAwesomeIcon icon={faBell} size="2x"/></button>
                {isShowing && (
                <div className="notification-box">
                    <p className="Bar-Notify">Notifications</p>
                <button onClick={handleClose}>X</button>
                
                </div>
                )}


              {/* TODO : handle log out */}
              {/* Log Out */}
             
            <NavDropdown title={<span><FontAwesomeIcon icon={faUser} size="1x"></FontAwesomeIcon>&nbsp;&nbsp;My Account</span>} 
            className="dropdown-main" id="basic-nav-dropdown" >
                <NavDropdown.Item className="dropdown-item" as={NavLink} to="/MyAccount">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
                <NavDropdown.Item className="dropdown-item" as={NavLink} to="/ChangePassword">Change Password</NavDropdown.Item>
            <NavDropdown.Divider />
                <NavDropdown.Item className="dropdown-item" as={NavLink} to="/Articles">Articles</NavDropdown.Item>
            <NavDropdown.Divider />
                <NavDropdown.Item className="dropdown-item" as={NavLink} to="/">Logout</NavDropdown.Item>
            </NavDropdown>

          </nav>

        
      </div>
  )
}
