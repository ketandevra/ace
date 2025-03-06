'use client'

import { useState, useEffect } from 'react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1562774053-701939374585',
    title: 'College Campus',
    category: 'Campus'
  },
  {
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
    title: 'Library Reading Area',
    category: 'Library'
  },
  {
    url: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0',
    title: 'Computer Lab',
    category: 'Labs'
  },
  {
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
    title: 'Cultural Event',
    category: 'Events'
  },
  {
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
    title: 'Sports Ground',
    category: 'Sports'
  },
  {
    url: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952',
    title: 'Science Lab',
    category: 'Labs'
  },
  {
    url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6',
    title: 'Library Books',
    category: 'Library'
  },
  {
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
    title: 'College Building',
    category: 'Campus'
  },
  {
    url: 'https://images.unsplash.com/photo-1511883040705-6011fad9edfc',
    title: 'Annual Function',
    category: 'Events'
  }
];

const categories = ['All', ...new Set(galleryImages.map(img => img.category))];

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleImageClick = (url: string) => {
    const index = filteredImages.findIndex(img => img.url === url);
    setCurrentImageIndex(index);
    setSelectedImage(url);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!selectedImage) return;

    if (e.key === 'ArrowRight') {
      const nextIndex = (currentImageIndex + 1) % filteredImages.length;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(filteredImages[nextIndex].url);
    }
    else if (e.key === 'ArrowLeft') {
      const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(filteredImages[prevIndex].url);
    }
    else if (e.key === 'Escape') {
      setSelectedImage(null);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex, filteredImages]);

  return (
    <div className="py-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="relative h-64 group cursor-pointer overflow-hidden rounded-lg"
            onClick={() => handleImageClick(image.url)}
          >
            <img
              src={image.url}
              alt={image.title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-semibold">{image.title}</h3>
                <p className="text-sm text-gray-200">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox with Navigation */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button - Moved outside and to the top right corner */}
          <button
            className="fixed top-4 right-4 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all z-50"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Arrows - Moved outside the image container */}
          <button
            className="fixed left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all z-50"
            onClick={(e) => {
              e.stopPropagation();
              handleKeyDown({ key: 'ArrowLeft' } as KeyboardEvent);
            }}
            aria-label="Previous image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="fixed right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all z-50"
            onClick={(e) => {
              e.stopPropagation();
              handleKeyDown({ key: 'ArrowRight' } as KeyboardEvent);
            }}
            aria-label="Next image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center" 
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt={filteredImages[currentImageIndex].title}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
} 