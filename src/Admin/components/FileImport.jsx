import React from "react";
import { useDropzone } from "react-dropzone";

const FileImport = ({name , icon}) => {
  const onDrop = (acceptedFiles) => {
    console.log("Files uploaded:", acceptedFiles);
    // alert(`You selected: ${acceptedFiles.map((file) => file.name).join(", ")}`);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="">
      {/* <h1 className="text-2xl font-bold mb-4">React Dropzone File Upload</h1> */}
      <div
        {...getRootProps()}
        // className="w-full p-4 border-2 border-dashed border-gray-300 rounded cursor-pointer hover:border-indigo-600"
      >
        <input {...getInputProps()} />
        <button className="mt-5 flex felx-row gap-2 items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
        {icon} {name}
        </button>
      </div>
    </div>
  );
};

export default FileImport;
