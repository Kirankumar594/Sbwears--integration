import { LuEye } from "react-icons/lu";
import { React, useState } from "react";
export const TransactionTable = () => {
  const transactions = [
    {
      id: 1,
      customerId: "CUST3190",
      transactionId: "TRX-8a7d6e45-b34f-49c2-af1e-783cd91f019a",
      name: "Ananya",
      mobile: "8088133722",
      email: "a@gmail.com",
      addressIcon: <LuEye />,
      registrationDate: "20/01/2025",
      amount: 1200,
      action: "Message",
      time: "03:45 PM",
      status: "Success",
    },
    {
      id: 2,
      customerId: "CUST7284",
      transactionId: "TRX-1d9c4f72-ae21-4bc9-91db-23cfd07e9eb3",
      name: "Shruthi",
      mobile: "9876543210",
      time: "07:18 PM",
      email: "shruthi@gmail.com",
      addressIcon: "👁️",
      registrationDate: "19/01/2025",
      amount: 1199,
      action: "Message",
      status: "Success",
    },
    {
      id: 3,
      customerId: "CUST6547",
      transactionId: "TRX-73f9ea12-d6c3-4a67-9f4b-fc5b217b8c89",
      name: "Ravi",
      mobile: "9123456789",
      time: "10:23 AM",
      email: "ravi@gmail.com",
      addressIcon: "👁️",
      registrationDate: "18/01/2025",
      amount: 999,
      action: "Message",
      status: "Success",
    },
  ];
  const [isModalOpen, setModalOpen] = useState(false);
  // const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [isAdressModalOpen, setAdressModalOpen] = useState(false);
  // const openAdressModal = () => setAdressModalOpen(true);
  const closeAdressModal = () => setAdressModalOpen(false);

  return (
    <div className=" ">
      <div className="overflow-x-auto rounded-xl">
        <table className="table-auto w-full ">
          <thead>
            <tr className="bg-black text-left text-white">
              <th className="border-b border-gray-300 px-4 py-4">SNo</th>
              <th className="border-b border-gray-300 px-4 py-2">
                Transaction Id
              </th>
              <th className="border-b border-gray-300 px-4 py-2">
                Customer Id
              </th>
              <th className="border-b border-gray-300 px-4 py-2">
                Customer Name
              </th>
              <th className="border-b border-gray-300 px-4 py-2">Mobile</th>
              <th className="border-b border-gray-300 px-4 py-2">Date</th>
              <th className="border-b border-gray-300 px-4 py-2">Time</th>
              <th className="border-b border-gray-300 px-4 py-2">Amount</th>
              <th className="border-b border-gray-300 px-4 py-2">Status</th>
              {/* <th className="border-b border-gray-300 px-4 py-2">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="border-b border-gray-300 px-4 py-5">
                  {transaction.id}
                </td>
                <td className="border-b border-gray-300 px-4 py-5">
                  {transaction.transactionId}
                </td>
                <td className="border-b border-gray-300 px-4 py-5">
                  {transaction.customerId}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {transaction.name}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {transaction.mobile}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {transaction.registrationDate}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {transaction.time}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {transaction.amount}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {/* <LuEye
                    className="w-5 h-5 cursor-pointer"
                    onClick={openAdressModal}
                  /> */}
                  {transaction.status}
                </td>
                {/* <td className="border-b border-gray-300 px-4 py-5">
                  {transaction.amount}
                </td> */}
                {/* <td className="border-b border-gray-300 px-4 py-5">
                  {transaction.status}
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  <button
                    className="bg-black text-white py-2 px-4 rounded-lg text-xs"
                    onClick={openModal}
                  >
                    Message
                  </button>
                </td> */}
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
        <p className="font-semibold text-center w-72">Customer Adress </p>
        <div className="flex flex-col  items-center gap-2  justify-center mt-5">
          <p>Ananya</p>
          <p> Rishihood University </p>
          <p>NH - 44 gt road balgad</p>
          <p>Sonipat Haryana 131021</p>
          <p>Email : ananya@gmail.com</p>
        </div>
      </Modal>
    </div>
  );
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg  overflow-auto  p-6">
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
