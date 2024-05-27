"use client"
import React, { useState, useEffect } from 'react';


const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex items-center">
        <img src="/acm_chapter_logo.jpg" alt="Logo" className="mr-6 ml-2" style = {{width: '100px'}} />
        <a href="#home" className="text-white text-lg font-bold" style={{marginRight: '250px'}}>ACM Student Chapter</a>
        <div className="flex items-center space-x-10">
          <div className="flex items-center justify-center space-x-10">
            <a href="#about" className="text-white text-sm hover:opacity-75 transition-opacity mr-2  hover:text-gray-900 hover:bg-white hover:px-1 py-2">About</a>
            <a href="#events" className="text-white text-sm hover:opacity-75 transition-opacity mr-2  hover:text-gray-900 hover:bg-white hover:px-1 py-2">Events</a>
            <a href="#team" className="text-white text-sm hover:opacity-75 transition-opacity mr-2  hover:text-gray-900 hover:bg-white hover:px-1 py-2">Team</a>
            <a href="#contact" className="text-white text-sm hover:opacity-75 transition-opacity ml-4  hover:text-gray-900 hover:bg-white hover:px-1 py-2">Contact</a>
            <a href="#support" className="text-white text-sm hover:opacity-75 transition-opacity ml-4   hover:text-gray-900 hover:bg-white hover:px-1 py-2" style={{marginLeft: '250px'}}>Support</a>
            <a href="#connect" className="font-bold text-white border border-white py-4 px-8 text-lg relative bg-transparent transition-all duration-300 hover:text-gray-900 hover:bg-white "> Lets Connect </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


