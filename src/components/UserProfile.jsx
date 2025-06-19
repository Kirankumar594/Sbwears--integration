import { useState } from "react";
import React from 'react'

export default function UserProfile() { 
  const [selectedGender, setSelectedGender] = useState("Male");
const [isEditing, setIsEditing] = useState(false); // State to track editing mode
const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "akashg250804@gmail.com",
  contactNumber: "+918088133722",
  birthDate: { day: "", month: "", year: "" },
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};
const handleBirthDateChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      birthDate: {
        ...prev.birthDate,
        [name]: value,
      },
    }));
  };
return (
     

<div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl relative ">
          
          <button
            className="absolute top-4 right-4 p-2    "
            onClick={() => setIsEditing((prev) => !prev)}
          >
            <EditIcon />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
            <div>
              <label className="block text-sm mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                readOnly={!isEditing}
                className="w-full py-2  focus:outline-none border px-2  "
              />
            </div>

            
            <div>
              <label className="block text-sm mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                readOnly={!isEditing}
                className="w-full py-2 border px-2  focus:outline-none "
              />
            </div>
 
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                readOnly
                className="w-full py-2 border px-2  focus:outline-none "
              />
            </div>
 
            <div>
              <label className="block text-sm mb-2">Contact Number</label>
              <input
                type="tel"
                value={formData.contactNumber}
                readOnly
                className="w-full py-2 border px-2  focus:outline-none "
              />
            </div>
 
            <div>
              <label className="block text-sm mb-2">Birthdate</label>
              <div className="flex gap-4">
                <input
                  type="text"
                  name="day"
                  placeholder="DD"
                  value={formData.birthDate.day}
                  onChange={handleBirthDateChange}
                  readOnly={!isEditing}
                  className="w-20 border px-2  focus:outline-none "
                />
                <input
                  type="text"
                  name="month"
                  placeholder="MM"
                  value={formData.birthDate.month}
                  onChange={handleBirthDateChange}
                  readOnly={!isEditing}
                  className="w-20 p-3 border  focus:outline-none "
                />
                <input
                  type="text"
                  name="year"
                  placeholder="YYYY"
                  value={formData.birthDate.year}
                  onChange={handleBirthDateChange}
                  readOnly={!isEditing}
                  className="w-24 p-3 border  focus:outline-none "    
                />
              </div>
            <div>
              <label className="block text-sm mb-2">Gender</label>
              <div className="flex gap-4">
                <GenderButton
                  text="Male"
                  selected={selectedGender === "Male"}
                  onClick={() => isEditing && setSelectedGender("Male")}
                />
                <GenderButton
                  text="Female"
                  selected={selectedGender === "Female"}
                  onClick={() => isEditing && setSelectedGender("Female")}
                />
                <GenderButton
                  text="Other"
                  selected={selectedGender === "Other"}
                  onClick={() => isEditing && setSelectedGender("Other")}
                />
              </div>
            </div>
            </div>
 
          </div>
 
          {isEditing && (
            <button
              className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              onClick={() => setIsEditing(false)}
            >
              Save
            </button>
          )}
        </div> 
)
}

function GenderButton({ text, selected, onClick }) {
    return ( 
      <button
        className={`px-6 py-2 rounded-lg border ${
          selected
            ? "bg-blue-50 border-blue-500 text-blue-500"
            : "border-gray-300 text-gray-500"
        }`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
  
  function EditIcon() {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } 