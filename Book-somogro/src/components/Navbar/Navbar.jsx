import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../utilities/firebase-login";
import { toast } from "react-toastify";
import ProfileIcon from "../../assets/profile-icon.png";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Set up auth state observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        toast("Sign Out Successful");
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  return (
    <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
      {console.log(user)}
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
              <NavLink
                to="/listed-books"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pages-to-read"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Book Somogro</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listed-books"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : ""
              }
            >
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink>Pages to Read</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-4 ml-4">
        {user && user.emailVerified ? (
          <div className="flex items-center gap-4">
            <button className="btn btn-primary" onClick={handleLogOut}>
              Sign Out
            </button>
            <div className="dropdown">
              <div tabIndex={0}>
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-1 ring-offset-1">
                    <img src={user.photoURL || ProfileIcon} alt="Profile" />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-48 p-2 gap-2 shadow-sm text-center"
              >
                <li>{user.displayName}</li>
                <li>{user.email}</li>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <Link to="/signup" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-outline ml-2">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
