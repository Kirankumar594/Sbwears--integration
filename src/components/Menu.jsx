import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const FilterSection = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-4  flex justify-between items-center text-left"
        onClick={onToggle}
      >
        <span className="text-sm tracking-widest  font-medium">{title}</span>
        <span
          className={`transform mr-5 transition-transform ${
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

function Menu() {
  const [openSections, setOpenSections] = useState({
    topDis : false,
    specialDis : false,
    newarrivals : false,
    toprated  :false,
    bestseller : false, 
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="max-w-xs sticky top-0 ml-8    max-h-[calc(100 -16 px)] overflow-y-auto">
      {/* <div className="border-b border-gray-200">
        <button
          className="w-full py-4  flex justify-between items-center text-left"
         >
          <span className="text-sm tracking-widest  font-medium">SALE</span>
         </button> 
      </div> */}

      <FilterSection
        title="TOP DISCOUNT"
        isOpen={openSections.topDis}
        onToggle={() => toggleSection("topDis")}
      >
        <div className="space-y-2"> 
            <div className="flex flex-col tracking-widest " > 
              <span className="ml-1 mb-2 text-xs flex flex-row gap-2"> <input type="checkbox"/> 10% - 20%</span> 
              <span className="ml-1 mb-2 text-xs flex flex-row gap-2"> <input type="checkbox"/> 20% - 30%</span> 
              <span className="ml-1 mb-2 text-xs flex flex-row gap-2"> <input type="checkbox"/> 30% - 40%</span> 
            </div> 
        </div>
      </FilterSection>
      <FilterSection
        title="SPECIAL OFFERS"
        isOpen={openSections.specialDis}
        onToggle={() => toggleSection("specialDis")}
      >
        <div className="space-y-2"> 
            <div className="flex flex-col tracking-widest " > 
              <span className="ml-1 mb-2 text-xs flex flex-row gap-2"> <input type="checkbox"/> Buy 1 Get 1</span> 
              <span className="ml-1 mb-2 text-xs flex flex-row gap-2"> <input type="checkbox"/> Buy 4 for ₹2999</span> 
              {/* <span className="ml-1 mb-2 text-xs flex flex-row gap-2"> <input type="checkbox"/> 30% - 40%</span>  */}
            </div> 
        </div>
      </FilterSection> 
      <FilterSection
        title="NEW ARRIVALS"
        isOpen={openSections.wedding}
        onToggle={() => toggleSection("wedding")}>
            <div className="space-y-2"> 
            <div className="flex flex-col  tracking-widest " > 
              <span className="ml-1 mb-2 cursor-pointer text-xs">Haldi Essentials</span> 
              <span className="ml-1 mb-2 cursor-pointer text-xs">Sangeet Swag</span>
              <span className="ml-1 mb-2 cursor-pointer text-xs">Sangeet Swag</span>
              <span className="ml-1 mb-2 cursor-pointer text-xs">Mehendi Magic</span>
              <span className="ml-1  mb-2 cursor-pointer text-xs">The Wedding Edit</span>
              <span className="ml-1  mb-2 cursor-pointer text-xs">Coctail Classics</span>
            </div> 
        </div>
        </FilterSection>
  
        {/* <div className="border-b border-gray-200">
        <button
          className="w-full py-4  flex justify-between items-center text-left"
          
        >
          <span className="text-sm tracking-widest  font-medium"></span>
           
        </button> 
      </div> */}
      <div className="border-b border-gray-200">
        <button
          className="w-full py-4  flex justify-between items-center text-left"
          
        >
          <span className="text-sm tracking-widest  font-medium">TOP RATED</span>
           
        </button> 
      </div>
      <div className="border-b border-gray-200">
        <button
          className="w-full py-4  flex justify-between items-center text-left"
          
        >
          <span className="text-sm tracking-widest  font-medium">BEST SELLER</span>
           
        </button> 
      </div> 
       
    </div>
  );
}

export default Menu;
