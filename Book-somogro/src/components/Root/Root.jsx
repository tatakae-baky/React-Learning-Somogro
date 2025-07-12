import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Root = () => {
  return (
    <>
      <Navbar></Navbar> {/* constant navbar */}
      <Outlet></Outlet> {/* dynamic content */}
      <Footer></Footer> {/* constant footer */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default Root
