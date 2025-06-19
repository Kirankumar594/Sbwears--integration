import { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const FilterSection = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-4  flex justify-between items-center text-left"
        onClick={onToggle}
      >
        <span className="text-sm tracking-widest  ">{title}</span>
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
 
 
function ProductInfo() {
  const [openSections, setOpenSections] = useState({
    description: false,
    style: false,
    size: false,
    material: false,
    specifications: false,
    seller: false,
  })

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return ( 
    <div className="max-w sticky top-0 mx-auto  max-h-[calc(400px)] overflow-y-auto">
 

      <FilterSection
        title="DESCRIPTION"
        isOpen={openSections.description}
        onToggle={() => toggleSection('description')}
      > 
        <div className="space-y-2 text-xs ">
           The Zarina ensemble is a glamorous 3-piece georgette straight suit set in a luxurious wine hue. A beautiful melange of mirrorwork, sequins, and embroidery on both the kurta and the palazzos is here to put the spotlight on you. Add bling to all your celebrations with the Zarina outfit.
         </div>
      </FilterSection>

      <FilterSection
        title="STYLE NOTES"
        isOpen={openSections.style}
        onToggle={() => toggleSection('style')}
        >
        <div className="space-y-2">
            
        </div>
    </FilterSection>
      <FilterSection 
        title="SIZE & FIT"
        isOpen={openSections.size}
        onToggle={() => toggleSection('size')}
      />

      <FilterSection
        title="MATERIAL"
        isOpen={openSections.material}
        onToggle={() => toggleSection('material')}
      />

      <FilterSection
        title="SPECIFICATIONS"
        isOpen={openSections.specifications}
        onToggle={() => toggleSection('specifications')}
      />
      <FilterSection
        title="SELLER INFORMATION"
        isOpen={openSections.seller}
        onToggle={() => toggleSection('seller')}
      />
    </div>
  )
}

export default ProductInfo 