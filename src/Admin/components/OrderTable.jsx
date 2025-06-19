import { LuEye } from "react-icons/lu";
import { React, useState } from "react";
import InvoiceBill from "./InvoiceBill";
 

export const OrderTable = () => {
  const status = [
    { value: "Pending", label: "Pending" },
    { value: "Recieved", label: "Recieved" },
    { value: "Out for Delivery", label: "Out for Delivery" },
    { value: "Delivered", label: "Delivered" },
  ]
  const diliveryBoys = [
    { value: "Select Delivery", label: "Select Delivery" },
    { value: "Ajay", label: "Ajay" },
    { value: "Kiran", label: "Kiran" },
    { value: "Abay", label: "Abay" },
  ]
  const orders = [
    {
      id: 1,
      orderId: "6749adc5f5952dfa790d184f",
      customerId: "CUST3190",
      name: "Ananya",
      totalAmount: 1200,
      mobile: "8088133722",
      email: "a@gmail.com",
      addressIcon: <LuEye />,
      date: "20/01/2025",
      action: "Message",
      status: "Pending",
    },
    {
      id: 2,
      orderId: "6749adc5f5952dfa790d184f",
      customerId: "CUST7284",
      name: "Shruthi",
      totalAmount: 2200,
      mobile: "9876543210",
      email: "shruthi@gmail.com",
      addressIcon: "👁️",
      date: "19/01/2025",
      status: "Pending",
      action: "Message",
    },
    {
      id: 3,
      totalAmount: 9100,
      orderId: "6749adc5f5952dfa790d184f",
      customerId: "CUST6547",
      name: "Ravi",
      mobile: "9123456789",
      email: "ravi@gmail.com",
      addressIcon: "👁️",
      date: "18/01/2025",
      status: "Pending",
      action: "Message",
    },
  ];
  const [isModalOpen, setModalOpen] = useState(false);
  // const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [isAdressModalOpen, setAdressModalOpen] = useState(false);
  const openAdressModal = () => setAdressModalOpen(true);
  const closeAdressModal = () => setAdressModalOpen(false);

  return (
    <div className="">
      <div className="overflow-x-auto rounded-xl">
        <table className="table-auto w-full ">
          <thead>
            <tr className="bg-black text-left text-white">
              <th className="border-b border-gray-300 px-4 py-4">SNo</th>
              <th className="border-b border-gray-300 px-4 py-4">Order ID</th>
              <th className="border-b border-gray-300 px-4 py-2">
                Customer Id
              </th>
              <th className="border-b border-gray-300 px-4 py-2">
                Customer Name
              </th>
              <th className="border-b border-gray-300 px-4 py-2">
                Total Amount{" "}
              </th>
              <th className="border-b border-gray-300 px-4 py-2">Date</th>
              <th className="border-b border-gray-300 px-4 py-2">Status</th>
              <th className="border-b border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="border-b border-gray-300 px-4 py-5">
                  {order.id}
                </td>
                <td className="border-b border-gray-300 px-4 py-5">
                  {order.orderId}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {order.customerId}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {order.name}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {order.totalAmount}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {order.date}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {/* {order.status} */}
                  <Dropdown options={status} />
                </td>
                <td className="border-b border-gray-300 px-4 py-2 ">
                  <div className="flex flex-row gap-3 items-center justify-center">
                    <div className="border bg-black rounded-lg flex flex-row items-center gap-1 py-2 px-2 cursor-pointer"
                    onClick={openAdressModal}
                    >
                      <LuEye
                        className="size-4 cursor-pointer text-white"
                        
                      />
                      <div className="flex flex-row">
                        <p className="text-xs text-white">View </p>
                        <p className="text-xs text-white">Deatils </p>
                      </div>
                    </div>
                     
                    <Dropdown options={diliveryBoys} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p className="font-semibold">Send Message to User</p>
        <div className="flex flex-col gap-5 items-center justify-center mt-5">
          <div>
            <label className="mr-3 text-sm ">Coupon </label>
            <input
              placeholder="Enter the Coupon"
              className="focus:outline-none border px-3 py-1 rounded-lg w-full my-2"
            />
          </div>
          <div>
            <label className="mr-3 text-sm ">Message </label>
            <input
              placeholder="Enter the Message"
              className="focus:outline-none border px-3 py-1 rounded-lg w-full my-2"
            />
          </div>
        </div>
        <button className="bg-black text-white py-1 px-4 rounded-lg  mt-5 hover:bg-gray-800">
          Send
        </button>
      </Modal>
      <Modal isOpen={isAdressModalOpen} onClose={closeAdressModal}>
        {/* <p className="font-semibold text-center w-72">Customer Adress </p> */}
        {/* <div className="flex flex-col  items-center gap-2  justify-center mt-5">
          <p>Ananya</p>
          <p> Rishihood University </p>
          <p>NH - 44 gt road balgad</p>
          <p>Sonipat Haryana 131021</p>
          <p>Email : ananya@gmail.com</p>
        </div> */}
        <InvoiceBill/>
      </Modal>
    </div>
  );
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg  overflow-auto  ">
        <div className="flex justify-end  mt-5 mr-5">
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

const Dropdown = ({ options, placeholder = "Select..." }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select
      value={selectedOption}
      onChange={handleChange}
      className=" px-3 py-1 text-left border border-gray-300 rounded-md focus:outline-none "
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};