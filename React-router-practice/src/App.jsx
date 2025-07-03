import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl bg-amber-500 text-blue-600 p-5 m-5'> React Router Practice </h1>
      <Link to='/about'> About </Link>
      <Link to='/contact'> Contact </Link>
      <Link to='/users'> Users </Link>
    </>
  )
}

export default App