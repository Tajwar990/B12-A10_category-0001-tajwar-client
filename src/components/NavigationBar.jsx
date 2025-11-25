import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthCOntext";
import { FaUser, FaBook } from "react-icons/fa";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { IoLogoModelS } from "react-icons/io";
import { ImBoxAdd } from "react-icons/im";
import { GoHomeFill } from "react-icons/go";
import { FaGears } from "react-icons/fa6";

const NavigationBar = () => {
  const { user, signOutUser } = React.useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="navbar py-0 min-h-0 z-1 shadow-sm rounded-full glass-card w-11/12 mx-auto bg-white border border-violet-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost md:hidden text-violet-700"
          >
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow border border-violet-200"
          >
            <li>
              <NavLink
                to={"/"}
                className="text-violet-700 hover:text-violet-900"
              >
                <GoHomeFill /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/all-books"}
                className="text-violet-700 hover:text-violet-900"
              >
                <IoLogoModelS /> All Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/add-book"}
                className="text-violet-700 hover:text-violet-900"
              >
                <ImBoxAdd /> Add Book
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/my-books"}
                className="text-violet-700 hover:text-violet-900"
              >
                <FaUser /> My Books
              </NavLink>
            </li>
          </ul>
        </div>
        <Link
          to={"/"}
          className="flex items-center gap-1 text-xl font-bold text-violet-700"
        >
          <FaBook /> The Book Haven
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          <li>
            <NavLink to={"/"} className="text-violet-700 hover:text-violet-900">
              <GoHomeFill /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/all-books"}
              className="text-violet-700 hover:text-violet-900"
            >
              <IoLogoModelS /> All Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/add-book"}
              className="text-violet-700 hover:text-violet-900"
            >
              <ImBoxAdd /> Add Book
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/my-books"}
              className="text-violet-700 hover:text-violet-900"
            >
              <FaUser /> My Books
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 border-2 border-violet-300 rounded-full">
                <img
                  alt="User"
                  referrerPolicy="no-referrer"
                  src={
                    user.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow border border-violet-200"
            >
              <div className="pb-3 border-b border-violet-200">
                <li className="text-sm font-bold text-violet-700">
                  {user.displayName}
                </li>
                <li className="text-xs text-violet-500">{user.email}</li>
              </div>
              <li>
                <NavLink
                  to={"/"}
                  className="text-violet-700 hover:text-violet-900"
                >
                  <GoHomeFill /> Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/all-books"}
                  className="text-violet-700 hover:text-violet-900"
                >
                  <IoLogoModelS /> All Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/add-book"}
                  className="text-violet-700 hover:text-violet-900"
                >
                  <ImBoxAdd /> Add Book
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/my-books"}
                  className="text-violet-700 hover:text-violet-900"
                >
                  <FaUser /> My Books
                </NavLink>
              </li>
              <li>
                <Link
                  to={"/my-books"}
                  className="text-violet-700 hover:text-violet-900"
                >
                  My Books
                </Link>
              </li>
              <input
                onChange={(e) => handleTheme(e.target.checked)}
                type="checkbox"
                defaultChecked={localStorage.getItem("theme") === "dark"}
                className="toggle"
              />
              <li>
                <a className="text-violet-700 hover:text-violet-900">
                  <FaGears></FaGears> Settings
                </a>
              </li>
              <li>
                <button
                  onClick={signOutUser}
                  className="btn btn-xs text-left bg-violet-600 hover:bg-violet-700 text-white"
                >
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to={"/auth/login"}
            className="btn rounded-full border border-violet-300 btn-sm bg-violet-600 hover:bg-violet-700 text-white"
          >
            <IoLogIn /> Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
