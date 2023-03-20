import React, {useState,useEffect} from 'react'
import {useCookies} from 'react-cookie';
import { NavLink, Link } from 'react-router-dom'
import ExploreHouses from './ExploreHouses';
import FAQ from './FAQ';
import MyAccount from './MyAccount';
import MyActivities from './MyActivities';
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
              <Link to="/">
                  <span>
                      
                      <span><strong>HDB</strong>Finder</span>
                  </span>
              </Link>

              {/* Menu links */}
              <ul class = "NavBarLink">
                  <NavLink to="/ExploreHouses" className={currentTab}>
                      
                      <li class = "NavBarLink">Explore</li>
                  </NavLink>
                  <NavLink to="/FAQ" className={currentTab}>
                      
                      <li class = "NavBarLink">FAQ</li>
                  </NavLink>
                  <NavLink to="/MyActivities" className={currentTab}>
                     
                      <li class = "NavBarLink">My Activities</li></NavLink>
                  <NavLink to={`/user`} className={currentTab}>

                      <li class = "NavBarLink">My Account</li></NavLink>
              </ul>

              {/* TODO : handle log out */}
              {/* Log Out */}
              <NavLink to="/" className="mt-auto mb-sm-5 py-3 btn btn-primary text-danger gap-3 d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-door-closed" viewBox="0 0 16 16">
                      <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z" />
                      <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
                  </svg>
                  <span class = "Logout">Log Out</span>
              </NavLink>
          </nav>
      </div>
  )
}
