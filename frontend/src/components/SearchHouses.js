import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import APIService from './APIService'
import '../css/App.css';
import SearchHousesPageBG from "../images/SearchHousesPage.jpg"
import NavBar from './NavBar';
import Search from '../css/SearchHouses.css';
const SearchHouses = () => {
  return (
   
    <div className = 'SearchHousesPageBg'>
       <NavBar/> 
       <h1> Search Houses results</h1>
       </div>
  )
}

export default SearchHouses