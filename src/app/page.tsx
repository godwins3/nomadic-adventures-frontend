'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { useEffect, useState } from 'react';

const featuredDestinations = [
  {
    id: 1,
    name: 'Taita Hills',
    description: 'Explore the lush, mist-covered Taita Hills, home to unique wildlife and breathtaking views of Mount Kilimanjaro.',
    duration: '3 days',
    price: 599,
    image: 'https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Adventure',
  },
  {
    id: 2,
    name: 'Amboseli National Park',
    description: 'Experience the magic of Amboseli, famous for its large elephant herds and stunning views of Mount Kilimanjaro.',
    duration: '4 days',
    price: 899,
    image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    category: 'Wildlife',
  },
  {
    id: 3,
    name: 'Maasai Mara National Reserve',
    description: 'Witness the incredible wildlife and stunning landscapes of the Maasai Mara, home to the Great Migration.',
    duration: '5 days',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1554490752-6a232eca5e60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFhc2FpJTIwbWFyYSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8Mg%3D%3D',
    category: 'Wildlife',
  },
];

export default function Home() {
  const heroImages = [
    "/images/hero2.jpeg",
    "/images/hero1.jpeg",
    "/images/img4.jpg",
    "/images/img1.jpg",
    "/images/img3.jpg",
    "https://images.unsplash.com/photo-1554490752-6a232eca5e60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFhc2FpJTIwbWFyYSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1547970810-dc1eac37d174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  ]

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="carousel">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
            >
              <Image
                src={image}
                alt={`Hero image ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                quality={100}
              />

              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          ))}
          <div className="carousel-content">
            <h2 className="text-5xl font-bold mb-4">Discover the World with Us</h2>
            <p className="text-xl mb-8">Unforgettable adventures await you</p>
            <Link
              href="/tours"
              className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
            >
              Explore Our Tours
            </Link>
          </div>
          <div className="carousel-indicators">
            {heroImages.map((_, index) => (
              <div
                key={index}
                className={`carousel-indicator ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              ></div>
            ))}
          </div>
        </section>

        <motion.section 
          className="py-16 bg-gray-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Nomadic Adventures</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <Image
                  src="/images/img4.jpg" // Make sure to add this image to your public/images folder
                  alt="Nomadic Adventures Team"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-4">
                  At Nomadic Adventures, we&apos;re passionate about creating unforgettable travel experiences that challenge perspectives and foster cultural understanding.
                </p>
                <p className="text-lg mb-4">
                  Founded in 2010 by a group of avid travelers, we&apos;ve spent over a decade curating unique, sustainable tours that take you off the beaten path and into the heart of local cultures.
                </p>
                <Link href="/about-us" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="py-16 bg-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3">Unique Destinations</h3>
                <p>We offer tours to off-the-beaten-path locations that you won&apos;t find with other agencies.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3">Expert Guides</h3>
                <p>Our experienced guides ensure you have a safe and enriching adventure full of memories.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3">Sustainable Travel</h3>
                <p>We prioritize eco-friendly practices and support local communities in all our tours.</p>
              </div>
            </div>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3">World class service</h3>
                <p>We offer customer experiences that you won&apos;t find with other agencies.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3">Best Prices</h3>
                <p>Our tours package offer the best value for your money but still gives you memories worth remembering.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3">World class accommodation</h3>
                <p>We prioritize eco-friendly practices and support local communities in all our tours.</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="py-16 bg-gray-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Top Nomadic Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.name}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="relative h-64">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      sizes= "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">Duration: {destination.duration}</span>
                      <span className="text-lg font-bold text-blue-600">${destination.price}</span>
                    </div>
                    <Link href="/tours" className="block text-center bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300">
                      Explore Tour
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonial Carousel */}
        <TestimonialCarousel />
      </main>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
