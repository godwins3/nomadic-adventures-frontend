'use client'

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close search when menu opens
    if (!isMenuOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    // Close menu when search opens
    if (!isSearchOpen) setIsMenuOpen(false);
  };

  return (
    <header 
      className={`bg-slate-800 text-white transition-all duration-300 z-50
                ${isSticky ? 'fixed top-0 left-0 right-0 shadow-lg' : 'relative'}`}
    >
      {/* Top Bar with contact info */}
      <div className="bg-slate-900 py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span className="text-slate-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="text-slate-300">info@nomadicadventures.com</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-3">
              <a href="#" aria-label="Facebook" className="text-slate-300 hover:text-white transition-colors duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-slate-300 hover:text-white transition-colors duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-slate-300 hover:text-white transition-colors duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
              Nomadic Adventures
            </span>
          </Link>

          {/* Mobile Icons */}
          <div className="flex items-center lg:hidden space-x-2">
            <button
              className="p-2 rounded-full hover:bg-slate-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
              onClick={toggleSearch}
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <button
              className="p-2 rounded-full hover:bg-slate-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link 
              href="/" 
              className="px-4 py-2 font-medium hover:text-emerald-400 transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link 
              href="/tours" 
              className="px-4 py-2 font-medium hover:text-emerald-400 transition-colors duration-300 relative group"
            >
              Our Tours
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link 
              href="/destinations" 
              className="px-4 py-2 font-medium hover:text-emerald-400 transition-colors duration-300 relative group"
            >
              Destinations
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link 
              href="/blog" 
              className="px-4 py-2 font-medium hover:text-emerald-400 transition-colors duration-300 relative group"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link 
              href="/gallery" 
              className="px-4 py-2 font-medium hover:text-emerald-400 transition-colors duration-300 relative group"
            >
              Gallery
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link 
              href="/about-us" 
              className="px-4 py-2 font-medium hover:text-emerald-400 transition-colors duration-300 relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 font-medium hover:text-emerald-400 transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            
            {/* Desktop Search Button */}
            <button
              className="ml-2 p-2 rounded-full hover:bg-slate-700 transition-colors duration-300 focus:outline-none"
              onClick={toggleSearch}
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            
            {/* Book Now Button */}
            <Link 
              href="/book-now" 
              className="ml-4 px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-md hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-md"
            >
              Book Now
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden ${isMenuOpen ? 'max-h-screen py-4 opacity-100 visible' : 'max-h-0 py-0 opacity-0 invisible'} transition-all duration-300 overflow-hidden`}
      >
        <nav className="container mx-auto px-4 flex flex-col space-y-2">
          <Link 
            href="/" 
            className="px-4 py-3 border-b border-slate-700 hover:bg-slate-700 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/tours" 
            className="px-4 py-3 border-b border-slate-700 hover:bg-slate-700 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Tours
          </Link>
          <Link 
            href="/destinations" 
            className="px-4 py-3 border-b border-slate-700 hover:bg-slate-700 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Destinations
          </Link>
          <Link 
            href="/blog" 
            className="px-4 py-3 border-b border-slate-700 hover:bg-slate-700 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            href="/gallery" 
            className="px-4 py-3 border-b border-slate-700 hover:bg-slate-700 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link 
            href="/about-us" 
            className="px-4 py-3 border-b border-slate-700 hover:bg-slate-700 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            className="px-4 py-3 border-b border-slate-700 hover:bg-slate-700 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            href="/book-now" 
            className="mx-4 my-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-md text-center font-medium hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </Link>
        </nav>
      </div>

      {/* Search Overlay */}
      <div 
        className={`${isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity duration-300 fixed inset-0 bg-slate-900 bg-opacity-95 z-50 flex items-center justify-center p-4`}
      >
        <div className="w-full max-w-3xl">
          <div className="relative">
            <input
              type="search"
              className="w-full p-4 pl-12 pr-10 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Search destinations, tours, experiences..."
              autoFocus
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <button 
              className="absolute inset-y-0 right-0 flex items-center pr-4"
              onClick={toggleSearch}
            >
              <svg className="w-6 h-6 text-slate-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="mt-4 text-center text-slate-400">
            <p>Popular searches: Safari Tours, Beach Getaways, Mountain Treks, Cultural Experiences</p>
          </div>
        </div>
      </div>
    </header>
  );
}
