'use client'
import Link from "next/link";
import { useState, useEffect } from "react";


const currencies = ['USD', 'EUR', 'GBP'];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [currency, setCurrency] = useState('USD');
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
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>

        {/* Navigation menu */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:space-x-6 absolute lg:static top-full left-0 right-0 bg-slate-700 lg:bg-transparent p-4 lg:p-0`}>
          <Link href="/about-us" className="block py-2 lg:py-0 hover:text-slate-300 transition-colors duration-300">about</Link>
          <Link href="/blog" className="block py-2 lg:py-0 hover:text-slate-300 transition-colors duration-300">blog</Link>
          <Link href="/tours" className="block py-2 lg:py-0 hover:text-slate-300 transition-colors duration-300">Our Tours</Link>
          <Link href="/contact" className="block py-2 lg:py-0 hover:text-slate-300 transition-colors duration-300">Contact</Link>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-slate-600 text-white p-1 rounded mt-2 lg:mt-0"
            aria-label="Select currency"
          >
            {currencies.map((curr) => (
              <option key={curr} value={curr}>{curr}</option>
            ))}
          </select>
        </nav>
      </div>
    </header>
  );
}
