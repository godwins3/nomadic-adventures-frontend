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
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Tours</h1>
          
          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search tours..."
                className="p-2 border rounded-full w-full md:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex space-x-2">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-md ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-800 hover:bg-gray-200'
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
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={tour.image}
                  alt={tour.name}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{tour.name}</h2>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">{tour.duration}</span>
                    <span className="text-lg font-bold text-blue-600">${tour.price}</span>
                  </div>
                  <Link href={`/tours/${tour.id}`} className="block text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredTours.length === 0 && (
            <p className="text-center text-gray-600 mt-8">No tours found. Please try a different search or category.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
