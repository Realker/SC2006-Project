import React from "react";

import '../css/Search.css';


const Search = () => {
  return (
    <div class = 'container'>
      { <div class = 'searchContainer'>
        {/* <SearchOutlinedIcon fontSize="large" /> */}
        <input class = 'searchInput' placeholder="Search for Houses by location..." />
        <button class = 'button'> Search</button>
      </div> }
    </div>
  );
};

export default Search;