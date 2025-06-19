import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


const AdminPanel = () => {
  const [description, setDescription] = useState("");

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setDescription(data);
    console.log("Editor Data: ", data); // Debugging purpose
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data: ", description);
    // You can send the description to the backend here
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Add Product Description
      </h1>
      <form
        className="bg-white shadow-md rounded-lg p-6 space-y-6"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor="product-name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Product Name:
          </label>
          <input
            type="text"
            id="product-name"
            name="productName"
            placeholder="Enter product name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="product-description"
            className="block text-sm font-medium text-gray-700 mb-2"
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

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Save Product
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
