import {React , useState} from "react";
import Dropdown from "./DropDown";
import MultiSelect from "./MultiSelect";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { optionsOccasions } from "../../data/dummyData";
import { optionsCategory } from "../../data/dummyData";
import { optionsTag } from "../../data/dummyData";
import { options1 } from "../../data/dummyData";
import { options2 } from "../../data/dummyData";
import { options3 } from "../../data/dummyData";


export default function OccForm() {
    // const [ setModalOpen] = useState(false);
    // const openModal = () => setModalOpen(true);
    // const closeModal = () => setModalOpen(false);

    const [mrp, setMRP] = useState(0);
    const [discount, setDiscount] = useState(0);
  
    const [description, setDescription] = useState("");
  
    const handleEditorChange = (event, editor) => {
      const data = editor.getData();
      setDescription(data);
      console.log("Editor Data: ", data);
    };
  return (
    <>
      <div className=" ">
        <label className="block px-2  text-sm mb-2">Product Name</label>
        <input
          type="text"
          name="Name"
          placeholder="Enter Product Name"
          className="w-full py-2 border px-2 rounded-lg focus:outline-none "
        />
      </div>
      <div className="flex mt-3 flex-row gap-3">
        <div className="w-full">
          <label className="block px-2  text-sm mb-2">MRP</label>
          <input
            type="number"
            name="Tag"
            placeholder="Enter Price"
            value={mrp}
            onChange={(e) => setMRP(e.target.value)}
            className="w-full py-2 border px-2 rounded-lg focus:outline-none "
          />
        </div>
        <div className="w-full">
          <label className="block px-2  text-sm mb-2">Discount</label>
          <input
            type="number"
            name="Discount"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="Enter Discount "
            className="w-full py-2 border px-2 rounded-lg focus:outline-none "
          />
        </div>
        <div className="flex flex-col w-full">
          {" "}
          <p>Offer Price </p>
          <p className="py-2 border px-2 rounded-lg mt-1">
            {mrp - mrp * (discount / 100)} rs
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-3 md:grid-cols-2 gap-6">
        <div>
          <label className="block px-2  text-sm mb-2">Occasions</label>
          <Dropdown options={optionsOccasions} />
        </div>
        <div>
          <label className="block px-2  text-sm mb-2">Category</label>
          <Dropdown options={optionsCategory} />
        </div>
        <div>
          <label className="block px-2  text-sm mb-2">Tag</label>
          <Dropdown options={optionsTag} />
        </div>
        <div>
          <label className="block px-2  text-sm mb-2">Fabric</label>
          <Dropdown options={options3} />
        </div>

        <div>
          <label className="block px-2  text-sm mb-2">Color</label>
          <MultiSelect options={options2} />
        </div>
        <div>
          <label className="block px-2  text-sm mb-2">Size</label>
          <MultiSelect options={options1} />
        </div>

        <div>
          <label
            htmlFor="product-description"
            className="block text-sm font-medium   mb-2"
          >
            Product Description:
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
          <label
            htmlFor="product-description"
            className="block text-sm font-medium   mb-2"
          >
            Any Additional Information:
          </label>
          <div
            className="p-2 border border-gray-300 rounded-md"
            id="product-description"
          >
            <CKEditor editor={ClassicEditor} data="" />
          </div>
        </div>
        <div className="">
          <label className="block px-2 text-sm">Size Chart / Catalog</label>
          <input
            type="file"
            name="Image"
            placeholder="First Name"
            className="w-full py-2  focus:outline-none   cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <button
          // onClick={closeModal}
          className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
        >
          Cancel
        </button>
        <button
          className="mt-6 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          // onClick={closeModal}
        >
          Save
        </button>
      </div>
    </>
  );
}
