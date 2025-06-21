// import { React, useState } from "react";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { previousProducts } from "../../data/dummyData";
// import Modal from "./Modal";
// import FileImport from "./FileImport";
// import { IoCloudDownloadOutline } from "react-icons/io5";
// import { MdAddShoppingCart } from "react-icons/md";
// import { BiSpreadsheet } from "react-icons/bi";
// import { CiImageOn } from "react-icons/ci";
// import { AiOutlineStock } from "react-icons/ai";
// import { CiSearch } from "react-icons/ci";
// import { LuEye } from "react-icons/lu";
// import Switch from "react-switch";
// import OccForm from "./OccForm";
// import OccViewProduct from "./OccViewProduct";
// import { MdOutlineEdit } from "react-icons/md";

// export default function OccProduct() {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [isProductDeatilOpen, setProductDetailOpen] = useState(false);

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   const openProductDetail = () => setProductDetailOpen(true);
//   const closeProductDetail = () => setProductDetailOpen(false);

//   const [switches, setSwitches] = useState([]);

//   const handleSwitchChange = (index, nextChecked) => {
//     const updatedSwitches = [...switches];
//     updatedSwitches[index] = nextChecked;
//     setSwitches(updatedSwitches);
//   };

//   return (
//     <div className="flex flex-col  w-full overflow-auto">
//       <div className="bg-white rounded-xl my-5 mx-5 p-8 shadow-lg w-80%  ">
//         <p className="text-xl font-bold">Product Management</p>
//         <div className="flex flex-row gap-3">
//           <div>
//             <button className="mt-5 bg-black flex flex-row gap-2 items-center text-white px-4 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
//               <IoCloudDownloadOutline /> Excel Template
//             </button>
//           </div>
//           <div>
//             <button
//               onClick={openModal}
//               className="mt-5 bg-black flex flex-row gap-2 items-center text-white px-4 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
//             >
//               <MdAddShoppingCart />
//               Add Product
//             </button>
//           </div>
//           <div>
//             <FileImport name={"Import Excel"} icon={<BiSpreadsheet />} />
//           </div>

//           <div>
//             <FileImport name={"Upload Images"} icon={<CiImageOn />} />
//           </div>
//           <div>
//             <button className="mt-5 bg-black flex flex-row gap-2 items-center text-white px-4 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
//               <BiSpreadsheet />
//               Export Excel
//             </button>
//           </div>
//           <div>
//             <button className="mt-5 bg-black flex flex-row gap-2 items-center text-white px-4 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
//               <AiOutlineStock />
//               Stock
//             </button>
//           </div>
//         </div>
//         <Modal isOpen={isModalOpen} onClose={closeModal}>
//           <OccForm />
//         </Modal>
//       </div>
//       <div className="flex flex-row items-center gap-3 border   mx-5 p-3  shadow-lg w-80% rounded-xl ">
//         <CiSearch className="w-5 h-5" />
//         <input
//           className="w-full   focus:outline-none"
//           placeholder="Search Product..."
//         />
//       </div>
//       <div className="bg-white rounded-xl my-5 mx-5 p-8 shadow-lg w-80%  ">
//         <p className="text-xl font-bold p-3 pt-0">Products 345</p>
//         <div className="flex flex-col gap-5 justify-between">
//           <div className="flex flex-row bg-black justify-between border-b p-4 rounded-lg">
//             <p className="font-black text-white  ">ID</p>
//             <p className="font-black text-white  ">Product Name</p>
//             <p className="font-black text-white  ">Offer Price</p>
//             <p className="font-black text-white ">Category</p>
//             {/* <p className="font-black text-white ">Occasion</p> */}
//             <p className="font-black text-white ">Status</p>
//             <p className="font-black text-white ">Stock</p>
//             <p className="font-black text-white ">Action</p>
//           </div>
//           {previousProducts.map((product, index) => (
//             <div
//               className="flex flex-row justify-between border-b p-2"
//               key={index}
//             >
//               <div className="flex flex-col gap-2 items-center justify-center">
//                 <p>{product.id}</p>
//               </div>
//               <div className="flex flex-col gap-2 items-center justify-center">
//                 <p>{product.title}</p>
//               </div>

//               <div className="flex flex-col gap-2 items-center justify-center">
//                 <p>{product.price}</p>
//               </div>
//               <div className="flex flex-col gap-2 items-center justify-center">
//                 <p>{product.category}</p>
//               </div>
//               {/* <div className="flex flex-col gap-2 items-center justify-center">
//                 <p>{product.occasion}</p>
//               </div> */}
//               <div className="flex flex-col gap-2 items-center justify-center">
//                 <Switch
//                   key={index}
//                   onChange={(nextChecked) =>
//                     handleSwitchChange(index, nextChecked)
//                   }
//                   checked={switches[index] || false}
//                   className="react-switch"
//                 />
//               </div>
//               <div className="flex flex-col gap-2 items-center justify-center">
//                 <p>{product.stock}</p>
//               </div>
//               <div className="flex flex-row items-center justify-center gap-2">
//                 <button className="">
//                   <LuEye onClick={openProductDetail} />
//                 </button>
//                 <button className=" ">
//                   <MdOutlineEdit onClick={openModal} className="h-5 w-5" />
//                 </button>
//                 <button className="">
//                   <RiDeleteBin6Line className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Modal isOpen={isProductDeatilOpen} onClose={closeProductDetail}>
//         <OccViewProduct />
//       </Modal>
//     </div>
//   );
// }
import { React, useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Modal from "./Modal";
import FileImport from "./FileImport";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { BiSpreadsheet } from "react-icons/bi";
import { CiImageOn } from "react-icons/ci";
import { AiOutlineStock } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import Switch from "react-switch";
import OccForm from "./OccForm";
import OccViewProduct from "./OccViewProduct";
import { MdOutlineEdit } from "react-icons/md";
import axios from "axios";

export default function OccProduct() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isProductDetailOpen, setProductDetailOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://sbwears.com/api/admin/category/product"
      );
      setProducts(response.data.products || []);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to fetch products");
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const openModal = () => {
    setSelectedProduct(null); // Reset selected product when adding new
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setProductDetailOpen(true);
  };

  const closeProductDetail = () => setProductDetailOpen(false);

  const handleSwitchChange = async (productId, currentStatus) => {
    try {
      setLoading(true);
      const newStatus = !currentStatus;
      await axios.put(
        `https://sbwears.com/api/admin/category/product/${productId}/status`,
        {
          status: newStatus,
        }
      );
      fetchProducts(); // Refresh the product list
    } catch (err) {
      setError(err.response?.data?.error || "Failed to update product status");
      console.error("Error updating product status:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        setLoading(true);
        await axios.delete(
          `https://sbwears.com/api/admin/category/product/${productId}`
        );
        fetchProducts(); // Refresh the product list
      } catch (err) {
        setError(err.response?.data?.error || "Failed to delete product");
        console.error("Error deleting product:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full overflow-auto">
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
        <p className="text-xl font-bold">Product Management</p>
        <div className="flex flex-row gap-3">
          {/* <div>
            <button className="mt-5 bg-black flex flex-row gap-2 items-center text-white px-4 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
              <IoCloudDownloadOutline /> Excel Template
            </button>
          </div> */}
          <div>
            <button
              onClick={openModal}
              className="mt-5 bg-black flex flex-row gap-2 items-center text-white px-4 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              disabled={loading}
            >
              <MdAddShoppingCart />
              {loading ? "Loading..." : "Add Product"}
            </button>
          </div>
          {/* <div>
            <FileImport name={"Import Excel"} icon={<BiSpreadsheet />} />
          </div>
          <div>
            <FileImport name={"Upload Images"} icon={<CiImageOn />} />
          </div>
          <div>
            <button className="mt-5 bg-black flex flex-row gap-2 items-center text-white px-4 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
              <BiSpreadsheet />
              Export Excel
            </button>
          </div>
          <div>
            <button className="mt-5 bg-black flex flex-row gap-2 items-center text-white px-4 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
              <AiOutlineStock />
              Stock
            </button>
          </div> */}
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <OccForm
            closeModal={closeModal}
            editingProduct={selectedProduct}
            onSuccess={fetchProducts}
          />
        </Modal>
      </div>

      <div className="flex flex-row items-center gap-3 border mx-5 p-3 shadow-lg w-80% rounded-xl">
        <CiSearch className="w-5 h-5" />
        <input
          className="w-full focus:outline-none"
          placeholder="Search Product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-xl my-5 mx-5 p-8 shadow-lg w-80%">
        <p className="text-xl font-bold p-3 pt-0">
          Products {filteredProducts.length}
        </p>
        {loading ? (
          <div className="text-center py-10">Loading products...</div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-10">No products found</div>
        ) : (
          <div className="flex flex-col gap-5 justify-between">
            <div className="flex flex-row bg-black justify-between border-b p-4 rounded-lg">
              <p className="font-black text-white">ID</p>
              <p className="font-black text-white">Product Name</p>
              <p className="font-black text-white">Offer Price</p>
              <p className="font-black text-white">Category</p>
              <p className="font-black text-white">Status</p>
              <p className="font-black text-white">Stock</p>
              <p className="font-black text-white">Action</p>
            </div>
            {filteredProducts.map((product, index) => (
              <div
                className="flex flex-row justify-between border-b p-2"
                key={product._id}
              >
                <div className="flex flex-col gap-2 items-center justify-center">
                  <p>{product._id.substring(0, 6)}</p> {/* Shortened ID */}
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                  <p>{product.name}</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                  <p>₹{product.offerPrice?.toFixed(2)}</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                  <p>{product.category}</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                  <Switch
                    onChange={() =>
                      handleSwitchChange(product._id, product.status)
                    }
                    checked={product.status}
                    className="react-switch"
                  />
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                  <p>{product.stocks}</p>
                </div>
                <div className="flex flex-row items-center justify-center gap-2">
                  <button onClick={() => openProductDetail(product)}>
                    <LuEye className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedProduct(product);
                      setModalOpen(true);
                    }}
                  >
                    <MdOutlineEdit className="h-5 w-5" />
                  </button>
                  <button onClick={() => handleDelete(product._id)}>
                    <RiDeleteBin6Line className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Modal isOpen={isProductDetailOpen} onClose={closeProductDetail}>
        {selectedProduct && <OccViewProduct product={selectedProduct} />}
      </Modal>
    </div>
  );
}
