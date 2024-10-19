'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ReviewSystem from '../../../components/ReviewSystem';
import { tours, Tour } from '../../../data/tours';

export default function TourBooking() {
  const { id } = useParams();
  const [tour, setTour] = useState<Tour | null>(null);
  const [bookingData, setBookingData] = useState({
    date: '',
    travelers: 1,
    additionalOptions: [] as string[],
  });

  useEffect(() => {
    // Find the tour with the matching id
    const fetchedTour = tours.find(t => t.id === parseInt(id as string));
    setTour(fetchedTour || null);
  }, [id]);

  if (!tour) {
    return <div>Loading...</div>;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle booking submission logic here
    console.log('Booking submitted:', bookingData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">{tour.name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image src={tour.image} alt={tour.name} width={600} height={400} className="rounded-lg" />
            <p className="mt-4 text-lg">{tour.description}</p>
            <p className="mt-2"><strong>Duration:</strong> {tour.duration}</p>
            <p className="mt-2"><strong>Price:</strong> ${tour.price}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Book This Tour</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="date" className="block mb-1">Departure Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={bookingData.date}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="travelers" className="block mb-1">Number of Travelers</label>
                <input
                  type="number"
                  id="travelers"
                  name="travelers"
                  value={bookingData.travelers}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Additional Options</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" name="guidedTour" className="mr-2" />
                    Guided Tour (+$200)
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="equipmentRental" className="mr-2" />
                    Equipment Rental (+$100)
                  </label>
                </div>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                Book Now
              </button>
            </form>
          </div>
        </div>
        <ReviewSystem tourId={tour.id} existingReviews={[]} />
      </main>
      <Footer />
    </div>
  );
}
