import React, {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import APIService from './APIService'
import '../css/FilterByParameters.css'
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';

//FBPBackground = FilterByParametersBackGround
const FilterByParameters = () => {

  const [propertyType, setPropertyType] = useState('');
  const [bedroomCount, setBedroomCount] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [locationType, setLocationType] = useState('');

  //Testing in progress
  const search = () => {
    // Filter search results based on selected filter values
    // ...
  };

  return (
    <div class = "FBPBackground">
    <NavBar/> 

      <div className="second-nav">
        <a href="/Homepage"><FontAwesomeIcon icon={faHome} className="homeicon"/></a>&nbsp;&nbsp;
        <FontAwesomeIcon icon={faChevronRight} className="arrow-right"/>&nbsp;&nbsp;Check Pricing
      </div>

    <div className="filter-parameters">
      <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
        <option value="">Property Type</option>
        <option value="apartment">Apartment</option>
        <option value="condo">Condominium</option>
        <option value="landed">Landed</option>
        <option value="hdb">HDB</option>
      </select>
      <select value={bedroomCount} onChange={(e) => setBedroomCount(e.target.value)}>
        <option value="">No. of Bedrooms</option>
        <option value="1 bedroom">1 bedroom</option>
        <option value="2 bedrooms">2 bedrooms</option>
        <option value="3 bedrooms">3 bedrooms</option>
        <option value="4 bedrooms">4 bedrooms</option>
        <option value="5 bedrooms">5 bedrooms</option>
      </select>
      <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
        <option value="">Any Price</option>
        <option value="0-500000">0 - 500,000</option>
        <option value="500000-1000000">500,000 - 1,000,000</option>
        <option value="1000000-2000000">1,000,000 - 2,000,000</option>
      </select>
      <select value={locationType} onChange={(e) => setLocationType(e.target.value)}>
        <option value="">Location</option>
        <option value="sengkang">Sengkang</option>
        <option value="tampines">Tampines</option>
        <option value="jurong">Jurong</option>
      </select>

      &nbsp;<button className="filterButton">Search</button> 
      
      
    </div>
  </div>

  )
}

export default FilterByParameters;