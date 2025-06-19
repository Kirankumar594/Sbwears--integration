import React, { useState } from 'react';

const Dropdown = ({ options, placeholder = "Select..." }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select
      value={selectedOption}
      onChange={handleChange}
      className="w-full px-3 py-2 text-left border border-gray-300 rounded-md focus:outline-none "
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown; 