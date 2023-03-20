import React from "react";

import '../css/Search.css';


const Search = () => {
  return (
    <div>
      { <div>
        {/* <SearchOutlinedIcon fontSize="large" /> */}
        <input placeholder="Search for Houses" />
        <button>Search</button>
      </div> }
    </div>
  );
};

export default Search;