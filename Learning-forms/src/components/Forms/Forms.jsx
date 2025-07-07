import React, { useState } from "react";

const Forms = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleChange = e => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(form.password !== form.confirmPassword){
      alert("Password does not match")
      return
    }
    // Reset the form after submission to its initial state 
    setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 m-4 w-1/2 mx-auto">
      <label>
        Enter Your Name:
        <input className="border-2 border-gray-300 p-2 rounded-md" type="text" 
        name="name"
        value={form.name}
        onChange={handleChange}
        />
      </label>
      <label>
        Enter Your Email:
        <input className="border-2 border-gray-300 p-2 rounded-md" type="email" 
        name="email"
        value={form.email}
        onChange={handleChange}
        />
      </label>
      <label>
        Enter Your Password:
        <input className="border-2 border-gray-300 p-2 rounded-md" type="password" 
        name="password"
        value={form.password}
        onChange={handleChange}
        />
      </label>
      <label>
        Confirm Your Password:
        <input className="border-2 border-gray-300 p-2 rounded-md" type="password" 
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
        />
      </label>
      <label>
        Enter Your Phone Number:
        <input className="border-2 border-gray-300 p-2 rounded-md" type="number" 
        name="phone"
        value={form.phone}
        onChange={handleChange}
        />
      </label>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-1/2 mx-auto">Submit</button>
    </form>
  );
};

export default Forms;
