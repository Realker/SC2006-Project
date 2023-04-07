import React, { useState } from 'react';

const DropdownFilter = ({ options, onSelect }) => {
  return (
    <div>
      <label htmlFor="dropdown">  </label>
      <select id="dropdown" onChange={(e) => onSelect(e.target.value)}>
        <option value="">Choose</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownFilter;