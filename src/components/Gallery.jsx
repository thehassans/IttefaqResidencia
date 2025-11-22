import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/media')
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(err => console.error('Failed to fetch gallery images', err));
  }, []);

  if (images.length === 0) return null;

  return (
    <section className="py-20 bg-[#F9F9F9] dark:bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h3 className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4">Visual Experience</h3>
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-secondary dark:text-white mb-6">
            Our <span className="text-[#D4AF37] italic font-light">Gallery</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div 
              key={img.id} 
              className="group relative h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
              <img 
                src={img.url} 
                alt={img.title || 'Gallery Image'} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                <h4 className="text-white font-serif text-xl mb-1">{img.title}</h4>
                <p className="text-gray-300 text-sm font-light tracking-wide">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
