import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Root = () => {
  return (
    <>
      <Navbar></Navbar> {/* constant navbar */}
      <Outlet></Outlet> {/* dynamic content */}
      <Footer></Footer> {/* constant footer */}
    </>
  )
}

export default Root
