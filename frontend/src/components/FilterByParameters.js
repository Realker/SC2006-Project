//This js includes rechoose parameters
import React, { useState } from 'react';

import '../css/FilterByParameters.css';
import DropdownFilter from './Dropdown';

const FilterByParameters = () => {
  
    const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (optionValue) => {
    setSelectedOption(optionValue);
    // Do something with the selected option
  };

  const option1 = ['1', '2', '3'];

  const option2 = ['A', 'B', 'C'];

  const option3 = ['Highest', 'Lowest'];

  return (
    <div>
      <h1>Filter by Parameter</h1>
      <h2>Number of Bedrooms: </h2>
      <DropdownFilter options={option1} onSelect={handleSelect} />
      <p>Selected option: {selectedOption}</p>

      <h2>Flat Model: </h2>
      <DropdownFilter options={option2} onSelect={handleSelect} />
      <p>Selected option: {selectedOption}</p>

      <h2>Street Name: </h2>
      <input class = 'searchInput' placeholder="Enter Street Name..."/>

      <h2>Block Number: </h2>
      <input class = 'searchInput' placeholder="Enter Block Number..."/>

      <h2>Floor Area (Sqm): </h2>
      <input class = 'searchInput' placeholder="Enter Floor Area..."/>

      <h2>Years of Lease Left: </h2>
      <input class = 'searchInput' placeholder="Enter Years of Lease Left..."/>


      <h2>Sort Price: </h2>
      <DropdownFilter options={option3} onSelect={handleSelect} />
      <p>Selected option: {selectedOption}</p>
    </div>
  );

}

export default FilterByParameters