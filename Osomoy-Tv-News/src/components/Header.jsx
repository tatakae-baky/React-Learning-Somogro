import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={logo}/>
      <p className='py-2'>Journalism Without Fear or Favour</p>
    </div>
  )
}

export default Header
