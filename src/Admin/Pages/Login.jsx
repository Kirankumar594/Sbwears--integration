// import React, { useState  } from 'react';
// import { useNavigate } from 'react-router-dom';


// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate(); 

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const trimmedData = {
//       ...formData,
//       email: formData.email.trim(),
//       password: formData.password.trim(),
//     };

//     // Validate that no field is empty or consists of only spaces
//     if (!trimmedData.email || !trimmedData.password) {
//       setError('All fields are required and cannot contain only spaces.');
//       return;
//     }

//     // Basic validation for email
//     if (!trimmedData.email.includes('@')) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     // Basic validation for password length
//     if (trimmedData.password.length < 6) {
//       setError("Password must be at least 6 characters long.");
//       return;
//     }

//     try {
//         console.log('Success:' );
//         setError(''); // Clear any previous errors
//         setSuccess("Sign In successful!");  
//       navigate('/admin/dashboard'); // Redirect to home after login
//       // Reset form
//       setFormData({
//         email: '',
//         password: '',
//       });
      
//     } catch (error) {
//       // Handle error response
//       if (error.response) {
//         console.error('Error:', error.response.data.message);
//         setError(error.response.data.message); // Display error message from the server
//       } else {
//         console.error('Error:', error.message);
//         setError('An unexpected error occurred. Please try again.'); // Generic error message
//       }
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen " style={{
//       backgroundImage: `url('https://www.libas.in/cdn/shop/files/jashn_795ababa-2b60-4869-baef-3501032bef27.jpg?v=1732852629&width=1080')`
//     }}>
//       <div className="bg-opacity-80 bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-2xl font-semibold text-center text-gray-700">Sign In</h2>
//         {error && <div className="mt-3 p-2 text-sm text-red-600 bg-red-100 rounded">{error}</div>}
//         {success && <div className="mt-3 p-2 text-sm text-green-600 bg-green-100 rounded">{success}</div>}
//         <form onSubmit={handleSubmit} className="mt-6">
//           <div className="mb-4">
//             <label className="block text-sm text-black">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:border-indigo-500"
//               placeholder="Your email"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm text-black">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:border-indigo-500"
//               placeholder="Your password"
//               required 
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors duration-300">
//             Sign In
//           </button>
//         </form>
//        </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    setError('');

    const trimmedData = {
      email: formData.email.trim(),
      password: formData.password.trim(),
    };

    // Validate that no field is empty or consists of only spaces
    if (!trimmedData.email || !trimmedData.password) {
      setError('All fields are required and cannot contain only spaces.');
      setLoading(false);
      return;
    }

    // Basic validation for email
    if (!trimmedData.email.includes('@') || !trimmedData.email.includes('.')) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    // Basic validation for password length
    if (trimmedData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/api/admin/login',
        trimmedData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.token) {
        // Save token to localStorage
        localStorage.setItem('adminToken', response.data.token);
        localStorage.setItem('adminEmail', response.data.email);
        
        // Set default authorization header for future requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        
        toast.success('Login successful!');
        navigate('/admin/dashboard');
      } else {
        throw new Error('No token received');
      }
    } catch (error) {
      console.error('Login error:', error);
      
      let errorMessage = 'An error occurred during login';
      if (error.response) {
        // The request was made and the server responded with a status code
        errorMessage = error.response.data.error || error.response.data.message || errorMessage;
      } else if (error.request) {
        // The request was made but no response was received
        errorMessage = 'No response from server. Please try again.';
      }
      
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen" 
      style={{
        backgroundImage: `url('https://www.libas.in/cdn/shop/files/jashn_795ababa-2b60-4869-baef-3501032bef27.jpg?v=1732852629&width=1080')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-opacity-80 bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Admin Sign In</h2>
        
        {error && (
          <div className="mt-3 p-2 text-sm text-red-600 bg-red-100 rounded">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-sm text-black font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your email"
              required
              autoComplete="username"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm text-black font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your password"
              required
              autoComplete="current-password"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing In...
              </>
            ) : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;