import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div className="flex flex-col gap-3">
      {/* Title */}
      <h2 className="font-bold">Find Us On</h2>
      
      {/* Social Media Card */}
      <div className="bg-white rounded-lg p-4  border">
        {/* Facebook */}
        <div className="flex items-center gap-3 py-2">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <FaFacebook className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-gray-800 font-medium">Facebook</span>
        </div>
        
        {/* Twitter */}
        <div className="flex items-center gap-3 py-2">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <FaTwitter className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-gray-800 font-medium">Twitter</span>
        </div>
        
        {/* Instagram */}
        <div className="flex items-center gap-3 py-2">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <FaInstagram className="w-4 h-4 text-red-500" />
          </div>
          <span className="text-gray-800 font-medium ">Instagram</span>
        </div>
      </div>
    </div>
  );
};

export default FindUsOn;
