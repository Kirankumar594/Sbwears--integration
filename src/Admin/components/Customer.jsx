import { React } from "react";
import { CiSearch } from "react-icons/ci";
import { BiSpreadsheet } from "react-icons/bi";
import { CustomerTable } from "./CustomerTable";

export default function Customer() { 
  return (
    <div className="flex flex-col  w-full overflow-auto">
      <p className="text-xl  p-8 font-bold ">Customers</p>
      <div className="flex flex-row">
        <div className="flex flex-row items-center gap-3 border   mx-5 p-3  shadow-lg w-5/6 rounded-xl ">
          <CiSearch className="w-5 h-5" />
          <input
            className="w-full   focus:outline-none"
            placeholder="Search Customer..."
          />
        </div>
        <button className="mr-5 w-1/6 bg-black flex flex-row gap-2 items-center text-white px-4 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
          <BiSpreadsheet />
          Export Excel
        </button>
      </div>
      <div>
        <div className="bg-white rounded-xl my-5 mx-5 p-5 shadow-lg w-80%  ">
          <CustomerTable />
        </div>
      </div>
 
    </div>
  );
}
 