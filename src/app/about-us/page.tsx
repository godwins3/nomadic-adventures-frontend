'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function About() {
  const heroImages = [
    "/images/hero2.jpeg",
    "/images/hero1.jpeg",
    "https://images.unsplash.com/photo-1554490752-6a232eca5e60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFhc2FpJTIwbWFyYSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8Mg%3D%3D",
    "https://images.unsplash.com/photo-1547970810-dc1eac37d174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  ]

  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Increased to 5 seconds for better viewing
    return () => clearInterval(interval);
  }, [heroImages.length]);
  
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Carousel Section */}
        <section className="relative h-[70vh] overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Scenic view ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                quality={90}
              />
              <div className="absolute inset-0 bg-slate-900/50"></div>
            </div>
          ))}
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Discover the World <span className="text-emerald-400">with Us</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-2xl text-slate-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Unforgettable adventures await on every horizon
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Link
                href="/tours"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-md hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 text-lg font-medium shadow-lg"
              >
                Explore Our Tours
              </Link>
            </motion.div>
          </div>
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-emerald-400 w-8' : 'bg-white/50'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* About Us Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.h1 
            className="text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              About Nomadic Adventures
            </span>
          </motion.h1>

          {/* Our Story Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b"
                alt="Nomadic Adventures Team"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="inline-block px-6 py-2 bg-slate-100 rounded-full text-emerald-600 font-semibold mb-2">
                Our Story
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                A Decade of <span className="text-emerald-500">Adventure</span> & Discovery
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Nomadic Adventures was founded in 2010 by a group of passionate travelers who wanted to share their love for exploration and adventure with the world.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                With over a decade of experience, we&aposve curated a selection of tours that take you off the beaten path and into the heart of local cultures. Our expert guides, commitment to responsible tourism, and dedication to creating meaningful connections set us apart in the travel industry.
              </p>
              <p className="font-medium text-lg text-slate-800">
                Join us on a journey of discovery, where every adventure is an opportunity to learn, grow, and create lasting memories.
              </p>
            </motion.div>
          </div>

          {/* Our Mission Section */}
          <motion.section
            className="bg-gradient-to-r from-slate-800 to-slate-900 py-16 px-8 rounded-2xl shadow-xl mb-24 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          > 
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
              </svg>
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className="inline-block px-6 py-2 bg-emerald-500/20 text-emerald-400 rounded-full font-semibold mb-4">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Transforming Travel Into <span className="text-emerald-400">Meaningful Experiences</span></h2>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                To provide unique, sustainable, and unforgettable travel experiences that challenge perspectives and foster cultural understanding, while promoting responsible tourism and creating positive impacts on the communities we visit.
              </p>
            </div>
          </motion.section>

          {/* Meet Our Team Section */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-slate-100 rounded-full text-emerald-600 font-semibold mb-4">
                Meet Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                Passionate Guides <span className="text-emerald-500">Leading the Way</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { name: "Jane Doe", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80" },
                { name: "John Smith", role: "Head of Operations", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
                { name: "Emily Brown", role: "Lead Tour Guide", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
              ].map((member) => (
                <motion.div 
                  key={member.name}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group"
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="font-bold text-xl text-slate-800">{member.name}</h3>
                    <p className="text-emerald-600">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Our Journey Timeline */}
          <motion.section
            className="bg-slate-100 py-16 px-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-white rounded-full text-emerald-600 font-semibold mb-4">
                Our Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                <span className="text-emerald-500">Milestones</span> Along Our Path
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-emerald-200 transform md:translate-x-[-50%]"></div>
              
              {[
                { year: 2010, event: "Nomadic Adventures founded", delay: 0.2 },
                { year: 2015, event: "Expanded to offer tours on all continents", delay: 0.4 },
                { year: 2018, event: "Launched our sustainable tourism initiative", delay: 0.6 },
                { year: 2023, event: "Celebrated our 100,000th traveler", delay: 0.8 },
              ].map((milestone, index) => (
                <motion.div 
                  key={milestone.year}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12 last:mb-0`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: milestone.delay }}
                >
                  <div className="flex-1 md:text-right pr-0 md:pr-8 pl-8 md:pl-0">
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-bold mb-2">
                      {milestone.year}
                    </div>
                    <p className="text-lg text-slate-700">{milestone.event}</p>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-6 h-6 rounded-full bg-emerald-500 border-4 border-white shadow-lg"></div>
                  
                  <div className="flex-1 pl-8 md:pl-8"></div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
