import { React, useState } from "react";
import { previousProducts } from "../../data/dummyData";
import { CiSearch } from "react-icons/ci";
import Switch from "react-switch";
import { FaArrowUp } from "react-icons/fa6";
import UpdateStockModal from "./UpdateStockModal";

export default function Stock() {
  const [switches, setSwitches] = useState([]);
  const [openStock, setOpenStock] = useState(false);

  const closeStock = () => setOpenStock(false);

  const handleSwitchChange = (index, nextChecked) => {
    const updatedSwitches = [...switches];
    updatedSwitches[index] = nextChecked;
    setSwitches(updatedSwitches);
  };

  return (
    <div className="flex flex-col w-full overflow-x-auto">
      <p className="text-xl p-8 font-bold">Stock Management</p>

      {/* Search Bar */}
      <div className="flex flex-row items-center gap-3 border mx-5 p-3 shadow-lg w-80% rounded-xl">
        <CiSearch className="w-5 h-5" />
        <input
          className="w-full focus:outline-none"
          placeholder="Search Product..."
        />
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto rounded-xl my-5 mx-5 p-5 shadow-lg">
        <table className="table-auto w-full rounded-xl border-gray-200">
          <thead>
            <tr className="bg-black text-white ">
              <th className=" font-black border-b px-4 py-5 border-gray-300">ID</th>
              <th className="p-4 font-black border-b border-gray-300">Product Name</th>
              <th className="p-4 font-black border-b border-gray-300">Offer Price</th>
              <th className="p-4 font-black border-b border-gray-300">Category</th>
              <th className="p-4 font-black border-b border-gray-300">Occasion</th>
              <th className="p-4 font-black border-b border-gray-300">Current Stock</th>
              <th className="p-4 font-black border-b border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {previousProducts.map((product, index) => (
              <tr key={index} className="text-center border-b hover:bg-gray-50">
                <td className="px-4 py-5 border-b border-gray-300">{product.id}</td>
                <td className="p-2 border-b border-gray-300">{product.title}</td>
                <td className="p-2 border-b border-gray-300">{product.price}</td>
                <td className="p-2 border-b border-gray-300">{product.category}</td>
                <td className="p-2 border-b border-gray-300">{product.occasion}</td>
                <td className="p-2 border-b border-gray-300">
                  <span
                    className="cursor-pointer text-green-500 flex flex-row items-center gap-1 justify-center"
                    onClick={() => setOpenStock(true)}
                  >
                    {product.stock} <FaArrowUp />
                  </span>
                </td>
                <td className="p-2 border-b border-gray-300">
                  <Switch
                    key={index}
                    onChange={(nextChecked) =>
                      handleSwitchChange(index, nextChecked)
                    }
                    checked={switches[index] || false}
                    className="react-switch"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Stock Modal */}
      {openStock && (
        <UpdateStockModal isOpen={openStock} onClose={closeStock} />
      )}
    </div>
  );
}
