import React from "react";
import { Link } from "react-router-dom";
const User = ({ user }) => {
  const { name, email, id } = user;
  return (
    <div className="border-2 border-blue-600 p-5 m-8 text-center">
      <h1> User : {name} </h1>
      <p> Email : {email} </p>
      <Link to={`/user/${id}`}>
        <button className="bg-blue-600 text-white py-1 px-2 mt-5 rounded-md cursor-pointer text-sm"> View Details </button>
      </Link>
    </div>
  );
};

export default User;
