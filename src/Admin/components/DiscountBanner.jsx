import { React, useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Modal from "./Modal";
import axios from "axios";

export default function DiscountBanner() {
  const [formData, setFormData] = useState({
    imageLink: "",
    couponCode: "",
    bannerId: null, // For edit mode
  });

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [banners, setBanners] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  // Fetch banners on component mount
  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const response = await axios.get("https://sbwears.com/api/admin/banner");
      setBanners(response.data);
    } catch (error) {
      console.error("Error fetching banners:", error);
      alert("Failed to fetch banners");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const resetForm = () => {
    setFormData({
      imageLink: "",
      couponCode: "",
      bannerId: null,
    });
    setFile(null);
    setPreview(null);
    setIsEditMode(false);
  };

  const handleSubmit = async () => {
    if (!file && !isEditMode) return alert("Please select a file!");
    if (!formData.imageLink || !formData.couponCode) {
      return alert("All fields are required!");
    }

    const formDataToSend = new FormData();
    if (file) formDataToSend.append("image", file);
    formDataToSend.append("imageLink", formData.imageLink);
    formDataToSend.append("couponCode", formData.couponCode);

    try {
      let response;
      if (isEditMode && formData.bannerId) {
        // Update existing banner
        formDataToSend.append("bannerId", formData.bannerId);
        response = await axios.post(
          `https://sbwears.com/api/admin/banner?bannerId=${formData.bannerId}`,
          formDataToSend,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      } else {
        // Create new banner
        response = await axios.post(
          "https://sbwears.com/api/admin/banner",
          formDataToSend,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      }

      console.log("Response:", response.data);
      fetchBanners(); // Refresh the banner list
      closeModal();
      resetForm();
      alert(`Banner ${isEditMode ? "updated" : "added"} successfully!`);
    } catch (error) {
      console.error("Error:", error);
      alert(`Failed to ${isEditMode ? "update" : "add"} banner`);
    }
  };

  const handleEdit = (banner) => {
    setFormData({
      imageLink: banner.imageLink,
      couponCode: banner.couponCode,
      bannerId: banner._id,
    });
    setPreview(`https://sbwears.com/Public/image/${banner.image}`);
    setIsEditMode(true);
    openModal();
  };

  const handleDelete = async (bannerId) => {
    if (!window.confirm("Are you sure you want to delete this banner?")) return;

    try {
      await axios.delete(`https://sbwears.com/api/admin/banner/${bannerId}`);
      fetchBanners(); // Refresh the banner list
      alert("Banner deleted successfully!");
    } catch (error) {
      console.error("Error deleting banner:", error);
      alert("Failed to delete banner");
    }
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    resetForm();
  };

  return (
    <div className="flex flex-col w-full overflow-auto">
      <div className="bg-white rounded-xl my-5 mx-5 p-8 shadow-lg w-80%">
        <p className="text-xl font-bold mb-5">Add New Banner</p>
        <button
          onClick={openModal}
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
        >
          Add Banner
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="">
            <label className="block px-2 text-sm">Upload Image</label>
            <input
              type="file"
              name="Image"
              onChange={handleFileChange}
              className="w-full py-2 focus:outline-none cursor-pointer"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-2 max-h-40 object-contain"
              />
            )}
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
                className="w-full py-2 border rounded-lg px-2 focus:outline-none"
              />
            </div>

            <div>
              <label className="block px-2 text-sm mb-2">Coupon Code</label>
              <input
                type="text"
                name="couponCode"
                value={formData.couponCode}
                placeholder="Enter Coupon Code"
                onChange={handleInputChange}
                className="w-full py-2 border px-2 rounded-lg focus:outline-none"
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
              onClick={handleSubmit}
            >
              {isEditMode ? "Update" : "Save"}
            </button>
          </div>
        </Modal>
      </div>
      <div className="bg-white rounded-xl my-5 mx-5 p-8 shadow-lg w-80%">
        <p className="text-xl font-bold p-3 pt-0">Previous Banners</p>
        <div className="flex flex-col gap-5 justify-between">
          <div className="flex flex-row bg-black justify-between border-b p-4 rounded-lg">
            <p className="font-black text-white w-1/4">Image</p>
            <p className="font-black text-white w-1/4">Image Link</p>
            <p className="font-black text-white w-1/4">Coupon</p>
            <p className="font-black text-white w-1/4">Action</p>
          </div>
          {banners.map((banner, index) => (
            <div
              className="flex flex-row justify-between border-b p-2 items-center"
              key={index}
            >
              <div className="w-1/4">
                <img
                  className="h-20 w-auto object-contain"
                  src={`https://sbwears.com/image/${banner.image}`}
                  alt="bannerImage"
                />
              </div>
              <div className="w-1/4">
                <p className="truncate">{banner.imageLink}</p>
              </div>
              <div className="w-1/4">
                <p>{banner.couponCode}</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-8 w-1/4">
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => handleEdit(banner)}
                >
                  <EditIcon />
                </button>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleDelete(banner._id)}
                >
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
