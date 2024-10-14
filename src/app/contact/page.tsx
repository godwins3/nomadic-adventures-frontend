'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Contact() {
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
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-4">Have questions about our tours or need help planning your next adventure? We're here to help!</p>
            <ul className="space-y-2">
              <li>Email: info@nomadicadventures.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Explorer St, Adventure City, AC 12345</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input type="text" id="name" name="name" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
