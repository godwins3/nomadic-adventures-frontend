'use client'
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import blogPosts, { BlogPost } from '../../../data/blog';
import { FaCalendar, FaFolder, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from '../../../styles/BlogPost.module.css';

export default function BlogPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [nextPost, setNextPost] = useState<BlogPost | null>(null);
  const [prevPost, setPrevPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const currentPostIndex = blogPosts.findIndex(post => post.id === Number(id));
    if (currentPostIndex !== -1) {
      setPost(blogPosts[currentPostIndex]);
      setNextPost(blogPosts[currentPostIndex + 1] || null);
      setPrevPost(blogPosts[currentPostIndex - 1] || null);
    }
  }, [id]);

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto py-12 px-4 max-w-4xl">
        <article className={`bg-white rounded-lg shadow-lg overflow-hidden ${styles.blogPost}`}>
          <div className="relative">
            <Image src={post.image} alt={post.title} width={1200} height={600} className="w-full h-72 sm:h-96 object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex items-center text-sm text-gray-300 space-x-4">
                <span className="flex items-center"><FaCalendar className="mr-2" />{post.date}</span>
                <span className="flex items-center"><FaFolder className="mr-2" />{post.category}</span>
              </div>
            </div>
          </div>
          <div className="p-8">
            <ReactMarkdown 
              className="prose prose-lg max-w-none"
              remarkPlugins={[remarkGfm]}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {prevPost && (
            <Link href={`/blog/${prevPost.id}`} className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <FaChevronLeft className="mr-2" />
              <span className="hidden sm:inline">Previous:</span> {prevPost.title}
            </Link>
          )}
          {nextPost && (
            <Link href={`/blog/${nextPost.id}`} className="flex items-center text-blue-600 hover:text-blue-800 transition-colors sm:ml-auto">
              <span className="hidden sm:inline">Next:</span> {nextPost.title}
              <FaChevronRight className="ml-2" />
            </Link>
          )}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold">
            ← Back to Blog List
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
