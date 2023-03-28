import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import APIService from './APIService'
import '../css/App.css';
import '../css/HomePage.css'
import NavBar from './NavBar';
import DivisionNavBar from './DivisionNavBar';
import Search from './Search';
import HDB from "../images/HDBMainpage.png"

// Add this import statement at the top of the Homepage.js file
//import Search from './Search';

// Replace the search section comment in the Homepage.js file
//<section className="search">
 // <Search />
//<section>
// Add this import statement at the top of the Homepage.js file


// Replace the navigation items comment in the Homepage.js file

const Homepage = () => {
    return (
      <>
          <div class = "HomePageBackground">
            <NavBar / > 
            <Search>
            </Search>
           123
          </div>

          <div class= "DivisionBackGround">
           <DivisionNavBar />
         
          </div>
      </>
    );
  };
  
  export default Homepage;



