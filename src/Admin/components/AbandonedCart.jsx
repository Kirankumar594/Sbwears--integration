// import { React, useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { orders } from "../../data/dummyData";
// import { BiSpreadsheet } from "react-icons/bi";

// export default function AbandonedCart() {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   return (
//     <div className="flex flex-col w-full overflow-auto">
//       <p className="text-xl p-8 font-bold">Abandoned Carts</p>
//       <div className="flex flex-row">
//         <div className="flex flex-row items-center gap-3 border mx-5 p-3 shadow-lg w-5/6 rounded-xl">
//           <CiSearch className="w-5 h-5" />
//           <input
//             className="w-full focus:outline-none"
//             placeholder="Search..."
//           />
//         </div>
//         <button className="mr-5 w-1/6 bg-black flex flex-row gap-2 items-center text-white px-4 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
//           <BiSpreadsheet />
//           Export Excel
//         </button>
//       </div>

//       <div className="bg-white rounded-xl my-5 mx-5 p-5 shadow-lg overflow-x-auto">
//         <table className=" rounded-xl w-full">
//           <thead className="bg-black text-white">
//             <tr>
//               <th className="border-b border-gray-300 px-4 py-5">ID</th>
//               <th className="border-b border-gray-300 px-4 py-2">Customer ID</th>
//               <th className="border-b border-gray-300 px-4 py-2">Customer</th>
//               <th className="border-b border-gray-300 px-4 py-2">Cart Items</th>
//               <th className="border-b border-gray-300 px-4 py-2">Timestamp</th>
//               <th className="border-b border-gray-300 px-4 py-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.orderId} className="text-center hover:bg-gray-50">
//                 <td className="border-b border-gray-300 px-4 py-5">{order.orderId}</td>
//                 <td className="border-b border-gray-300 px-4 py-2">{order.customerId}</td>
//                 <td className="border-b border-gray-300 px-4 py-2">{order.customerName}</td>
//                 <td className="border-b border-gray-300 px-4 py-2">{order.productsOrdered}</td>
//                 <td className="border-b border-gray-300 px-4 py-2">{order.orderDateTime}</td>
//                 <td className="border-b border-gray-300 px-4 py-2 ">
//                  <div className="flex flex-row items-center gap-3">

//                   <button
//                     className="bg-black text-white py-1 px-4 rounded-lg text-xs hover:bg-gray-800"
//                     onClick={openModal}
//                   >
//                     Remind
//                   </button>
//                   <button>
//                     <RiDeleteBin6Line className="h-5 w-5 text-red-500 hover:text-red-700" />
//                   </button>
//                  </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {isModalOpen && (
//         <Modal isOpen={isModalOpen} onClose={closeModal}>
//           <p className="font-semibold">Send Message to User</p>
//           <div className="flex flex-col gap-5 items-center justify-center mt-5">
//             <div>
//               <label className="mr-3 text-sm">Coupon</label>
//               <input
//                 placeholder="Enter the Coupon"
//                 className="focus:outline-none border px-3 py-1 rounded-lg w-full my-2"
//               />
//             </div>
//             <div>
//               <label className="mr-3 text-sm">Message</label>
//               <input
//                 placeholder="Enter the Message"
//                 className="focus:outline-none border px-3 py-1 rounded-lg w-full my-2"
//               />
//             </div>
//           </div>
//           <button className="bg-black text-white py-1 px-4 rounded-lg mt-5 hover:bg-gray-800">
//             Send
//           </button>
//         </Modal>
//       )}
//     </div>
//   );
// }

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg shadow-lg overflow-auto p-6">
//         <div className="flex justify-end">
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-800"
//           >
//             ✕
//           </button>
//         </div>
//         <div>{children}</div>
//       </div>
//     </div>
//   );
// };
import { React, useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSpreadsheet } from "react-icons/bi";
import axios from "axios";
import { toast } from "react-toastify";

export default function AbandonedCart() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [abandonedCarts, setAbandonedCarts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const fetchAbandonedCarts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://sbwears.com/api/admin/cart/abandoned"
        );
        setAbandonedCarts(response.data.usersWithAbandonedCarts || []);
      } catch (err) {
        console.error("Error fetching abandoned carts:", err);
        setError("Failed to load abandoned carts. Please try again later.");
        toast.error("Failed to load abandoned carts");
      } finally {
        setLoading(false);
      }
    };

    fetchAbandonedCarts();
  }, []);

  const handleRemindUser = async (coupon, message) => {
    try {
      // Implement your remind user logic here
      // Example: await axios.post("/api/send-reminder", { userId: selectedUser._id, coupon, message });
      toast.success("Reminder sent successfully!");
      closeModal();
    } catch (err) {
      console.error("Error sending reminder:", err);
      toast.error("Failed to send reminder");
    }
  };

  const handleDeleteCart = async (userId) => {
    try {
      // Implement your delete cart logic here
      // Example: await axios.delete(`/api/cart/${userId}`);
      setAbandonedCarts(abandonedCarts.filter((user) => user._id !== userId));
      toast.success("Cart cleared successfully!");
    } catch (err) {
      console.error("Error deleting cart:", err);
      toast.error("Failed to clear cart");
    }
  };

  const filteredCarts = abandonedCarts.filter((user) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      user.phoneNumber?.toLowerCase().includes(searchLower) ||
      user._id?.toLowerCase().includes(searchLower)
    );
  });
  console.log("filteredCarts. : ", filteredCarts);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full overflow-auto">
      {/* <Toaster/> */}
      <p className="text-xl p-8 font-bold">Abandoned Carts</p>
      <div className="flex flex-row">
        <div className="flex flex-row items-center gap-3 border mx-5 p-3 shadow-lg w-5/6 rounded-xl">
          <CiSearch className="w-5 h-5" />
          <input
            className="w-full focus:outline-none"
            placeholder="Search by phone or user ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* <button className="mr-5 w-1/6 bg-black flex flex-row gap-2 items-center text-white px-4 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
          <BiSpreadsheet />
          Export Excel
        </button> */}
      </div>

      <div className="bg-white rounded-xl my-5 mx-5 p-5 shadow-lg overflow-x-auto">
        {filteredCarts.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">No abandoned carts found</p>
          </div>
        ) : (
          <table className="rounded-xl w-full">
            <thead className="bg-black text-white">
              <tr>
                <th className="border-b border-gray-300 px-4 py-5">User ID</th>
                <th className="border-b border-gray-300 px-4 py-5">
                  User Name
                </th>
                <th className="border-b border-gray-300 px-4 py-2">
                  Phone Number
                </th>
                <th className="border-b border-gray-300 px-4 py-2">
                  Cart Items
                </th>
                <th className="border-b border-gray-300 px-4 py-2">
                  Oldest Item
                </th>
                <th className="border-b border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCarts.map((user) => {
                const oldestItem = user.oldCartItems.reduce((oldest, item) => {
                  const itemDate = new Date(item.addedAt);
                  return !oldest || itemDate < new Date(oldest.addedAt)
                    ? item
                    : oldest;
                }, null);

                return (
                  <tr key={user._id} className="text-center hover:bg-gray-50">
                    <td className="border-b border-gray-300 px-4 py-5">
                      {user._id}
                    </td>
                    <td className="border-b border-gray-300 px-4 py-5">
                      {user.firstName}
                    </td>
                    <td className="border-b border-gray-300 px-4 py-2">
                      {user.phoneNumber || "N/A"}
                    </td>
                    <td className="border-b border-gray-300 px-4 py-2">
                      {user.oldCartItems.length} items
                    </td>
                    <td className="border-b border-gray-300 px-4 py-2">
                      {oldestItem
                        ? new Date(oldestItem.addedAt).toLocaleString()
                        : "N/A"}
                    </td>
                    <td className="border-b border-gray-300 px-4 py-2">
                      <div className="flex flex-row items-center gap-3 justify-center">
                        <button
                          className="bg-black text-white py-1 px-4 rounded-lg text-xs hover:bg-gray-800"
                          onClick={() => openModal(user)}
                        >
                          Remind
                        </button>
                        {/* <button onClick={() => handleDeleteCart(user._id)}>
                          <RiDeleteBin6Line className="h-5 w-5 text-red-500 hover:text-red-700" />
                        </button> */}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {isModalOpen && (
        <ReminderModal
          isOpen={isModalOpen}
          onClose={closeModal}
          user={selectedUser}
          onRemind={handleRemindUser}
        />
      )}
    </div>
  );
}

const ReminderModal = ({ isOpen, onClose, user, onRemind }) => {
  const [coupon, setCoupon] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRemind(coupon, message);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg overflow-auto p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Send Reminder to User</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        <div className="mb-2">
          <p className="text-sm text-gray-600">
            User: {user?.phoneNumber || user?._id}
          </p>
          <p className="text-sm text-gray-600">
            Abandoned Items: {user?.oldCartItems?.length || 0}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Coupon Code
            </label>
            <input
              type="text"
              placeholder="Enter coupon code"
              className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-black"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              placeholder="Enter your message"
              className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-black"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Send Reminder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
