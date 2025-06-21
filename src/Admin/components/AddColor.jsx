import { React, useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Modal from "./Modal";
import axios from "axios";

export default function AddColor() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [colorName, setColorName] = useState("");
  const [colors, setColors] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentColorId, setCurrentColorId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch colors on component mount
  useEffect(() => {
    fetchColors();
  }, []);

  const fetchColors = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://sbwears.com/api/admin/productManagement/color"
      );
      setColors(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching colors:", error);
      setLoading(false);
      alert("Failed to fetch colors");
    }
  };

  const handleSubmit = async () => {
    if (!colorName.trim()) {
      alert("Color name cannot be empty");
      return;
    }

    try {
      if (editMode && currentColorId) {
        // Update existing color
        await axios.post(
          `https://sbwears.com/api/admin/productManagement/color`,
          {
            Color: colorName,
            colorId: currentColorId,
          }
        );
        alert("Color updated successfully");
      } else {
        // Add new color
        await axios.post(
          "https://sbwears.com/api/admin/productManagement/color",
          {
            Color: colorName,
          }
        );
        alert("Color added successfully");
      }

      fetchColors(); // Refresh the list
      closeModal();
    } catch (error) {
      console.error("Error saving color:", error);
      alert(error.response?.data?.error || "Failed to save color");
    }
  };

  const handleEdit = (color) => {
    setColorName(color.Color);
    setCurrentColorId(color._id);
    setEditMode(true);
    openModal();
  };

  const handleDelete = async (colorId) => {
    if (!window.confirm("Are you sure you want to delete this color?")) return;

    try {
      await axios.delete(
        `https://sbwears.com/api/admin/productManagement/color/${colorId}`
      );
      alert("Color deleted successfully");
      fetchColors(); // Refresh the list
    } catch (error) {
      console.error("Error deleting color:", error);
      alert("Failed to delete color");
    }
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setColorName("");
    setEditMode(false);
    setCurrentColorId(null);
  };

  return (
    <div className="flex flex-col w-full overflow-auto">
      <div className="bg-white rounded-xl my-5 mx-5 p-8 shadow-lg w-80%">
        <p className="text-xl font-bold mb-5">Add New Color</p>
        <button
          onClick={openModal}
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
        >
          Add Color
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <input
            type="text"
            name="Color"
            placeholder="Add Color"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
            className="w-full py-2 border rounded-lg px-2 focus:outline-none"
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
              onClick={handleSubmit}
            >
              {editMode ? "Update" : "Save"}
            </button>
          </div>
        </Modal>
      </div>
      <div className="bg-white rounded-xl my-5 mx-5 p-8 shadow-lg w-80%">
        <p className="text-xl font-bold p-3 pt-0">Previous Added Colors</p>
        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
          </div>
        ) : (
          <div className="flex flex-col gap-5 w-2/5">
            <div className="flex flex-row bg-black justify-between border-b p-4 rounded-lg">
              <p className="font-black text-white">Colors</p>
              <p className="font-black mr-3 text-white">Action</p>
            </div>
            {colors.map((color, index) => (
              <div
                className="flex flex-row justify-between border-b p-2 items-center"
                key={index}
              >
                <div className="flex flex-col gap-2 items-center justify-center">
                  <p>{color.Color}</p>
                </div>
                <div className="flex flex-row items-center justify-center gap-8">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => handleEdit(color)}
                  >
                    <EditIcon />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(color._id)}
                  >
                    <RiDeleteBin6Line className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
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
