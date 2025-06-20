import React from 'react';
import SB from './Assets/SB_WEARS.png';
import S1 from './Assets/sb_wears.jpg';
import shirt from './Assets/cloth2.jpg';
 
const Navbar = () => {
  return (
    <div>
    <nav className="flex items-center justify-between bg-white p-4 shadow-md sticky top-0 z-10">
      
      <div className="flex items-center space-x-4">
        
        <button className="text-black text-2xl">
          ☰
        </button>

       
        <button className="text-black text-2xl  p-2 rounded-md">
        ⌕
        </button>
      </div>

    
      <div className="flex items-center">
        <img
          src={SB}
          alt="Logo"
          className="h-10 w-10"
        />
        
      </div>

     
      {/* <div className="flex items-center space-x-4">
        
        <button className="text-black text-3xl flex items-center space-x-1">
          <span>♡</span>
          
        </button>

        
        <button className="text-2xl flex items-center space-x-1">
          <span>🛒</span>
          
        </button>
      </div> */}
    </nav>

    <div className="flex justify-left space-x-4 bg-gray-100 py-3">
        <button className=" text-black rounded-md ml-3">
          Home  /
        </button>
        <button className="  text-black rounded-md ">
          SB WEARS
        </button>
      </div>
      <div className="w-full  m-0">
  <img
    src={S1}  
    alt="Cloth"
    className="w-full h-96 object-cover"
  />
</div>
<div className="sticky top-20 bg-white z-10 shadow-md">
<div className="flex justify-between items-center w-full ">

  <button className="w-1/2 border-2 border-gray px-4 py-2 text-gray-700 ">
  <i class="fa fa-filter text-black-500 text-xl"></i>

    Filter
  </button>

  
  <button className="w-1/2 border-2 border-gray px-4 py-2 text-gray-700 ">
  <i className="fas fa-sort text-black-500 text-xl"></i>
    Sort
  </button>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4">
        <div className="border p-4 rounded-lg">
          <img
            src='/cloth2.jpg' 
            alt="Cloth 1"
            className="w-full h-64 object-cover rounded-md mb-2"
          />
          <p className="text-center text-gray-700">Elegant white shirt with lace details.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <img
            src="/Assets/cloth2.jpg" 
            alt="Cloth 2"
            className="w-full h-64 object-cover rounded-md mb-2"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="w-full h-64 object-cover rounded-md mb-2"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="w-full h-64 object-cover rounded-md mb-2"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="w-full h-64 object-cover rounded-md mb-2"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="w-full h-64 object-cover rounded-md mb-2"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="w-full h-64 object-cover rounded-md mb-2"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <img
            src='/cloth2.jpg'
            alt="Cloth 2"
            className="w-full h-64 object-cover rounded-md mb-2"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="w-full h-64 object-cover rounded-md mb-2"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="w-full h-64 object-cover rounded-md mb-2"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="w-full h-64 object-cover rounded-md mb-2"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="w-full h-64 object-cover rounded-md mb-2"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="w-full h-64 object-cover rounded-md mb-2"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="w-full h-64 object-cover rounded-md mb-2"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="w-full h-64 object-cover rounded-md mb-2"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="w-full h-64 object-cover rounded-md mb-2"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        </div>
     </div>
    
  );
};

export default Navbar;
