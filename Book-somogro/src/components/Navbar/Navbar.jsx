import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">Home</NavLink>
            <li>
              <NavLink to="/listed-books" className={({isActive}) => isActive ? 'text-primary' : ''}>Listed Books</NavLink>
            </li>
            <li>
              <NavLink to="/pages-to-read" className={({isActive}) => isActive ? 'text-primary' : ''}>Pages to Read</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Book Somogro</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? 'text-primary font-bold' : ''}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/listed-books" className={({isActive}) => isActive ? 'text-primary font-bold' : ''}>Listed Books</NavLink>
          </li>
          <li>
            <NavLink>Pages to Read</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-4 ml-4">
        <a className="btn btn-primary">Sign Up</a>
        <a className="btn btn-outline ml-2">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
