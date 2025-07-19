import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="mb-5">
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button className="flex justify-center items-center gap-2 border border-gray-300 rounded-md p-2 w-full hover:bg-gray-100 transition-all duration-300 cursor-pointer">
          <FcGoogle size={24} /> Login with Google
        </button>
        <button className="flex justify-center items-center gap-2 border border-gray-300 rounded-md p-2 w-full hover:bg-gray-100 transition-all duration-300 cursor-pointer">
          <FaGithub size={24} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;