import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import ProductsListing from "./Pages/ProductsListing.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import Carousel from "./components/CustomerReviews.jsx";
import Profile from "./Pages/Profile.jsx";
import TrackOrder from "./Pages/TrackOrder.jsx";
import Checkout from "./Pages/Checkout.jsx";
import Login from "./Admin/Pages/Login.jsx";
import Dashboard from "./Admin/Pages/Dashboard.jsx";  

function App() {
  const Layout = ({ children }) => {
    const location = useLocation();

    return (
      <>
        {location.pathname === "/contact" && <Navbar />}
        {location.pathname === "/productsList" && <Navbar />}
        {location.pathname === "/product" && <Navbar />}
        {location.pathname === "/account" && <Navbar />}
        {location.pathname === "/trackorder" && <Navbar />}   
        {children}
        
      </>
    );
  };

  function ProtectedRoute({ element, path }) { 
    const isAuthenticated = localStorage.getItem("adminToken")
    console.log("isAuthenticated : " , isAuthenticated)
    return isAuthenticated  ? (
      element
    ) : (
      <Navigate to="/admin/login" />
    );
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<><Home /> <Footer /> </>} />
          <Route path="/contact" element={<><Contact /> <Footer /> </>} />
          <Route path="/productsList" element={<><ProductsListing /> <Footer /> </>} />
          <Route path="/product" element={<><ProductPage /> <Footer /> </>} />
          <Route path="/car" element={<><Carousel /> <Footer /> </>} />
          <Route path="/account" element={<><Profile /> <Footer /> </>} />
          <Route path="/trackorder" element={<><TrackOrder /> <Footer /> </>} />
          <Route path="/checkout" element={<><Checkout /> <Footer /> </>} />
          <Route path="/admin/login" element={<><Login />  </>} />
          <Route
            index
            path="/admin/dashboard"
            element={
              <ProtectedRoute
                path="/admin/dashboard"
                element={ <Dashboard /> }
              />
            }
          />
          {/* <Route path="/admin/dashboard" element={<Dashboard />}/>   */}
        </Routes>
      </Layout>
    </Router>
 
  );
}

export default App; 

// import React, { useState } from "react";
// import Modal from "../src/Admin/components/Modal";

// const App = () => {
//   const [isModalOpen, setModalOpen] = useState(false);

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">React Modal with Tailwind</h1>

//       {/* Button to Open Modal */}
//       <button
//         onClick={openModal}
//         className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//       >
//         Open Modal
//       </button>

//       {/* Modal Component */}
//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         <h2 className="text-lg font-bold mb-4">This is a Modal</h2>
//         <p className="text-gray-700 mb-4">
//           You can pass any content here using the `children` prop.
//         </p>
//         <button
//           onClick={closeModal}
//           className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//         >
//           Close Modal
//         </button>
//       </Modal>
//     </div>
//   );
// };

// export default App;
