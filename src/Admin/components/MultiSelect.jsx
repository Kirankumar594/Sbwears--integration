import React from "react";
import Select from "react-select";

const MultiSelect = ({ options }) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      padding: "2px",
      border: "1px solid gray", // Tailwind `border-gray-300`
      borderRadius: "0.375rem", // Tailwind `rounded-md`
      boxShadow: "none",
      "&:hover": {
        borderColor: "black", // Tailwind `border-indigo-500`
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "black", // Tailwind `bg-indigo-500`
      color: "white",
      borderRadius: "0.375rem", // Tailwind `rounded-md`
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "white",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "white",
      "&:hover": {
        backgroundColor: "black", // Tailwind `bg-indigo-600`
        color: "white",
      },
    }),
  };

  return (
    <div className="w-full">
      <Select
        options={options}
        isMulti
        styles={customStyles}
        placeholder="Select options"
      />
    </div>
  );
};

export default MultiSelect;
