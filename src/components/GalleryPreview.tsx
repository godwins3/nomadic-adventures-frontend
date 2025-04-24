'use client'

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

// Enhanced with more image details
const galleryImages = [
  {
    id: 1,
    src: '/images/img1.jpg',
    alt: 'Bali Rice Terraces',
    location: 'Bali, Indonesia'
  },
  {
    id: 2,
    src: '/images/img2.jpg',
    alt: 'Santorini Sunset',
    location: 'Santorini, Greece'
  },
  {
    id: 3,
    src: '/images/img3.jpg',
    alt: 'Kyoto Temple',
    location: 'Kyoto, Japan'
  },
  {
    id: 4,
    src: '/images/img4.jpg',
    alt: 'Machu Picchu',
    location: 'Cusco, Peru'
  },
  {
    id: 5,
    src: '/images/img5.jpg',
    alt: 'Northern Lights',
    location: 'Tromsø, Norway'
  },
  {
    id: 6,
    src: '/images/img6.jpg',
    alt: 'Safari Adventure',
    location: 'Serengeti, Tanzania'
  }
];

export default function GalleryPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to handle navigation
  const navigate = useCallback((direction: 'next' | 'prev') => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    if (direction === 'next') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    } else {
      setCurrentIndex((prevIndex) => prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1);
    }

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning]);

  // Auto play effect
  useEffect(() => {
    const interval = setInterval(() => {
      navigate('next');
    }, 5000);
    
    return () => clearInterval(interval);
  }, [navigate]);

  // Set loaded state after component mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Touch event handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      navigate('next');
    }
    if (isRightSwipe) {
      navigate('prev');
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Visual indexes for carousel effect (prev, current, next)
  const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
  const nextIndex = (currentIndex + 1) % galleryImages.length;

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,253,245,0.4),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-3">
            <Camera className="inline-block w-4 h-4 mr-1" />
            Visual Stories
          </span>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
            Captured Moments From Our Adventures
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-4"></div>
          <p className="text-slate-600">
            Each photograph tells a story of discovery, wonder, and the extraordinary beauty of our world
          </p>
        </div>

        {/* Gallery carousel */}
        <div 
          className="relative max-w-6xl mx-auto h-[500px] md:h-[600px]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main image display */}
          <div className="relative h-full overflow-hidden rounded-2xl shadow-2xl">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentIndex 
                    ? 'opacity-100 scale-100 z-20' 
                    : index === prevIndex || index === nextIndex
                    ? 'opacity-0 scale-95 z-10'
                    : 'opacity-0 scale-90 z-0'
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className={`object-cover transition-transform duration-700 ${
                      isLoaded && index === currentIndex ? 'scale-105' : 'scale-100'
                    }`}
                    priority={index === currentIndex}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{image.alt}</h3>
                    <p className="flex items-center text-lg text-white/90">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      {image.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Navigation buttons */}
            <button
              onClick={() => navigate('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => navigate('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center space-x-3 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setCurrentIndex(index);
                    setIsTransitioning(true);
                    setTimeout(() => setIsTransitioning(false), 500);
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 scale-125 w-6' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              ></button>
            ))}
          </div>
        </div>
        
        {/* CTA button */}
        <div className="mt-12 text-center">
          <Link 
            href="/gallery" 
            className="inline-flex items-center px-6 py-3 bg-white text-emerald-700 border-2 border-emerald-500 rounded-full font-medium hover:bg-emerald-50 transition-all shadow-md hover:shadow-lg group"
          >
            <span>Explore Full Gallery</span>
            <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}