'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  {
    url: '/slider/slide1.jpeg',
    alt: 'College Campus',
    caption: 'Welcome to Aishwarya College'
  },
  {
    url: '/slider/slide2.jpeg',
    alt: 'College Library',
    caption: 'State-of-the-art Library'
  },
  {
    url: '/slider/slide3.jpg',
    alt: 'College Lab',
    caption: 'Modern Computer Labs'
  },
  {
    url: '/slider/slide4.jpg',
    alt: 'College Events',
    caption: 'Cultural Activities'
  }
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* Main Image */}
      <div className="relative h-full w-full">
        <Image
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          fill
          className="object-cover transition-opacity duration-500"
          priority
        />
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
          <h2 className="text-2xl font-semibold text-center">
            {images[currentIndex].caption}
          </h2>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-20 left-0 right-0">
        <div className="flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goToSlide((currentIndex - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goToSlide((currentIndex + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
} 