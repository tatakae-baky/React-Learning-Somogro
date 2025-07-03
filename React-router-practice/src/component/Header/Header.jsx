import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1 className="text-4xl text-blue-600 p-5 text-center mb-0">
        React Router Practice
      </h1>
      <div className="flex gap-6 justify-center items-center p-5 mb-5 text-center">
        {/* Navigation links with enhanced styling */}
        <Link
          to="/about"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
        >
          Contact
        </Link>
        <Link
          to="/users"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
        >
          Users
        </Link>
      </div>
    </>
  );
};

export default Header;
