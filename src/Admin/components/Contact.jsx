import { React, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default function Contact() {
  const [description, setDescription] = useState("");

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setDescription(data);
    console.log("Editor Data: ", data);
  };

  return (
    <div className="flex flex-col  w-full overflow-auto">
      <div className="bg-white rounded-xl my-5 mx-5 p-8 shadow-lg w-80%  ">
        <p className="text-xl font-bold mb-5">Add Contact Details</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          <div>
            <label
              htmlFor="product-description"
              className="block text-sm font-medium   mb-2"
            >
              Add Address:
            </label>
            <div
              className="p-2 border border-gray-300 rounded-md"
              id="product-description"
            >
              <CKEditor
                editor={ClassicEditor}
                data={description}
                onChange={handleEditorChange}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm px-2 mb-2">Mobile Number</label>
            <input
              type="phone"
              name="phone"
              placeholder="Add Mobile Number"
              className="w-full py-2 border rounded-lg px-2 appearance-none focus:outline-none"
            />
          </div>

          <div>
            <label className="block px-2  text-sm mb-2">Email Adress</label>
            <input
              type="email"
              name="coupon"
              placeholder="Enter Email"
              className="w-full py-2 border px-2 rounded-lg focus:outline-none "
            />
          </div>
        </div>

        <button className="mt-6 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
          Save
        </button>
      </div>
      <div className="bg-white rounded-xl my-5 mx-5 p-8 shadow-lg w-80%  flex felx-row items-start">
        <div >

        <p className="text-xl font-bold pb-5 pt-0">Previous Address</p>
        <div className="flex flex-row items-start">
          <div className="flex flex-col gap-5 ">
            <p>
              <span className="font-black mr-2">Address :</span>
              Zivore Apparel Private Limited B 005, Sector 85, Noida, Gautam
              Buddha Nagar, Uttar Pradesh 201301
            </p>
            <p>
              <span className="font-black mr-2">Mobile :</span> +91 9899990772
            </p>
            <p>
              <span className="font-black mr-2">Email :</span> care@sbwears.in
            </p>
          </div>
        </div>
        </div>
          <div className="flex flex-row items-center justify-center gap-5 p-2">
            <button className=" ">
              <EditIcon />
            </button>
            <button className="pb-1">
              <RiDeleteBin6Line className="h-5 w-5" />
            </button>
          </div>
      </div>
    </div>
  );
}

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
