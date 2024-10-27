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
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
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
                layout="fill"
                objectFit="cover"
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
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center text-indigo-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Nomadic Adventures
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 py-12 px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1501555088652-021faa106b9b"
              alt="Nomadic Adventures Team"
              width={900}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold text-indigo-700">Our Story</h2>
            <p>
              Nomadic Adventures was founded in 2010 by a group of passionate travelers who wanted to share their love for exploration and adventure with the world.
            </p>
            <p>
              With over a decade of experience, we&apos;ve curated a selection of tours that take you off the beaten path and into the heart of local cultures. Our expert guides, commitment to responsible tourism, and dedication to creating meaningful connections set us apart in the travel industry.
            </p>
            <p className="font-medium text-indigo-600">
              Join us on a journey of discovery, where every adventure is an opportunity to learn, grow, and create lasting memories.
            </p>
          </motion.div>
        </div>

        <motion.section
          className="bg-white py-12 px-6 rounded-xl shadow-md mb-16 py-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        > <div className="py-12 px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">Our Mission</h2>
            <p className="text-center text-lg max-w-3xl mx-auto">
              To provide unique, sustainable, and unforgettable travel experiences that challenge perspectives and foster cultural understanding, while promoting responsible tourism and creating positive impacts on the communities we visit.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-4">
            {[
              { name: "Jane Doe", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80" },
              { name: "John Smith", role: "Head of Operations", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
              { name: "Emily Brown", role: "Lead Tour Guide", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
            ].map((member) => (
              <div key={member.name} className="text-center bg-white p-6 rounded-lg shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="font-semibold text-xl text-indigo-700">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="bg-indigo-100 py-12 px-6 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">Our Journey</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {[
              { year: 2010, event: "Nomadic Adventures founded" },
              { year: 2015, event: "Expanded to offer tours on all continents" },
              { year: 2018, event: "Launched our sustainable tourism initiative" },
              { year: 2023, event: "Celebrated our 100,000th traveler" },
            ].map((milestone) => (
              <div key={milestone.year} className="flex items-center">
                <div className="font-bold text-xl w-20 text-indigo-700">{milestone.year}</div>
                <div className="w-4 h-4 bg-indigo-600 rounded-full mx-4"></div>
                <div className="flex-grow">{milestone.event}</div>
              </div>
            ))}
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
