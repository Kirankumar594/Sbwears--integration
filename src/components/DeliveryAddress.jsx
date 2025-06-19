import {React , useState} from 'react'
import { IoLocationSharp } from "react-icons/io5";


export default function DiliveryAddress() {
  const [showAddressForm, setShowAddressForm] = useState(false);

  return (
    <div className="min-h-screen max-w-4xl bg-white pb-44 pl-0  pt-0 md:pl-5 ">
      {!showAddressForm ? (  
        <div className="bg-white rounded-xl shadow-lg p-5 relative">
          <div  
            className=" cursor-pointer"
            onClick={() => setShowAddressForm(true)}
          >
            <div className="flex flex-col shadow-lg rounded-xl w-60 h-60 justify-center items-center">
              <div className="w-12 h-12   rounded-full flex items-center justify-center">
              <IoLocationSharp className='text-buttonColor w-7 h-7' />

              </div>
              <button className="bg-buttonColor text-white px-6 py-2 rounded-full text-sm">
                Add New Address
              </button>
            </div>
          </div>
        </div>
      ) : ( 
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto relative">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Add New Address</h2>
            <button
              onClick={() => setShowAddressForm(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-6 md:p-8">
  <div>
    <label className="block text-sm mb-1 sm:mb-2">First Name</label>
    <input
      type="text"
      placeholder="First Name"
      className="w-full py-2 border rounded-lg focus:outline-none px-3"
    />
  </div>
  <div>
    <label className="block text-sm mb-1 sm:mb-2">Last Name</label>
    <input
      type="text"
      placeholder="Last Name"
      className="w-full py-2 border rounded-lg focus:outline-none px-3"
    />
  </div>

  <div className="sm:col-span-2">
    <label className="block text-sm mb-1 sm:mb-2">Address Line 1</label>
    <input
      type="text"
      placeholder="Address Line 1"
      className="w-full py-2 border rounded-lg focus:outline-none px-3"
    />
  </div>
  <div className="sm:col-span-2">
    <label className="block text-sm mb-1 sm:mb-2">Address Line 2</label>
    <input
      type="text"
      placeholder="Address Line 2"
      className="w-full py-2 border rounded-lg focus:outline-none px-3"
    />
  </div>

  <div>
    <label className="block text-sm mb-1 sm:mb-2">Company</label>
    <input
      type="text"
      placeholder="Company"
      className="w-full py-2 border rounded-lg focus:outline-none px-3"
    />
  </div>
  <div>
    <label className="block text-sm mb-1 sm:mb-2">Postal/Zip Code</label>
    <input
      type="text"
      placeholder="Postal/Zip Code"
      className="w-full py-2 border rounded-lg focus:outline-none px-3"
    />
  </div>

  <div>
    <label className="block text-sm mb-1 sm:mb-2">Contact Number</label>
    <div className="flex">
      <div className="flex items-center border rounded-l-lg px-3 bg-gray-50">
        <span>+91</span>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAwSURBVHgB7dBBDQAACAMx/Lv3ZTyEBD4YO5tMNb0DwC8BEiABEiABEiABEiABEjgPLPUAJYNqE+IAAAAASUVORK5CYII="
          alt="India flag"
          className="w-4 h-3 ml-2"
        />
      </div>
      <input
        type="tel"
        placeholder="Contact Number"
        className="w-full py-2 border-t border-r border-b rounded-r-lg focus:outline-none px-3"
      />
    </div>
  </div>

  <div>
    <label className="block text-sm mb-1 sm:mb-2">City</label>
    <input
      type="text"
      placeholder="City"
      className="w-full py-2 border rounded-lg focus:outline-none px-3"
    />
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
    <div>
      <label className="block text-sm mb-1 sm:mb-2">Country</label>
      <select className="w-full py-2 border rounded-lg focus:outline-none px-3 bg-white">
        <option>India</option>
      </select>
    </div>
    <div>
      <label className="block text-sm mb-1 sm:mb-2">Province</label>
      <select className="w-full py-2 border rounded-lg focus:outline-none px-3 bg-white">
        <option>Andaman and Nicobar Islands</option>
      </select>
    </div>
  </div>

  <div className="col-span-1 sm:col-span-2 flex items-center justify-between mt-4">
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center"></div>
      <span>Mark As Default Address</span>
    </label>
    <button
      type="submit"
      className="bg-navy-blue text-white px-6 py-2 text-sm rounded-lg"
      style={{ backgroundColor: "#1B2B65" }}
    >
      Save
    </button>
  </div>
</form>


        </div>
      )}
    </div>
  );
}
