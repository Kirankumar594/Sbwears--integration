import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Modal from "./Modal";
import axios from "axios";

export default function Category() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [description, setDescription] = useState("");
  const [formData, setFormData] = useState({
    category: "",
    coupon: ""
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const openModal = () => {
    setModalOpen(true);
    setIsEditing(false);
    setCurrentCategoryId(null);
    setFormData({
      category: "",
      coupon: ""
    });
    setDescription("");
    setSelectedFile(null);
    setError(null);
  };

  const closeModal = () => setModalOpen(false);

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setDescription(data);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Fetch categories
  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/admin/product/category");
      setCategories(response.data || []);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to fetch categories");
      console.error("Error fetching categories:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle edit function
  // const handleEdit = async (category) => {
  //   console.log("category : " , category)
  //   try {
  //     setIsEditing(true);
  //     setCurrentCategoryId(category._id);
  //     setModalOpen(true);
      
  //     // Set initial values from the category passed in
  //     setFormData({
  //       category: category.Category || "",
  //       coupon: ""
  //     });
  //     setDescription(category.Description || "");
  //     handleSubmit()
  //     // Fetch the complete category data for any additional fields
  //     const response = await axios.get(
  //       // `http://localhost:3000/api/admin/product/category/single/${currentCategoryId}`
  //       `http://localhost:3000/api/admin/product/category/single/68545410bfba00afea85fa22`
  //     );
      
  //     const categoryData = response.data
      
  //     if (categoryData) {
  //       setFormData({
  //         category: categoryData.Category || category.Category || "",
  //         coupon: ""
  //       });
  //       setDescription(categoryData.Description || category.Description || "");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching category details:", error);
  //     setError(error.response?.data?.error || "Failed to load category details");
  //   }
  // };
const handleEdit = async (category) => {
  setIsEditing(true);
  setCurrentCategoryId(category._id);
  setModalOpen(true);
  setFormData({
    category: category.Category || "",
    coupon: ""
  });
  setDescription(category.Description || "");
  setSelectedFile(null); // Don’t load image by default for edit
  setError(null);
};

  // Handle form submission
  // const handleSubmit = async (e) => {
  //   e?.preventDefault();
    
  //   try {
  //     setLoading(true);
  //     setError(null);
      
  //     const formDataToSend = new FormData();
      
  //     // Only append fields that are being updated
  //     if (selectedFile) {
  //       formDataToSend.append("image", selectedFile);
  //     }
  //     if (formData.category) {
  //       formDataToSend.append("Category", formData.category);
  //     }
  //     if (description) {
  //       formDataToSend.append("Description", description);
  //     }
      
  //     let response;
      
  //     if (isEditing && currentCategoryId) {
  //       formDataToSend.append("CategoryId", currentCategoryId);
  //       response = await axios.post(
  //         `http://localhost:3000/api/admin/product/category/${currentCategoryId}`,
  //         formDataToSend,
  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         }
  //       );
  //     } else {
  //       // Validation for new category
  //       if (!selectedFile || !formData.category || !description) {
  //         throw new Error("Image, Category and Description are required for new category");
  //       }
        
  //       response = await axios.post(
  //         "http://localhost:3000/api/admin/product/category",
  //         formDataToSend,
  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         }
  //       );
  //     }

  //     if (response.data?.message) {
  //       alert(response.data.message);
  //       fetchCategories();
  //       closeModal();
  //     }
  //   } catch (error) {
  //     console.error("Error submitting category:", error);
  //     setError(
  //       error.response?.data?.error || 
  //       error.message || 
  //       "Error processing category"
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };
const handleSubmit = async (e) => {
  e?.preventDefault();

  try {
    setLoading(true);
    setError(null);
    
    const formDataToSend = new FormData();
    if (formData.category) formDataToSend.append("Category", formData.category);
    if (description) formDataToSend.append("Description", description);
    if (selectedFile) formDataToSend.append("image", selectedFile);

    let response;
    if (isEditing && currentCategoryId) {
      formDataToSend.append("CategoryId", currentCategoryId);
      response = await axios.post(
        `http://localhost:3000/api/admin/product/category/${currentCategoryId}`,
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
    } else {
      if (!selectedFile || !formData.category || !description) {
        throw new Error("Image, Category and Description are required for new category");
      }

      response = await axios.post(
        "http://localhost:3000/api/admin/product/category",
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
    }

    if (response.data?.message) {
      alert(response.data.message);
      fetchCategories();
      closeModal();
    }
  } catch (error) {
    console.error("Error submitting category:", error);
    setError(error.response?.data?.error || error.message || "Error processing category");
  } finally {
    setLoading(false);
  }
};

  // Handle delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        setLoading(true);
        const response = await axios.delete(
          `http://localhost:3000/api/admin/product/category/${id}`
        );
        if (response.data?.message) {
          alert(response.data.message);
          fetchCategories();
        }
      } catch (err) {
        setError(err.response?.data?.error || "Error deleting category");
        console.error("Error deleting category:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col w-full overflow-auto overflow-x-scroll">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mx-5 mt-5">
          {error}
          <button
            onClick={() => setError(null)}
            className="absolute top-0 right-0 px-2 py-1"
          >
            &times;
          </button>
        </div>
      )}

      <div className="bg-white rounded-xl my-5 mx-5 p-8 shadow-lg w-80%">
        <p className="text-xl font-bold mb-5">Add New Category</p>
        <button
          onClick={openModal}
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          disabled={loading}
        >
          {loading ? "Loading..." : "Add Category"}
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              <div className="">
                <label className="block px-2 text-sm">Upload Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  className="py-2 focus:outline-none cursor-pointer"
                />
              </div>
              <div>
                <label className="block px-2 text-sm mb-2">Category Name</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  placeholder="Enter Category"
                  onChange={handleInputChange}
                  className="w-full py-2 border px-2 rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="product-description"
                  className="block text-sm font-medium mb-2"
                >
                  Product Description:
                </label>
                <div
                  className="p-2 border border-gray-300 rounded-md"
                  id="product-description"
                >
                  <CKEditor
                    editor={ClassicEditor}
                    data={description}
                    onChange={handleEditorChange}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <button
                type="button"
                onClick={closeModal}
                className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="mt-6 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                disabled={loading}
              >
                {loading ? "Processing..." : isEditing ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </Modal>
      </div>
      <div className="bg-white rounded-xl my-5 mx-5 p-8 shadow-lg w-80%">
        <p className="text-xl font-bold p-3 pt-0">Previous Categories</p>
        {loading ? (
          <div className="text-center py-10">Loading categories...</div>
        ) : categories?.length === 0 ? (
          <div className="text-center py-10">No categories found</div>
        ) : (
          <div className="flex flex-col gap-5 justify-between">
            <div className="flex flex-row bg-black justify-between border-b p-4 rounded-lg">
              <p className="font-black text-white">Image</p>
              <p className="font-black text-white">Category</p>
              <p className="font-black text-white">Description</p>
              <p className="font-black text-white mr-3">Action</p>
            </div>
            {categories?.map((category, index) => (
              <div
                className="flex flex-row justify-between border-b p-2"
                key={index}
              >
                <div className="flex flex-col gap-2 items-center justify-center">
                  {category?.image && (
                    <img
                      className="h-28 w-28 object-cover"
                      src={`http://localhost:3000/image/${category.image}`}
                      alt="category"
                    />
                  )}
                </div>

                <div className="flex flex-col gap-2 items-center justify-center">
                  <p className="text-sm">{category?.Category}</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div
                    className="text-sm"
                    dangerouslySetInnerHTML={{ __html: category?.Description }}
                  />
                </div>
                <div className="flex flex-row items-center justify-center gap-8">
                  <button
                    className="cursor-pointer"
                    onClick={() => handleEdit(category)}
                  >
                    <EditIcon />
                  </button>
                  <button
                    className="pb-1 cursor-pointer"
                    onClick={() => handleDelete(category._id)}
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

const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
  </svg>
);