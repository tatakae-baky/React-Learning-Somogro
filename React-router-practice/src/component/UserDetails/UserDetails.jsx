import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, email, phone, website, company, address } = user;
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="text-center p-5">
      <h1> User Details : {name} </h1>
      <p> Email : {email} </p>
      <p> Phone : {phone} </p>
      <p> Website : {website} </p>
      <p> Company : {company.name} </p>
      <p> Address : {address.street} </p>
      <p> City : {address.city} </p>
      <button
        onClick={handleBack}
        className="bg-blue-600 text-white py-1 px-2 mt-5 rounded-md cursor-pointer text-sm"
      >
        Back to Users
      </button>
    </div>
  );
};

export default UserDetails;
