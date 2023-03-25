import React, {useState,useEffect} from 'react'
import '../css/Testt.css';
var data = require("./Data/TOWN_DATA.json");

export default function Testt() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6'
  ];

  const handleCheckboxChange = (event) => {
    const option = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option));
    }
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredOptions = options.filter((option) => option.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" value={searchValue} onChange={handleSearchChange} />
      <br />
      <label>Options:</label>
      <br />
      {filteredOptions.map((option) => (
        <div key={option}>
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={handleCheckboxChange}
          />
          {option}
        </div>
      ))}
      <p>You selected: {selectedOptions.join(', ')}</p>
    </div>
  );
}
