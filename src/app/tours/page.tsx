'use client'
import Image from "next/image";
// import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

interface Tour {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  duration: string;
  difficulty: string;
}

const tours: Tour[] = [
  {
    id: 1,
    name: "Machu Picchu Trek",
    description: "Explore the ancient Incan ruins and hike through breathtaking Andean landscapes.",
    price: 1999,
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377",
    duration: "7 days",
    difficulty: "Moderate"
  },
  {
    id: 2,
    name: "Sahara Desert Adventure",
    description: "Camp under the stars in the Sahara and experience the magic of the desert.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1548234979-f5f8f0d41236",
    duration: "5 days",
    difficulty: "Easy"
  },
  {
    id: 3,
    name: "Northern Lights Expedition",
    description: "Witness the aurora borealis in Iceland and explore stunning glaciers and waterfalls.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
    duration: "6 days",
    difficulty: "Easy"
  },
  {
    id: 4,
    name: "Amazon Rainforest Expedition",
    description: "Discover the incredible biodiversity of the Amazon and meet indigenous communities.",
    price: 2199,
    image: "https://images.unsplash.com/photo-1516908205727-40afad9449a8",
    duration: "8 days",
    difficulty: "Moderate"
  },
  {
    id: 5,
    name: "Great Barrier Reef Diving",
    description: "Explore the world's largest coral reef system and swim with tropical marine life.",
    price: 2799,
    image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0",
    duration: "6 days",
    difficulty: "Moderate"
  },
  {
    id: 6,
    name: "Mount Kilimanjaro Climb",
    description: "Conquer Africa's highest peak and enjoy stunning views from the 'Roof of Africa'.",
    price: 3299,
    image: "https://images.unsplash.com/photo-1621414050941-8aa38f4b5d48",
    duration: "9 days",
    difficulty: "Challenging"
  }
];

export default function Tours() {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("All");

  const filteredTours = tours.filter((tour) => 
    tour.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (difficultyFilter === "All" || tour.difficulty === difficultyFilter)
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto py-8">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Tours
        </motion.h2>

        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
          <input
            type="text"
            placeholder="Search tours..."
            className="w-full md:w-1/3 p-2 border rounded mb-4 md:mb-0"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="w-full md:w-1/4 p-2 border rounded"
            onChange={(e) => setDifficultyFilter(e.target.value)}
          >
            <option value="All">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Challenging">Challenging</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour, index) => (
            <motion.div 
              key={tour.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={tour.image}
                alt={tour.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">Duration: {tour.duration}</span>
                  <span className="text-sm text-gray-500">Difficulty: {tour.difficulty}</span>
                </div>
                <p className="font-bold text-lg mb-4">Price: ${tour.price}</p>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    
      <Footer />
    </div>
  );
}