import React, { useState } from 'react'
import '../css/Search.css';
var data = require("./TOWN_DATA.json");

export default function Search() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log('search ', searchTerm);
  };

  return (
    <div className="Search">
      
      <div className="search-container">
      <h3>Search for houses...</h3>
        <div className="search-inner">
          
        <input type="text" value={value} onChange={onChange}/>
          
        <button onClick={() => onSearch(value)}>Search</button>
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

