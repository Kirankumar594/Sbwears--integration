import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Modal from "./Modal";
import axios from "axios";

export default function AddTitle() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [titles, setTitles] = useState([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [titleId, setTitleId] = useState(null); // For editing
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Replace with your method of retrieving the JWT token
  const token = localStorage.getItem("adminToken"); // Assuming token is stored in localStorage

  // Fetch titles on component mount
  useEffect(() => {
    fetchTitles();
  }, []);

  const fetchTitles = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://sbwears.com/api/admin/occasion/title",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTitles(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to fetch titles");
    } finally {
      setLoading(false);
    }
  };

  const openModal = (titleData = null) => {
    if (titleData) {
      // Populate form for editing
      setTitleId(titleData._id);
      setTitle(titleData.title);
      setSubtitle(titleData.subtitle);
    } else {
      // Clear form for adding new title
      setTitleId(null);
      setTitle("");
      setSubtitle("");
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTitleId(null);
    setTitle("");
    setSubtitle("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const payload = {
      ...(titleId && { titleId }), // Include titleId only for updates
      title,
      subtitle,
      // categories: [], // Add category IDs if needed
    };

    try {
      const response = await axios.post(
        "https://sbwears.com/api/admin//occasion/title",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Update titles state
      if (titleId) {
        setTitles(
          titles.map((t) => (t._id === titleId ? response.data.title : t))
        );
      } else {
        setTitles([...titles, response.data.title]);
      }
      closeModal();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to save title");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (titleId) => {
    if (!window.confirm("Are you sure you want to delete this title?")) return;

    setLoading(true);
    try {
      await axios.delete(
        `https://sbwears.com/api/admin//occasion/title/${titleId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTitles(titles.filter((t) => t._id !== titleId));
    } catch (err) {
      setError(err.response?.data?.error || "Failed to delete title");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full overflow-auto">
      <div className="bg-white rounded-xl my-5 mx-5 p-8 shadow-lg w-[80%]">
        <p className="text-xl font-bold mb-5">Add New Title and SubTitle</p>
        <button
          onClick={() => openModal()}
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
        >
          Add Title and SubTitle
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              <div>
                <label className="block px-2 text-sm mb-2">Add Title</label>
                <input
                  type="text"
                  name="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter Title"
                  className="w-full py-2 border px-2 rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block px-2 text-sm mb-2">Add SubTitle</label>
                <input
                  type="text"
                  name="SubTitle"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  placeholder="Enter SubTitle"
                  className="w-full py-2 border px-2 rounded-lg focus:outline-none"
                  required
                />
              </div>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <div className="flex flex-row justify-between">
              <button
                type="button"
                onClick={closeModal}
                className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="mt-6 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                {loading ? "Saving..." : titleId ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </Modal>
      </div>
      <div className="bg-white rounded-xl my-5 mx-5 p-8 shadow-lg w-[80%]">
        <p className="text-xl font-bold p-3 pt-0">
          Previous Added Titles and SubTitles
        </p>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {loading && <p>Loading...</p>}
        <div className="flex flex-col gap-5 justify-between">
          <div className="flex flex-row bg-black justify-between border-b p-4 rounded-lg">
            <p className="font-black text-white">Title</p>
            <p className="font-black text-white">SubTitle</p>
            <p className="font-black text-white mr-3">Action</p>
          </div>
          {titles.map((title) => (
            <div
              className="flex flex-row justify-between border-b p-2"
              key={title._id}
            >
              <div className="flex flex-col gap-2 items-center justify-center">
                <p className="text-sm">{title.title}</p>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <p className="text-sm">{title.subtitle}</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-8">
                <button
                  onClick={() => openModal(title)}
                  className="cursor-pointer"
                >
                  <EditIcon />
                </button>
                <button
                  onClick={() => handleDelete(title._id)}
                  className="pb-1 cursor-pointer"
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
