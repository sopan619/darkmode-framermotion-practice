import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import GearIcon from "./Icons/GearIcon";

const Navbar = (props) => {
  const [mode, setMode] = useState(false);
  const navBar = useRef();
  const menu = () => {
    navBar.current.classList.toggle("translate-y-48");
  };
  return (
    <>
      {/* Basically the Navbar is here */}
      <header className="bg-yellow-500 dark:bg-lime-600 fixed top-0 z-20 w-screen h-16 flex justify-between items-center pl-3 pr-5 shadow-xl border-b-4 border-red-500 dark:border-green-300">
        {/* The Logo */}
        <h1 className="text-5xl text-black dark:text-gray-300 font-bold cursor-pointer">
          LOGO.
        </h1>
        {/* List of pages */}
        <nav className="text-black dark:text-gray-200 hidden md:flex">
          <Link
            className="px-2 text-lg cursor-pointer hover:underline-offset-8 hover:underline dark:hover:text-red-300 hover:text-white "
            to="/"
          >
            Home
          </Link>
          <Link
            className="px-2 text-lg cursor-pointer hover:underline-offset-8 hover:underline dark:hover:text-red-300 hover:text-white "
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="px-2 text-lg cursor-pointer hover:underline-offset-8 hover:underline dark:hover:text-red-300 hover:text-white "
            to="/about"
          >
            About
          </Link>
          <Link
            className="px-2 text-lg cursor-pointer hover:underline-offset-8 hover:underline dark:hover:text-red-300 hover:text-white "
            to="/contact"
          >
            Contact
          </Link>
        </nav>
        {/* Mobile menu button is here */}
        <button
          className="block md:hidden text-gray-800 dark:text-gray-200 scale-125 "
          onClick={menu}
        >
          <GearIcon />
        </button>
        {/* Theme changer is here */}
        <div className="tick-box hidden md:flex space-x-2 items-center justify-center dark:text-gray-200 border-b-4 dark:border-green-400 border-yellow-200">
          <span>Dark Mode {mode ? "On" : "Off"}</span>
          <input
            type="checkbox"
            className="w-5 cursor-pointer"
            onClick={() => {
              props.onChange();
              setMode(!mode);
            }}
          />
        </div>
      </header>
      {/* This is the mobile menu, which is shown only on smaller screens */}
      <div
        className="phone-menu bg-yellow-400 dark:bg-lime-500 -top-32 z-[1] fixed w-screen h-[20vh] shadow-xl border-b-2 border-gray-700 dark:border-gray-200 transition duration-500 ease-in-out transform"
        ref={navBar}
      >
        <div className="container ">
          <div className="tick-box ml-auto mr-3 mt-1 space-x-2 items-center justify-center dark:text-gray-700 border-b-4 w-fit dark:border-red-400 border-sky-400">
            <span>Dark Mode {mode ? "On" : "Off"}</span>
            <input
              type="checkbox"
              className="w-5 cursor-pointer"
              onClick={() => {
                props.onChange();
                setMode(!mode);
              }}
            />
          </div>
          <nav className="text-black z-10 dark:text-gray-600 flex flex-col text-center ">
            <Link
              className="px-2 text-lg cursor-pointer hover:underline-offset-8 hover:underline dark:hover:text-red-300 hover:text-white "
              to="/"
            >
              Home
            </Link>
            <Link
              className="px-2 text-lg cursor-pointer hover:underline-offset-8 hover:underline dark:hover:text-red-300 hover:text-white "
              to="/projects"
            >
              Projects
            </Link>
            <Link
              className="px-2 text-lg cursor-pointer hover:underline-offset-8 hover:underline dark:hover:text-red-300 hover:text-white "
              to="/about"
            >
              About
            </Link>
            <Link
              className="px-2 text-lg cursor-pointer hover:underline-offset-8 hover:underline dark:hover:text-red-300 hover:text-white "
              to="/contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
