import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleUsers = (e) => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value 
    const email = form.email.value
    const user = {name, email}
    console.log(user);

    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }

  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleUsers}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  )
}

export default App
