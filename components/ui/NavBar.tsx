"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect (() => {
    const handleScroll = () =>{
      if(window.scrollY > 10 ){
        setScroll(true);
      }
      else{
        setScroll(false);
      }
    };
    window.addEventListener("scroll",handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  },[])
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  //bg-white 
  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${scroll ? 'bg-gray-900 py-2': 'bg-transparent py-4 '}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 w-full">
        <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
          src="/acm_chapter_logo.jpg"
          alt="Logo" 
          width={100} 
          height={50}/>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ACM Student Chapter</span>
        </Link>
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${menuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-900 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                About
              </a>
            </li>
            <li>
              <a href="#event" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Events
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Support
              </a>
            </li>
            <li>
              <a href="#connect" className="font-bold text-white border border-white py-2 px-8 text-lg relative bg-transparent transition-all duration-300 hover:text-gray-900 hover:bg-white mt-2 md:mt-0"> Let&apos;s Connect </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
