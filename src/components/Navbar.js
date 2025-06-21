import React from 'react';
import SB from './Assets/SB_WEARS.png';
import S1 from './Assets/sb_wears.jpg';
import shirt from './Assets/cloth2.jpg';
 
const Navbar = () => {
  return (
    <div>
    <nav className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white shadow-md">
      
      <div className="flex items-center space-x-4">
        
        {/* <button className="text-2xl text-black">
          ☰
        </button> */}

       
        <button className="p-2 text-2xl text-black rounded-md">
        ⌕
        </button>
      </div>

    
      <div className="flex items-center">
        <img
          src={SB}
          alt="Logo"
          className="w-10 h-10"
        />
        
      </div>

     
      {/* <div className="flex items-center space-x-4">
        
        <button className="flex items-center space-x-1 text-3xl text-black">
          <span>♡</span>
          
        </button>

        
        <button className="flex items-center space-x-1 text-2xl">
          <span>🛒</span>
          
        </button>
      </div> */}
    </nav>

    <div className="flex py-3 space-x-4 bg-gray-100 justify-left">
        <button className="ml-3 text-black rounded-md ">
          Home  /
        </button>
        <button className="text-black rounded-md ">
          SB WEARS
        </button>
      </div>
      <div className="w-full m-0">
  <img
    src={S1}  
    alt="Cloth"
    className="object-cover w-full h-96"
  />
</div>
<div className="sticky z-10 bg-white shadow-md top-20">
<div className="flex items-center justify-between w-full ">

  <button className="w-1/2 px-4 py-2 text-gray-700 border-2 border-gray ">
  <i class="fa fa-filter text-black-500 text-xl"></i>

    Filter
  </button>

  
  <button className="w-1/2 px-4 py-2 text-gray-700 border-2 border-gray ">
  <i className="text-xl fas fa-sort text-black-500"></i>
    Sort
  </button>
</div>
</div>
<div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        <div className="p-4 border rounded-lg">
          <img
            src='/cloth2.jpg' 
            alt="Cloth 1"
            className="object-cover w-full h-64 mb-2 rounded-md"
          />
          <p className="text-center text-gray-700">Elegant white shirt with lace details.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <img
            src="/Assets/cloth2.jpg" 
            alt="Cloth 2"
            className="object-cover w-full h-64 mb-2 rounded-md"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="object-cover w-full h-64 mb-2 rounded-md"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="object-cover w-full h-64 mb-2 rounded-md"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="object-cover w-full h-64 mb-2 rounded-md"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="object-cover w-full h-64 mb-2 rounded-md"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="object-cover w-full h-64 mb-2 rounded-md"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <img
            src='/cloth2.jpg'
            alt="Cloth 2"
            className="object-cover w-full h-64 mb-2 rounded-md"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="object-cover w-full h-64 mb-2 rounded-md"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="object-cover w-full h-64 mb-2 rounded-md"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="object-cover w-full h-64 mb-2 rounded-md"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="object-cover w-full h-64 mb-2 rounded-md"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="object-cover w-full h-64 mb-2 rounded-md"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="object-cover w-full h-64 mb-2 rounded-md"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="object-cover w-full h-64 mb-2 rounded-md"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <img
            src={shirt}
            alt="Cloth 2"
            className="object-cover w-full h-64 mb-2 rounded-md"
          />
          <p className="text-center text-gray-700">Casual denim jeans for everyday wear.</p>
        </div>
        </div>
     </div>
    
  );
};

export default Navbar;
