import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#479d4f] dark:bg-gray-900 fixed w-full z-10 top-0 text-white h-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
        <Link to="/" className="flex items-center">
          <img src="logo1.png" className="h-12 mt-0 w-auto md:h-24" alt="logo" />
        </Link>
        <button
          type="button"
          className="md:hidden text-white hover:text-green-500 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
        <div className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:flex md:w-auto md:space-x-4 font-medium`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-0 md:mt-0">
            <li>
              <Link to="/" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-white font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-white font-bold">
                About
              </Link>
            </li>
            <li>
              <Link to="/features" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-white font-bold">
                Features
              </Link>
            </li>
            <li>
              <Link to="/Why" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-white font-bold">
                Why
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 dark:hover:bg-gray-700 dark:hover:text-white font-bold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
