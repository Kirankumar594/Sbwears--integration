import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 w-full">
      <div className="bg-white rounded-lg shadow-lg  overflow-auto  p-6">
         <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div> 
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
