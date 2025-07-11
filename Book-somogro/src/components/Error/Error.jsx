import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* error page */}
      <h1 className="text-center text-4xl font-bold">Error</h1>
      <p className="text-center text-2xl">Page not found</p>
      <Link to="/" className="text-center text-2xl mt-10">
        <button className="btn btn-success">Go to home</button>
      </Link>
    </div>
  );
};

export default Error;
