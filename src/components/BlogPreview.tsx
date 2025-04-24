'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import blogPosts from '@/data/blog';

export default function BlogPreview() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full opacity-20 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full opacity-20 translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-3">Travel Stories</span>
          <h2 className="text-4xl font-bold text-slate-800 mb-3">Latest from Our Blog</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Discover travel tips, destination guides, and inspiring stories from our global adventures</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map(post => (
            <article 
              key={post.id} 
              className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                {/* Date badge - using current date as a fallback since original didn't have dates */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-medium text-slate-800">
                  {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 line-clamp-2 mb-3 group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-600 line-clamp-3 mb-6">
                  {post.content.substring(0, 150)}...
                </p>

                <Link 
                  href={`/blog/${post.id}`} 
                  className="flex items-center font-medium text-emerald-600 hover:text-emerald-700 transition-colors group"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-teal-700 shadow-md hover:shadow-lg transition-all group"
          >
            <span>View All Blog Posts</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}