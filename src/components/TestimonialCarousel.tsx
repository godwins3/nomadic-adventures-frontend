'use client'

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'John Kelly',
    role: 'Adventure Enthusiast',
    text: 'Nomadic Adventures provided an unforgettable experience. The guides were knowledgeable and the destinations were breathtaking!',
    image: '/images/person2.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Travel Blogger',
    text: 'I have traveled with many companies, but Nomadic Adventures stands out. Their attention to detail and commitment to sustainable tourism is impressive.',
    image: '/images/person1.jpg',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Photography Enthusiast',
    text: 'The Machu Picchu trek was life-changing. Nomadic Adventures made sure every aspect of the trip was perfect.',
    image: '/images/person3.jpg',
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    // Pause autoplay temporarily when user manually navigates
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-emerald-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-teal-500/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">What Our Travelers Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Authentic experiences shared by our adventurous community</p>
        </div>
        
        {/* Adjusted max width to ensure content fits properly */}
        <div className="relative max-w-3xl mx-auto">
          {/* Testimonials container */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white">
            <div 
              className="transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${testimonials.length * 100}%`, display: 'flex' }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0"
                >
                  <div className="p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    {/* Profile image with circular border */}
                    <div className="relative w-28 h-28 flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-teal-500 rounded-full opacity-20 transform scale-110"></div>
                      <div className="absolute w-full h-full overflow-hidden rounded-full border-4 border-white shadow-lg">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="(max-width: 768px) 112px, 112px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Testimonial content - Adjusted to ensure text fits in the card */}
                    <div className="flex-1 flex flex-col items-center md:items-start">
                      {/* Quote icon */}
                      <div className="text-emerald-500 mb-2">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      
                      {/* Testimonial text - Ensures text doesn't overflow */}
                      <p className="text-center md:text-left text-slate-700 mb-6 text-lg font-serif leading-relaxed max-w-full overflow-hidden break-words">
                        {testimonial.text}
                      </p>
                      
                      {/* Author info */}
                      <div className="text-center md:text-left">
                        <h4 className="font-bold text-xl text-slate-900">{testimonial.name}</h4>
                        <p className="text-emerald-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={prevSlide} 
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 rounded-full p-2 shadow-md transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={nextSlide} 
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 rounded-full p-2 shadow-md transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Dots navigation */}
          <div className="flex justify-center space-x-3 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 h-3 bg-emerald-500 rounded-full' 
                    : 'w-3 h-3 bg-slate-300 hover:bg-slate-400 rounded-full'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;