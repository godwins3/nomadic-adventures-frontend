'use client'
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

// Define interfaces for type safety
interface Tour {
  id: number;
  name: string;
  price: number;
  duration: string;
  image: string;
  category: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  travelers: number;
  date: string;
  specialRequests: string;
  agreeToTerms: boolean;
}

interface PriceSummary {
  basePrice: number;
  taxAndFees: number;
  total: number;
}

// Tour data
const availableTours: Tour[] = [
  {
    id: 1,
    name: 'Taita Hills Adventure',
    price: 599,
    duration: '3 days',
    image: '/images/img4.jpg',
    category: 'Adventure',
  },
  {
    id: 2,
    name: 'Amboseli National Park Safari',
    price: 899,
    duration: '4 days',
    image: '/images/img1.jpg',
    category: 'Wildlife',
  },
  {
    id: 3,
    name: 'Maasai Mara Wildlife Tour',
    price: 1299,
    duration: '5 days',
    image: '/images/img3.jpg',
    category: 'Wildlife',
  },
  {
    id: 4,
    name: 'Coastal Beach Getaway',
    price: 799,
    duration: '4 days',
    image: '/images/hero2.jpeg',
    category: 'Relaxation',
  },
  {
    id: 5,
    name: 'Mount Kenya Hiking Expedition',
    price: 1099,
    duration: '6 days',
    image: '/images/hero1.jpeg',
    category: 'Adventure',
  },
];

export default function BookNow() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [formStep, setFormStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    travelers: 1,
    date: '',
    specialRequests: '',
    agreeToTerms: false
  });
  const [bookingComplete, setBookingComplete] = useState<boolean>(false);
  const [bookingReference, setBookingReference] = useState<string>('');

  const handleSelectTour = (tour: Tour) => {
    setSelectedTour(tour);
    setFormStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleNextStep = () => {
    setFormStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevStep = () => {
    setFormStep(formStep - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate a random booking reference
    const reference = 'NA' + Math.floor(100000 + Math.random() * 900000);
    setBookingReference(reference);
    setBookingComplete(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetBooking = () => {
    setSelectedTour(null);
    setFormStep(1);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      travelers: 1,
      date: '',
      specialRequests: '',
      agreeToTerms: false
    });
    setBookingComplete(false);
    setBookingReference('');
  };

  // Calculate tomorrow's date for the min date attribute
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  // Calculate total price
  const calculateTotal = (): PriceSummary => {
    if (!selectedTour) return {
      basePrice: 0,
      taxAndFees: 0,
      total: 0
    };
    
    const basePrice = selectedTour.price * formData.travelers;
    const taxAndFees = basePrice * 0.12;
    
    return {
      basePrice,
      taxAndFees,
      total: basePrice + taxAndFees
    };
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative h-64 md:h-80">
          <Image
            src="/images/hero2.jpeg"
            alt="Booking banner"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Book Your Adventure
              </h1>
              <p className="text-lg text-white max-w-2xl mx-auto px-4">
                Start your journey with Nomadic Adventures and create memories that last a lifetime
              </p>
            </div>
          </div>
        </section>

        {/* Booking Progress */}
        {!bookingComplete && (
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center max-w-3xl mx-auto mb-8">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formStep >= 1 ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  1
                </div>
                <span className="text-sm mt-2">Select Tour</span>
              </div>
              <div className={`flex-1 h-1 mx-2 ${formStep >= 2 ? 'bg-emerald-500' : 'bg-gray-200'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formStep >= 2 ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  2
                </div>
                <span className="text-sm mt-2">Your Details</span>
              </div>
              <div className={`flex-1 h-1 mx-2 ${formStep >= 3 ? 'bg-emerald-500' : 'bg-gray-200'}`}></div>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formStep >= 3 ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  3
                </div>
                <span className="text-sm mt-2">Review & Pay</span>
              </div>
            </div>
          </div>
        )}

        {/* Booking Success */}
        {bookingComplete && selectedTour && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div 
                className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Booking Confirmed!</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Thank you for booking your adventure with us. We've sent a confirmation to your email.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Booking Details</h3>
                  <div className="flex flex-col space-y-3">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Booking Reference:</span>
                      <span className="font-medium">{bookingReference}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Tour:</span>
                      <span className="font-medium">{selectedTour.name}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Traveler(s):</span>
                      <span className="font-medium">{formData.travelers}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">{formData.date}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Total Amount:</span>
                      <span className="font-medium">${calculateTotal().total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <Link 
                    href="/" 
                    className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                  >
                    Return to Homepage
                  </Link>
                  <button 
                    onClick={resetBooking} 
                    className="px-6 py-3 border border-emerald-500 text-emerald-500 rounded-lg hover:bg-emerald-50 transition-colors"
                  >
                    Book Another Tour
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Step 1: Select Tour */}
        {!bookingComplete && formStep === 1 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Select Your Adventure</h2>
                <p className="text-lg text-gray-600">
                  Choose from our curated selection of extraordinary journeys
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {availableTours.map((tour) => (
                  <motion.div 
                    key={tour.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: tour.id * 0.1 }}
                  >
                    <div className="relative h-48">
                      <Image
                        src={tour.image}
                        alt={tour.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <div className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                        {tour.category}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-2">{tour.name}</h3>
                      <div className="flex justify-between mb-4">
                        <div className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 text-emerald-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span>{tour.duration}</span>
                        </div>
                        <div className="text-emerald-600 font-bold">${tour.price}</div>
                      </div>
                      <button 
                        onClick={() => handleSelectTour(tour)}
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg transition-colors duration-300"
                      >
                        Select & Continue
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Step 2: Customer Information */}
        {!bookingComplete && formStep === 2 && selectedTour && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                  <div className="p-6 bg-emerald-50 border-b border-emerald-100">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                          <Image 
                            src={selectedTour.image} 
                            alt={selectedTour.name}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{selectedTour.name}</h3>
                        <div className="flex mt-1 text-sm text-gray-600">
                          <span className="flex items-center mr-4">
                            <svg className="w-4 h-4 text-emerald-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            {selectedTour.duration}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 text-emerald-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                            </svg>
                            {selectedTour.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Your Information</h3>
                    <form>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-1">Number of Travelers</label>
                          <select
                            id="travelers"
                            name="travelers"
                            value={formData.travelers}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            required
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                              <option key={num} value={num}>{num}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Travel Date</label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            min={minDate}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                          <textarea
                            id="specialRequests"
                            name="specialRequests"
                            value={formData.specialRequests}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder="Let us know if you have any special requirements or requests..."
                          ></textarea>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                          disabled={!formData.fullName || !formData.email || !formData.phone || !formData.date}
                        >
                          Continue to Review
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Step 3: Review and Payment */}
        {!bookingComplete && formStep === 3 && selectedTour && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                  <div className="p-6 bg-emerald-50 border-b border-emerald-100">
                    <h3 className="text-xl font-bold text-gray-800">Review Your Booking</h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4 pb-2 border-b">Trip Details</h4>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <div className="w-32 flex-shrink-0 font-medium text-gray-600">Tour:</div>
                            <div className="font-medium">{selectedTour.name}</div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-32 flex-shrink-0 font-medium text-gray-600">Duration:</div>
                            <div>{selectedTour.duration}</div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-32 flex-shrink-0 font-medium text-gray-600">Category:</div>
                            <div>{selectedTour.category}</div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-32 flex-shrink-0 font-medium text-gray-600">Date:</div>
                            <div>{formData.date}</div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-32 flex-shrink-0 font-medium text-gray-600">Travelers:</div>
                            <div>{formData.travelers}</div>
                          </div>
                        </div>

                        <h4 className="text-lg font-semibold mb-4 mt-8 pb-2 border-b">Contact Information</h4>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <div className="w-32 flex-shrink-0 font-medium text-gray-600">Name:</div>
                            <div>{formData.fullName}</div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-32 flex-shrink-0 font-medium text-gray-600">Email:</div>
                            <div>{formData.email}</div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-32 flex-shrink-0 font-medium text-gray-600">Phone:</div>
                            <div>{formData.phone}</div>
                          </div>
                          {formData.specialRequests && (
                            <div className="flex items-start">
                              <div className="w-32 flex-shrink-0 font-medium text-gray-600">Requests:</div>
                              <div>{formData.specialRequests}</div>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <div className="bg-gray-50 rounded-lg p-6">
                          <h4 className="text-lg font-semibold mb-6 pb-2 border-b">Price Summary</h4>
                          <div className="space-y-4">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Base Price (${selectedTour.price} × {formData.travelers})</span>
                              <span>${calculateTotal().basePrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Taxes & Fees (12%)</span>
                              <span>${calculateTotal().taxAndFees.toFixed(2)}</span>
                            </div>
                            <div className="h-px bg-gray-200 my-2"></div>
                            <div className="flex justify-between font-bold text-lg">
                              <span>Total</span>
                              <span>${calculateTotal().total.toFixed(2)}</span>
                            </div>
                          </div>

                          <div className="mt-8">
                            <h4 className="text-lg font-semibold mb-4">Payment Method</h4>
                            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
                              <div className="flex items-center mb-4">
                                <input 
                                  type="radio" 
                                  id="creditCard" 
                                  name="paymentMethod" 
                                  checked 
                                  className="w-4 h-4 text-emerald-500" 
                                />
                                <label htmlFor="creditCard" className="ml-2 font-medium">Credit Card</label>
                              </div>
                              <div className="grid grid-cols-1 gap-4">
                                <div>
                                  <label className="block text-sm text-gray-600 mb-1">Card Number</label>
                                  <input 
                                    type="text" 
                                    placeholder="XXXX XXXX XXXX XXXX" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                  />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label className="block text-sm text-gray-600 mb-1">Expiry Date</label>
                                    <input 
                                      type="text" 
                                      placeholder="MM/YY" 
                                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm text-gray-600 mb-1">CVV</label>
                                    <input 
                                      type="text" 
                                      placeholder="XXX" 
                                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mb-6">
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  id="agreeToTerms"
                                  name="agreeToTerms"
                                  checked={formData.agreeToTerms}
                                  onChange={handleInputChange}
                                  className="w-4 h-4 text-emerald-500"
                                  required
                                />
                                <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-600">
                                  I agree to the <Link href="/terms" className="text-emerald-500 hover:underline">Terms and Conditions</Link>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!formData.agreeToTerms}
                        className={`px-6 py-2 rounded-lg text-white ${formData.agreeToTerms ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-gray-400 cursor-not-allowed'} transition-colors`}
                      >
                        Complete Booking
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {[
                  {
                    question: "What is your cancellation policy?",
                    answer: "We understand that plans change. Cancellations made 30 days or more before the trip date receive a full refund. Cancellations 15-29 days before receive a 50% refund. Cancellations less than 15 days before the trip are non-refundable."
                  },
                  {
                    question: "How many people are typically in a tour group?",
                    answer: "Our tours typically have 8-12 participants to ensure a personalized experience. Some specialized adventures may have smaller group sizes. Private tours are also available upon request."
                  },
                      {
                        question: "What should I pack for my trip?",
                        answer: "A detailed packing list will be sent to you after booking. Generally, we recommend comfortable clothing suitable for the climate, good walking shoes, a camera, sunscreen, and any personal medications you might need."
                      },
                      {
                        question: "Are meals included in the tour price?",
                        answer: "Most of our tours include breakfast daily, and select lunches and dinners as specified in each tour itinerary. This allows you to also explore local cuisine on your own during free time."
                      },
                      {
                        question: "Do I need travel insurance?",
                        answer: "Yes, we strongly recommend comprehensive travel insurance that covers trip cancellation, medical emergencies, and baggage loss. We can suggest reliable insurance providers if needed."
                      }
                    ].map((faq, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <details className="group">
                          <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                            <span>{faq.question}</span>
                            <span className="transition group-open:rotate-180">
                              <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                <path d="M6 9l6 6 6-6"></path>
                              </svg>
                            </span>
                          </summary>
                          <p className="text-gray-600 p-4 pt-0">{faq.answer}</p>
                        </details>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 text-center">
                    <p className="text-gray-600 mb-4">Have more questions? We're here to help!</p>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center text-emerald-500 hover:text-emerald-600 font-medium"
                    >
                      Contact our support team
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      );
    }
    