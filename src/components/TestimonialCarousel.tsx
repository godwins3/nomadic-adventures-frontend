'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'John Kelly',
    text: 'Nomadic Adventures provided an unforgettable experience. The guides were knowledgeable and the destinations were breathtaking!',
    image: '/images/person2.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'I have traveled with many companies, but Nomadic Adventures stands out. Their attention to detail and commitment to sustainable tourism is impressive.',
    image: '/images/person1.jpg',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    text: 'The Machu Picchu trek was life-changing. Nomadic Adventures made sure every aspect of the trip was perfect.',
    image: '/images/person3.jpg',
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-slate-100 py-16 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Travelers Say</h2>
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg" style={{ minHeight: '250px' }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute w-full transition-opacity duration-500 ease-in-out ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="bg-white p-8 flex flex-col items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={96}
                    height={96}
                    className="rounded-full mb-4 object-cover"
                  />
                  <p className="text-lg mb-4 text-center italic">{testimonial.text}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
