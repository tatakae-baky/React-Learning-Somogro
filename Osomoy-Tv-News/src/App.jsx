import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl text-center mt-10 text-primary-color font-normal font-playwrite'>Vite + React</h1>
    </>
  )
}

export default App
