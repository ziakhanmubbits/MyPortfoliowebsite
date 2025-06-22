"use client";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // smooth scrool to the section
  const handleMenuClick = (e:any) => {
    e.preventDefault();
    const target = (e.target).getAttribute("href");
    const offsetTop = document.querySelector(target)?.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <header className="bg-white px-7 pt-8">
      <div className="container mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center">
        <div className="logo-symbol">Z</div>
          Zia k
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a onClick={handleMenuClick} href="#what-i-do" className="text-gray hover:text-green">What I Do</a>
          <a onClick={handleMenuClick} href="#edu-exp" className="text-gray hover:text-green">Edu & Exp</a>
          <a onClick={handleMenuClick} href="#certificates" className="text-gray hover:text-green">Certificates</a>
          <a onClick={handleMenuClick} href="#skills" className="text-gray hover:text-green">Skills</a>
          <a onClick={handleMenuClick} href="#portfolio" className="text-gray hover:text-green">Portfolio</a>
          <a onClick={handleMenuClick} href="#blog" className="text-gray hover:text-green">Blog</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            <a href="#about" className=" text-gray hover:text-green">About Me</a>
            <a href="#resume" className=" text-gray hover:text-green">Resume</a>
            <a href="#portfolio" className=" text-gray hover:text-green">Portfolio</a>
            <a href="#blog" className=" text-gray hover:text-green">Blog</a>
            <a href="#contact" className=" text-gray hover:text-green">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
