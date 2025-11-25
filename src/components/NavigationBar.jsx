import React from "react";
import { Link, NavLink } from "react-router";
import "./NavBar.css";

const NavigationBar = () => {
  return (
    <div className="navbar py-0 min-h-0 z-1 shadow-sm rounded-full w-11/12 mx-auto navbar-gradient">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>

            {/* All Books */}

            <li>All Books</li>
          </ul>
        </div>
        {/* The Book Haven */}
        <p>The Book Haven</p>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/all-books"}>All Books</NavLink>
          </li>
          <li>
            <NavLink to={"/add-book"}>Add Book</NavLink>
          </li>
          <li>
            <NavLink to={"/my-book"}>My Books</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <div className="dropdown dropdown-end z-50">
          <Link
            to="/auth/login"
            className="btn btn-md bg-violet-600 border-none text-white flex-1 text-center hover:bg-violet-700"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
