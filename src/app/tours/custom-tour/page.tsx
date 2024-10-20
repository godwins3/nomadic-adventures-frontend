'use client'
import { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ItineraryBuilder from '../../../components/ItineraryBuilder';
import { tours } from '../../../data/tours';

export default function CustomTour() {
  const [selectedDestinations, setSelectedDestinations] = useState([]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Create Your Custom Tour</h1>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Selected Destinations</h2>
          {selectedDestinations.length > 0 ? (
            <ul className="space-y-2">
              {selectedDestinations.map((dest: { id: string; name: string }) => (
                <li key={dest.id} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                  <span>{dest.name}</span>
                  <button
                    onClick={() => setSelectedDestinations(prev => prev.filter(d => d !== dest))}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic">No destinations selected yet.</p>
          )}
        </div>
        <ItineraryBuilder
          destinations={tours}
          onSelect={(dest) => setSelectedDestinations(prev => [...prev, dest as never])}
          selectedDestinations={selectedDestinations}
        />
        {selectedDestinations.length > 0 && (
          <div className="mt-8 text-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Finalize Custom Tour
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
