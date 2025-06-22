import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
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
          className={`transform transition-transform ${
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

const Filter = ({ productsData, onFilter }) => {
  const [openSections, setOpenSections] = useState({
    size: false,
    colors: false,
    category: false,
    fabric: false,
    occasion: false,
  });

  const [sizeOptions, setSizeOptions] = useState([]);
  const [colorOptions, setColorOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [fabricOptions, setFabricOptions] = useState([]);
  const [occasionOptions, setOccasionOptions] = useState([]);

  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFabric, setSelectedFabric] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState("");

  // Fetch filter options
  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const [sizes, colors, categories, fabrics, occasions] =
          await Promise.all([
            axios.get("https://sbwears.com/api/admin/productManagement/size"),
            axios.get("https://sbwears.com/api/admin/productManagement/color"),
            axios.get("https://sbwears.com/api/admin/product/category"),
            axios.get("https://sbwears.com/api/admin/productManagement/fabric"),
            axios.get("https://sbwears.com/api/admin/occasion/title"),
          ]);

        setSizeOptions(sizes.data || []);
        setColorOptions(colors.data || []);
        setCategoryOptions(categories.data || []);
        setFabricOptions(fabrics.data || []);
        setOccasionOptions(occasions.data || []);
      } catch (error) {
        console.error("Error fetching filter options:", error);
      }
    };

    fetchFilterOptions();
  }, []);

  // Apply filters
  useEffect(() => {
    if (!Array.isArray(productsData)) {
      onFilter([]);
      return;
    }

    const filteredProducts = productsData.filter((product) => {
      // Size filter
      console.log("product : " , product)
      if (selectedSizes.length > 0 && product.availableSizes) {
        const hasSize = selectedSizes.some((size) =>
          product?.availableSizes?.includes(size)
        );
        if (!hasSize) return false;
      }

      // Color filter
      if (selectedColors.length > 0 && product.color) {
        const hasColor = selectedColors.some((color) =>
          product.color.includes(color)
        );
        if (!hasColor) return false;
      }

      // Category filter
      if (selectedCategory && product.category !== selectedCategory) {
        return false;
      }

      // Fabric filter
      if (selectedFabric && product.fabric !== selectedFabric) {
        return false;
      }

      // Occasion filter
      if (selectedOccasion && product.occasion !== selectedOccasion) {
        return false;
      }

      return true;
    });

    onFilter(filteredProducts);
  }, [
    selectedSizes,
    selectedColors,
    selectedCategory,
    selectedFabric,
    selectedOccasion,
    productsData,
    onFilter,
  ]);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleSizeToggle = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleColorToggle = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
  };

  const handleFabricSelect = (fabric) => {
    setSelectedFabric(fabric === selectedFabric ? "" : fabric);
  };

  const handleOccasionSelect = (occasion) => {
    setSelectedOccasion(occasion === selectedOccasion ? "" : occasion);
  };

  return (
    <div className="w-full sticky top-0 mx-auto p-4 max-h-[calc(100vh-16px)] overflow-y-auto">
      <button
        onClick={() => {
          setSelectedSizes([]);
          setSelectedColors([]);
          setSelectedCategory("");
          setSelectedFabric("");
          setSelectedOccasion("");
        }}
        className="w-full my-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm font-semibold rounded"
      >
        Reset Filters
      </button>
      <div className="flex items-center pb-4 border-b">
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
          {sizeOptions.map((item) => (
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
          {colorOptions.map((item) => (
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
          {categoryOptions.map((item) => (
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
          {fabricOptions.map((item) => (
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
};

export default function ProductsListing() {
  const navigate = useNavigate();
  const handleClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const location = useLocation();
  const [sortOrder, setSortOrder] = useState("");

  const getProducts = async () => {
    try {
      const res = await axios.get("https://sbwears.com/api/admin/category/product");
      let allProducts = res.data.products || [];

      // Get search and category params
      const searchParams = new URLSearchParams(location.search);
      const searchQuery = searchParams.get("search")?.toLowerCase();
      const categoryQuery = searchParams.get("category");

      // Filter by search keyword
      if (searchQuery) {
        allProducts = allProducts.filter(
          (p) =>
            p.name?.toLowerCase().includes(searchQuery) ||
            p.description?.toLowerCase().includes(searchQuery)
        );
      }

      // Filter by category ID
      if (categoryQuery) {
        allProducts = allProducts.filter(
          (p) => p.productCategory === categoryQuery
        );
      }

      // Apply sort if present
      if (sortOrder === "lowToHigh") {
        allProducts.sort((a, b) => a.offerPrice - b.offerPrice);
      } else if (sortOrder === "highToLow") {
        allProducts.sort((a, b) => b.offerPrice - a.offerPrice);
      }

      setProducts(allProducts);
      setFilteredProducts(allProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
      setFilteredProducts([]);
    }
  };

  useEffect(() => {
    getProducts();
  }, [location.search, sortOrder]);


  return (
    <div className="container flex flex-col  mx-auto mt-5 lg:flex-row"> 
      <div className="w-full lg:w-[30%]  mr-10 text-black rounded-md lg:block">
        <Filter productsData={products} onFilter={setFilteredProducts} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/*Product Count/Sort */}
        <div className="flex-row justify-between hidden lg:flex">
          <p className="mt-5 mb-5 text-xs text-gray-900">
            {filteredProducts.length} products
          </p>
          <div className="flex flex-row justify-between"> 
            <select
              className="ml-4 mt-4 border border-gray-300 text-sm rounded px-2 py-1"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="mb-6 hover:cursor-pointer"
              onClick={() => handleClick(product._id)}
            >
              <img
                className="h-80% w-60% object-cover object-center"
                src={`https://sbwears.com/image/${product.images[0]}`}
                alt={product.name}
              />
              <p
                className="pt-2 pl-2 text-xs text-gray-900 truncate"
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></p>
              <div className="flex flex-row">
                <p className="pt-2 pl-2 text-xs text-gray-900 line-through">
                  ₹ {product.mrp}
                </p>
                <p className="pt-2 pl-2 text-xs text-gray-900">
                  ₹ {product.offerPrice}
                </p>
                <p className="pt-2 pl-2 text-xs text-red-400">
                  {product.discount} % off
                </p>
              </div> 
              <p className="pt-2 pl-2 text-xs text-gray-900">{product.availableSizes?.join(" ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
