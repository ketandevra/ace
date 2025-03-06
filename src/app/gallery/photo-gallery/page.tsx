import PhotoGallery from '@/components/PhotoGallery';

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Photo Gallery
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Explore our campus life through pictures
        </p>
      </div>
      
      <PhotoGallery />
    </div>
  );
} 