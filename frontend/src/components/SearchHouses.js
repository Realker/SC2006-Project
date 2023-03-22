import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import APIService from './APIService'
import SearchHousesPageBG from "../images/SearchHousesPage.jpg"
import NavBar from './NavBar'
import '../css/SearchHouses.css';

const SearchHouses = () => {
  return (
   
    <div className = 'SearchHousesPageBg'>
       <NavBar/>
       
       <h1> Search Houses results</h1>

       <div class = 'SearchHousesCard'> </div>
      
       <div class = 'SearchHousesCardContent'></div>
       </div>
  )
}

export default SearchHouses