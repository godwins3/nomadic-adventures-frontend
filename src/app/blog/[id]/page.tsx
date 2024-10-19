'use client'
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import blogPosts, { BlogPost } from '../../../data/blog';


export default function BlogPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const currentPost = blogPosts.find(post => post.id === Number(id));
    if (currentPost) {
      setPost(currentPost);
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto py-8 px-4">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image src={post.image} alt={post.title} width={1200} height={600} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-gray-500">{post.date}</span>
              <span className="text-sm font-medium text-blue-600">{post.category}</span>
            </div>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
        <div className="mt-8">
          <Link href="/blog" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
            Back to Blog List
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
