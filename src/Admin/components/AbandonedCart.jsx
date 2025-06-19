import { React, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { orders } from "../../data/dummyData";
import { BiSpreadsheet } from "react-icons/bi";

export default function AbandonedCart() {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col w-full overflow-auto">
      <p className="text-xl p-8 font-bold">Abandoned Carts</p>
      <div className="flex flex-row">
        <div className="flex flex-row items-center gap-3 border mx-5 p-3 shadow-lg w-5/6 rounded-xl">
          <CiSearch className="w-5 h-5" />
          <input
            className="w-full focus:outline-none"
            placeholder="Search..."
          />
        </div>
        <button className="mr-5 w-1/6 bg-black flex flex-row gap-2 items-center text-white px-4 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
          <BiSpreadsheet />
          Export Excel
        </button>
      </div>

      <div className="bg-white rounded-xl my-5 mx-5 p-5 shadow-lg overflow-x-auto">
        <table className=" rounded-xl w-full">
          <thead className="bg-black text-white">
            <tr>
              <th className="border-b border-gray-300 px-4 py-5">ID</th>
              <th className="border-b border-gray-300 px-4 py-2">Customer ID</th>
              <th className="border-b border-gray-300 px-4 py-2">Customer</th>
              <th className="border-b border-gray-300 px-4 py-2">Cart Items</th>
              <th className="border-b border-gray-300 px-4 py-2">Timestamp</th>
              <th className="border-b border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId} className="text-center hover:bg-gray-50">
                <td className="border-b border-gray-300 px-4 py-5">{order.orderId}</td>
                <td className="border-b border-gray-300 px-4 py-2">{order.customerId}</td>
                <td className="border-b border-gray-300 px-4 py-2">{order.customerName}</td>
                <td className="border-b border-gray-300 px-4 py-2">{order.productsOrdered}</td>
                <td className="border-b border-gray-300 px-4 py-2">{order.orderDateTime}</td>
                <td className="border-b border-gray-300 px-4 py-2 ">
                 <div className="flex flex-row items-center gap-3">

                  <button
                    className="bg-black text-white py-1 px-4 rounded-lg text-xs hover:bg-gray-800"
                    onClick={openModal}
                  >
                    Remind
                  </button>
                  <button>
                    <RiDeleteBin6Line className="h-5 w-5 text-red-500 hover:text-red-700" />
                  </button>
                 </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <p className="font-semibold">Send Message to User</p>
          <div className="flex flex-col gap-5 items-center justify-center mt-5">
            <div>
              <label className="mr-3 text-sm">Coupon</label>
              <input
                placeholder="Enter the Coupon"
                className="focus:outline-none border px-3 py-1 rounded-lg w-full my-2"
              />
            </div>
            <div>
              <label className="mr-3 text-sm">Message</label>
              <input
                placeholder="Enter the Message"
                className="focus:outline-none border px-3 py-1 rounded-lg w-full my-2"
              />
            </div>
          </div>
          <button className="bg-black text-white py-1 px-4 rounded-lg mt-5 hover:bg-gray-800">
            Send
          </button>
        </Modal>
      )}
    </div>
  );
}

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
