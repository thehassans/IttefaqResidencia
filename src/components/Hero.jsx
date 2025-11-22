import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src="/hero-bg.png"
          alt="Ittefaq Residencia - Luxury Living"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-light tracking-[0.3em] mb-4 animate-slide-up">
          ITTEFAQ RESIDENCIA ISLAMABAD
        </h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight animate-fade-in">
          The Epitome of <span className="text-primary">Luxury</span>
        </h1>
        <p className="text-lg md:text-xl font-light text-gray-200 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Experience opulent living away from the city hustle. A peaceful, eco-friendly atmosphere with world-class infrastructure.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <button className="px-8 py-4 bg-primary text-white font-semibold rounded-none hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-wider">
            Explore Master Plan
          </button>
          <button className="px-8 py-4 border border-white text-white font-semibold rounded-none hover:bg-white hover:text-secondary transition-all duration-300 uppercase tracking-wider">
            Contact Us
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white z-20">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
