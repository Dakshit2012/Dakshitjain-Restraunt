import React, { useState } from 'react';
import { galleryImages } from '../mock';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'food', name: 'Food' },
    { id: 'interior', name: 'Interior' },
    { id: 'chef', name: 'Chef' },
    { id: 'customer', name: 'Ambiance' }
  ];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#1E1E1E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-[#FF6B35]">Gallery</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A glimpse into our culinary artistry and dining experience
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12 flex justify-center">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-xl font-semibold">{image.title}</h3>
                  <p className="text-gray-300 text-sm capitalize">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No images found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;