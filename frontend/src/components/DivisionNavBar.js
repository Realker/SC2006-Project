import React, {useState,useEffect} from 'react'
import {useCookies} from 'react-cookie';
import { NavLink, Link } from 'react-router-dom'
import '../css/DivisionNavBar.css';
import '../css/FilterByParameters.css'

const currentTab = ({ isActive }) => {
  return isActive
      ? "p-3 btn btn-light text-danger gap-3 d-flex align-items-center"
      : "p-3 btn btn-primary gap-3 d-flex align-items-center"
}

export default function DivisonNavBar() {
  // TODO : replace with currently authenticated user context

  return (

      <div>
          <nav class = "DivisionNavBar">
              {/* Menu links */}
              <ul class = "DivisionNavBarLink">
                  <NavLink to="/AUP" className="divisonLink">
                      
                      <li class = "divisonLink">Accepted Used Policy</li>
                  </NavLink>
                  <NavLink to="/TOS" className="divisonLink">
                      
                      <li class = "divisonLink">Terms of Services</li>
                  </NavLink>
                  <NavLink to="/PrivacyPolicy" className="divisonLink">
                     
                      <li class = "divisonLink">Privacy Policy</li></NavLink>
                      
                      <p>@ 2023 HDBFinder</p>

              </ul>
          </nav>
          
      </div>
  )
}
