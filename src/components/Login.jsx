// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import whiteLogo from "../components/Assets/logo_white_exact.png";
// import "react-toastify/dist/ReactToastify.css";

// function Login() {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(true);
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [otp, setOtp] = useState(["", "", "", ""]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [countdown, setCountdown] = useState(0);
//   const [showOtpSection, setShowOtpSection] = useState(false);

//   // Countdown timer effect
//   useEffect(() => {
//     let timer;
//     if (countdown > 0) {
//       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//     }
//     return () => clearTimeout(timer);
//   }, [countdown]);

//   const handleMobileNumberChange = (e) => {
//     const value = e.target.value.replace(/\D/g, "");
//     setMobileNumber(value);
//   };

//   const handleOtpChange = (index, value) => {
//     if (!/^\d*$/.test(value)) return;
//     const updatedOtp = [...otp];
//     updatedOtp[index] = value;
//     setOtp(updatedOtp);

//     // Auto focus next input
//     if (value && index < otp.length - 1) {
//       document.getElementById(`otp-${index + 1}`).focus();
//     }

//     // Auto submit when all digits are entered
//     if (updatedOtp.join("").length === 4) {
//       handleVerifyOtp();
//     }
//   };

// const handleRequestOtp = async () => {
//   if (mobileNumber.length !== 10) {
//     toast.error("Please enter a valid 10-digit mobile number");
//     return;
//   }

//   setIsLoading(true);
//   try {
//     const response = await axios.post("http://localhost:3000/api/users/auth/request-otp", {
//       phoneNumber: mobileNumber,
//     });

//     if (response?.data?.otp) {
//       toast.success(`OTP sent successfully: ${response.data.otp}`);
//       setShowOtpSection(true); // ✅ This must run
//       setCountdown(120);
//     } else {
//       toast.error("Failed to send OTP. Try again.");
//     }
//   } catch (error) {
//     console.error("OTP request error:", error);
//     toast.error(error.response?.data?.error || "Failed to send OTP");
//   } finally {
//     setIsLoading(false);
//   }
// };


//   const handleVerifyOtp = async () => {
//     const enteredOtp = otp.join("");
//     if (enteredOtp.length !== 4) {
//       toast.error("Please enter a 4-digit OTP");
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/users/auth/verify-otp",
//         {
//           phoneNumber: mobileNumber,
//           otp: enteredOtp,
//         }
//       );

//       // Store token and user data
//       localStorage.setItem("userToken", response.data.token);
//       localStorage.setItem("userPhone", mobileNumber);

//       // Set default auth header for future requests
//       axios.defaults.headers.common[
//         "Authorization"
//       ] = `Bearer ${response.data.token}`;

//       toast.success("Login successful!");
//       setIsOpen(false);
//       navigate("/"); // Redirect to home or dashboard
//     } catch (error) {
//       console.error("OTP verification error:", error);
//       toast.error(
//         error.response?.data?.error || "Invalid OTP. Please try again."
//       );
//       // Clear OTP fields on error
//       setOtp(["", "", "", ""]);
//       document.getElementById("otp-0").focus();
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     if (countdown > 0) return;
//     await handleRequestOtp();
//   };

//   const modalContent = isOpen && (
//     <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
//       <div className="bg-white rounded-3xl w-full max-w-4xl overflow-hidden relative shadow-2xl transform transition-all duration-500 ease-in-out hover:shadow-3xl">
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 transition-colors duration-300"
//         >
//           <svg
//             className="w-8 h-8"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>

//         <div className="flex flex-col md:flex-row h-full">
//           {/* Left Side - Branding */}
//           <div className="bg-gradient-to-br from-purple-800 to-indigo-900 p-10 text-white md:w-1/2 flex flex-col justify-between">
//             <div className="flex flex-col items-center">
//               <img
//                 src={whiteLogo}
//                 alt="SB WEARS Logo"
//                 className="h-40 mb-4 transform hover:scale-105 transition-transform duration-500 text-black"
//               />
//               <p className="font-serif text-2xl mb-10 tracking-wider text-black">
//                 SB WEARS
//               </p>
//             </div>
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-black">
//                 Welcome to SB WEARS! <br />
//                 Register to unlock premium benefits.
//               </h2>
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <span className="text-yellow-300 text-3xl ">★</span>
//                   <div>
//                     <h3 className="font-bold text-xl text-black">
//                       Zero Subscription
//                     </h3>
//                     <p className="text-sm opacity-90 text-black">
//                       Premium access with no hidden charges
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <span className="text-yellow-300 text-3xl ">★</span>
//                   <div>
//                     <h3 className="font-bold text-xl text-black">
//                       Exclusive Prices
//                     </h3>
//                     <p className="text-sm opacity-90 text-black">
//                       Unbeatable prices for premium members
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <span className="text-yellow-300 text-3xl ">★</span>
//                   <div>
//                     <h3 className="font-bold text-xl text-black">
//                       100% Secure
//                     </h3>
//                     <p className="text-sm opacity-90 text-black">
//                       Military-grade data protection
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Form */}
//           <div className="p-10 md:w-1/2 flex flex-col justify-center">
//             <div className="text-center mb-10">
//               <h2 className="text-3xl font-bold mb-2 text-gray-800">
//                 Welcome Back
//               </h2>
//               <h3 className="text-2xl font-bold mb-4 text-purple-700">
//                 Unlock Your Account
//               </h3>
//               <p className="text-gray-600">
//                 Enter your mobile number to continue
//               </p>
//             </div>

//             <div className="space-y-6">
//               <div className="relative">
//                 <input
//                   type="tel"
//                   placeholder="Enter Mobile Number"
//                   value={mobileNumber}
//                   onChange={handleMobileNumberChange}
//                   className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-300 transition-all duration-300"
//                   maxLength={10}
//                   disabled={showOtpSection}
//                 />
//                 {mobileNumber.length === 10 && !showOtpSection && (
//                   <button
//                     onClick={handleRequestOtp}
//                     disabled={isLoading}
//                     className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300 ${
//                       isLoading ? "opacity-70 cursor-not-allowed" : ""
//                     }`}
//                   >
//                     {isLoading ? "Sending..." : "Get OTP"}
//                   </button>
//                 )}
//               </div>

//               {showOtpSection && (
//                 <div className="transition-opacity duration-500 ease-in-out opacity-100">
//                   <p className="text-gray-600 mb-4 text-center">
//                     Enter the 4-digit OTP sent to +91 {mobileNumber}
//                   </p>
//                   <div className="flex justify-center space-x-3 mb-4">
//                     {otp.map((digit, index) => (
//                       <input
//                         key={index}
//                         id={`otp-${index}`}
//                         type="tel"
//                         value={digit}
//                         onChange={(e) => handleOtpChange(index, e.target.value)}
//                         className="w-16 h-16 text-2xl text-center border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-300 transition-all duration-300"
//                         maxLength={1}
//                       />
//                     ))}
//                   </div>
//                   <div className="text-center">
//                     {countdown > 0 ? (
//                       <p className="text-gray-500">
//                         Resend OTP in {Math.floor(countdown / 60)}:
//                         {String(countdown % 60).padStart(2, "0")}
//                       </p>
//                     ) : (
//                       <button
//                         onClick={handleResendOtp}
//                         className="text-purple-600 hover:text-purple-800 font-medium transition-colors duration-300"
//                       >
//                         Resend OTP
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               )}

//               <div className="pt-4">
//                 <p className="text-xs text-gray-500 text-center">
//                   By continuing, you agree to SB WEARS's{" "}
//                   <a
//                     href="/privacy-policy"
//                     className="text-purple-600 hover:underline"
//                   >
//                     Privacy Policy
//                   </a>{" "}
//                   and{" "}
//                   <a href="/terms" className="text-purple-600 hover:underline">
//                     Terms & Conditions
//                   </a>
//                   .
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return ReactDOM.createPortal(modalContent, document.body);
// }

// export default Login;
// // import React, { useState, useEffect, useRef } from "react";
// // import ReactDOM from "react-dom";
// // import axios from "axios";
// // import { toast } from "react-toastify";
// // import { useNavigate } from "react-router-dom";
// // import whiteLogo from "../components/Assets/logo_white_exact.png";
// // import "react-toastify/dist/ReactToastify.css";

// // function Login() {
// //   const navigate = useNavigate();
// //   const [isOpen, setIsOpen] = useState(true);
// //   const [mobileNumber, setMobileNumber] = useState("");
// //   const [otp, setOtp] = useState(["", "", "", ""]);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [countdown, setCountdown] = useState(0);
// //   const [showOtpSection, setShowOtpSection] = useState(false);
// //   const otpRefs = useRef([]);

// //   // Countdown timer effect
// //   useEffect(() => {
// //     let timer;
// //     if (countdown > 0) {
// //       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
// //     }
// //     return () => clearTimeout(timer);
// //   }, [countdown]);

// //   const handleMobileNumberChange = (e) => {
// //     const value = e.target.value.replace(/\D/g, "").slice(0, 10);
// //     setMobileNumber(value);
// //   };

// //   const handleOtpChange = (index, value) => {
// //     if (!/^\d?$/.test(value)) return; // Allow only single digit or empty
// //     const updatedOtp = [...otp];
// //     updatedOtp[index] = value;
// //     setOtp(updatedOtp);

// //     // Move to next input if a digit is entered
// //     if (value && index < otp.length - 1) {
// //       otpRefs.current[index + 1].focus();
// //     }
// //     // Move to previous input on Backspace if empty
// //     // if (!value && index > 0 && e.nativeEvent.inputType === "deleteContentBackward") {
// //     //   otpRefs.current[index - 1].focus();
// //     // }
// //   };

// //   const handlePaste = (e) => {
// //     const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4);
// //     if (pastedData.length === 4) {
// //       setOtp(pastedData.split(""));
// //       otpRefs.current[3].focus();
// //     }
// //   };

// //   const handleRequestOtp = async () => {
// //     if (mobileNumber.length !== 10) {
// //       toast.error("Please enter a valid 10-digit mobile number");
// //       return;
// //     }

// //     setIsLoading(true);
// //     try {
// //       const response = await axios.post("http://localhost:3000/api/users/auth/request-otp", {
// //         phoneNumber: mobileNumber,
// //       });

// //       if (response.data.success) {
// //         toast.success("OTP sent successfully to your mobile number");
// //         setShowOtpSection(true); // Show OTP section on successful response
// //         setCountdown(120);
// //         setOtp(["", "", "", ""]);
// //         otpRefs.current[0].focus();
// //       } else {
// //         toast.error("Failed to send OTP. Please try again.");
// //       }
// //     } catch (error) {
// //       console.error("OTP request error:", error);
// //       toast.error(error.response?.data?.error || "Failed to send OTP. Please try again.");
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleVerifyOtp = async () => {
// //     const enteredOtp = otp.join("");
// //     if (enteredOtp.length !== 4) {
// //       toast.error("Please enter a 4-digit OTP");
// //       return;
// //     }

// //     setIsLoading(true);
// //     try {
// //       const response = await axios.post("http://localhost:3000/api/users/auth/verify-otp", {
// //         phoneNumber: mobileNumber,
// //         otp: enteredOtp,
// //       });

// //       // Store token in localStorage
// //       localStorage.setItem("userToken", response.data.token);
// //       // Avoid storing sensitive data like phone number in localStorage
// //       axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;

// //       toast.success("Login successful!");
// //       setIsOpen(false);
// //       navigate("/"); // Redirect to home or dashboard
// //     } catch (error) {
// //       console.error("OTP verification error:", error);
// //       toast.error(error.response?.data?.error || "Invalid OTP. Please try again.");
// //       setOtp(["", "", "", ""]);
// //       otpRefs.current[0].focus();
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleResendOtp = async () => {
// //     if (countdown > 0) return;
// //     await handleRequestOtp();
// //   };

// //   const handleCloseModal = () => {
// //     setIsOpen(false);
// //     navigate("/"); // Redirect to home page on close
// //   };

// //   const modalContent = isOpen && (
// //     <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
// //       <div className="bg-white rounded-3xl w-full max-w-4xl overflow-hidden relative shadow-2xl transform transition-all duration-500 ease-in-out hover:shadow-3xl">
// //         <button
// //           onClick={handleCloseModal}
// //           className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 transition-colors duration-300"
// //         >
// //           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               d="M6 18L18 6M6 6l12 12"
// //             />
// //           </svg>
// //         </button>

// //         <div className="flex flex-col md:flex-row h-full">
// //           {/* Left Side - Branding */}
// //           <div className="bg-gradient-to-br from-purple-800 to-indigo-900 p-10 text-white md:w-1/2 flex flex-col justify-between">
// //             <div className="flex flex-col items-center">
// //               <img
// //                 src={whiteLogo}
// //                 alt="SB WEARS Logo"
// //                 className="h-40 mb-4 transform hover:scale-105 transition-transform duration-500"
// //               />
// //               <p className="font-serif text-2xl mb-10 tracking-wider">SB WEARS</p>
// //             </div>
// //             <div>
// //               <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
// //                 Welcome to SB WEARS! <br />
// //                 Register to unlock premium benefits.
// //               </h2>
// //               <div className="space-y-6">
// //                 <div className="flex items-start space-x-4">
// //                   <span className="text-yellow-300 text-3xl">★</span>
// //                   <div>
// //                     <h3 className="font-bold text-xl">Zero Subscription</h3>
// //                     <p className="text-sm opacity-90">Premium access with no hidden charges</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-start space-x-4">
// //                   <span className="text-yellow-300 text-3xl">★</span>
// //                   <div>
// //                     <h3 className="font-bold text-xl">Exclusive Prices</h3>
// //                     <p className="text-sm opacity-90">Unbeatable prices for premium members</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-start space-x-4">
// //                   <span className="text-yellow-300 text-3xl">★</span>
// //                   <div>
// //                     <h3 className="font-bold text-xl">100% Secure</h3>
// //                     <p className="text-sm opacity-90">Military-grade data protection</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Side - Form */}
// //           <div className="p-10 md:w-1/2 flex flex-col justify-center">
// //             <div className="text-center mb-10">
// //               <h2 className="text-3xl font-bold mb-2 text-gray-800">Welcome Back</h2>
// //               <h3 className="text-2xl font-bold mb-4 text-purple-700">Unlock Your Account</h3>
// //               <p className="text-gray-600">Enter your mobile number to continue</p>
// //             </div>

// //             <div className="space-y-6">
// //               <div className="relative">
// //                 <input
// //                   type="tel"
// //                   placeholder="Enter Mobile Number"
// //                   value={mobileNumber}
// //                   onChange={handleMobileNumberChange}
// //                   className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-300 transition-all duration-300"
// //                   maxLength={10}
// //                   disabled={isLoading || showOtpSection}
// //                 />
// //                 {mobileNumber.length === 10 && !showOtpSection && (
// //                   <button
// //                     onClick={handleRequestOtp}
// //                     disabled={isLoading}
// //                     className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300 ${
// //                       isLoading ? "opacity-70 cursor-not-allowed" : ""
// //                     }`}
// //                   >
// //                     {isLoading ? "Sending..." : "Get OTP"}
// //                   </button>
// //                 )}
// //               </div>

// //               {showOtpSection && (
// //                 <div className="transition-opacity duration-500 ease-in-out opacity-100">
// //                   <p className="text-gray-600 mb-4 text-center">
// //                     Enter the 4-digit OTP sent to +91 {mobileNumber}
// //                   </p>
// //                   <div className="flex justify-center space-x-3 mb-4">
// //                     {otp.map((digit, index) => (
// //                       <input
// //                         key={index}
// //                         ref={(el) => (otpRefs.current[index] = el)}
// //                         type="tel"
// //                         value={digit}
// //                         onChange={(e) => handleOtpChange(index, e.target.value)}
// //                         onPaste={handlePaste}
// //                         className="w-16 h-16 text-2xl text-center border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-300 transition-all duration-300"
// //                         maxLength={1}
// //                         disabled={isLoading}
// //                       />
// //                     ))}
// //                   </div>
// //                   <button
// //                     onClick={handleVerifyOtp}
// //                     disabled={isLoading || otp.join("").length !== 4}
// //                     className={`w-full bg-purple-600 text-white p-4 rounded-xl hover:bg-purple-700 transition-colors duration-300 ${
// //                       isLoading || otp.join("").length !== 4 ? "opacity-70 cursor-not-allowed" : ""
// //                     }`}
// //                   >
// //                     {isLoading ? "Verifying..." : "Verify OTP"}
// //                   </button>
// //                   <div className="text-center mt-4">
// //                     {countdown > 0 ? (
// //                       <p className="text-gray-500">
// //                         Resend OTP in {Math.floor(countdown / 60)}:
// //                         {String(countdown % 60).padStart(2, "0")}
// //                       </p>
// //                     ) : (
// //                       <button
// //                         onClick={handleResendOtp}
// //                         className="text-purple-600 hover:text-purple-800 font-medium transition-colors duration-300"
// //                         disabled={isLoading}
// //                       >
// //                         Resend OTP
// //                       </button>
// //                     )}
// //                   </div>
// //                 </div>
// //               )}

// //               <div className="pt-4">
// //                 <p className="text-xs text-gray-500 text-center">
// //                   By continuing, you agree to SB WEARS's{" "}
// //                   <a href="/privacy-policy" className="text-purple-600 hover:underline">
// //                     Privacy Policy
// //                   </a>{" "}
// //                   and{" "}
// //                   <a href="/terms" className="text-purple-600 hover:underline">
// //                     Terms & Conditions
// //                   </a>.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   return ReactDOM.createPortal(modalContent, document.body);
// // }

// // export default Login;
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { toast , ToastContainer} from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [showOtpSection, setShowOtpSection] = useState(false);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleMobileNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setMobileNumber(value);
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }

    if (updatedOtp.join("").length === 4) {
      handleVerifyOtp();
    }
  };

  const handleRequestOtp = async () => {
    if (mobileNumber.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call - replace with your actual API endpoint
      const response = await axios.post("http://localhost:3000/api/users/auth/request-otp", {
        phoneNumber: mobileNumber,
      });
      console.log("response : " , response.data.otp)
      toast.success(`Your OTP ${response.data.otp}`);
      setShowOtpSection(true);
      setCountdown(10);
    } catch (error) {
      toast.error("Failed to send OTP");
    } finally {
      setIsLoading(false);
    }
  };
  console.log("otp : " , otp)
  const handleVerifyOtp = async () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 4) {
      toast.error("Please enter a 4-digit OTP");
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call - replace with your actual API endpoint
      const response = await axios.post(
        "http://localhost:3000/api/users/auth/verify-otp",
        {
          phoneNumber: mobileNumber,
          otp: enteredOtp,
        }
      );
      console.log("reponse : " , response)
      localStorage.setItem("userToken", response.data.token);
      localStorage.setItem("userId", response.data.user._id);
      localStorage.setItem("userPhone", mobileNumber);
      
      // axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
      
      toast.success("Login successful!");
      navigate("/productsList");
      // window.location.href("/")
    } catch (error) {
      toast.error("Invalid OTP. Please try again.");
      setOtp(["", "", "", ""]);
      document.getElementById("otp-0").focus();
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = () => {
    if (countdown > 0) return;
    setShowOtpSection(false);
    setOtp(["", "", "", ""]);
    setCountdown(0);
  };

  const modalContent = isOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
      <ToastContainer/>
      <div className="bg-white rounded-xl w-full max-w-md overflow-hidden shadow-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome</h2>
            <p className="text-gray-600">Enter your mobile number to continue</p>
          </div>

          <div className="space-y-6">
            <div>
              <input
                type="tel"
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                maxLength={10}
                disabled={showOtpSection}
              />
            </div>

            {!showOtpSection && (
              <button
                onClick={handleRequestOtp}
                disabled={isLoading || mobileNumber.length !== 10}
                className={`w-full py-3 px-4 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors ${
                  (isLoading || mobileNumber.length !== 10) ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Sending OTP..." : "Get OTP"}
              </button>
            )}

            {showOtpSection && (
              <div className="animate-fade-in">
                <p className="text-gray-600 mb-4 text-center">
                  OTP sent to +91 {mobileNumber}
                </p>
                
                <div className="flex justify-between space-x-3 mb-6">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="tel"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      className="w-16 h-16 text-2xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      maxLength={1}
                    />
                  ))}
                </div>

                <button
                  onClick={handleVerifyOtp}
                  disabled={isLoading}
                  className={`w-full py-3 px-4 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors ${
                    isLoading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Verifying..." : "Verify OTP"}
                </button>

                <div className="text-center mt-4">
                  {countdown > 0 ? (
                    <p className="text-gray-500">
                      Resend OTP in {Math.floor(countdown / 60)}:
                      {String(countdown % 60).padStart(2, "0")}
                    </p>
                  ) : (
                    <button
                      onClick={handleResendOtp}
                      className="text-gray-700 hover:text-black font-medium"
                    >
                      Resend OTP
                    </button>
                  )}
                </div>
              </div>
            )}

            <p className="text-xs text-gray-500 text-center mt-6">
              By continuing, you agree to our Terms and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}

export default Login;