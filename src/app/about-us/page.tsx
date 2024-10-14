'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto py-12 px-4">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center text-indigo-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Nomadic Adventures
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1501555088652-021faa106b9b"
              alt="Nomadic Adventures Team"
              width={600}
              height={400}
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
          className="bg-white py-12 px-6 rounded-xl shadow-md mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">Our Mission</h2>
          <p className="text-center text-lg max-w-3xl mx-auto">
            To provide unique, sustainable, and unforgettable travel experiences that challenge perspectives and foster cultural understanding, while promoting responsible tourism and creating positive impacts on the communities we visit.
          </p>
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
