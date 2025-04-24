'use client'
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading images
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const categories = [
        { id: 'all', name: 'All Photos' },
        { id: 'nature', name: 'Nature' },
        { id: 'culture', name: 'Culture' },
        { id: 'adventure', name: 'Adventure' },
        { id: 'wildlife', name: 'Wildlife' }
    ];

    // Sample image data with categories
    const images = [
        { id: 1, src: '/images/img1.jpg', alt: 'Tropical beach paradise', category: 'nature' },
        { id: 2, src: '/images/img2.jpg', alt: 'Local cultural celebration', category: 'culture' },
        { id: 3, src: '/images/img3.jpg', alt: 'Mountain trekking adventure', category: 'adventure' },
        { id: 4, src: '/images/img4.jpg', alt: 'Desert safari sunset', category: 'nature' },
        { id: 5, src: '/images/img5.jpg', alt: 'Wildlife safari elephants', category: 'wildlife' },
        { id: 6, src: '/images/img6.jpg', alt: 'Traditional market scene', category: 'culture' },
        { id: 7, src: '/images/img7.jpg', alt: 'Rainforest canopy', category: 'nature' },
        { id: 8, src: '/images/img8.jpg', alt: 'Rock climbing expedition', category: 'adventure' },
        { id: 9, src: '/images/img9.jpg', alt: 'Ancient temple architecture', category: 'culture' },
        { id: 10, src: '/images/img10.jpg', alt: 'Coral reef diving', category: 'adventure' },
        { id: 11, src: '/images/img11.jpg', alt: 'Lion on savannah', category: 'wildlife' },
        { id: 12, src: '/images/img12.jpg', alt: 'Northern lights', category: 'nature' },
    ];

    // Filter images based on selected category
    const filteredImages = selectedCategory === 'all' 
        ? images 
        : images.filter(img => img.category === selectedCategory);

    return (
        <div className="min-h-screen flex flex-col bg-slate-100">
            <Header />
            
            {/* Hero Section */}
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-transparent opacity-70"></div>
                <div className="relative h-64 md:h-80 bg-[url('/images/gallery-hero.jpg')] bg-cover bg-center">
                    <div className="container mx-auto px-4 h-full flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Adventure Gallery</h1>
                        <p className="text-lg md:text-xl text-slate-200 max-w-2xl">
                            Explore our collection of breathtaking moments from around the world
                        </p>
                    </div>
                </div>
            </div>
            
            <main className="container mx-auto px-4 py-8 lg:px-8">
                {/* Category Filter */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">Browse by Category</h2>
                    <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                            <button 
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                                    selectedCategory === category.id 
                                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md' 
                                        : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
                
                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {isLoading ? (
                        // Loading skeleton
                        Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="relative h-64 rounded-lg bg-slate-200 animate-pulse"></div>
                        ))
                    ) : (
                        // Gallery images
                        filteredImages.map(image => (
                            <div 
                                key={image.id} 
                                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                <div className="aspect-w-4 aspect-h-3">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={600}
                                        height={450}
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 left-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <p className="text-white font-medium">{image.alt}</p>
                                    <span className="inline-block mt-2 px-3 py-1 bg-emerald-500 bg-opacity-70 text-white text-xs rounded-full">
                                        {categories.find(cat => cat.id === image.category)?.name || image.category}
                                    </span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                
                {/* No results message */}
                {!isLoading && filteredImages.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-lg text-slate-600">No images found in this category.</p>
                        <button 
                            onClick={() => setSelectedCategory('all')}
                            className="mt-4 px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-md hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-md"
                        >
                            View All Photos
                        </button>
                    </div>
                )}
            </main>
            
            {/* Call to Action */}
            <div className="bg-slate-800 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Inspired by what you see?</h2>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                        Join us on one of our adventures and create your own unforgettable moments
                    </p>
                    <a 
                        href="/book-now" 
                        className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-md hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-md"
                    >
                        Book Your Adventure Now
                    </a>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}