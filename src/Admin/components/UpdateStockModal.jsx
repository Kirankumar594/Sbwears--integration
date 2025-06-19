import React, { useState } from "react"; 

const UpdateStockModal = ({ isOpen, onClose}) => {
  
  const [stockName, setStockName] = useState("");
  const [addedStock, setAddedStock] = useState("");
  const [errors, setErrors] = useState({});

  const handleUpdateStock = () => {
    const newErrors = {};
    if (!stockName) newErrors.stockName = "Please input the stock name!";
    if (!addedStock) newErrors.addedStock = "Please input the stock quantity!";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Handle stock update logic
      alert("Stock updated!");
    }
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-2/3 max-w-3xl p-6">
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-lg font-semibold">Update Stock for Saree</h2>
          
          <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div> 
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Remaining Stock: <strong>1000</strong></span>
            <span className="text-gray-600">Min Stock : 2</span>
            <button className="bg-black text-white text-sm font-medium px-4 py-1 rounded hover:bg-gray-800">
              Export Excel
            </button>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Stock History</h3>
          <table className="w-full border-collapse border-spacing-0 text-sm text-gray-600">
            <thead>
              <tr className="border-b text-left">
                <th className="py-2">Stock Name</th>
                <th className="py-2">Previous Stock</th>
                <th className="py-2">Added Stock</th>
                <th className="py-2">New Stock</th>
                <th className="py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">New Stock</td>
                <td className="py-2">0</td>
                <td className="py-2">1000</td>
                <td className="py-2">1000</td>
                <td className="py-2">Nov 30, 2024 7:33 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-sm font-medium ">
               Stock Name
            </label>
            <input
              type="text"
              value={stockName}
              onChange={(e) => setStockName(e.target.value)}
              placeholder="Enter stock name"
              className={`w-full mt-1 px-3 py-2 border ${
                errors.stockName ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring focus:ring-gray-200`}
            />
            {errors.stockName && (
              <p className="text-sm text-red-500 mt-1">{errors.stockName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">
               Added Stock
            </label>
            <input
              type="number"
              value={addedStock}
              onChange={(e) => setAddedStock(e.target.value)}
              placeholder="Enter stock quantity"
              className={`w-full mt-1 px-3 py-2 border ${
                errors.addedStock ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring focus:ring-gray-200`}
            />
            {errors.addedStock && (
              <p className="text-sm text-red-500 mt-1">{errors.addedStock}</p>
            )}
          </div>
          <button
            type="button"
            onClick={handleUpdateStock}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Update Stock
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateStockModal;
