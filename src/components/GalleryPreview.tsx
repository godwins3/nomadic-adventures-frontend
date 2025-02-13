'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const galleryImages = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
    '/images/img5.jpg',
    '/images/img6.jpg'
];

export default function GalleryPreview() {
    return (
        <div className="container mx-auto px-5 py-10 lg:px-32 h-[600px]">
            <h2 className="text-3xl font-bold text-center mb-6">From our adventures Gallery</h2>
            <div className="flex justify-end mb-6">
                <Link href="/gallery" legacyBehavior>
                    <a className="text-black px-6 py-3 rounded-full text-lg font-semibold transition-all border border-gray-500">
                        Visit our Gallery
                    </a>
                </Link>
            </div>
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={3000}
                showStatus={false}
                className="mb-6"
                centerMode={true}
                centerSlidePercentage={100}
                
            >
                {galleryImages.map((image, index) => (
                    <div key={index} className="w-full h-96 relative px-4 p-4"> {/* Increased px-4 for more spacing */}
                        <Image
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
