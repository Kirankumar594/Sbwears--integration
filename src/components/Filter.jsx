import { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const FilterSection = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="border-b min-w-full border-gray-200">
      <button 
        className="w-full py-4  flex justify-between items-center text-left"
        onClick={onToggle}
      >
        <span className="text-sm tracking-widest font-medium">{title}</span>
        <span className={`transform  transition-transform ${isOpen ? 'rotate-180' : ''}`}>
           <MdOutlineKeyboardArrowDown className="w-6 h-8" />
        </span>
      </button>
      {isOpen && (
        <div className="pb-4">
          {children}
        </div>
      )}
    </div>
  )
}

const sizes = [
  { label: 'XS', count: 63 },
  { label: 'S', count: 91 },
  { label: 'M', count: 81 },
  { label: 'L', count: 83 },
  { label: 'XL', count: 72 },
  { label: 'XXL', count: 42 },
  { label: '3XL', count: 2 },
  { label: '4XL', count: 4 },
  { label: 'Onesize', count: 2 },
]

const colors = [
    "Bottle Green (6)",
    "Dusty Green (2)",
    "Green (73)"
]
function Filter() {
  const [openSections, setOpenSections] = useState({
    size: false,
    colors: false,
    category: false,
    fabric: false,
    occasion: false,
  })

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return ( 
    <div className="max-w-xs sticky top-0 mx-auto p-4 max-h-[calc(100 -16 px)] overflow-y-auto">
      <div className="flex items-center border-b pb-4 "> 
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        <span className="text-lg tracking-widest font-medium">FILTER</span>
      </div> 

      <FilterSection
        title="SIZE"
        isOpen={openSections.size}
        onToggle={() => toggleSection('size')}
      > 
        <div className="space-y-2">
          {sizes.map((size) => (
            <label key={size.label} className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-black rounded border-gray-300" />
              <span className="ml-2 text-sm">{size.label} ({size.count})</span>
            </label>
          ))}
          <button className="text-sm mt-2">Show less</button>
        </div>
      </FilterSection>

      <FilterSection
        title="COLORS"
        isOpen={openSections.colors}
        onToggle={() => toggleSection('colors')}
        >
        <div className="space-y-2">
          {colors.map((size) => (
            <label key={size.label} className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-black rounded border-gray-300" />
              <span className="ml-2 text-sm">{size}</span>
            </label>
          ))}
          <button className="text-sm mt-2">Show less</button>
        </div>
    </FilterSection>
      <FilterSection
        title="CATEGORY"
        isOpen={openSections.category}
        onToggle={() => toggleSection('category')}
      />

      <FilterSection
        title="FABRIC"
        isOpen={openSections.fabric}
        onToggle={() => toggleSection('fabric')}
      />

      <FilterSection
        title="OCCASION"
        isOpen={openSections.occasion}
        onToggle={() => toggleSection('occasion')}
      />
    </div>
  )
}

export default Filter