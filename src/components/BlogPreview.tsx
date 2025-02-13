'use client';

import Link from 'next/link';
import Image from 'next/image';
import blogPosts from '@/data/blog';

export default function BlogPreview() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-48">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 line-clamp-2 mb-2">{post.title}</h3>
                <p className="text-gray-600 line-clamp-3 mb-4">{post.content.substring(0, 100)}...</p>
                <Link href={`/blog/${post.id}`} className="text-blue-600 font-medium hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/blog" className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all">
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
