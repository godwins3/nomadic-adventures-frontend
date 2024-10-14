'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto py-8">
        <motion.h2 
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Nomadic Adventures
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              className="rounded-lg shadow-md"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mb-4">
              Nomadic Adventures was founded in 2010 by a group of passionate travelers who wanted to share their love for exploration and adventure with the world. Our mission is to provide unique, sustainable, and unforgettable travel experiences that challenge perspectives and foster cultural understanding.
            </p>
            <p className="mb-4">
              With over a decade of experience, we've curated a selection of tours that take you off the beaten path and into the heart of local cultures. Our expert guides, commitment to responsible tourism, and dedication to creating meaningful connections set us apart in the travel industry.
            </p>
            <p>
              Join us on a journey of discovery, where every adventure is an opportunity to learn, grow, and create lasting memories.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
