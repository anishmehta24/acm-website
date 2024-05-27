"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [menuOpen,setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    setIsSmallScreen(window.innerWidth < 768);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${(scrolled || isSmallScreen) ? 'bg-gray-900 py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image src={"/acm_chapter_logo.jpg"}
           alt="Logo" 
           width={100}
           height={50}/>
          <a href="#home" className="text-white text-lg font-bold">ACM Student Chapter</a>
        </div>
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className={`text-white focus:outline-none ${menuOpen ? 'active' : ''}`}
            style={{
              width: '30px',
              height: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
              cursor: 'pointer',
              
            }}
          >
            <span style={{ width: '100%', height: '2px', backgroundColor: '#fff' }}></span>
            <span style={{ width: '100%', height: '2px', backgroundColor: '#fff' }}></span>
            <span style={{ width: '100%', height: '2px', backgroundColor: '#fff' }}></span>
          </button>
        </div>
        <div className={`md:flex items-center space-x-10 ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-10">
            <a href="#about" className="text-white text-sm hover:opacity-75 transition-opacity mr-2 hover:text-gray-900 hover:bg-white hover:px-1 py-2">About</a>
            <a href="#events" className="text-white text-sm hover:opacity-75 transition-opacity mr-2 hover:text-gray-900 hover:bg-white hover:px-1 py-2">Events</a>
            <a href="#team" className="text-white text-sm hover:opacity-75 transition-opacity mr-2 hover:text-gray-900 hover:bg-white hover:px-1 py-2">Team</a>
            <a href="#contact" className="text-white text-sm hover:opacity-75 transition-opacity ml-4 hover:text-gray-900 hover:bg-white hover:px-1 py-2">Contact</a>
            <a href="#support" className="text-white text-sm hover:opacity-75 transition-opacity ml-4 hover:text-gray-900 hover:bg-white hover:px-1 py-2 md:ml-8">Support</a>
            <a href="#connect" className="font-bold text-white border border-white py-4 px-8 text-lg relative bg-transparent transition-all duration-300 hover:text-gray-900 hover:bg-white mt-2 md:mt-0"> Let's Connect </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;