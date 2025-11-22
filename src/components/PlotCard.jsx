import React from 'react';

const PlotCard = ({ size, price, delay }) => {
  return (
    <div 
      className="bg-white dark:bg-dark border border-gray-100 dark:border-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:border-primary transition-all duration-300 transform hover:-translate-y-2 group animate-slide-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
        <svg className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
      <h3 className="text-2xl font-serif font-bold text-secondary dark:text-white mb-2">{size}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider mb-6">Residential Plot</p>
      <div className="text-3xl font-bold text-primary mb-6">
        {price} <span className="text-sm text-gray-400 font-normal">PKR</span>
      </div>
      <button className="w-full py-3 border border-secondary dark:border-gray-600 text-secondary dark:text-white font-semibold rounded hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
        View Details
      </button>
    </div>
  );
};

export default PlotCard;
