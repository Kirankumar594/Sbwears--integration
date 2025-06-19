import ReactDOM from "react-dom";
import { useState } from "react";
import whiteLogo from "../components/Assets/logo_white_exact.png";

function Login() {
  const [isOpen, setIsOpen] = useState(true);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleMobileNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setMobileNumber(value);
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Ensure only digits are entered
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Automatically focus the next input
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }

    // Close the modal when 4 digits are entered
    if (updatedOtp.join("").length === 4) {
      setIsOpen(false);
    }
  };

  const modalContent = isOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-3xl w-full max-w-4xl overflow-hidden relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="bg-purple p-8 text-white md:w-1/2">
            <div className="flex flex-col items-center">
              <img src={whiteLogo} alt="Libas Logo" className="h-32 mb-2" />
              <p className="font-serif text-xl mb-8">SB WEARS</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Welcome to SB WEARS! Register to avail the best deals!
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <span className="text-yellow-400 text-2xl">★</span>
                <div>
                  <h3 className="font-bold text-lg">Zero Subscription Fees</h3>
                  <p className="text-sm opacity-90">
                    Access without any subscription charges
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-yellow-400 text-2xl">★</span>
                <div>
                  <h3 className="font-bold text-lg">Lowest price guaranteed</h3>
                  <p className="text-sm opacity-90">
                    Explore unbeatable prices and unmatchable value
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-yellow-400 text-2xl">★</span>
                <div>
                  <h3 className="font-bold text-lg">100% secure & spam free</h3>
                  <p className="text-sm opacity-90">
                    Guaranteed data protection & spam-free inbox
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 md:w-1/2">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Unlock</h2>
              <h3 className="text-xl font-bold mb-4">Exclusive Discount</h3>
              <p className="text-gray-600">Enter Mobile Number</p>
            </div>
            <div className="space-y-6">
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple"
                maxLength={10}
              />
              {mobileNumber.length === 10 && (
                <div >
                  <p className="text-gray-600 mb-2">Enter OTP :</p>
                <div className="flex justify-between space-x-2">
                    
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="tel"
                      value={digit}
                      onChange={(e) =>
                        handleOtpChange(index, e.target.value)
                      }
                      className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple"
                      maxLength={1}
                    />
                  ))}
                </div>
                </div>
              )}
              <p className="text-xs text-gray-500 text-center">
                I accept that I have read & understood sb wears 's{" "} 
                <a href="/" className="text-purple">
                  Privacy Policy and T&Cs
                </a>
                .
              </p>
              <p className="text-sm text-gray-500 text-center">
                <a href="/" className="text-purple">
                  Trouble logging in?
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return <>{ReactDOM.createPortal(modalContent, document.body)}</>;
}

export default Login;
