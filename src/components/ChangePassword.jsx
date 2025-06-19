import React from "react";
import { CiLock } from "react-icons/ci";

export default function ChangePassword() {
  return (
    <div className=" max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-5 items-center flex flex-col relative">
        <CiLock className="w-12 h-12 mb-5" />
        <p className="text-base ">Update your password for</p>
        <p className="font-semibold text-lg">akashg250804@gmail.com</p>
        <div className="w-60 md:w-72 lg:w-96 mt-8">
          <div>
            <label className="block text-sm mb-2">New Password</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter New Password"
              className="w-full py-2  focus:outline-none border px-2  "
            />
          </div>

          <div className="mt-3">
            <label className="block text-sm mb-2">Confirm New Password</label>
            <input
              type="text"
              name="lastName"
              placeholder="Confirm New Password"
              className="w-full py-2 border px-2  focus:outline-none "
            />
          </div>
        </div>
        <button  className="mt-10 py-2 px-4 text-sm bg-navyBLue text-white">Update Password</button>
      </div>
    </div>
  );
}
