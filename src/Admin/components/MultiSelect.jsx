import React from "react";
import Select from "react-select";

const MultiSelect = ({ options, value, onChange }) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      padding: "2px",
      border: "1px solid gray",
      borderRadius: "0.375rem",
      boxShadow: "none",
      "&:hover": {
        borderColor: "black",
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "black",
      color: "white",
      borderRadius: "0.375rem",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "white",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "white",
      "&:hover": {
        backgroundColor: "black",
        color: "white",
      },
    }),
  };

  const selected = options.filter((opt) => value.includes(opt.value));

  return (
    <div className="w-full">
      <Select
        isMulti
        options={options}
        value={selected}
        onChange={(selectedOptions) =>
          onChange(selectedOptions.map((opt) => opt.value))
        }
        styles={customStyles}
        placeholder="Select options"
      />
    </div>
  );
};

export default MultiSelect;
