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
        <Link to={{
          pathname: '/SearchHouses',
          search: `?town=${value}&flatModel=${proCount}&priceRange=${pricing}&flatType=${noofbedroom}`
        }}>
        <button className="exploreSearch" onClick={() => onSearch(value)}><FontAwesomeIcon icon={faSearch} size="2x"/>
       </button></Link>

       <div className="ddown-parameters">
      <select className="proCount" value={proCount} onChange={(e) => setProCount(e.target.value)}>
        <option className='searchPropertyType' value="">Property Type</option>
        <option value="2-room">2-room</option>
        <option value="3Gen">3Gen</option>
        <option value="Adjoined flat">Adjoined flat</option>
        <option value="Apartment">Apartment</option>
        <option value="DBSS">DBSS</option>
        <option value="Improved">Improved</option>
        <option value="Improved-Maisonette">Improved-Maisonette</option>
        <option value="Maisonette">Maisonette</option>
        <option value="Model A">Model A</option>
        <option value="Model A2">Model A2</option>
        <option value="Model A-Maisonette">Model A-Maisonette</option>
        <option value="Multi Generation">Multi Generation</option>
        <option value="New Generation">New Generation</option>
        <option value="Premium Apartment">Premium Apartment</option>
        <option value="Premium Apartment Loft">Premium Apartment Loft</option>
        <option value="Premium Maisonette">Premium Maisonette</option>
        <option value="Simplified">Simplified</option>
        <option value="Standard">Standard</option>
        <option value="Terrace">Terrace</option>
        <option value="Type S1">Type S1</option>
        <option value="Type S2">Type S2</option>
      </select>
      <select className="pricing" value={pricing} onChange={(e) => setPricing(e.target.value)}>
        <option className='searchPricingType' value="">Any Price</option>
        <option value="range1">0 - 500,000</option>
        <option value="range2">500,000 - 1,000,000</option>
        <option value="range3">1,000,000 - 2,000,000</option>
      </select>
      <select className="bedroomCount" value={noofbedroom} onChange={(e) => setNoofBedroom(e.target.value)}>
        <option className='searchBedRoomType' value="">Bedroom</option>
        <option value="1 ROOM">1 ROOM</option>
        <option value="2 ROOM">2 ROOM</option>
        <option value="3 ROOM">3 ROOM</option>
        <option value="4 ROOM">4 ROOM</option>
        <option value="5 ROOM">5 ROOM</option>
        <option value="EXECUTIVE">EXECUTIVE</option>
        <option value="MULTI-GENERATION">MULTI-GENERATION</option>
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

