'use client'
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GalleryPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/img1.jpg"
                                width={500} // specify the width
                                height={500} // specify the height
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/img2.jpg"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/img3.jpg"
                                width={1000}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/img4.jpg"
                                width={1000}
                                height={500}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/img5.jpg"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/img6.jpg"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/img7.jpg"
                                width={500} // specify the width
                                height={500} // specify the height
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/img8.jpg"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/img9.jpg"
                                width={1000}
                                height={500}
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/img10.jpg"
                                width={1000}
                                height={500}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/img11.jpg"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="/images/img12.jpg"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}