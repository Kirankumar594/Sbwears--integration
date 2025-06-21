// import React, { useState } from "react";

// const UpdateStockModal = ({ isOpen, onClose}) => {

//   const [stockName, setStockName] = useState("");
//   const [addedStock, setAddedStock] = useState("");
//   const [errors, setErrors] = useState({});

//   const handleUpdateStock = () => {
//     const newErrors = {};
//     if (!stockName) newErrors.stockName = "Please input the stock name!";
//     if (!addedStock) newErrors.addedStock = "Please input the stock quantity!";
//     setErrors(newErrors);
//     if (Object.keys(newErrors).length === 0) {
//       // Handle stock update logic
//       alert("Stock updated!");
//     }
//   };
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-lg w-2/3 max-w-3xl p-6">
//         <div className="flex justify-between items-center border-b pb-4">
//           <h2 className="text-lg font-semibold">Update Stock for Saree</h2>

//           <div className="flex justify-end">
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-800"
//           >
//             ✕
//           </button>
//         </div>
//         </div>
//         <div className="mt-4">
//           <div className="flex justify-between">
//             <span className="text-gray-600">Remaining Stock: <strong>1000</strong></span>
//             <span className="text-gray-600">Min Stock : 2</span>
//             <button className="bg-black text-white text-sm font-medium px-4 py-1 rounded hover:bg-gray-800">
//               Export Excel
//             </button>
//           </div>
//         </div>
//         <div className="mt-6">
//           <h3 className="font-semibold mb-2">Stock History</h3>
//           <table className="w-full border-collapse border-spacing-0 text-sm text-gray-600">
//             <thead>
//               <tr className="border-b text-left">
//                 <th className="py-2">Stock Name</th>
//                 <th className="py-2">Previous Stock</th>
//                 <th className="py-2">Added Stock</th>
//                 <th className="py-2">New Stock</th>
//                 <th className="py-2">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b">
//                 <td className="py-2">New Stock</td>
//                 <td className="py-2">0</td>
//                 <td className="py-2">1000</td>
//                 <td className="py-2">1000</td>
//                 <td className="py-2">Nov 30, 2024 7:33 PM</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <form className="mt-6">
//           <div className="mb-4">
//             <label className="block text-sm font-medium ">
//                Stock Name
//             </label>
//             <input
//               type="text"
//               value={stockName}
//               onChange={(e) => setStockName(e.target.value)}
//               placeholder="Enter stock name"
//               className={`w-full mt-1 px-3 py-2 border ${
//                 errors.stockName ? "border-red-500" : "border-gray-300"
//               } rounded-lg focus:outline-none focus:ring focus:ring-gray-200`}
//             />
//             {errors.stockName && (
//               <p className="text-sm text-red-500 mt-1">{errors.stockName}</p>
//             )}
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium">
//                Added Stock
//             </label>
//             <input
//               type="number"
//               value={addedStock}
//               onChange={(e) => setAddedStock(e.target.value)}
//               placeholder="Enter stock quantity"
//               className={`w-full mt-1 px-3 py-2 border ${
//                 errors.addedStock ? "border-red-500" : "border-gray-300"
//               } rounded-lg focus:outline-none focus:ring focus:ring-gray-200`}
//             />
//             {errors.addedStock && (
//               <p className="text-sm text-red-500 mt-1">{errors.addedStock}</p>
//             )}
//           </div>
//           <button
//             type="button"
//             onClick={handleUpdateStock}
//             className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
//           >
//             Update Stock
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateStockModal;
import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateStockModal = ({ isOpen, onClose, product, onStockUpdated }) => {
  console.log("product , ", product);
  const [formData, setFormData] = useState({
    size: "",
    stockName: "",
    addedStock: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sizes, setSizes] = useState([]);
  const [stockHistory, setStockHistory] = useState([]);
  const [currentStock, setCurrentStock] = useState(0);
  console.log("product : ", product);
  console.log("sizes : ", sizes);
  useEffect(() => {
    if (product) {
      // Fetch available sizes
      const fetchSizes = async () => {
        try {
          const response = await axios.get(
            "https://sbwears.com/api/admin/productManagement/size"
          );
          console.log("response : ", response);
          setSizes(response.data);
        } catch (err) {
          console.error("Failed to fetch sizes:", err);
        }
      };
      // Fetch stock history
      const fetchStockHistory = async () => {
        try {
          const response = await axios.get(
            `https://sbwears.com/api/admin/products/${product._id}/stock-history`
          );
          setStockHistory(response.data);
        } catch (err) {
          console.error("Failed to fetch stock history:", err);
        }
      };

      fetchSizes();
      fetchStockHistory();
    }
  }, [product]);

  useEffect(() => {
    if (formData.size && product?.stockBySize) {
      const sizeStock = product.stockBySize.find(
        (s) => s.size === formData.size
      );
      setCurrentStock(sizeStock ? sizeStock.quantity : 0);
    }
  }, [formData.size, product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.size) newErrors.size = "Please select a size";
    if (!formData.stockName) newErrors.stockName = "Please enter a stock name";
    if (
      !formData.addedStock ||
      isNaN(formData.addedStock) ||
      formData.addedStock <= 0
    ) {
      newErrors.addedStock = "Please enter a valid quantity";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);
      await axios.post(
        `https://sbwears.com/api/admin/products/${product._id}/stock`,
        formData
      );
      alert("Stock updated successfully!");
      onStockUpdated();
      onClose();
    } catch (error) {
      console.error("Error updating stock:", error);
      alert(error.response?.data?.error || "Failed to update stock");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 max-w-4xl p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-lg font-semibold">
            Update Stock for {product.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        <div className="mt-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex-1">
              <p className="text-gray-600">
                <strong>Current Stock:</strong> {currentStock}
              </p>
              <p className="text-gray-600">
                <strong>Min Stock:</strong> {product.minStock || 0}
              </p>
            </div>
            {/* <button className="bg-black text-white text-sm font-medium px-4 py-1 rounded hover:bg-gray-800 self-start">
              Export Excel
            </button> */}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Stock History</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm text-gray-600">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-2 px-2">Size</th>
                  <th className="py-2 px-2">Stock Name</th>
                  <th className="py-2 px-2">Previous</th>
                  <th className="py-2 px-2">Added</th>
                  <th className="py-2 px-2">New Stock</th>
                  <th className="py-2 px-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {stockHistory.map((history, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-2">{history.size}</td>
                    <td className="py-2 px-2">{history.stockName}</td>
                    <td className="py-2 px-2">{history.previousStock}</td>
                    <td className="py-2 px-2">+{history.addedStock}</td>
                    <td className="py-2 px-2">
                      {history.previousStock + history.addedStock}
                    </td>
                    <td className="py-2 px-2">
                      {new Date(history.addedAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Size*</label>
              <select
                name="size"
                value={formData.size}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border ${
                  errors.size ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring focus:ring-gray-200`}
              >
                <option value="">Select Size</option>
                {/* {sizes?.filter(size => product?.availableSizes?.includes(size))?.map(size => ( */}
                {product?.availableSizes?.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              {errors?.size && (
                <p className="text-sm text-red-500 mt-1">{errors.size}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Stock Name*
              </label>
              <input
                type="text"
                name="stockName"
                value={formData.stockName}
                onChange={handleInputChange}
                placeholder="e.g., New shipment"
                className={`w-full px-3 py-2 border ${
                  errors.stockName ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring focus:ring-gray-200`}
              />
              {errors.stockName && (
                <p className="text-sm text-red-500 mt-1">{errors.stockName}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Quantity to Add*
              </label>
              <input
                type="number"
                name="addedStock"
                value={formData.addedStock}
                onChange={handleInputChange}
                min="1"
                placeholder="Enter quantity"
                className={`w-full px-3 py-2 border ${
                  errors.addedStock ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring focus:ring-gray-200`}
              />
              {errors.addedStock && (
                <p className="text-sm text-red-500 mt-1">{errors.addedStock}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Stock"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateStockModal;
