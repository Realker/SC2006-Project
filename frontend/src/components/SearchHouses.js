import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import APIService from './APIService'
import SearchHousesPageBG from "../images/SearchHousesPage.jpg"
import NavBar from './NavBar'
import '../css/SearchHouses.css';
//import Homepage from './components/Homepage';
//import Search from './components/Search';

const SearchHouses = () => {
  return (
   
    <div className = 'SearchHousesPageBg'>
       <NavBar/>
       <h1> Search Houses results</h1>
       
       <div class = 'SearchHousesCard'><h2> Location | Month | Block |Price | Floor area| ............................... </h2>
       <h3> *insert database for Datagov api here into a table*</h3>
 </div>
      
       <div class = 'SearchHousesCardContent'>
       

       </div>
       </div>
  )
}

export default SearchHouses