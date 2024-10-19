'use client'
import Link from "next/link";
import { useState, useEffect } from "react";

const languages = ['English', 'Spanish', 'French'];
const currencies = ['USD', 'EUR', 'GBP'];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [language, setLanguage] = useState('English');
  const [currency, setCurrency] = useState('USD');

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
        <Link href="/" className="text-2xl font-bold tracking-wider hover:text-slate-300 transition-colors duration-300">Nomadic Adventures</Link>
        <nav className="space-x-6 flex items-center">
          <Link href="/about-us" className="hover:text-slate-300 transition-colors duration-300">About</Link>
          <Link href="/blog" className="hover:text-slate-300 transition-colors duration-300">Blog</Link>
          <Link href="/tours" className="hover:text-slate-300 transition-colors duration-300">Our Tours</Link>
          <Link href="/contact" className="hover:text-slate-300 transition-colors duration-300">Contact</Link>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-slate-600 text-white p-1 rounded"
            aria-label="Select language"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-slate-600 text-white p-1 rounded"
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
