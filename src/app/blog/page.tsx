'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import blogPosts from '../../data/blog';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  useEffect(() => {
    const filtered = blogPosts.filter(post =>
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       post.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === 'All' || post.category === selectedCategory)
    );
    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-800 to-slate-900 py-24 px-4 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=2074')", 
            backgroundSize: "cover",
            filter: "blur(3px)"
          }}></div>
        </div>
        
        <div className="container mx-auto relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Nomadic Adventures
              </span> Blog
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
              Stories, tips, and insights from our adventures around the globe
            </p>
          </motion.div>
          
          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className={`relative transition-all duration-300 ${isSearchFocused ? 'transform -translate-y-2 shadow-xl' : 'shadow-lg'}`}>
              <input
                type="text"
                placeholder="Search blog posts..."
                className="w-full py-4 pl-12 pr-4 rounded-full bg-white/90 backdrop-blur-sm border-none focus:ring-2 focus:ring-emerald-500 text-gray-800 text-lg transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <main className="flex-grow container mx-auto py-12 px-4">
        {/* Categories Filter */}
        <motion.div 
          className="mb-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${selectedCategory === category
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md transform scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 shadow'}`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Blog Posts Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPosts.map(post => (
            <motion.div 
              key={post.id} 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <span className="text-white text-sm font-medium bg-emerald-500 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-white text-sm">
                    {post.date}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 text-slate-800 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {post.content.substring(0, 150)}...
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden relative">
                      <Image 
                        src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"} 
                        alt={"Author"} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                    <span className="text-sm text-slate-600">{"Nomadic Writer"}</span>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block p-4 rounded-full bg-slate-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">No blog posts found</h3>
            <p className="text-slate-500">Try a different search term or category</p>
          </motion.div>
        )}
        
        {/* Newsletter Signup */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Subscribe to Our <span className="text-emerald-400">Newsletter</span>
              </h3>
              <p className="text-slate-300 mb-6">
                Get the latest travel tips, adventure ideas, and exclusive offers directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-md focus:ring-2 focus:ring-emerald-500 border-none"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-md hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 font-medium whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
            <div className="hidden md:block relative h-64 md:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1470"
                alt="Newsletter"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-emerald-600/30 mix-blend-multiply"></div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
