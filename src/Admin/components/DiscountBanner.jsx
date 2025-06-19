import { React, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Modal from "./Modal";
import axios from "axios";


export default function DiscountBanner() {
  const [formData, setFormData] = useState({
    imageLink: "",
    couponCode: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle File Selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile)); // Show image preview
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file!");
  
    // Create FormData instance
    const formDataToSend = new FormData();
    formDataToSend.append("image", file); // Append image file
    formDataToSend.append("imageLink", formData.imageLink); // Append text fields
    formDataToSend.append("couponCode", formData.couponCode);
  
    // Debugging: Log the appended values
    for (let pair of formDataToSend.entries()) {
      console.log(pair[0], pair[1]); // Check if formData is correctly populated
    }
    
    try {
      const response = await axios.post(
        "http://localhost:3000/api/admin/banner",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Upload Response:", response.data);
      alert("Banner uploaded successfully!");
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Upload failed!");
    }
  };
  
  
   

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

 
  return (
    <div className="flex flex-col  w-full overflow-auto">
      <div className="bg-white rounded-xl my-5 mx-5 p-8 shadow-lg w-80%  ">
        <p className="text-xl font-bold mb-5">Add New Banner</p>
        <button
          onClick={openModal}
          className="  bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
        >
          Add Banner
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="">
            <label className="block px-2 text-sm">Upload Image</label>
            <input
              type="file"
              name="Image"
              placeholder="First Name"
              onChange={handleFileChange}
              className="w-full py-2  focus:outline-none   cursor-pointer"
            />
            {preview && <img src={preview} alt="Preview" width="200px" />}

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            <div>
              <label className="block text-sm px-2 mb-2">Image Link</label>
              <input
                type="text"
                name="imageLink"
                placeholder="Add link"
                value={formData.imageLink}
                onChange={handleInputChange}
                className="w-full py-2 border rounded-lg px-2  focus:outline-none "
              />
            </div>

            <div>
              <label className="block px-2  text-sm mb-2">Coupon Code</label>
              <input
                type="text"
                name="couponCode"
                value={formData.couponCode}
                placeholder="Enter Coupon Code"
                onChange={handleInputChange}
                className="w-full py-2 border px-2 rounded-lg focus:outline-none "
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
              // onClick={closeModal}
              onClick={handleUpload}
            >
              Save
            </button>
          </div>
        </Modal>
      </div>
      <div className="bg-white rounded-xl my-5 mx-5 p-8 shadow-lg w-80%  ">
        <p className="text-xl font-bold p-3 pt-0">Previous Banners</p>
        <div className="flex flex-col gap-5 justify-between">
          <div className="flex flex-row bg-black justify-between border-b p-4 rounded-lg">
            <p className="font-black text-white mr-36">Image</p>
            <p className="font-black text-white mr-44">Image Link</p>
            <p className="font-black text-white ">Coupon</p>
            <p className="font-black text-white ">Action</p>
          </div>
          {previousBanners.map((banner, index) => (
            <div
              className="flex flex-row justify-between border-b p-2"
              key={index}
            >
              <div className="flex flex-col gap-2 items-center justify-center">
                <img
                  className="h-10 w-18"
                  src={banner.imageUrl}
                  alt="bannerImage"
                />
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <p>{banner.imageLink}</p>
              </div>

              <div className="flex flex-col gap-2 items-center justify-center">
                <p>{banner.coupon}</p>
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

// const options = [
//   { value: "Kurtas", label: "Kurtas" },
//   { value: "Dresses", label: "Dresses" },
//   { value: "Bottoms", label: "Bottoms" },
// ];
// const Suboptions = [
//   { value: "Kurtas", label: "Kurtas" },
//   { value: "Dresses", label: "Dresses" },
//   { value: "Bottoms", label: "Bottoms" },
// ];
const previousBanners = [
  {
    imageUrl:
      "https://www.libas.in/cdn/shop/files/desktop-eoss_b47b3d2e-63c3-4a33-9858-340255cc1dfb.jpg?v=1735982857&width=2400",
    imageLink: "https://www.libas.in/collections/sale?filter.v.availability=1",
    category: ["Kurtas"],
    subCategory: ["Kurtas"],
    coupon: "SB25",
  },
  {
    imageUrl:
      "https://www.libas.in/cdn/shop/files/desktop-eoss_b47b3d2e-63c3-4a33-9858-340255cc1dfb.jpg?v=1735982857&width=2400",
    imageLink: "https://www.libas.in/collections/sale?filter.v.availability=1",
    category: ["Bottoms"],
    subCategory: ["Kurtas"],
    coupon: "SB25",
  },
  {
    imageUrl:
      "https://www.libas.in/cdn/shop/files/desktop-eoss_b47b3d2e-63c3-4a33-9858-340255cc1dfb.jpg?v=1735982857&width=2400",
    imageLink: "https://www.libas.in/collections/sale?filter.v.availability=1",
    category: ["Bottoms"],
    subCategory: ["Kurtas"],
    coupon: "SB25",
  },
  {
    imageUrl:
      "https://www.libas.in/cdn/shop/files/desktop-eoss_b47b3d2e-63c3-4a33-9858-340255cc1dfb.jpg?v=1735982857&width=2400",
    imageLink: "https://www.libas.in/collections/sale?filter.v.availability=1",
    category: ["Bottoms"],
    subCategory: ["Kurtas"],
    coupon: "SB25",
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
