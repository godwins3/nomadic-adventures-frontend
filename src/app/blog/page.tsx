'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import blogPosts from '../../data/blog';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  useEffect(() => {
    const filtered = blogPosts.filter(post =>
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       post.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === 'All' || post.category === selectedCategory)
    );
    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto py-12 px-4">
        <h1 className="text-5xl font-bold mb-12 text-center text-gray-800">Nomadic Adventures Blog</h1>
        <div className="mb-12 max-w-4xl mx-auto">
          <input
            type="text"
            placeholder="Search blog posts..."
            className="w-full p-4 border rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-64">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-4 left-4 text-white text-sm font-medium bg-blue-600 px-3 py-1 rounded-full">{post.category}</span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800 line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.content.substring(0, 150)}...</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link href={`/blog/${post.id}`} className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-600 text-xl mt-12">No blog posts found. Try a different search term or category.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
