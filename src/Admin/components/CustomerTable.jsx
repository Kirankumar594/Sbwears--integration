
import React, { useState, useEffect } from "react";
import { LuEye } from "react-icons/lu";
import axios from "axios";

export const CustomerTable = ({ searchQuery, setCustomers }) => {
  const [customers, setLocalCustomers] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAddressModalOpen, setAddressModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [coupon, setCoupon] = useState("");
  const [message, setMessage] = useState("");

  // Fetch customers from backend
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users/getAllusers");
        setLocalCustomers(response.data);
        setCustomers(response.data); // Update parent state for export
      } catch (error) {
        console.error("Error fetching customers:", error);
        alert("Failed to fetch customers.");
      }
    };
    fetchCustomers();
  }, [setCustomers]);

  // Filter customers based on search query
  const filteredCustomers = customers.filter(
    (customer) =>
      (customer.firstName || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (customer.lastName || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (customer.email || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (customer.phoneNumber || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openModal = (customer) => {
    setSelectedCustomer(customer);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCoupon("");
    setMessage("");
    setSelectedCustomer(null);
  };

  const openAddressModal = (customer) => {
    setSelectedCustomer(customer);
    setAddressModalOpen(true);
  };

  const closeAddressModal = () => {
    setAddressModalOpen(false);
    setSelectedCustomer(null);
  };

  const handleSendMessage = () => {
    // Placeholder for sending message (integrate with backend API later)
    console.log(`Sending to ${selectedCustomer.email}: Coupon: ${coupon}, Message: ${message}`);
    alert(`Message sent to ${selectedCustomer.email} (placeholder).`);
    closeModal();
  };

  return (
    <div className="">
      <div className="overflow-x-auto rounded-xl">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-black text-left text-white">
              <th className="border-b border-gray-300 px-4 py-4">Customer ID</th>
              <th className="border-b border-gray-300 px-4 py-2">Name</th>
              <th className="border-b border-gray-300 px-4 py-2">Mobile</th>
              <th className="border-b border-gray-300 px-4 py-2">Email</th>
              <th className="border-b border-gray-300 px-4 py-2">Address</th>
              <th className="border-b border-gray-300 px-4 py-2">Registration Date</th>
              <th className="border-b border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer._id} className="hover:bg-gray-50">
                <td className="border-b border-gray-300 px-4 py-5">CUST{customer._id.slice(-4).toUpperCase()}</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {customer.firstName || customer.lastName
                    ? `${customer.firstName || ""} ${customer.lastName || ""}`.trim()
                    : "N/A"}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">{customer.phoneNumber || "N/A"}</td>
                <td className="border-b border-gray-300 px-4 py-2">{customer.email || "N/A"}</td>
                <td className="border-b border-gray-300 px-4 py-2">
                  <LuEye
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => openAddressModal(customer)}
                  />
                </td>
                <td className="border-b border-gray-300 px-4 py-5">
                  {new Date(customer.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  <button
                    className="bg-black text-white py-2 px-4 rounded-lg text-xs"
                    onClick={() => openModal(customer)}
                  >
                    Message
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p className="font-semibold">Send Message to {selectedCustomer?.email || "User"}</p>
        <div className="flex flex-col gap-5 items-center justify-center mt-5">
          <div>
            <label className="mr-3 text-sm">Coupon </label>
            <input
              placeholder="Enter the Coupon"
              className="focus:outline-none border px-3 py-1 rounded-lg w-full my-2"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>
          <div>
            <label className="mr-3 text-sm">Message </label>
            <input
              placeholder="Enter the Message"
              className="focus:outline-none border px-3 py-1 rounded-lg w-full my-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <button
          className="bg-black text-white py-1 px-4 rounded-lg mt-5 hover:bg-gray-800"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </Modal>
      <Modal isOpen={isAddressModalOpen} onClose={closeAddressModal}>
        <p className="font-semibold text-center w-72">Customer Address</p>
        <div className="flex flex-col items-center gap-2 justify-center mt-5">
          <p>
            {selectedCustomer?.firstName || selectedCustomer?.lastName
              ? `${selectedCustomer?.firstName || ""} ${selectedCustomer?.lastName || ""}`.trim()
              : "N/A"}
          </p>
          <p>{selectedCustomer?.address || "No address provided"}</p>
          <p>{selectedCustomer?.shippingDetails?.city || "N/A"}</p>
          <p>{selectedCustomer?.shippingDetails?.postalCode || "N/A"}</p>
          <p>{selectedCustomer?.shippingDetails?.country || "N/A"}</p>
          <p>Email: {selectedCustomer?.email || "N/A"}</p>
        </div>
      </Modal>
    </div>
  );
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg overflow-auto p-6">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};