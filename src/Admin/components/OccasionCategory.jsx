import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Dropdown from "./DropDown";
import Modal from "./Modal";

export default function OccasionCategory() {
  const [formData, setFormData] = useState({
    link: "",
    coupon: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }; 
 
 
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="flex flex-col  w-full overflow-auto">
      <div className="bg-white rounded-xl my-5 mx-5 p-8 shadow-lg w-80%  ">
        <p className="text-xl font-bold mb-5">Add New Category</p>
        <button
          onClick={openModal}
          className="  bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
        >
          Add Category
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            <div>
              <label className="block px-2  text-sm mb-2">Occasion</label>
              <Dropdown options={options1} />
            </div>
            <div>
              <label className="block px-2  text-sm mb-2">Category Name</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                placeholder="Enter Category"
                onChange={handleInputChange}
                className="w-full py-2 border px-2 rounded-lg focus:outline-none "
              />
            </div>

            <div className="">
              <label className="block px-2 text-sm">Upload Image</label>
              <input
                type="file"
                name="Image"
                placeholder="First Name"
                // onChange={handleFileChange}
                className="py-2  focus:outline-none   cursor-pointer"
              />
            </div>
          </div>

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
        <p className="text-xl font-bold p-3 pt-0">Previous Categories</p>
        <div className="flex flex-col gap-5 justify-between">
          <div className="flex flex-row bg-black justify-between border-b p-4 rounded-lg">
            <p className="font-black text-white">Image</p>
            <p className="font-black text-white">Category</p>
            <p className="font-black text-white">Occasion</p>
            <p className="font-black text-white mr-3">Action</p>
          </div>
          {previousCategories.map((category, index) => (
            <div
              className="flex flex-row justify-between border-b p-2"
              key={index}
            >
              <div className="flex flex-col gap-2 items-center justify-center">
                <img
                  className="h-32 w-32"
                  src={category.imageUrl}
                  alt="bannerImage"
                />
              </div>

              <div className="flex flex-col gap-2 items-center justify-center">
                <p className="text-sm">{category.category}</p>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <p className="text-sm">{category.occasion}</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-8">
                <button className="cursor-pointer ">
                  <EditIcon />
                </button>
                <button className="pb-1 cursor-pointer ">
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

const previousCategories = [
  {
    imageUrl:
      "https://www.libas.in/cdn/shop/files/mehandi_2.jpg?v=1736244584&width=1080",
    imageLink: "https://www.libas.in/collections/sale?filter.v.availability=1",
    category: "MEHENDI MAGIC",
    occasion: "Shop By Occasion",
    description: "Kurta And Kurtis for Women",
    title: "Shop By Categories",
    subTitle: "Discover Your Fashion",
  },
  {
    imageUrl:
      "	https://www.libas.in/cdn/shop/files/haldi_4.jpg?v=1736244616&width=1080",
    imageLink: "https://www.libas.in/collections/sale?filter.v.availability=1",
    category: "HALDI ESSENTIALS",
    occasion: "Shop By Collections",
    description: "Kurta And Kurtis for Women",
    title: "SHOP BY CATEGORIES",
    subTitle: "Discover Your Fashion",
  },
  {
    imageUrl:
      "https://www.libas.in/cdn/shop/files/mehandi_2.jpg?v=1736244584&width=1080",
    imageLink: "https://www.libas.in/collections/sale?filter.v.availability=1",
    category: "PLUS SIZES",
    occasion: "Shop By Collections",
    description: "Kurta And Kurtis for Women",
    title: "SHOP BY CATEGORIES",
    subTitle: "Discover Your Fashion",
  },
  {
    imageUrl:
      "	https://www.libas.in/cdn/shop/files/haldi_4.jpg?v=1736244616&width=1080",
    imageLink: "https://www.libas.in/collections/sale?filter.v.availability=1",
    category: "SAREES",
    occasion: "Shop By Collections",
    description: "Kurta And Kurtis for Women",
    title: "SHOP BY CATEGORIES",
    subTitle: "Discover Your Fashion",
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

const options1 = [
  { value: "Select Occasion", label: "Select Occasion" },
  { value: "Shop By Occasion", label: "Shop By Occasion" },
  { value: "Shop By Collections", label: "Shop By Collections" },
  // { value: "L", label: "L" },
];
