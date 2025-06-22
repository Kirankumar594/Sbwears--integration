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
 
 
function ProductInfo({product}) {
  console.log("product 123: " , product)
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
  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };
  return ( 
    <div className="max-w sticky top-0 mx-auto  max-h-[calc(400px)] overflow-y-auto">
 

      <FilterSection
        title="DESCRIPTION"
        isOpen={openSections.description}
        onToggle={() => toggleSection('description')}
      > 
<div
  className="space-y-2 text-xs"
  dangerouslySetInnerHTML={{ __html: product?.description }}
/>

      </FilterSection>
 
      <FilterSection 
        title="SIZE & FIT"
        isOpen={openSections.size}
        onToggle={() => toggleSection('size')}
      >
        <img src={`https://sbwears.com/image/${product.sizeChart}`}/>
</FilterSection>
      {/* <FilterSection
        title="MATERIAL"
        isOpen={openSections.material}
        onToggle={() => toggleSection('material')}
      /> */}

      <FilterSection
        title="SPECIFICATIONS"
        isOpen={openSections.specifications}
        onToggle={() => toggleSection('specifications')}
      >
      <div
        className="space-y-2 text-xs"
        dangerouslySetInnerHTML={{ __html: product?.additionalInfo }}
      />

      </FilterSection>
      {/* <FilterSection
        title="SELLER INFORMATION"
        isOpen={openSections.seller}
        onToggle={() => toggleSection('seller')}
      >
      <div
        className="space-y-2 text-xs"
        dangerouslySetInnerHTML={{ __html: product?.additionalInfo }}
      />

      </FilterSection> */}
    </div>
  )
}

export default ProductInfo 