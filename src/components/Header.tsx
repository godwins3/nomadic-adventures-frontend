'use client'
import Link from "next/link";
import { useState, useEffect } from "react";

const currencies = ['USD', 'EUR', 'GBP', 'KES'];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-slate-700 text-white p-4 transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 shadow-lg z-50' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wider hover:text-slate-300 transition-colors duration-300">
          {'NomadicAdventures'}
        </Link>
        
        {/* Hamburger menu button */}
        <button 
          className="lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 transition-transform duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>

        {/* Navigation menu */}
        <nav className={`${isMenuOpen ? 'fixed top-16 left-0 right-0 bg-slate-700 z-50' : 'hidden'} lg:flex lg:items-center lg:space-x-6 lg:static lg:bg-transparent p-4 lg:p-0`}>
          <div className="flex w-full lg:w-auto items-center justify-between space-x-2 lg:space-x-4">
            <input
              type="search"
              className="p-2 border rounded-full w-full lg:w-64 text-white bg-transparent"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2" />

            <span
              className="flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-600 dark:text-white [&>svg]:w-5"
              id="basic-addon2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd" />
              </svg>
            </span>
          </div>
          <Link href="/about-us" className="block py-2 lg:py-0 hover:text-slate-300 transition-colors duration-300">About</Link>
          <Link href="/blog" className="block py-2 lg:py-0 hover:text-slate-300 transition-colors duration-300">Blog</Link>
          <Link href="/tours" className="block py-2 lg:py-0 hover:text-slate-300 transition-colors duration-300">Our Tours</Link>
          <Link href="/gallery" className="block py-2 lg:py-0 hover:text-slate-300 transition-colors duration-300">Gallery</Link>
          <Link href="/contact" className="block py-2 lg:py-0 hover:text-slate-300 transition-colors duration-300">Contact</Link>
          {/* <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-slate-600 text-white p-1 rounded mt-2 lg:mt-0 hover:bg-slate-500 transition-colors duration-300"
            aria-label="Select currency"
          >
            {currencies.map((curr) => (
              <option key={curr} value={curr}>{curr}</option>
            ))}
          </select> */}
        </nav>
      </div>
    </header>
  );
}
