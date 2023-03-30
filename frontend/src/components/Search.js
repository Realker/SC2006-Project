import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../css/Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
var data = require("./Data/TOWN_DATA.json");

export default function Search() {
  const [value, setValue] = useState("");

    //For the search dropdown filter
  const [proCount, setProCount] = useState('');
  const [pricing, setPricing] = useState("");
  const [noofbedroom, setNoofBedroom] = useState("");

  const search = () => {
    // Filter search results based on selected filter values
    // ...
  };
 
  const onChange = (event) => {
    setValue(event.target.value);
  };

    // Function for dropdown inside the SearchBox
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log('search ', searchTerm);
  };

  return (
    <div className="Search">

      <div className="search-container">
      <h3>Search for houses... 
      </h3>

        <div className="search-inner">

        <span class="icon1"><FontAwesomeIcon icon={faMapMarkerAlt}/></span>

        <label htmlFor="search"></label>
        <input type="text" id="searchL" list="searchLocation" 
        placeholder="Search location" className="location-input" value={value} onChange={onChange}/>
        <Link to="/SearchHouses">
        <button className="exploreSearch" onClick={() => onSearch(value)}><FontAwesomeIcon icon={faSearch} size="2x"/>
       </button></Link>
        
       <div className="ddown-parameters">
      <select className="proCount" value={proCount} onChange={(e) => setProCount(e.target.value)}>
        <option className='searchPropertyType' value="">Property Type</option>
        <option value="condo">Condo</option>
        <option value="landed">Landed</option>
        <option value="hdb">HDB</option>
      </select>
      <select className="pricing" value={pricing} onChange={(e) => setPricing(e.target.value)}>
        <option className='searchPricingType' value="">Any Price</option>
        <option value="range1">0 - 500,000</option>
        <option value="range2">500,000 - 1,000,000</option>
        <option value="range3">1,000,000 - 2,000,000</option>
      </select>
      <select className="bedroomCount" value={noofbedroom} onChange={(e) => setNoofBedroom(e.target.value)}>
        <option className='searchBedRoomType' value="">Bedroom</option>
        <option value="roomw1">1</option>
        <option value="roomw2">2</option>
        <option value="roomw3">3</option>
        <option value="roomw4">4</option>
        <option value="roomw5">5</option>
      </select>
      </div>

      </div>

      <div className="searchbox-dropdown">
        {data.filter(item => {
          const searchTerm = value.toLowerCase();
          const town_name = item.town_name.toLowerCase();

          return (
          searchTerm && 
          town_name.startsWith(searchTerm) && 
          town_name !== searchTerm
          );
        }).slice(0,10)
        .map((item) => (
          <div 
           onClick={()=>onSearch(item.town_name)}
           className="searchbox-dropdownRow"
           key={item.town_name}
           >
            {item.town_name}   
        </div>
                
        ))}
      </div>
    </div>
  </div>
  )
}

