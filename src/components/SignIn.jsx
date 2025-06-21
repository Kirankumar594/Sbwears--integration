import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedData = {
      ...formData,
      email: formData.email.trim(),
      password: formData.password.trim(),
      phone: formData.phone.trim(),
    };

    if (!trimmedData.email || !trimmedData.password || !trimmedData.phone) {
      setError("All fields are required and cannot contain only spaces.");
      return;
    }

    if (!trimmedData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (trimmedData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (!/^\d{10}$/.test(trimmedData.phone)) {
      setError("Phone number must be 10 digits long.");
      return;
    }

    try {
      setLoading(true);
      const { email, password, phone } = trimmedData;

      const response = await axios.post("https://sbwears.com/signin", {
        email,
        password,
        phone,
      });

      setError("");
      setSuccess("Sign In successful!");

      localStorage.setItem("token", response.data.token);

      login(response.data.token);

      navigate("/");
      setFormData({
        email: "",
        password: "",
        phone: "",
      });
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response.data.message);
        setError(error.response.data.message);
      } else {
        console.error("Error:", error.message);
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1560797001-bfcf85c33a3a?q=80&w=2904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg bg-opacity-90 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Sign In
        </h2>

        {error && (
          <div className="mt-3 p-2 text-sm text-red-600 bg-red-100 rounded">
            {error}
          </div>
        )}
        {success && (
          <div className="mt-3 p-2 text-sm text-green-600 bg-green-100 rounded">
            {success}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin border-t-yellow-600"></div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your email"
                required
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-sm text-gray-600">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your password"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
              >
                {showPassword ? <>&#128065;</> : <>&#128065;&#xFE0E;/</>}
              </span>
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-600">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your phone number"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Sign In
            </button>
          </form>
        )}

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
