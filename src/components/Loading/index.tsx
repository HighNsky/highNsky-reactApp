import React from "react";
import { BiLoader } from "react-icons/bi";

export const Loading = () => {
  return (
    //     <div className="spinner-container">
    //     <div className="loading-spinner">
    //     </div>
    //   </div>
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto focus:outline-none">
      <div className=" w-full max-w-sm md:mx-auto mx-auto">
        <div className="">
          <BiLoader
            className="animate-spin z-50 text-[#e0b34e] mx-auto"
            fontSize={70}
          />
        </div>
      </div>
    </div>
  );
};
