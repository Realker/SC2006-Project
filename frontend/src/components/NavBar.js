import React, {useState,useEffect} from 'react'
import {useCookies} from 'react-cookie';
import { NavLink, Link } from 'react-router-dom'



const currentTab = ({ isActive }) => {
  return isActive
      ? "p-3 btn btn-light text-danger gap-3 d-flex align-items-center"
      : "p-3 btn btn-primary gap-3 d-flex align-items-center"
}

export default function NavBar() {
  // TODO : replace with currently authenticated user context
 

 

  return (
      <div className="col-auto bg-primary">
          <nav className="px-sm-auto vh-100 sticky-top d-flex flex-column align-items-center">
              {/* Logo */}
              <Link to="/">
                  <span className="my-5 d-flex align-items-center gap-3 text-light">
                      
                      <span className="fs-3 d-sm-inline d-none"><strong>HDB</strong>Finder</span>
                  </span>
              </Link>

              {/* Menu links */}
              <ul id="menu" className="gap-2 nav d-flex flex-column align-items-stretch text-light">
                  <NavLink to="/my_groups" className={currentTab}>
                      
                      <li className="d-sm-inline d-none">Explore</li>
                  </NavLink>
                  <NavLink to="/find_groups" className={currentTab}>
                      
                      <li className="d-sm-inline d-none">FAQ</li>
                  </NavLink>
                  <NavLink to="/study_areas" className={currentTab}>
                     
                      <li className="d-sm-inline d-none">My Activities</li></NavLink>
                  <NavLink to={`/user`} className={currentTab}>

                      <li className="d-sm-inline d-none">My Account</li></NavLink>
              </ul>

              {/* TODO : handle log out */}
              {/* Log Out */}
              <NavLink to="/" className="mt-auto mb-sm-5 py-3 btn btn-primary text-danger gap-3 d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-door-closed" viewBox="0 0 16 16">
                      <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z" />
                      <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
                  </svg>
                  <span className="d-sm-inline d-none">Log Out</span>
              </NavLink>
          </nav>
      </div>
  )
}
