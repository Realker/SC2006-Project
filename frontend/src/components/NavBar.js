import React, {useState,useEffect} from 'react'
import {useCookies} from 'react-cookie';
import { NavLink, Link } from 'react-router-dom'
import '../css/NavBar.css';
const currentTab = ({ isActive }) => {
  return isActive
      ? "p-3 btn btn-light text-danger gap-3 d-flex align-items-center"
      : "p-3 btn btn-primary gap-3 d-flex align-items-center"
}

export default function NavBar() {
  // TODO : replace with currently authenticated user context
 
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

              {/* TODO : handle log out */}
              {/* Log Out */}
              <NavLink to="/" className="Logout">
                  
                  <span class = "Logout">Logout</span>
              </NavLink>
          </nav>
      </div>
  )
}
