'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { useEffect, useState, useRef } from 'react';
import GalleryPreview from "@/components/GalleryPreview";
import BlogPreview from "@/components/BlogPreview";

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

const whyUsFeatures = [
  {
    title: 'Unique Destinations',
    description: 'We offer tours to off-the-beaten-path locations that you won\'t find with other agencies.',
    icon: (
      <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
  },
  {
    title: 'Expert Guides',
    description: 'Our experienced guides ensure you have a safe and enriching adventure full of memories.',
    icon: (
      <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
    ),
  },
  {
    title: 'Sustainable Travel',
    description: 'We prioritize eco-friendly practices and support local communities in all our tours.',
    icon: (
      <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    ),
  },
  {
    title: 'World Class Service',
    description: 'We offer customer experiences that you won\'t find with other agencies.',
    icon: (
      <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
      </svg>
    ),
  },
  {
    title: 'Best Prices',
    description: 'Our tours package offer the best value for your money but still gives you memories worth remembering.',
    icon: (
      <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
  },
  {
    title: 'World Class Accommodation',
    description: 'We partner with premium accommodations that offer comfort and authenticity to enhance your travel experience.',
    icon: (
      <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>
    ),
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
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  // Properly type the refs object to fix the TypeScript error
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.2 }
    );

    // Store the refs in a local array to avoid issues during cleanup
    const currentRefs = sectionRefs.current;
    
    // Observe all current refs
    Object.keys(currentRefs).forEach((id) => {
      const element = currentRefs[id];
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup function
    return () => {
      Object.keys(currentRefs).forEach((id) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const registerSection = (id: string, ref: HTMLDivElement | null) => {
    if (ref && !sectionRefs.current[id]) {
      sectionRefs.current[id] = ref;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Hero image ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                quality={100}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
            </div>
          ))}

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover Extraordinary <span className="text-emerald-400">Adventures</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Embark on unforgettable journeys to the world&apos;s most breathtaking destinations with expert guides and personalized experiences.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/tours"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-emerald-500/30"
              >
                Explore Our Tours
              </Link>
              <Link
                href="/contact"
                className="bg-transparent hover:bg-white/20 text-white border-2 border-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-emerald-500 w-8' : 'bg-white/50'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section 
          ref={(el: HTMLDivElement | null) => registerSection('about', el)}
          id="about"
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block text-emerald-500 font-semibold mb-2">OUR STORY</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Nomadic Adventures</h2>
              <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible['about'] ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/images/img4.jpg"
                      alt="Nomadic Adventures Team"
                      width={600}
                      height={450}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-emerald-100 rounded-lg -z-10"></div>
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible['about'] ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">Crafting Unforgettable Travel Experiences</h3>
                <p className="text-lg mb-6 text-gray-600 leading-relaxed">
                  At Nomadic Adventures, we&aposre passionate about creating unforgettable travel experiences that challenge perspectives and foster cultural understanding.
                </p>
                <p className="text-lg mb-6 text-gray-600 leading-relaxed">
                  Founded in 2010 by a group of avid travelers, we&apos;ve spent over a decade curating unique, sustainable tours that take you off the beaten path and into the heart of local cultures.
                </p>
                <ul className="mb-8 space-y-3">
                  {[
                    'Expert local guides who share authentic insights',
                    'Responsibly managed tours with positive impact',
                    'Personalized itineraries tailored to your interests',
                    'Small groups for more meaningful experiences'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/about-us" className="inline-flex items-center bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-all duration-300 shadow-md">
                  Learn More About Us
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section 
          ref={(el: HTMLDivElement | null) => registerSection('why-us', el)}
          id="why-us"
          className="py-24 bg-slate-900 text-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block text-emerald-400 font-semibold mb-2">WHAT SETS US APART</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Nomadic Adventures?</h2>
              <div className="w-20 h-1 bg-emerald-400 mx-auto mb-8"></div>
              <p className="text-lg text-slate-300">
                We create extraordinary experiences that combine adventure, authenticity, and responsible tourism.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyUsFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible['why-us'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="bg-slate-700 rounded-lg p-3 inline-block mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Destinations */}
        <section 
          ref={(el: HTMLDivElement | null) => registerSection('destinations', el)}
          id="destinations"
          className="py-24 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block text-emerald-500 font-semibold mb-2">EXPLORE THE WORLD</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Destinations</h2>
              <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                Discover our most popular adventures hand-picked for unforgettable experiences
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {featuredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible['destinations'] ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-emerald-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                        {destination.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-slate-800">{destination.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>
                    
                    <div className="flex justify-between items-center mb-5">
                      <div className="flex items-center text-gray-500">
                        <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-sm">{destination.duration}</span>
                      </div>
                      <div className="text-xl font-bold text-emerald-600">${destination.price}</div>
                    </div>
                    
                    <Link 
                      href={`/tours/${destination.id}`} 
                      className="block text-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 px-4 rounded-lg font-medium hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-md"
                    >
                      Explore Tour
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/tours" 
                className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800 transition-colors duration-300"
              >
                View All Destinations
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section
          ref={(el: HTMLDivElement | null) => registerSection('gallery', el)}
          id="gallery"
          className="bg-slate-50 py-24"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block text-emerald-500 font-semibold mb-2">VISUAL JOURNEY</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Adventure Gallery</h2>
              <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
            </div>
            
            <GalleryPreview />
          </div>
        </section>

        {/* Blog Preview Section */}
        <section
          ref={(el: HTMLDivElement | null) => registerSection('blog', el)}
          id="blog"
          className="bg-white py-24"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block text-emerald-500 font-semibold mb-2">TRAVEL INSIGHTS</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Latest From Our Blog</h2>
              <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                Discover travel tips, destination guides, and stories from our adventures
              </p>
            </div>
            
            <BlogPreview />
          </div>
        </section>

        {/* Testimonial Section */}
        <section 
          ref={(el: HTMLDivElement | null) => registerSection('testimonials', el)}
          id="testimonials"
          className="py-24 bg-slate-800 text-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block text-emerald-400 font-semibold mb-2">WHAT PEOPLE SAY</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Traveler Testimonials</h2>
              <div className="w-20 h-1 bg-emerald-400 mx-auto mb-8"></div>
            </div>
            
            <TestimonialCarousel />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Adventure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us for an unforgettable journey that will create memories to last a lifetime
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/book-now" 
                className="bg-white text-emerald-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Book Now
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
