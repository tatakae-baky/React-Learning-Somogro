import React, { useState } from "react";

const ReusableForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4 text-black">
        Sign Up
      </h2>
      <form
        onSubmit={handleSubmit}
        className="text-black bg-white p-8 rounded-xl shadow-xl mx-auto flex flex-col gap-4 w-[400px] min-h-[400px]"
      >
        <label className="flex flex-col items-start gap-2 w-full text-base font-semibold">
          Name:
          <input
            className="text-sm border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col items-start gap-2 w-full text-base font-semibold">
          Email:
          <input
            className="text-sm border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col items-start gap-2 w-full text-base font-semibold">
          Password:
          <input
            className="text-sm  border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={form.password}
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReusableForm;
