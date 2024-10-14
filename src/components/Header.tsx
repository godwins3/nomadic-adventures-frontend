'use client'
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

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
        <nav className="space-x-6">
          <Link href="/tours" className="hover:text-slate-300 transition-colors duration-300">Our Tours</Link>
          <Link href="/about" className="hover:text-slate-300 transition-colors duration-300">About</Link>
          <Link href="/contact" className="hover:text-slate-300 transition-colors duration-300">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
