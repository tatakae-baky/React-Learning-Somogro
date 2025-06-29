import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bottles from './components/Bottles/Bottles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Bottle Collection</h1>
      <Bottles></Bottles>
    </>
  )
}

export default App
