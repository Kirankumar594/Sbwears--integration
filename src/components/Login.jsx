import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function Login({setIsLoginOpen}) {
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

    // if (updatedOtp.join("").length === 4) {
    //   handleVerifyOtp();
    // }
  };

  const handleRequestOtp = async () => {
    if (mobileNumber.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsLoading(true);
    try { 
      const response = await axios.post(
        "https://sbwears.com/api/users/auth/request-otp",
        {
          phoneNumber: mobileNumber,
        }
      );
      console.log("response : ", response.data.otp);
      toast.success(`Your OTP ${response.data.otp}`);
      setShowOtpSection(true);
      setCountdown(10);
    } catch (error) {
      console.error("Error : " , error)
      toast.error("Failed to send OTP");
    } finally {
      setIsLoading(false);
    }
  };
  // console.log("otp : ", otp);
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
        "https://sbwears.com/api/users/auth/verify-otp",
        {
          phoneNumber: mobileNumber,
          otp: enteredOtp,
        }
      );
      console.log("reponse : ", response);
      localStorage.setItem("userToken", response.data.token);
      localStorage.setItem("userId", response.data.user._id);
      localStorage.setItem("userPhone", mobileNumber);

      // axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;

      toast.success("Login successful!");
      setIsLoginOpen(false)
      // navigate("/productsList");
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
      <ToastContainer />
      <div className="bg-white rounded-xl w-full max-w-md overflow-hidden shadow-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome</h2>
            <p className="text-gray-600">
              Enter your mobile number to continue
            </p>
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
                  isLoading || mobileNumber.length !== 10
                    ? "opacity-70 cursor-not-allowed"
                    : ""
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
