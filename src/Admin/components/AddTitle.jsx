// import { occasions } from "@/src/data/dummyData";
import {React , useState} from "react";
import { RiDeleteBin6Line } from "react-icons/ri"; 
import Modal from "./Modal";

export default function Title() {  
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  
  return (
    <div className="flex flex-col  w-full overflow-auto">
      <div className="bg-white rounded-xl my-5 mx-5 p-8 shadow-lg w-80%  ">
        <p className="text-xl font-bold mb-5">Add New Title and SubTitle</p>
        <button
        onClick={openModal}
        className="  bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
      >
        Add Title and SubTitle
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
           <div>
            <label className="block px-2  text-sm mb-2"> Add Title </label>
            <input
              type="text"
              name="Title" 
              placeholder="Enter Title" 
              className="w-full py-2 border px-2 rounded-lg focus:outline-none "
            />
          </div>
          <div>
            <label className="block px-2  text-sm mb-2">Add SubTitle </label>
            <input
              type="text"
              name="SubTitle" 
              placeholder="Enter SubTitle" 
              className="w-full py-2 border px-2 rounded-lg focus:outline-none "
            />
          </div>
           
        </div>

        <div className="flex flex-row justify-between">

<button
  onClick={closeModal}
  className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
>
  Cancel
</button>
  <button className="mt-6 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
  onClick={closeModal}
  >
  Save
</button>
</div>
        </Modal>
      </div>
      <div className="bg-white rounded-xl my-5 mx-5 p-8 shadow-lg w-80%  ">
        <p className="text-xl font-bold p-3 pt-0">Previous added Titles and SubTitles</p>
        <div className="flex flex-col gap-5 justify-between">
        <div className="flex flex-row bg-black justify-between border-b p-4 rounded-lg">
            <p className="font-black text-white">Title</p>
            <p className="font-black text-white">SubTitle</p> 
            <p className="font-black text-white mr-3">Action</p>
            </div>
          {titles.map((title, index) => (
           <div className="flex flex-row justify-between border-b p-2"
              key={index}
            > 

              <div className="flex flex-col gap-2 items-center justify-center">
                <p className="text-sm">{title.title}</p>
              </div> 
              <div className="flex flex-col gap-2 items-center justify-center">
                <p className="text-sm">{title.subTitle}</p>
              </div> 
              
              <div className="flex flex-row items-center justify-center gap-8">
                <button className="cursor-pointer ">
                  <EditIcon />
                </button>
                <button className="pb-1 cursor-pointer ">
                  <RiDeleteBin6Line className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const titles = [
  {
    title:"SHOP BY OCCASIONS",
    subTitle:"Styles For Every Celebration",
    occasion : "Shop By Occasion",
    imageUrl:
      "https://www.libas.in/cdn/shop/files/suits_3.png?v=1732801116&width=1080",
    imageLink: "https://www.libas.in/collections/sale?filter.v.availability=1",
    category: "Suits",
    description: "Kurta And Kurtis for Women",
     
  },
  {
    title:"SHOP BY OCCASIONS",
    subTitle:"Styles For Every Celebration",
    occasion : "Shop By Collections",
    imageUrl:
      "https://www.libas.in/cdn/shop/files/kurtas_9.png?v=1732801126&width=1080",
    imageLink: "https://www.libas.in/collections/sale?filter.v.availability=1",
    category: "Kurtas",
    description: "Kurta And Kurtis for Women",
    
  },
  {
    title:"SHOP BY OCCASIONS",
    subTitle:"Styles For Every Celebration",
    occasion : "Shop By Collections",
    imageUrl:
      "https://www.libas.in/cdn/shop/files/plus-suze.png?v=1732801138&width=1080",
    imageLink: "https://www.libas.in/collections/sale?filter.v.availability=1",
    category: "Plus Sizes",
    description: "Kurta And Kurtis for Women",
     
  },
  {
    title:"SHOP BY OCCASIONS",
    subTitle:"Styles For Every Celebration",
    occasion : "Shop By Collections",
    imageUrl:
      "https://www.libas.in/cdn/shop/files/sarees_2.png?v=1732801144&width=1080",
    imageLink: "https://www.libas.in/collections/sale?filter.v.availability=1",
    category: "Sarees",
    description: "Kurta And Kurtis for Women",
     
  },
];

function EditIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
