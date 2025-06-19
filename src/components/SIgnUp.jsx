import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.trimStart(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedData = {
      ...formData,
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
      confirmPassword: formData.confirmPassword.trim(),
    };

    if (!trimmedData.name || !trimmedData.email || !trimmedData.password || !trimmedData.confirmPassword) {
      setError('All fields are required and cannot contain only spaces.');
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (trimmedData.password !== trimmedData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (!trimmedData.email.includes('@')) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const { name, email, password } = trimmedData;

      const response = await axios.post('http://localhost:3001/signup', { name, email, password });

      console.log('Success:', response.data);
      setError('');
      setSuccess("Sign up successful!");

      navigate('/signin');

      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {

      console.error('Error:', error.response.data.message);
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1714917712724-2b11167b7c96?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative bg-white bg-opacity-90 p-8 rounded-3xl shadow-2xl max-w-lg w-full">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">Create Your Account</h2>
        {error && <div className="mt-4 p-3 text-sm text-red-600 bg-red-100 rounded">{error}</div>}
        {success && <div className="mt-4 p-3 text-sm text-green-600 bg-green-100 rounded">{success}</div>}

        {loading ? (
          <div className="flex justify-center items-center mt-6">
            <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin border-t-yellow-600"></div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label className="block text-sm text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your password"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Confirm password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300">
              Sign Up
            </button>
          </form>
        )}
        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
