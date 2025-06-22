import { useState, useEffect } from "react";
import axios from "axios";
import { IoLocationSharp } from "react-icons/io5";

export default function DeliveryAddress() {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addressL1: "",
    addressL2: "",
    company: "",
    phoneNumber: "+91",
    city: "",
    postalCode: "",
    country: "India", 
    isDefault: false,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setError(null);
        // const userId = "68554e45ca949721a71c9373"; // Hardcoded for now
        const userId = localStorage.getItem("userId");
        if (!userId) return;

        const response = await axios.get(`https://sbwears.com/api/users/user/${userId}`);
        const shippingDetails = response.data?.shippingDetails;

        // Normalize shippingDetails to always be an array
        if (shippingDetails) {
          const addressArray = Array.isArray(shippingDetails) ? shippingDetails : [shippingDetails];
          setAddresses(addressArray);
          // Pre-fill form with the first address if available
          if (addressArray.length > 0) {
            setFormData(addressArray[0]);
          }
        } else {
          setAddresses([]);
        }
      } catch (err) {
        console.error("Error fetching addresses:", err);
        setError("Failed to load addresses. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      // const userId = "68554e45ca949721a71c9373";
      const userId = localStorage.getItem("userId");
      await axios.post("https://sbwears.com/api/users/update/user", {
        userId,
        shippingDetails: formData
      });

      // Refresh addresses
      const response = await axios.get(`https://sbwears.com/api/users/user/${userId}`);
      const shippingDetails = response.data?.shippingDetails;
      const addressArray = shippingDetails
        ? Array.isArray(shippingDetails)
          ? shippingDetails
          : [shippingDetails]
        : [];
      console.log("response : " , response)
      setAddresses(addressArray);
      setShowAddressForm(false);
    } catch (err) {
      console.error("Error saving address:", err);
      setError("Failed to save address. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddNewAddress = () => {
    // Reset form data for a new address
    setFormData({
      firstName: "",
      lastName: "",
      addressL1: "",
      addressL2: "",
      company: "",
      phoneNumber: "+91",
      city: "",
      postalCode: "",
      country: "India", 
      isDefault: false,
    });
    setShowAddressForm(true);
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-4xl bg-white pb-10 pl-0 pt-0 md:pl-5">
      {!showAddressForm ? (
        <div className="space-y-4 p-4">
          {addresses.length > 0 ? (
            addresses.map((address, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-5 border border-gray-200"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="font-medium text-lg">
                      {address.firstName} {address.lastName}
                    </h3>
                    <p className="text-gray-700">{address.addressL1}</p>
                    {address.addressL2 && <p className="text-gray-700">{address.addressL2}</p>}
                    <p className="text-gray-700">
                      {address.city} {address.postalCode}
                    </p>
                    <p className="text-gray-700">{address.country}</p>
                    <p className="mt-2 text-gray-700">Phone: {address.phoneNumber}</p>
                    {address.isDefault && (
                      <span className="inline-block mt-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                        Default Address
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setFormData(address);
                      setShowAddressForm(true);
                    }}
                    className="text-blue-600 hover:text-blue-800 px-3 py-1 rounded hover:bg-blue-50"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-200">
              <div className="cursor-pointer" onClick={handleAddNewAddress}>
                <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-blue-50">
                    <IoLocationSharp className="text-blue-600 w-7 h-7" />
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors">
                    Add New Address
                  </button>
                  <p className="mt-2 text-gray-500 text-sm">No addresses saved yet</p>
                </div>
              </div>
            </div>
          )}
          {/* {addresses.length > 0 && (
            <button
              onClick={handleAddNewAddress}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors"
            >
              Add Another Address
            </button>
          )} */}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-5xl mx-auto relative border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {addresses.some((addr) => addr === formData) ? "Edit Address" : "Add New Address"}
            </h2>
            <button
              onClick={() => setShowAddressForm(false)}
              className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2 sm:p-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 1</label>
              <input
                type="text"
                name="addressL1"
                value={formData.addressL1}
                onChange={handleInputChange}
                placeholder="Street address, P.O. box, company name"
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 2</label>
              <input
                type="text"
                name="addressL2"
                value={formData.addressL2}
                onChange={handleInputChange}
                placeholder="Apartment, suite, unit, building, floor, etc."
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company (optional)"
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Postal/Zip Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                placeholder="Postal code"
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
              <div className="flex">
                <div className="flex items-center border border-gray-300 rounded-l-lg px-3 bg-gray-50">
                  <span className="text-gray-700">+91</span>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAwSURBVHgB7dBBDQAACAMx/Lv3ZTyEBD4YO5tMNb0DwC8BEiABEiABEiABEiABEjgPLPUAJYNqE+IAAAAASUVORK5CYII="
                    alt="India flag"
                    className="w-4 h-3 ml-2"
                  />
                </div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Contact number"
                  className="w-full py-2 px-3 border-t border-r border-b border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City"
                className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option>India</option>
                </select>
              </div> 
            </div>

            <div className="sm:col-span-2 flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="isDefault"
                  checked={formData.isDefault}
                  onChange={(e) => setFormData({ ...formData, isDefault: e.target.checked })}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">Set as default address</span>
              </label>
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Saving..." : "Save Address"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}