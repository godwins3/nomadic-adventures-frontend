'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Define TypeScript interfaces for our data structures
interface Continent {
  id: string;
  name: string;
}

interface Destination {
  id: number;
  name: string;
  continent: string;
  description: string;
  image: string;
  tours: number;
  rating: number;
  featured: boolean;
}

export default function DestinationsPage() {
    const [activeContinent, setActiveContinent] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
    const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([]);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);
    
    // Sample continents for filtering
    const continents: Continent[] = [
        { id: 'all', name: 'All Destinations' },
        { id: 'africa', name: 'Africa' },
        { id: 'asia', name: 'Asia' },
        { id: 'europe', name: 'Europe' },
        { id: 'northAmerica', name: 'North America' },
        { id: 'southAmerica', name: 'South America' },
        { id: 'oceania', name: 'Oceania' }
    ];
    
    // Sample destinations data
    const destinations: Destination[] = [
        {
            id: 1,
            name: 'Safari in Tanzania',
            continent: 'africa',
            description: 'Experience the breathtaking wildlife of the Serengeti and Ngorongoro Crater.',
            image: '/images/tanzania.jpg',
            tours: 5,
            rating: 4.9,
            featured: true
        },
        {
            id: 2,
            name: 'Kyoto Cultural Tour',
            continent: 'asia',
            description: 'Explore ancient temples, traditional tea ceremonies, and beautiful gardens.',
            image: '/images/kyoto.jpg',
            tours: 3,
            rating: 4.8,
            featured: true
        },
        {
            id: 3,
            name: 'Amalfi Coast Adventure',
            continent: 'europe',
            description: 'Discover picturesque villages, crystal clear waters, and delicious cuisine.',
            image: '/images/amalfi.jpg',
            tours: 4,
            rating: 4.7,
            featured: false
        },
        {
            id: 4,
            name: 'Yosemite National Park',
            continent: 'northAmerica',
            description: 'Hike among giant sequoias and witness spectacular waterfalls and valleys.',
            image: '/images/yosemite.jpg',
            tours: 6,
            rating: 4.9,
            featured: true
        },
        {
            id: 5,
            name: 'Machu Picchu Expedition',
            continent: 'southAmerica',
            description: 'Trek the Inca Trail to the ancient ruins perched high in the Andes.',
            image: '/images/machupicchu.jpg',
            tours: 4,
            rating: 4.8,
            featured: true
        },
        {
            id: 6,
            name: 'Great Barrier Reef',
            continent: 'oceania',
            description: 'Dive into the world\'s largest coral reef system teeming with marine life.',
            image: '/images/greatbarrierreef.jpg',
            tours: 5,
            rating: 4.9,
            featured: true
        },
        {
            id: 7,
            name: 'Moroccan Desert Tour',
            continent: 'africa',
            description: 'Ride camels through the Sahara and sleep under the stars in Berber camps.',
            image: '/images/morocco.jpg',
            tours: 3,
            rating: 4.7,
            featured: false
        },
        {
            id: 8,
            name: 'Bali Island Hopping',
            continent: 'asia',
            description: 'Experience the perfect blend of beaches, culture, and lush landscapes.',
            image: '/images/bali.jpg',
            tours: 5,
            rating: 4.8,
            featured: false
        },
        {
            id: 9,
            name: 'Norway Fjords Exploration',
            continent: 'europe',
            description: 'Cruise through dramatic fjords and hike to stunning viewpoints.',
            image: '/images/norway.jpg',
            tours: 4,
            rating: 4.8,
            featured: false
        },
        {
            id: 10,
            name: 'Costa Rica Rainforest Adventure',
            continent: 'northAmerica',
            description: 'Zip-line through canopies and explore diverse ecosystems.',
            image: '/images/costarica.jpg',
            tours: 6,
            rating: 4.7,
            featured: false
        },
        {
            id: 11,
            name: 'Patagonia Wilderness',
            continent: 'southAmerica',
            description: 'Trek through rugged mountains and witness glaciers up close.',
            image: '/images/patagonia.jpg',
            tours: 3,
            rating: 4.9,
            featured: false
        },
        {
            id: 12,
            name: 'New Zealand Adventure',
            continent: 'oceania',
            description: 'From snowy peaks to pristine beaches, experience diverse landscapes.',
            image: '/images/newzealand.jpg',
            tours: 7,
            rating: 4.9,
            featured: false
        }
    ];
    
    useEffect(() => {
        // Filter destinations based on continent and search query
        const filtered = destinations.filter(destination => {
            const matchesContinent = activeContinent === 'all' || destination.continent === activeContinent;
            const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                destination.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesContinent && matchesSearch;
        });
        setFilteredDestinations(filtered);
    }, [searchQuery, activeContinent]);
    
    // Featured destinations for the hero section
    const featuredDestinations = destinations.filter(dest => dest.featured);

    // Handle scrolling for the featured destinations carousel
    useEffect(() => {
        const carouselContainer = document.getElementById('featured-carousel');
        if (carouselContainer) {
            const handleScroll = () => {
                setScrollPosition(carouselContainer.scrollLeft);
                setMaxScroll(carouselContainer.scrollWidth - carouselContainer.clientWidth);
            };
            
            // Initial calculation
            handleScroll();
            
            carouselContainer.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleScroll);
            
            return () => {
                carouselContainer.removeEventListener('scroll', handleScroll);
                window.addEventListener('resize', handleScroll);
            };
        }
    }, [featuredDestinations]);

    // Handle scroll buttons
    const scrollLeft = () => {
        const carouselContainer = document.getElementById('featured-carousel');
        if (carouselContainer) {
            carouselContainer.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        const carouselContainer = document.getElementById('featured-carousel');
        if (carouselContainer) {
            carouselContainer.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header />
            
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-slate-800 to-slate-900 py-24 px-4 text-white">
                <div className="absolute inset-0 overflow-hidden opacity-10">
                    <div className="absolute inset-0" style={{ 
                        backgroundImage: "url('/images/destinations-hero.jpg')", 
                        backgroundSize: "cover",
                        filter: "blur(3px)"
                    }}></div>
                </div>
                
                <div className="container mx-auto relative z-10 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                                Destinations
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
                            Discover breathtaking locations and unforgettable experiences around the world
                        </p>
                    </motion.div>
                    
                    {/* Search Bar */}
                    <motion.div 
                        className="max-w-2xl mx-auto relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <div className={`relative transition-all duration-300 ${isSearchFocused ? 'transform -translate-y-2 shadow-xl' : 'shadow-lg'}`}>
                            <input
                                type="text"
                                placeholder="Search destinations..."
                                className="w-full py-4 pl-12 pr-4 rounded-full bg-white/90 backdrop-blur-sm border-none focus:ring-2 focus:ring-emerald-500 text-gray-800 text-lg transition-all duration-300"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => setIsSearchFocused(false)}
                            />
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            
            {/* Featured Destinations Carousel */}
            <section className="bg-gradient-to-r from-slate-800 to-slate-900 py-16 px-4">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-between mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Destinations</h2>
                        <Link 
                            href="/tours" 
                            className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                        >
                            View All Tours
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </motion.div>
                    
                    {/* Custom Carousel with Navigation */}
                    <div className="relative">
                        {/* Left Navigation Arrow */}
                        <button 
                            onClick={scrollLeft}
                            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-slate-900/70 text-white p-3 rounded-full backdrop-blur-sm shadow-lg hover:bg-emerald-600 transition-all duration-300 ${scrollPosition <= 10 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                            disabled={scrollPosition <= 10}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        
                        {/* Right Navigation Arrow */}
                        <button 
                            onClick={scrollRight}
                            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-slate-900/70 text-white p-3 rounded-full backdrop-blur-sm shadow-lg hover:bg-emerald-600 transition-all duration-300 ${scrollPosition >= maxScroll - 10 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                            disabled={scrollPosition >= maxScroll - 10}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        
                        {/* Carousel Container */}
                        <motion.div 
                            id="featured-carousel"
                            className="flex overflow-x-auto gap-6 pb-8 -mx-4 px-4 scroll-smooth hide-scrollbar"
                            style={{
                                scrollbarWidth: 'none', /* Firefox */
                                msOverflowStyle: 'none', /* IE and Edge */
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            {featuredDestinations.map((destination, index) => (
                                <motion.div 
                                    key={destination.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="flex-shrink-0 w-72 bg-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={destination.image}
                                            alt={destination.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-60"></div>
                                        <div className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                            Featured
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-xl font-semibold text-white mb-2">{destination.name}</h3>
                                        <div className="flex items-center mt-1 mb-3">
                                            <div className="flex text-yellow-400">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <svg key={i} className="w-4 h-4" fill={i < Math.floor(destination.rating) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                                    </svg>
                                                ))}
                                                <span className="ml-1 text-white text-sm">{destination.rating}</span>
                                            </div>
                                            <span className="ml-auto text-slate-300 text-sm">{destination.tours} Tours</span>
                                        </div>
                                        <Link 
                                            href={`/destinations/${destination.id}`}
                                            className="block w-full py-2 text-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-md hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-md group-hover:shadow-lg"
                                        >
                                            Explore Now
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                        
                        {/* Custom Scrollbar */}
                        <div className="w-full bg-slate-700 h-1 rounded-full mt-4 overflow-hidden">
                            <div 
                                className="bg-gradient-to-r from-emerald-500 to-teal-600 h-full transition-all duration-300 rounded-full"
                                style={{ 
                                    width: `${maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 100}%`,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Main Content */}
            <main id="explore" className="container mx-auto px-4 py-16">
                {/* Categories Filter */}
                <motion.div 
                    className="mb-12 flex flex-wrap justify-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    {continents.map(continent => (
                        <button
                            key={continent.id}
                            onClick={() => setActiveContinent(continent.id)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 
                                ${activeContinent === continent.id
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md transform scale-105'
                                : 'bg-white text-slate-700 hover:bg-slate-100 shadow'}`}
                        >
                            {continent.name}
                        </button>
                    ))}
                </motion.div>
                
                {/* Destinations Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {filteredDestinations.map(destination => (
                        <motion.div 
                            key={destination.id} 
                            variants={itemVariants}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image 
                                    src={destination.image} 
                                    alt={destination.name} 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-60"></div>
                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                                    <span className="text-white text-sm font-medium bg-emerald-500 px-3 py-1 rounded-full">
                                        {continents.find(c => c.id === destination.continent)?.name}
                                    </span>
                                    <span className="text-white text-sm bg-slate-800/70 px-3 py-1 rounded-full backdrop-blur-sm">
                                        {destination.tours} Tours
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-3 text-slate-800 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300">
                                    {destination.name}
                                </h2>
                                <p className="text-slate-600 mb-6 line-clamp-3">
                                    {destination.description}
                                </p>
                                
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-1">
                                        <div className="flex text-yellow-500">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <svg key={i} className="w-4 h-4" fill={i < Math.floor(destination.rating) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-slate-700">{destination.rating}</span>
                                    </div>
                                    
                                    <Link 
                                        href={`/destinations/${destination.id}`} 
                                        className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                                    >
                                        View Details
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                
                {/* No Results Message */}
                {filteredDestinations.length === 0 && (
                    <motion.div 
                        className="text-center py-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-block p-4 rounded-full bg-slate-100 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-700 mb-2">No destinations found</h3>
                        <p className="text-slate-500 mb-6">Try adjusting your search or filter criteria</p>
                        <button 
                            onClick={() => {setActiveContinent('all'); setSearchQuery('');}}
                            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-md hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-md"
                        >
                            Reset Filters
                        </button>
                    </motion.div>
                )}
                
                {/* Newsletter Signup */}
                <motion.div 
                    className="mt-20 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl shadow-xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-10 md:p-12 flex flex-col justify-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Travel <span className="text-emerald-400">Inspiration</span> Newsletter
                            </h3>
                            <p className="text-slate-300 mb-6">
                                Get the latest travel tips, exclusive deals, and new destination alerts directly to your inbox.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input 
                                    type="email" 
                                    placeholder="Your email address" 
                                    className="flex-grow px-4 py-3 rounded-md focus:ring-2 focus:ring-emerald-500 border-none"
                                />
                                <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-md hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 font-medium whitespace-nowrap shadow-md">
                                    Subscribe Now
                                </button>
                            </div>
                        </div>
                        <div className="hidden md:block relative h-64 md:h-auto">
                            <Image
                                src="/images/newsletter-bg.jpg"
                                alt="Newsletter"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-emerald-600/30 mix-blend-multiply"></div>
                        </div>
                    </div>
                </motion.div>
            </main>
            <Footer />
            
            {/* Add global style to hide scrollbar */}
            <style jsx global>{`
                /* Hide scrollbar for Chrome, Safari and Opera */
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                
                /* Hide scrollbar for IE, Edge and Firefox */
                .hide-scrollbar {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>
        </div>
    );
}
