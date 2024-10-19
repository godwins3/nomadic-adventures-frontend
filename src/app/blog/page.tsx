'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const blogPosts = [
  {
    id: 1,
    title: '10 Must-Visit Hidden Gems in South America',
    excerpt: 'Discover the lesser-known wonders of South America that will take your breath away...',
    image: 'https://images.unsplash.com/photo-1519181245277-cffeb31da2e3',
    date: '2024-03-15',
    category: 'Travel Tips',
  },
  {
    id: 2,
    title: 'Sustainable Travel: How to Minimize Your Environmental Impact',
    excerpt: 'Learn how to explore the world while leaving a positive impact on the places you visit...',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
    date: '2024-03-10',
    category: 'Eco-Tourism',
  },
  // Add more blog post objects
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Nomadic Adventures Blog</h1>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search blog posts..."
            className="w-full p-2 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm font-medium text-blue-600">{post.category}</span>
                </div>
                <Link href={`/blog/${post.id}`} className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}