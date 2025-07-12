import React, { useState } from "react";

const ReusableComponents = ({
  SubmitBtn = "Submit",
  handleSubmit,
  children,
}) => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(form);
  };

  return (
    <div className="min-h-100 flex flex-col items-center justify-center">
      {children}
      <form
        onSubmit={handleFormSubmit}
        className="text-black bg-white p-8 rounded-xl shadow-xl mx-auto flex flex-col gap-4 w-[400px] min-h-[200px]"
      >
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={form.name || ""}
          placeholder="Enter Your Name"
          className="text-sm border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
        />        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={form.email || ""}
          placeholder="Enter Your Email"
          className="text-sm border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={form.password || ""}
          placeholder="Enter Your Password"
          className="text-sm border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
        />
        <button className="bg-blue-500 text-white p-2 rounded-md w-full cursor-pointer hover:bg-blue-700">
          {SubmitBtn}
        </button>
      </form>
    </div>
  );
};

export default ReusableComponents;
