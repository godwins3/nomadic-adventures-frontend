import Link from "next/link";
import React from "react";

interface Tour {
  id: number;
  name: string;
  description: string;
  price: number;
}

const tours: Tour[] = [
  { id: 1, name: "Machu Picchu Trek", description: "Explore the ancient Incan ruins", price: 1999 },
  { id: 2, name: "Sahara Desert Adventure", description: "Camp under the stars in the Sahara", price: 1499 },
  { id: 3, name: "Northern Lights Expedition", description: "Witness the aurora borealis in Iceland", price: 2499 },
];

export default function Tours() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Nomadic Adventures</h1>
          <nav>
            <Link href="/" className="hover:underline">Home</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4">Our Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <div key={tour.id} className="border rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
              <p className="mb-2">{tour.description}</p>
              <p className="font-bold">Price: ${tour.price}</p>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-200 p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Nomadic Adventures. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

