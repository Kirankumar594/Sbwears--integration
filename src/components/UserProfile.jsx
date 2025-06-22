// import { useState } from "react";
// import React from "react";

// export default function UserProfile() {
//   const [selectedGender, setSelectedGender] = useState("Male");
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "akashg250804@gmail.com",
//     contactNumber: "+918088133722",
//     birthDate: { day: "", month: "", year: "" },
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };
//   const handleBirthDateChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       birthDate: {
//         ...prev.birthDate,
//         [name]: value,
//       },
//     }));
//   };
//   return (
//     <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl relative ">
//       <button
//         className="absolute top-4 right-4 p-2    "
//         onClick={() => setIsEditing((prev) => !prev)}
//       >
//         <EditIcon />
//       </button>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm mb-2">First Name</label>
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleInputChange}
//             readOnly={!isEditing}
//             className="w-full py-2  focus:outline-none border px-2  "
//           />
//         </div>

//         <div>
//           <label className="block text-sm mb-2">Last Name</label>
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleInputChange}
//             readOnly={!isEditing}
//             className="w-full py-2 border px-2  focus:outline-none "
//           />
//         </div>

//         <div>
//           <label className="block text-sm mb-2">Email</label>
//           <input
//             type="email"
//             value={formData.email}
//             readOnly
//             className="w-full py-2 border px-2  focus:outline-none "
//           />
//         </div>

//         <div>
//           <label className="block text-sm mb-2">Contact Number</label>
//           <input
//             type="tel"
//             value={formData.contactNumber}
//             readOnly
//             className="w-full py-2 border px-2  focus:outline-none "
//           />
//         </div>

//         <div>
//           <label className="block text-sm mb-2">Birthdate</label>
//           <div className="flex gap-4 sm:flex-row flex-col">
//             <input
//               type="text"
//               name="day"
//               placeholder="DD"
//               value={formData.birthDate.day}
//               onChange={handleBirthDateChange}
//               readOnly={!isEditing}
//               className="w-full border p-3  focus:outline-none "
//             />
//             <input
//               type="text"
//               name="month"
//               placeholder="MM"
//               value={formData.birthDate.month}
//               onChange={handleBirthDateChange}
//               readOnly={!isEditing}
//               className="w-full p-3 border  focus:outline-none "
//             />
//             <input
//               type="text"
//               name="year"
//               placeholder="YYYY"
//               value={formData.birthDate.year}
//               onChange={handleBirthDateChange}
//               readOnly={!isEditing}
//               className="w-full p-3 border  focus:outline-none "
//             />
//           </div>
//           <div>
//             <label className="block text-sm mt-5 mb-2">Gender</label>
//             <div className="flex gap-4 sm:flex-row flex-col">
//               <GenderButton
//                 text="Male"
//                 selected={selectedGender === "Male"}
//                 onClick={() => isEditing && setSelectedGender("Male")}
//               />
//               <GenderButton
//                 text="Female"
//                 selected={selectedGender === "Female"}
//                 onClick={() => isEditing && setSelectedGender("Female")}
//               />
//               <GenderButton
//                 text="Other"
//                 selected={selectedGender === "Other"}
//                 onClick={() => isEditing && setSelectedGender("Other")}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {isEditing && (
//         <button
//           className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
//           onClick={() => setIsEditing(false)}
//         >
//           Save
//         </button>
//       )}
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

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
  
export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dob: { day: "", month: "", year: "" },
    gender: "",
    shippingDetails: {
      firstName: "",
      lastName: "",
      addressL1: "",
      addressL2: "",
      company: "",
      phoneNumber: "",
      city: "",
      postalCode: "",
      country: "India",
      province: "Andaman and Nicobar Islands"
    }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        // const userId = "68554e45ca949721a71c9373";
        if (!userId) {
          throw new Error("User ID not found");
        }

        const response = await axios.get(`https://sbwears.com/api/users/user/${userId}`); 
        const userData = response.data;
        console.log("userData : " , userData)
        // Format date for display
        let formattedDob = { day: "", month: "", year: "" };
        if (userData.dob) {
          const dobDate = new Date(userData.dob);
          formattedDob = {
            day: dobDate.getDate().toString(),
            month: (dobDate.getMonth() + 1).toString(),
            year: dobDate.getFullYear().toString()
          };
        }

        setFormData({
          firstName: userData.firstName || "",
          lastName: userData.lastName || "",
          email: userData.email || "",
          phoneNumber: userData.phoneNumber || "",
          dob: userData.dob,
          gender: userData.gender || "Male",
          shippingDetails: userData.shippingDetails || {
            firstName: "",
            lastName: "",
            addressL1: "",
            addressL2: "",
            company: "",
            phoneNumber: "",
            city: "",
            postalCode: "",
            country: "India",
            province: "Andaman and Nicobar Islands"
          }
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      shippingDetails: {
        ...prev.shippingDetails,
        [name]: value
      }
    }));
  };

  const handleBirthDateChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      dob: {
        ...prev.dob,
        [name]: value
      }
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      // const userId = localStorage.getItem("userId");
      // const userId = "68554e45ca949721a71c9373";
      const userId = localStorage.getItem("userId");
      if (!userId) {
        throw new Error("User ID not found");
      }

      // Prepare data for backend
      const updateData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        dob: formData.dob,
        gender: formData.gender,
        shippingDetails: formData.shippingDetails
      };
      // if(formData.dob.day )

      const res = await axios.post("https://sbwears.com/api/users/update/user", {
        userId,
        ...updateData
      });

      setIsEditing(false);
      toast.success("Profile Updated Successfully")
      console.log("res : " , res)
      // Optionally show success message
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl relative">
      <ToastContainer/>
      <button
        className="absolute top-4 right-4 p-2"
        onClick={() => setIsEditing(prev => !prev)}
      >
        <EditIcon />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Info */}
        <div>
          <label className="block text-sm mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData?.firstName}
            onChange={handleInputChange}
            readOnly={!isEditing}
            className="w-full py-2 border px-2 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData?.lastName}
            onChange={handleInputChange}
            readOnly={!isEditing}
            className="w-full py-2 border px-2 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData?.email}
            onChange={handleInputChange}
            readOnly={!isEditing}
            className="w-full py-2 border px-2 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Contact Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData?.phoneNumber}
            readOnly
            className="w-full py-2 border px-2 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Birthdate</label>
          <div className="flex gap-4 sm:flex-row flex-col">
            <input
              type="text"
              name="day"
              placeholder="DD"
              value={formData?.dob?.day}
              onChange={handleBirthDateChange}
              readOnly={!isEditing}
              className="w-full border p-3 focus:outline-none"
            />
            <input
              type="text"
              name="month"
              placeholder="MM"
              value={formData?.dob?.month}
              onChange={handleBirthDateChange}
              readOnly={!isEditing}
              className="w-full p-3 border focus:outline-none"
            />
            <input
              type="text"
              name="year"
              placeholder="YYYY"
              value={formData?.dob?.year}
              onChange={handleBirthDateChange}
              readOnly={!isEditing}
              className="w-full p-3 border focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mt-5 mb-2">Gender</label>
          <div className="flex gap-4 sm:flex-row flex-col">
            <GenderButton
              text="Male"
              selected={formData?.gender === "Male"}
              onClick={() => isEditing && setFormData(prev => ({ ...prev, gender: "Male" }))}
            />
            <GenderButton
              text="Female"
              selected={formData?.gender === "Female"}
              onClick={() => isEditing && setFormData(prev => ({ ...prev, gender: "Female" }))}
            />
            <GenderButton
              text="Other"
              selected={formData?.gender === "Other"}
              onClick={() => isEditing && setFormData(prev => ({ ...prev, gender: "Other" }))}
            />
          </div>
        </div>

        {isEditing && (
          <button
            className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        )}
      </div>
    </div>
  );
}