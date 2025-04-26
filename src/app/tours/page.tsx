'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { tours } from '../../data/tours';

// Mock data for tours
const categories = ['All', 'Wildlife', 'Adventure', 'Nature'];

export default function Tours() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredTours = tours.filter(tour => 
    (selectedCategory === 'All' || tour.category === selectedCategory) &&
    tour.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-slate-800 text-white py-16">
          <div className="container mx-auto px-4">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Discover Our Tours
            </motion.h1>
            <motion.p 
              className="text-lg text-center text-slate-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Experience the world&aposs most breathtaking destinations with our carefully curated tours
            </motion.p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Search and Filter */}
          <div className="mb-10 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search tours..."
                className="p-3 pl-10 border border-slate-200 rounded-full w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-5 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map(tour => (
              <motion.div
                key={tour.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-slate-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white text-sm font-medium px-3 py-1 rounded-full shadow-md">
                    {tour.category}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-slate-800">{tour.name}</h2>
                  <p className="text-slate-600 mb-4 line-clamp-2">{tour.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-slate-500">
                      <svg className="w-5 h-5 mr-1 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-sm">{tour.duration}</span>
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">${tour.price}</span>
                  </div>
                  <Link 
                    href={`/tours/${tour.id}`} 
                    className="block text-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 px-4 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-md font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredTours.length === 0 && (
            <div className="text-center py-16">
              <svg className="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="text-xl text-slate-600">No tours found. Please try a different search or category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
