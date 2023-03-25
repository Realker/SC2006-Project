import React, { useState } from 'react'
import '../css/Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
var data = require("./Data/TOWN_DATA.json");

export default function Search() {
  const [value, setValue] = useState("");
 
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
        <button onClick={() => onSearch(value)}><FontAwesomeIcon icon={faSearch} size="2x"/>
       </button>
       
      </div>


      <div className="dropdown">
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
           className="dropdown-row"
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

