'use client'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ItineraryBuilder from '../../components/ItineraryBuilder';
import React from 'react';

const destinations = [
  { id: 1, name: 'Machu Picchu' },
  { id: 2, name: 'Sahara Desert' },
  { id: 3, name: 'Northern Lights, Iceland' },
  // Add more destinations
];

export default function CustomTour() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Create Your Custom Tour</h1>
        <ItineraryBuilder 
          destinations={destinations} 
          onSelect={() => {}} 
          selectedDestinations={[]}
        />
      </main>
      <Footer />
    </div>
  );
}
