// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Dropdown from "./DropDown";
// import MultiSelect from "./MultiSelect";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import {
//   optionsOccasions,
//   optionsCategory,
//   optionsTag,
//   options1,
//   options2,
//   options3,
// } from "../../data/dummyData";

// export default function OccForm({ closeModal, editingProduct = null, onSuccess }) {
//   const [formData, setFormData] = useState({
//     name: editingProduct?.name || "",
//     mrp: editingProduct?.mrp || 0,
//     discount: editingProduct?.discount || 0,
//     category: editingProduct?.category || "",
//     tag: editingProduct?.tag || "",
//     color: editingProduct?.color?.join(",") || "",
//     fabric: editingProduct?.fabric || "",
//     size: editingProduct?.size?.join(",") || "",
//     stocks: editingProduct?.stocks || 0,
//     Minstocks: editingProduct?.Minstocks || 0,
//     productCategoryId: editingProduct?.productCategory || "",
//     status: editingProduct?.status || "active",
//   });

//   const [description, setDescription] = useState(editingProduct?.description || "");
//   const [Categories, setCategories] = useState([]);
//   const [additionalInfo, setAdditionalInfo] = useState(editingProduct?.additionalInfo || "");
//   const [files, setFiles] = useState({
//     sizeChart: null,
//     images: []
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [offerPrice, setOfferPrice] = useState(0);

//   // Calculate offer price whenever MRP or discount changes
//   useEffect(() => {
//     const calculatedPrice = formData.mrp - (formData.mrp * (formData.discount / 100));
//     setOfferPrice(calculatedPrice.toFixed(2));
//   }, [formData.mrp, formData.discount]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e, field) => {
//     if (field === "images") {
//       setFiles(prev => ({
//         ...prev,
//         images: Array.from(e.target.files)
//       }));
//     } else {
//       setFiles(prev => ({
//         ...prev,
//         [field]: e.target.files[0]
//       }));
//     }
//   };

//     const fetchCategories = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("http://localhost:3000/api/admin/product/category");
//         console.log("response : " , response)
//         setCategories(response.data || []);
//       } catch (err) {
//         setError(err.response?.data?.error || "Failed to fetch categories");
//         console.error("Error fetching categories:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     useEffect(() => {
//       fetchCategories();
//     }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const formDataToSend = new FormData();
//       formData.category = formData.productCategoryId
//       // Append all form fields
//       Object.entries(formData).forEach(([key, value]) => {
//         if (value !== undefined && value !== null) {
//           formDataToSend.append(key, value);
//         }
//       });

//       // Append calculated fields
//       formDataToSend.append("offerPrice", offerPrice);

//       // Append text content
//       formDataToSend.append("description", description);
//       formDataToSend.append("additionalInfo", additionalInfo);
//       // formData.productCategoryId
//       // Append files in correct order (size chart first, then images)
//       if (files.sizeChart) {
//         formDataToSend.append("sizeChart", files.sizeChart);
//       }
//       files.images.forEach((file, index) => {
//         formDataToSend.append(`image${index}`, file);
//       });
//       console.log("formData : " , formData)
//       // Validation for new products
//       if (!editingProduct) {
//         if (!files.sizeChart || files.images.length < 1) {
//           throw new Error("Please upload at least one size chart and one product image");
//         }
//         // if (!formData.name || !formData.mrp || !formData.category || !formData.productCategoryId) {
//         if (!formData.name || !formData.mrp || !formData.productCategoryId) {
//           throw new Error("Name, MRP, Category and Category ID are required");
//         }
//       }

//       const url = "http://localhost:3000/api/admin/category/product";
//       const params = editingProduct ? { productId: editingProduct._id } : {};

//       const response = await axios.post(url, formDataToSend, {
//         params,
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log("response : " , response)
//       if (response.data.message) {
//         alert(response.data.message);
//         // onSuccess(response.data.Product);
//         // closeModal();
//       }
//     } catch (error) {
//       console.error("Submit error:", error);
//       setError(
//         error.response?.data?.error || 
//         error.message || 
//         "Failed to save product. Please check all required fields."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 h-96">
//       {error && (
//         <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
//           {error}
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Product Basic Info */}
//         <div className="col-span-2">
//           <label className="block text-sm font-medium mb-1">Product Name*</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">MRP*</label>
//           <input
//             type="number"
//             name="mrp"
//             value={formData.mrp}
//             onChange={handleInputChange}
//             min="0"
//             step="0.01"
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Discount (%)</label>
//           <input
//             type="number"
//             name="discount"
//             value={formData.discount}
//             onChange={handleInputChange}
//             min="0"
//             max="100"
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Offer Price</label>
//           <div className="p-2 border rounded bg-gray-50">
//             ₹{offerPrice}
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Stocks*</label>
//           <input
//             type="number"
//             name="stocks"
//             value={formData.stocks}
//             onChange={handleInputChange}
//             min="0"
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Min Stocks</label>
//           <input
//             type="number"
//             name="Minstocks"
//             value={formData.Minstocks}
//             onChange={handleInputChange}
//             min="0"
//             className="w-full p-2 border rounded"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Category*</label>
//           <Dropdown
//             options={optionsCategory}
//             value={formData.category}
//             onChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Product Category ID*</label>
//           <input
//             type="text"
//             name="productCategoryId"
//             value={formData.productCategoryId}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Tag</label>
//           <Dropdown
//             options={optionsTag}
//             value={formData.tag}
//             onChange={(value) => setFormData(prev => ({ ...prev, tag: value }))}
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Fabric</label>
//           <Dropdown
//             options={options3}
//             value={formData.fabric}
//             onChange={(value) => setFormData(prev => ({ ...prev, fabric: value }))}
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Color</label>
//           <MultiSelect
//             options={options2}
//             value={formData.color}
//             onChange={(value) => setFormData(prev => ({ ...prev, color: value }))}
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Size</label>
//           <MultiSelect
//             options={options1}
//             value={formData.size}
//             onChange={(value) => setFormData(prev => ({ ...prev, size: value }))}
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Status</label>
//           <select
//             name="status"
//             value={formData.status}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded"
//           >
//             <option value="active">Active</option>
//             <option value="inactive">Inactive</option>
//           </select>
//         </div>

//         {/* File Uploads */}
//         <div className="col-span-2">
//           <label className="block text-sm font-medium mb-1">
//             Size Chart* {!editingProduct && "(Required)"}
//           </label>
//           <input
//             type="file"
//             onChange={(e) => handleFileChange(e, "sizeChart")}
//             className="w-full p-2 border rounded"
//             required={!editingProduct}
//           />
//         </div>

//         <div className="col-span-2">
//           <label className="block text-sm font-medium mb-1">
//             Product Images* {!editingProduct && "(At least 1 required)"}
//           </label>
//           <input
//             type="file"
//             multiple
//             onChange={(e) => handleFileChange(e, "images")}
//             className="w-full p-2 border rounded"
//             required={!editingProduct}
//           />
//         </div>

//         {/* Editors */}
//         <div className="col-span-2">
//           <label className="block text-sm font-medium mb-1">Description</label>
//           <div className="border rounded">
//             <CKEditor
//               editor={ClassicEditor}
//               data={description}
//               onChange={(e, editor) => setDescription(editor.getData())}
//             />
//           </div>
//         </div>

//         <div className="col-span-2">
//           <label className="block text-sm font-medium mb-1">Additional Information</label>
//           <div className="border rounded">
//             <CKEditor
//               editor={ClassicEditor}
//               data={additionalInfo}
//               onChange={(e, editor) => setAdditionalInfo(editor.getData())}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-between mt-6">
//         <button
//           type="button"
//           // onClick={closeModal}
//           className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//           disabled={loading}
//         >
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           disabled={loading}
//         >
//           {loading ? "Processing..." : editingProduct ? "Update Product" : "Add Product"}
//         </button>
//       </div>
//     </form>
//   );
// }


import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "./DropDown";
import MultiSelect from "./MultiSelect";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function OccForm({ closeModal, editingProduct = null, onSuccess }) {
  const [formData, setFormData] = useState({
    name: editingProduct?.name || "",
    mrp: editingProduct?.mrp || "",
    discount: editingProduct?.discount || "",
    category: editingProduct?.category || "",
    tag: editingProduct?.tag || "",
    color: editingProduct?.color?.join(",") || "",
    fabric: editingProduct?.fabric || "",
    size: editingProduct?.availableSizes?.join(",") || "",
    stocks: editingProduct?.stocks || "",
    Minstocks: editingProduct?.Minstocks || "",
    productCategoryId: editingProduct?.productCategory?._id || "",
    status: editingProduct?.status ? "active" : "inactive",
  });
  console.log("formData : " , formData)

  const [description, setDescription] = useState(editingProduct?.description || "");
  const [additionalInfo, setAdditionalInfo] = useState(editingProduct?.additionalInfo || "");
  const [files, setFiles] = useState({
    sizeChart: null,
    images: [],
  });
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [fabrics, setFabrics] = useState([]);
  const [tags, setTags] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [offerPrice, setOfferPrice] = useState(0);
  console.log("colors : " , colors)
  // Calculate offer price
  useEffect(() => {
    const mrp = parseFloat(formData.mrp) || 0;
    const discount = parseFloat(formData.discount) || 0;
    const calculatedPrice = mrp - (mrp * (discount / 100));
    setOfferPrice(calculatedPrice.toFixed(2));
  }, [formData.mrp, formData.discount]);

  // Fetch dropdown data
  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const [colorRes, fabricRes, tagRes, sizeRes, categoryRes] = await Promise.all([
          axios.get("http://localhost:3000/api/admin/productManagement/color"),
          axios.get("http://localhost:3000/api/admin/productManagement/fabric"),
          axios.get("http://localhost:3000/api/admin/productManagement/tag"),
          axios.get("http://localhost:3000/api/admin/productManagement/size"),
          axios.get("http://localhost:3000/api/admin/product/category"),
        ]);

        setColors(colorRes.data || []);
        setFabrics(fabricRes.data || []);
        setTags(tagRes.data || []);
        setSizes(sizeRes.data || []);
        setCategories(categoryRes.data || []);
      } catch (err) {
        setError("Failed to fetch dropdown data");
        console.error("Dropdown fetch error:", err);
      }
    };

    fetchDropdownData();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file changes
  const handleFileChange = (e, field) => {
    if (field === "images") {
      setFiles((prev) => ({
        ...prev,
        images: Array.from(e.target.files),
      }));
    } else {
      setFiles((prev) => ({
        ...prev,
        [field]: e.target.files[0],
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validation
      if (!formData.name.trim()) {
        throw new Error("Product name is required");
      }
      if (!formData.mrp || isNaN(formData.mrp) || parseFloat(formData.mrp) <= 0) {
        throw new Error("Valid MRP is required");
      }
      if (!formData.productCategoryId) {
        throw new Error("Product category is required");
      }
      if (!formData.size) {
        throw new Error("At least one size is required");
      }
      if (!editingProduct && (!files.sizeChart || files.images.length === 0)) {
        throw new Error("Size chart and at least one product image are required");
      }
      if (formData.stocks && (isNaN(formData.stocks) || parseInt(formData.stocks) < 0)) {
        throw new Error("Valid stock quantity is required");
      }
      if (formData.Minstocks && (isNaN(formData.Minstocks) || parseInt(formData.Minstocks) < 0)) {
        throw new Error("Valid minimum stock quantity is required");
      }

      // Map productCategoryId to category name
      const selectedCategory = categories.find((cat) => cat._id === formData.productCategoryId);
      if (!selectedCategory) {
        throw new Error("Selected category is invalid");
      }

      const formDataToSend = new FormData();
      const formFields = {
        ...formData,
        category: selectedCategory.Category,
        size: formData.size, // Already a comma-separated string
        color: formData.color, // Already a comma-separated string
        offerPrice,
        description: description || undefined,
        additionalInfo: additionalInfo || undefined,
        status: formData.status === "active" ? "active" : "inactive",
      };

      // Append form fields to FormData
      Object.entries(formFields).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          formDataToSend.append(key, value);
        }
      });

      // Append files only if new ones are selected
      if (files.sizeChart) {
        formDataToSend.append("sizeChart", files.sizeChart);
      }
      files.images.forEach((file) => {
        formDataToSend.append("image", file);
      });

      const url = "http://localhost:3000/api/admin/category/product";
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
        params: editingProduct ? { productId: editingProduct._id } : {},
      };

      const response = await axios.post(url, formDataToSend, config);

      if (response.data.message) {
        alert(response.data.message);
        if (onSuccess) onSuccess(response.data.Product);
        // Reset form state
        setFormData({
          name: "",
          mrp: "",
          discount: "",
          category: "",
          tag: "",
          color: "",
          fabric: "",
          size: "",
          stocks: "",
          Minstocks: "",
          productCategoryId: "",
          status: "active",
        });
        setDescription("");
        setAdditionalInfo("");
        setFiles({ sizeChart: null, images: [] });
        closeModal();
      }
    } catch (error) {
      console.error("Submit error:", error);
      const errorMessage =
        error.response?.data?.error ||
        error.message ||
        "Failed to save product. Please check all required fields.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-h-[80vh] overflow-y-auto">
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">Product Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">MRP*</label>
            <input
              type="number"
              name="mrp"
              value={formData.mrp}
              onChange={handleInputChange}
              min="0"
              step="0.01"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Discount (%)</label>
            <input
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleInputChange}
              min="0"
              max="100"
              step="0.01"
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Offer Price</label>
            <div className="p-2 border rounded bg-gray-50">₹{offerPrice}</div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Stocks*</label>
            <input
              type="number"
              name="stocks"
              value={formData.stocks}
              onChange={handleInputChange}
              min="0"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Min Stocks</label>
            <input
              type="number"
              name="Minstocks"
              value={formData.Minstocks}
              onChange={handleInputChange}
              min="0"
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Product Category*</label>
            <select
              name="productCategoryId"
              value={formData.productCategoryId}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.Category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tag</label>
            <Dropdown
              options={tags.map((tag) => ({ label: tag.Tag, value: tag.Tag }))}
              value={formData.tag}
              onChange={(value) => setFormData((prev) => ({ ...prev, tag: value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Fabric</label>
            <Dropdown
              options={fabrics.map((fabric) => ({ label: fabric.Fabric, value: fabric.Fabric }))}
              value={formData.fabric}
              onChange={(value) => setFormData((prev) => ({ ...prev, fabric: value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Color</label>
            <MultiSelect
              options={colors.map((color) => ({ label: color.Color, value: color.Color }))}
              value={formData.color ? formData.color.split(",") : []}
              onChange={(values) => setFormData((prev) =>  
              ({ ...prev, color: values.join(",") }))}
              name="color"
            />
           

          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Size</label>
            {/* <MultiSelect
              options={sizes.map((size) => ({ label: size.Size, value: size.Size }))}
              value={formData.size ? formData.size.split(",") : []}
              onChange={(values) => setFormData((prev) => ({ ...prev, size: values.join(",") }))}
              name="size"
            /> */}
             <MultiSelect
              options={sizes.map((size) => ({ label: size.Size, value: size.Size }))}
              value={formData.size ? formData.size.split(",") : []}
              onChange={(values) => setFormData((prev) => ({ ...prev, size: values.join(",") }))}
              name="size"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">
              Size Chart* {!editingProduct && "(Required)"}
            </label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "sizeChart")}
              className="w-full p-2 border rounded"
              required={!editingProduct}
              accept="image/*"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">
              Product Images* {!editingProduct && "(At least 1 required)"}
            </label>
            <input
              type="file"
              multiple
              onChange={(e) => handleFileChange(e, "images")}
              className="w-full p-2 border rounded"
              required={!editingProduct}
              accept="image/*"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">Description</label>
            <div className="border rounded">
              <CKEditor
                editor={ClassicEditor}
                data={description}
                onChange={(e, editor) => setDescription(editor.getData())}
              />
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">Additional Information</label>
            <div className="border rounded">
              <CKEditor
                editor={ClassicEditor}
                data={additionalInfo}
                onChange={(e, editor) => setAdditionalInfo(editor.getData())}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={closeModal}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Processing..." : editingProduct ? "Update Product" : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
}