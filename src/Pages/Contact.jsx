// import React from "react"; 
// import { useState } from "react";
// export default function Contact() { 
//   const [focused, setFocused] = useState({
//     name: false,
//     email: false,
//     phone: false,
//     message: false,
//   });
 
//   const handleFocus = (field) => {
//     setFocused((prevState) => ({
//       ...prevState,
//       [field]: true,
//     }));
//   };
 
//   const handleBlur = (field) => {
//     setFocused((prevState) => ({
//       ...prevState,
//       [field]: false,
//     }));
//   };
//   return (
//     <> 
//         <div className="flex flex-col justify-center items-center p-10 ">
//           <p className="mb-7">NEED HELP?</p>

//           <p className="mb-7">
//             Have a question about your order or want to share feedback about our
//             products or services related query
//           </p>
//           <p className="mb-7">
//             Please reach out to our customer support via Call or Email, we’re
//             always happy to hear from you.
//           </p>
//           <p className="mb-7 font-semibold">Address</p>
//           <p className="mb-7">NEAR VINAYAKA THETRE, 2ND FLOOR, NO.27,179/2</p>
//           <p className="mb-7">Gottigere
//             Main Road, ABOVE TARA HOSPITAL</p>
//           <p className="mb-7"> 
//              Bengaluru, Bengaluru Urban
//             Karnataka, 560062
//           </p> 
//           <p className="mb-7">
//             {" "}
//             <span className="font-semibold">Call us at: </span> +91 9899990772
//           </p>
//           <p className="">
//             {" "}
//             <span className="font-semibold">Write to us at: </span>{" "}
//             care@sbwears.in
//           </p>
//         </div>
//         <div className="flex flex-col justify-center items-center ">
//           <p className="text-lg"> CONTACT US</p>
//         </div>
//         <div className="flex justify-center items-center  ">
//           <form className="bg-white p-6 rounded-lg   w-full sm:w-3/4 md:w-2/3 lg:w-1/2"> 
//             <div className="grid grid-cols-1 gap-4"> 
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="name" className="block text-sm mb-2">
//                     Name
//                   </label>
//                   <input
//                     id="name"
//                     type="text"
//                     className={`w-full py-2   border ${
//                       focused.name
//                         ? "bg-gray-200 border-black"
//                         : "bg-white border-gray-300"
//                     }`} 
//                     onFocus={() => handleFocus("name")}
//                     onBlur={() => handleBlur("name")}
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm mb-2">
//                     Email
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     className={`w-full py-2 border ${
//                       focused.email
//                         ? "bg-gray-200 border-black"
//                         : "bg-white border-gray-300"
//                     }`} 
//                     onFocus={() => handleFocus("email")}
//                     onBlur={() => handleBlur("email")}
//                   />
//                 </div>
//               </div>
 
//               <div>
//                 <label htmlFor="phone" className="block text-sm mb-2">
//                   Phone Number
//                 </label>
//                 <input
//                   id="phone"
//                   type="text"
//                   className={`w-full py-2 border  ${
//                     focused.phone
//                       ? "bg-gray-200 border-black"
//                       : "bg-white border-gray-300"
//                   }`} 
//                   onFocus={() => handleFocus("phone")}
//                   onBlur={() => handleBlur("phone")}
//                 />
//               </div>
 
//               <div>
//                 <label htmlFor="message" className="block text-sm mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="4"
//                   className={`w-full py-2  border ${
//                     focused.message
//                       ? "bg-gray-200 border-black"
//                       : "bg-white border-gray-300"
//                   }`} 
//                   onFocus={() => handleFocus("message")}
//                   onBlur={() => handleBlur("message")}
//                 />
//               </div>
 
//             </div>
//               <div className="text-center ml-0 mt-4">
//                 <button className="bg-buttonColor text-white py-2 px-6">
//                   SEND 
//                 </button>
//               </div>
//           </form>
//         </div>
      
//     </>
//   );
// }
// 📁 FRONTEND: Contact.js (Updated)

import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleFocus = (field) => {
    setFocused((prevState) => ({ ...prevState, [field]: true }));
  };
  const handleBlur = (field) => {
    setFocused((prevState) => ({ ...prevState, [field]: false }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://sbwears.com/api/users/contactus", formData);
      alert("Message sent successfully");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      alert("Failed to send message");
    }
  };

  return (
    <>
              <div className="flex flex-col justify-center items-center p-10 ">
          <p className="mb-7">NEED HELP?</p>

          <p className="mb-7">
            Have a question about your order or want to share feedback about our
            products or services related query
          </p>
          <p className="mb-7">
            Please reach out to our customer support via Call or Email, we’re
            always happy to hear from you.
          </p>
          <p className="mb-7 font-semibold">Address</p>
          <p className="mb-7">NEAR VINAYAKA THETRE, 2ND FLOOR, NO.27,179/2</p>
          <p className="mb-7">Gottigere
            Main Road, ABOVE TARA HOSPITAL</p>
          <p className="mb-7"> 
             Bengaluru, Bengaluru Urban
            Karnataka, 560062
          </p> 
          <p className="mb-7">
            {" "}
            <span className="font-semibold">Call us at: </span> +91 9899990772
          </p>
          <p className="">
            {" "}
            <span className="font-semibold">Write to us at: </span>{" "}
            care@sbwears.in
          </p>
        </div>

      <div className="flex flex-col justify-center items-center">
        <p className="text-lg"> CONTACT US</p>
      </div>
      <div className="flex justify-center items-center">
        <form
          className="bg-white p-6 rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full py-2 border ${
                    focused.name ? "bg-gray-200 border-black" : "bg-white border-gray-300"
                  }`}
                  onFocus={() => handleFocus("name")}
                  onBlur={() => handleBlur("name")}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full py-2 border ${
                    focused.email ? "bg-gray-200 border-black" : "bg-white border-gray-300"
                  }`}
                  onFocus={() => handleFocus("email")}
                  onBlur={() => handleBlur("email")}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm mb-2">Phone Number</label>
              <input
                id="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full py-2 border ${
                  focused.phone ? "bg-gray-200 border-black" : "bg-white border-gray-300"
                }`}
                onFocus={() => handleFocus("phone")}
                onBlur={() => handleBlur("phone")}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full py-2 border ${
                  focused.message ? "bg-gray-200 border-black" : "bg-white border-gray-300"
                }`}
                onFocus={() => handleFocus("message")}
                onBlur={() => handleBlur("message")}
                required
              />
            </div>
          </div>
          <div className="text-center ml-0 mt-4">
            <button className="bg-buttonColor text-white py-2 px-6" type="submit">
              SEND
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
