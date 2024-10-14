'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TestimonialCarousel from "../components/TestimonialCarousel";

const featuredDestinations = [
  {
    name: "Machu Picchu, Peru",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377",
    description: "Explore the ancient Incan ruins and breathtaking Andean landscapes.",
    duration: "7 days",
    price: 1999,
  },
  {
    name: "Sahara Desert, Morocco",
    image: "https://images.unsplash.com/photo-1548234979-f5f8f0d41236",
    description: "Experience the magic of the desert and camp under the stars.",
    duration: "5 days",
    price: 1499,
  },
  {
    name: "Northern Lights, Iceland",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
    description: "Witness the mesmerizing aurora borealis and explore glaciers.",
    duration: "6 days",
    price: 2499,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white">
            <h2 className="text-5xl font-bold mb-4">Discover the World with Us</h2>
            <p className="text-xl mb-8">Unforgettable adventures await you</p>
            <Link href="/tours" className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors duration-300">
              Explore Our Tours
            </Link>
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
                  src="https://images.unsplash.com/photo-1501555088652-021faa106b9b" // Make sure to add this image to your public/images folder
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
                <Link href="/about" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
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
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3">Unique Destinations</h3>
                <p>We offer tours to off-the-beaten-path locations that you won&apos;t find with other agencies.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3">Expert Guides</h3>
                <p>Our experienced guides ensure you have a safe and enriching adventure.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3">Sustainable Travel</h3>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Destinations</h2>
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
                      layout="fill"
                      objectFit="cover"
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
