import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import APIService from './APIService'
import '../css/FilterByParameters.css'
import NavBar from './NavBar';

//FBPBackground = FilterByParametersBackGround
const FilterByParameters = () => {


 

  return (
    <div class = "FBPBackground">
    <NavBar/> 
   
     </div>

  )
}

export default FilterByParameters