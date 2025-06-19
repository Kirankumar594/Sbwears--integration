import { React, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Modal from "./Modal";

export default function AddSize() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="flex flex-col  w-full overflow-auto">
      <div className="bg-white rounded-xl my-5 mx-5 p-8 shadow-lg w-80%  ">
        <p className="text-xl font-bold mb-5 ">Add New Size</p>
        <button
          onClick={openModal}
          className="  bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
        >
          Add Size
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <input
            type="text"
            name="Size"
            placeholder="Add Size"
            className=" py-2 border mr-3 rounded-lg px-2  focus:outline-none "
          />
          <div className="flex flex-row justify-between">
            <button
              onClick={closeModal}
              className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Cancel
            </button>
            <button
              className="mt-6 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              onClick={closeModal}
            >
              Save
            </button>
          </div>
        </Modal>
      </div>
      <div className="bg-white rounded-xl my-5 mx-5 p-8 shadow-lg w-80%  ">
        <p className="text-xl font-bold p-3 pt-0">Previous Added Sizes</p>
        <div className="flex flex-col gap-5 w-2/5">
          <div className="flex flex-row bg-black justify-between border-b p-4 rounded-lg">
            <p className="font-black text-white">Sizes</p>
            <p className="font-black mr-3 text-white"> Action</p>
          </div>
          {sizes.map((size, index) => (
            <div
              className="flex flex-row justify-between border-b p-2"
              key={index}
            >
              <div className="flex flex-col gap-2 items-center justify-center">
                <p>{size.size}</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-8">
                <button className=" ">
                  <EditIcon />
                </button>
                <button className="pb-1">
                  <RiDeleteBin6Line className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const sizes = [
  {
    id: 1,
    size: "XS",
  },
  {
    id: 2,
    size: "S",
  },
  {
    id: 3,
    size: "M",
  },
  {
    id: 4,
    size: "L",
  },
  {
    id: 5,
    size: "XL",
  },
  {
    id: 6,
    size: "XXL",
  },
];

function EditIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
