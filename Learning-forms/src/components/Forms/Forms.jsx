import React, { useState } from "react";

const Forms = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Password does not match");
      return;
    }
    if (form.name === "" || form.email === "" || form.password === "" || form.confirmPassword === "" || form.phone === "") {
      alert("Please fill all the fields");
      return;
    }
    if (form.phone.length !== 11) {
      alert("Phone number must be 11 digits");
      return;
    }
    console.log(form);
    // Reset the form after submission to its initial state
    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="text-black bg-white p-8 rounded-xl shadow-xl mx-auto flex flex-col gap-4 w-[400px] min-h-[500px]"
      >
        <label className="flex flex-col items-start gap-2 w-full text-base font-semibold">
          Name:
          <input className="text-sm border-2 border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col items-start gap-2 w-full text-base font-semibold">
          Email:
          <input className="text-sm border-2 border-gray-300 p-2 rounded-md w-full"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col items-start gap-2 w-full text-base font-semibold">
          Password:
          <input className="text-sm  border-2 border-gray-300 p-2 rounded-md w-full"
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={form.password}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col items-start gap-2 w-full text-base font-semibold">
          Confirm Password:
          <input className="text-sm border-2 border-gray-300 p-2 rounded-md w-full"
            type="password"
            name="confirmPassword"
            placeholder="Enter Your Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col items-start gap-2 w-full text-base font-semibold">
          Phone Number:
          <input className="text-sm border-2 border-gray-300 p-2 rounded-md w-full"
            type="number"
            name="phone"
            placeholder="Enter Your Phone Number"
            value={form.phone}
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

export default Forms;
