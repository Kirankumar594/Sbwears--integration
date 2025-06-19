import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedData = {
      ...formData,
      email: formData.email.trim(),
      password: formData.password.trim(),
    };

    // Validate that no field is empty or consists of only spaces
    if (!trimmedData.email || !trimmedData.password) {
      setError('All fields are required and cannot contain only spaces.');
      return;
    }

    // Basic validation for email
    if (!trimmedData.email.includes('@')) {
      setError("Please enter a valid email address.");
      return;
    }

    // Basic validation for password length
    if (trimmedData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
        console.log('Success:' );
        setError(''); // Clear any previous errors
        setSuccess("Sign In successful!");  
      navigate('/admin/dashboard'); // Redirect to home after login
      // Reset form
      setFormData({
        email: '',
        password: '',
      });
      
    } catch (error) {
      // Handle error response
      if (error.response) {
        console.error('Error:', error.response.data.message);
        setError(error.response.data.message); // Display error message from the server
      } else {
        console.error('Error:', error.message);
        setError('An unexpected error occurred. Please try again.'); // Generic error message
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen " style={{
      backgroundImage: `url('https://www.libas.in/cdn/shop/files/jashn_795ababa-2b60-4869-baef-3501032bef27.jpg?v=1732852629&width=1080')`
    }}>
      <div className="bg-opacity-80 bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Sign In</h2>
        {error && <div className="mt-3 p-2 text-sm text-red-600 bg-red-100 rounded">{error}</div>}
        {success && <div className="mt-3 p-2 text-sm text-green-600 bg-green-100 rounded">{success}</div>}
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-sm text-black">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-black">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Your password"
              required 
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors duration-300">
            Sign In
          </button>
        </form>
       </div>
    </div>
  );
};

export default Login;
