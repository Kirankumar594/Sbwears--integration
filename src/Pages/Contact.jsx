import React from "react"; 
import { useState } from "react";
export default function Contact() { 
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });
 
  const handleFocus = (field) => {
    setFocused((prevState) => ({
      ...prevState,
      [field]: true,
    }));
  };
 
  const handleBlur = (field) => {
    setFocused((prevState) => ({
      ...prevState,
      [field]: false,
    }));
  };
  return (
    <> 
        <div className="flex flex-col justify-center items-center p-10 mt-10">
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
          <p className="mb-7">Zivore Apparel Private Limited</p>
          <p className="mb-7">B 005, Sector 85,</p>
          <p className="mb-7">
            Noida, Gautam Buddha Nagar, Uttar Pradesh 201301
          </p>
          <p className="mb-7">
            {" "}
            <span className="font-semibold">CIN No. </span>{" "}
            U18109DL2022PTC397831
          </p>
          <p className="mb-7">
            {" "}
            <span className="font-semibold">Call us at: </span> +91 9899990772
          </p>
          <p className="mb-14">
            {" "}
            <span className="font-semibold">Write to us at: </span>{" "}
            care@libas.in
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <p className="text-lg"> CONTACT US</p>
        </div>
        <div className="flex justify-center items-center  ">
          <form className="bg-white p-6 rounded-lg   w-full sm:w-3/4 md:w-2/3 lg:w-1/2"> 
            <div className="grid grid-cols-1 gap-4"> 
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full py-2   border ${
                      focused.name
                        ? "bg-gray-200 border-black"
                        : "bg-white border-gray-300"
                    }`} 
                    onFocus={() => handleFocus("name")}
                    onBlur={() => handleBlur("name")}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full py-2 border ${
                      focused.email
                        ? "bg-gray-200 border-black"
                        : "bg-white border-gray-300"
                    }`} 
                    onFocus={() => handleFocus("email")}
                    onBlur={() => handleBlur("email")}
                  />
                </div>
              </div>
 
              <div>
                <label htmlFor="phone" className="block text-sm mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="text"
                  className={`w-full py-2 border  ${
                    focused.phone
                      ? "bg-gray-200 border-black"
                      : "bg-white border-gray-300"
                  }`} 
                  onFocus={() => handleFocus("phone")}
                  onBlur={() => handleBlur("phone")}
                />
              </div>
 
              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className={`w-full py-2  border ${
                    focused.message
                      ? "bg-gray-200 border-black"
                      : "bg-white border-gray-300"
                  }`} 
                  onFocus={() => handleFocus("message")}
                  onBlur={() => handleBlur("message")}
                />
              </div>
 
            </div>
              <div className="text-center ml-0 mt-4">
                <button className="bg-buttonColor text-white py-2 px-6">
                  SEND 
                </button>
              </div>
          </form>
        </div>
      
    </>
  );
}
