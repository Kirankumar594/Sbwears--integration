import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const FilterSection = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="min-w-full border-b border-gray-200">
      <button
        className="flex items-center justify-between w-full py-4 text-left"
        onClick={onToggle}
      >
        <span className="text-sm font-medium tracking-widest">{title}</span>
        <span
          className={`transform  transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <MdOutlineKeyboardArrowDown className="w-6 h-8" />
        </span>
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
};

const sizes = [
  { label: "XS", count: 63 },
  { label: "S", count: 91 },
  { label: "M", count: 81 },
  { label: "L", count: 83 },
  { label: "XL", count: 72 },
  { label: "XXL", count: 42 },
  { label: "3XL", count: 2 },
  { label: "4XL", count: 4 },
  { label: "Onesize", count: 2 },
];

const colors = ["Bottle Green (6)", "Dusty Green (2)", "Green (73)"];
function Filter() {
  const [openSections, setOpenSections] = useState({
    size: false,
    colors: false,
    category: false,
    fabric: false,
    occasion: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const [size, setSize] = useState([]);
  const getSize = async () => {
    try {
      const res = await axios.get(
        "https://sbwears.com/api/admin/productManagement/size"
      );
      setSize(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSize();
  }, []);

  const [color, setColor] = useState([]);
  const getColor = async () => {
    try {
      const res = await axios.get(
        "https://sbwears.com/api/admin/productManagement/color"
      );
      console.log("res...........", res);
      setColor(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getColor();
  }, []);

  const [category, setCategory] = useState([]);
  const getCategory = async () => {
    try {
      const res = await axios.get(
        "https://sbwears.com/api/admin/product/category"
      );
      console.log("rescccccccccccc...........", res);
      setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const [occasion, setOccasion] = useState([]);

  const getOccasion = async () => {
    try {
      const res = await axios.get(
        "https://sbwears.com/api/admin/occasion/title"
      );
      console.log(res);
      setOccasion(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOccasion();
  }, []);

  const [fabric, setFabric] = useState([]);
  const getFabric = async () => {
    try {
      const res = await axios.get(
        "https://sbwears.com/api/admin/productManagement/fabric"
      );
      console.log("rescccccccccccc...........", res);
      setFabric(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFabric();
  }, []);

  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSizeToggle = (size) => {
    setSelectedSizes(
      (prev) =>
        prev.includes(size)
          ? prev.filter((s) => s !== size) // Remove if already selected
          : [...prev, size] // Add if not selected
    );
  };

  const [selectedColors, setSelectedColors] = useState([]);

  const handleColorToggle = (color) => {
    setSelectedColors(
      (prev) =>
        prev.includes(color)
          ? prev.filter((c) => c !== color) // Deselect if already selected
          : [...prev, color] // Select if not selected
    );
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
  };

  const [selectedFabric, setSelectedFabric] = useState("");

  const handleFabricSelect = (fabric) => {
    setSelectedFabric(fabric === selectedFabric ? "" : fabric);
  };

  return (
    <div className="max-w-xs sticky top-0 mx-auto p-4 max-h-[calc(100 -16 px)] overflow-y-auto">
      <div className="flex items-center pb-4 border-b ">
        <svg
          className="w-5 h-5 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
        <span className="text-lg font-medium tracking-widest">FILTER</span>
      </div>

      <FilterSection
        title="SIZE"
        isOpen={openSections.size}
        onToggle={() => toggleSection("size")}
      >
        <div className="flex flex-wrap gap-3 pt-2">
          {size.map((item) => (
            <button
              key={item.Size}
              onClick={() => handleSizeToggle(item.Size)}
              className={`w-12 h-12 text-sm rounded-md transition-colors duration-200 ${
                selectedSizes.includes(item.Size)
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {item.Size}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection
        title="COLORS"
        isOpen={openSections.colors}
        onToggle={() => toggleSection("colors")}
      >
        <div className="flex flex-wrap gap-4 pt-2">
          {color.map((item) => (
            <div
              key={item.Color}
              className="flex flex-col items-center space-y-1"
            >
              <button
                onClick={() => handleColorToggle(item.Color)}
                className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                  selectedColors.includes(item.Color)
                    ? "ring-2 ring-black"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: item.Color }}
                title={item.Color}
              />
              <span className="text-xs text-gray-700">{item.Color}</span>
            </div>
          ))}
        </div>
      </FilterSection>

      <FilterSection
        title="CATEGORY"
        isOpen={openSections.category}
        onToggle={() => toggleSection("category")}
      >
        <div className="flex flex-wrap gap-3 pt-2">
          {category.map((item) => (
            <button
              key={item.Category}
              onClick={() => handleCategorySelect(item.Category)}
              className={`px-3 py-1 text-sm rounded-full border transition-all duration-200 ${
                selectedCategory === item.Category
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {item.Category}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection
        title="FABRIC"
        isOpen={openSections.fabric}
        onToggle={() => toggleSection("fabric")}
      >
        <div className="flex flex-wrap gap-3 pt-2">
          {fabric.map((item) => (
            <button
              key={item.Fabric}
              onClick={() => handleFabricSelect(item.Fabric)}
              className={`px-3 py-1 text-sm rounded-full border transition-all duration-200 ${
                selectedFabric === item.Fabric
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {item.Fabric}
            </button>
          ))}
        </div>
      </FilterSection>
    </div>
  );
}

export default Filter;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";

// const FilterSection = ({ title, isOpen, onToggle, children }) => {
//   return (
//     <div className="min-w-full border-b border-gray-200">
//       <button
//         className="flex items-center justify-between w-full py-4 text-left"
//         onClick={onToggle}
//       >
//         <span className="text-sm font-medium tracking-widest">{title}</span>
//         <span
//           className={`transform transition-transform ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         >
//           <MdOutlineKeyboardArrowDown className="w-6 h-8" />
//         </span>
//       </button>
//       {isOpen && <div className="pb-4">{children}</div>}
//     </div>
//   );
// };

// function Filter({ products, onFilter }) {
//   // State for open/closed sections
//   const [openSections, setOpenSections] = useState({
//     size: false,
//     colors: false,
//     category: false,
//     fabric: false,
//   });

//   console.log(products, "products");

//   // Filter options from API
//   const [sizeOptions, setSizeOptions] = useState([]);
//   const [colorOptions, setColorOptions] = useState([]);
//   const [categoryOptions, setCategoryOptions] = useState([]);
//   const [fabricOptions, setFabricOptions] = useState([]);

//   // Selected filters
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedFabric, setSelectedFabric] = useState("");

//   // Fetch filter options
//   useEffect(() => {
//     const fetchFilterOptions = async () => {
//       try {
//         const [sizes, colors, categories, fabrics] = await Promise.all([
//           axios.get("https://sbwears.com/api/admin/productManagement/size"),
//           axios.get("https://sbwears.com/api/admin/productManagement/color"),
//           axios.get("https://sbwears.com/api/admin/product/category"),
//           axios.get("https://sbwears.com/api/admin/productManagement/fabric"),
//         ]);

//         setSizeOptions(sizes.data);
//         setColorOptions(colors.data);
//         setCategoryOptions(categories.data);
//         setFabricOptions(fabrics.data);
//       } catch (error) {
//         console.error("Error fetching filter options:", error);
//       }
//     };

//     fetchFilterOptions();
//   }, []);

//   // Apply filters when they change
//   useEffect(() => {
//     if (!products || products.length === 0) return;

//     const filteredProducts = products.filter(product => {
//       // Size filter
//       if (selectedSizes.length > 0 && product.size) {
//         const hasSize = selectedSizes.some(size =>
//           product.size.includes(size)
//         );
//         if (!hasSize) return false;
//       }

//       // Color filter
//       if (selectedColors.length > 0 && product.color) {
//         const hasColor = selectedColors.some(color =>
//           product.color.includes(color.Color) // Assuming color.Color contains the color value
//         );
//         if (!hasColor) return false;
//       }

//       // Category filter
//       if (selectedCategory && product.category !== selectedCategory) {
//         return false;
//       }

//       // Fabric filter
//       if (selectedFabric && product.fabric !== selectedFabric) {
//         return false;
//       }

//       return true;
//     });

//     onFilter(filteredProducts);
//   }, [
//     selectedSizes,
//     selectedColors,
//     selectedCategory,
//     selectedFabric,
//     products,
//     onFilter
//   ]);

//   const toggleSection = (section) => {
//     setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
//   };

//   const handleSizeToggle = (size) => {
//     setSelectedSizes(prev =>
//       prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
//     );
//   };

//   const handleColorToggle = (color) => {
//     setSelectedColors(prev =>
//       prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
//     );
//   };

//   const handleCategorySelect = (category) => {
//     console.log(category)
//     setSelectedCategory(category === selectedCategory ? "" : category);
//   };

//   const handleFabricSelect = (fabric) => {
//     setSelectedFabric(fabric === selectedFabric ? "" : fabric);
//   };

//   return (
//     <div className="max-w-xs sticky top-0 mx-auto p-4 max-h-[calc(100vh-16px)] overflow-y-auto">
//       <div className="flex items-center pb-4 border-b">
//         <svg
//           className="w-5 h-5 mr-2"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
//           />
//         </svg>
//         <span className="text-lg font-medium tracking-widest">FILTER</span>
//       </div>

//       <FilterSection
//         title="SIZE"
//         isOpen={openSections.size}
//         onToggle={() => toggleSection("size")}
//       >
//         <div className="flex flex-wrap gap-3 pt-2">
//           {sizeOptions.map((item) => (
//             <button
//               key={item.Size}
//               onClick={() => handleSizeToggle(item.Size)}
//               className={`w-12 h-12 text-sm rounded-md transition-colors duration-200 ${
//                 selectedSizes.includes(item.Size)
//                   ? "bg-black text-white"
//                   : "bg-gray-200 text-black"
//               }`}
//             >
//               {item.Size}
//             </button>
//           ))}
//         </div>
//       </FilterSection>

//       <FilterSection
//         title="COLORS"
//         isOpen={openSections.colors}
//         onToggle={() => toggleSection("colors")}
//       >
//         <div className="flex flex-wrap gap-4 pt-2">
//           {colorOptions.map((item) => (
//             <div
//               key={item.Color}
//               className="flex flex-col items-center space-y-1"
//             >
//               <button
//                 onClick={() => handleColorToggle(item.Color)}
//                 className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
//                   selectedColors.includes(item.Color)
//                     ? "ring-2 ring-black"
//                     : "border-gray-300"
//                 }`}
//                 style={{ backgroundColor: item.Color }}
//                 title={item.Color}
//               />
//               <span className="text-xs text-gray-700">{item.Color}</span>
//             </div>
//           ))}
//         </div>
//       </FilterSection>

//       <FilterSection
//         title="CATEGORY"
//         isOpen={openSections.category}
//         onToggle={() => toggleSection("category")}
//       >
//         <div className="flex flex-wrap gap-3 pt-2">
//           {categoryOptions.map((item) => (
//             <button
//               key={item.Category}
//               onClick={() => handleCategorySelect(item.Category)}
//               className={`px-3 py-1 text-sm rounded-full border transition-all duration-200 ${
//                 selectedCategory === item.Category
//                   ? "bg-black text-white border-black"
//                   : "bg-white text-gray-700 border-gray-300"
//               }`}
//             >
//               {item.Category}
//             </button>
//           ))}
//         </div>
//       </FilterSection>

//       <FilterSection
//         title="FABRIC"
//         isOpen={openSections.fabric}
//         onToggle={() => toggleSection("fabric")}
//       >
//         <div className="flex flex-wrap gap-3 pt-2">
//           {fabricOptions.map((item) => (
//             <button
//               key={item.Fabric}
//               onClick={() => handleFabricSelect(item.Fabric)}
//               className={`px-3 py-1 text-sm rounded-full border transition-all duration-200 ${
//                 selectedFabric === item.Fabric
//                   ? "bg-black text-white border-black"
//                   : "bg-white text-gray-700 border-gray-300"
//               }`}
//             >
//               {item.Fabric}
//             </button>
//           ))}
//         </div>
//       </FilterSection>
//     </div>
//   );
// }

// export default Filter;
