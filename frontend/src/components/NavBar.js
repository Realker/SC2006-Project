import React, {useState,useEffect} from 'react'
import {useCookies} from 'react-cookie';
import { NavLink, Link } from 'react-router-dom'
import '../css/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import '../css/FilterByParameters.css'
const currentTab = ({ isActive }) => {
  return isActive
      ? "p-3 btn btn-light text-danger gap-3 d-flex align-items-center"
      : "p-3 btn btn-primary gap-3 d-flex align-items-center"
}

export default function NavBar() {
  // TODO : replace with currently authenticated user context

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
          <nav class = "NavBar">
              {/* Logo */}
              <Link to="/Homepage" className= "Logo">
                  <p className='Logo'>HDBFinder</p>
              </Link>

              {/* Menu links */}
              <ul class = "NavBarLink">
                  <NavLink to="/ExploreHouses" className="NavBarLink">
                      
                      <li class = "NavBarLink">Explore</li>
                  </NavLink>
                  <NavLink to="/FAQ" className="NavBarLink">
                      
                      <li class = "NavBarLink">FAQ</li>
                  </NavLink>
                  <NavLink to="/MyActivities" className="NavBarLink">
                     
                      <li class = "NavBarLink">My Activities</li></NavLink>
                  <NavLink to={`/myaccount`} className="NavBarLink">

                      <li class = "NavBarLink">My Account</li></NavLink>
              </ul>
            
              <button className="btn notification-click" onClick={handleClick}><FontAwesomeIcon icon={faBell} size="2x"/></button>
                {isShowing && (
                <div className="notification-box">
                 <p>Notifications</p>
                <button onClick={handleClose}>Close</button>
                </div>
                )}


              {/* TODO : handle log out */}
              {/* Log Out */}
              <NavLink to="/" className="Logout">
                  
                  <span class = "Logout">Logout</span>
              </NavLink>
          </nav>
      </div>
  )
}
