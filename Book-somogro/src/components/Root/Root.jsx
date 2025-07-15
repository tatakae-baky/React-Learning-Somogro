import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Root = () => {
  const location = useLocation()
  const { pathname } = location

  // Define static paths and dynamic pattern matchers
  const hideFooter = 
    pathname === '/login' ||
    pathname === '/signup' ||
    pathname === '/listed-books' ||
    pathname.startsWith('/book/')

  const hideNavbar =
    pathname.startsWith('/book/')

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Outlet />
      {!hideFooter && <Footer />}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default Root
