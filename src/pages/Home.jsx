import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Section from '../components/Section';
import PlotCard from '../components/PlotCard';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import ScheduleVisitModal from '../components/ScheduleVisitModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('residential');
  const [activeFacility, setActiveFacility] = useState('education');
  const [activeAmenity, setActiveAmenity] = useState(null);
  return (
    <div className="bg-white dark:bg-dark min-h-screen">
      <Header setIsModalOpen={setIsModalOpen} />
      <ScheduleVisitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Hero />

      {/* Master Plan Section */}
      <Section id="master-plan" className="py-32 bg-[#F9F9F9] dark:bg-[#151515] relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C5B392]/5 skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C5B392]/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="inline-block">
                <h3 className="text-[#C5B392] font-bold uppercase tracking-[0.25em] text-sm mb-2 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-[#C5B392]"></span>
                  Project Layout
                </h3>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-secondary dark:text-white leading-tight">
                  Master <span className="text-[#C5B392] italic font-light">Plan</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg font-light leading-relaxed text-justify">
                <p>
                  Ittefaq Residencia Islamabad has an incredible master plan comprising all the luxurious facilities and amenities. The master plan shows that the society has a total land of 2000 kanals.
                </p>
                <p>
                  The society will be a gated community with wide roads and underground sewerage systems having residential plots, residential units, apartments, and various commercial properties. Schools, Hospital, Parks & Jogging tracks, and high-rise buildings; are all part of this residential marvel.
                </p>
              </div>

              <div className="pt-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-[#C5B392]/10 flex items-center justify-center text-[#C5B392] group-hover:bg-[#C5B392] group-hover:text-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-secondary dark:text-white text-xl">2000</h4>
                      <p className="text-xs uppercase tracking-widest text-gray-500">Kanals Land</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-[#C5B392]/10 flex items-center justify-center text-[#C5B392] group-hover:bg-[#C5B392] group-hover:text-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-secondary dark:text-white text-xl">100%</h4>
                      <p className="text-xs uppercase tracking-widest text-gray-500">Approved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                <div 
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10 cursor-zoom-in"
                  onClick={() => setActiveTab('zoom-master-plan')}
                ></div>
                <img 
                  src="/master-plan-final-v4.jpg" 
                  alt="Ittefaq Residencia Master Plan" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Zoom Icon Overlay */}
                <div className="absolute bottom-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:bg-[#C5B392] hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Section>



      {/* Pricing / Blocks Section */}
      <Section id="blocks" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content - Tabs & Pricing */}
            <div className="w-full lg:w-1/2 space-y-10">
              {/* Tabs */}
              <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg w-fit">
                <button 
                  onClick={() => setActiveTab('residential')}
                  className={`px-8 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded-md ${
                    activeTab === 'residential' 
                      ? 'bg-[#C5B392] text-white shadow-lg' 
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                >
                  Residential Plots
                </button>
                <button 
                  onClick={() => setActiveTab('commercial')}
                  className={`px-8 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded-md ${
                    activeTab === 'commercial' 
                      ? 'bg-[#C5B392] text-white shadow-lg' 
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                >
                  Commercial Plots
                </button>
              </div>

              {/* Description */}
              <div className="animate-fade-in-up">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-light">
                  {activeTab === 'residential' 
                    ? "Ittefaq Residencia has come up with great living options for all families and age groups. The Society offers plots of different sizes 4 Marla, 5 Marla, 6 Marla and 7 Marla."
                    : "Ittefaq Residencia Islamabad features a state-of-the-art commercial area that is explicitly designed for the residents to fulfil all their commercial needs. The society's commercial area comprises all the top-notch facilities and amenities. There are four sizes of commercial plots in Ittefaq Residencia Islamabad."
                  }
                </p>
              </div>

              {/* Pricing List */}
              <div className="space-y-0 border-t border-gray-200 dark:border-gray-700">
                {activeTab === 'residential' ? (
                  <>
                    {[
                      { size: "4 MARLA", price: "16 LAC" },
                      { size: "5 MARLA", price: "20 LAC" },
                      { size: "6 MARLA", price: "24 LAC" },
                      { size: "8 MARLA", price: "32 LAC" },
                      { size: "10 MARLA", price: "40 LAC" }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-5 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 px-4 -mx-4 rounded-lg group cursor-default">
                        <span className="text-sm font-medium tracking-widest text-gray-500 dark:text-gray-400 uppercase group-hover:text-[#C5B392] transition-colors">{item.size}</span>
                        <span className="text-sm font-bold tracking-widest text-gray-800 dark:text-gray-200 uppercase">{item.price}</span>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {[
                      { size: "PER MARLA | WIDE ROAD: 60 FEET", price: "8 LAC" },
                      { size: "PER MARLA | WIDE ROAD: 120 FEET", price: "15 LAC" }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-5 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 px-4 -mx-4 rounded-lg group cursor-default">
                        <span className="text-sm font-medium tracking-widest text-gray-500 dark:text-gray-400 uppercase group-hover:text-[#C5B392] transition-colors">{item.size}</span>
                        <span className="text-sm font-bold tracking-widest text-gray-800 dark:text-gray-200 uppercase">{item.price}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-5 border border-[#C5B392] text-[#C5B392] font-bold tracking-[0.2em] uppercase hover:bg-[#C5B392] hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl transform hover:-translate-y-1"
                >
                  Schedule a Visit
                </button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="w-full lg:w-1/2">
               <div className="bg-white p-6 shadow-2xl border border-gray-100 dark:border-gray-700 transform transition-transform duration-700 hover:scale-[1.02]">
                 <div className="border-4 border-black p-2">
                   <img 
                     src={activeTab === 'residential' ? "/floor-plan-residential.png" : "/floor-plan-commercial.png"}
                     alt={activeTab === 'residential' ? "Residential Floor Plan" : "Commercial Floor Plan"} 
                     className="w-full h-auto contrast-125"
                   />
                 </div>
               </div>
            </div>

          </div>
        </div>
      </Section>

      {/* Salient Features Section */}
      <Section id="features" className="py-24 bg-white dark:bg-dark relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h3 className="text-[#C5B392] font-bold uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-3">
              <span className="w-8 h-[2px] bg-[#C5B392]"></span>
              Salient Features
              <span className="w-8 h-[2px] bg-[#C5B392]"></span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-light mt-6">
              Ittefaq Residencia Islamabad is in the spotlight mainly because of its salient features. The housing society is the combination of contemporary standards of living and peaceful living. It is a highly regarded luxurious society with only one aim; to accommodate the people and provide them with high standards of living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1 */}
            <div className="group hover:-translate-y-2 transition-transform duration-500">
              <div className="mb-6 text-[#C5B392]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h4 className="text-xl font-serif font-bold text-secondary dark:text-white mb-6 uppercase tracking-wide border-b border-gray-200 dark:border-gray-700 pb-4">
                Human-Centered Design <br/> Friendly Spaces
              </h4>
              <ul className="space-y-4">
                {['Wide roads', 'Affordable', 'Magnificent apartments', 'Highly accessible', 'School', 'Commercial hubs'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600 dark:text-gray-300 group-hover:text-secondary dark:group-hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#C5B392] rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="group hover:-translate-y-2 transition-transform duration-500">
              <div className="mb-6 text-[#C5B392]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-serif font-bold text-secondary dark:text-white mb-6 uppercase tracking-wide border-b border-gray-200 dark:border-gray-700 pb-4">
                Dedicated Production <br/> And Planning Teams
              </h4>
              <ul className="space-y-4">
                {['Lush green scenic views', 'Eco-friendly living', 'Beautiful entrance', 'High-end amenities', 'Mosques', 'Mega shopping malls', 'Gyms'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600 dark:text-gray-300 group-hover:text-secondary dark:group-hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#C5B392] rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="group hover:-translate-y-2 transition-transform duration-500">
              <div className="mb-6 text-[#C5B392]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-serif font-bold text-secondary dark:text-white mb-6 uppercase tracking-wide border-b border-gray-200 dark:border-gray-700 pb-4">
                Premium, Health <br/> and Education
              </h4>
              <ul className="space-y-4">
                {['Education Facility', 'Health Care facilty', 'Cementry', 'High Rise Buildings'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600 dark:text-gray-300 group-hover:text-secondary dark:group-hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#C5B392] rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 */}
            <div className="group hover:-translate-y-2 transition-transform duration-500">
              <div className="mb-6 text-[#C5B392]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-serif font-bold text-secondary dark:text-white mb-6 uppercase tracking-wide border-b border-gray-200 dark:border-gray-700 pb-4">
                Flexible, Contemporary <br/> Spaces
              </h4>
              <ul className="space-y-4">
                {['Commercial Areas', 'Restaurants Spa & Gym', '24/7 Availability of Water Gas and Electricity', 'Wide carpeted Roads', 'Parks and jogging Tracks'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600 dark:text-gray-300 group-hover:text-secondary dark:group-hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#C5B392] rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Master Plan Zoom Modal */}
      {activeTab === 'zoom-master-plan' && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setActiveTab('residential')} // Close zoom
        >
          <img 
            src="/master-plan-final-v4.jpg" 
            alt="Master Plan Full Screen" 
            className="max-w-full max-h-full object-contain animate-zoom-in"
          />
          <button className="absolute top-6 right-6 text-white hover:text-[#C5B392] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Interactive Master Plan / Development Section (Refined Horizontal) */}
      <Section id="development" className="py-32 bg-[#F9F9F9] dark:bg-[#0a0a0a] relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-6">World-Class Infrastructure</h3>
            <h2 className="text-5xl md:text-7xl font-serif font-medium text-secondary dark:text-white mb-8 leading-tight">
              Development <span className="text-[#D4AF37] font-light italic">&</span> Amenities
            </h2>
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto opacity-50"></div>
          </div>

          <div className="flex flex-col items-center gap-16">
            
            {/* Horizontal Amenities List (Now ABOVE Image) - CLICKABLE */}
            <div className="w-full max-w-6xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
                {[
                  { name: 'Education Facility', markerId: 'education' },
                  { name: 'Health Care Facility', markerId: 'health' },
                  { name: 'Cemetery', markerId: 'cemetery' },
                  { name: 'High Rise Buildings', markerId: 'highrise' },
                  { name: 'Commercial Areas', markerId: 'commercial' },
                  { name: 'Restaurants Spa & Gym', markerId: 'restaurants' },
                  { name: '24/7 Availability of Water Gas and Electricity', markerId: 'utilities' },
                  { name: 'Wide Carpeted Roads', markerId: 'roads' },
                  { name: 'Parks and Jogging Tracks', markerId: 'parks' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    onClick={() => setActiveAmenity(activeAmenity === item.markerId ? null : item.markerId)}
                    className={`flex items-center gap-3 group cursor-pointer transition-all duration-500 hover:-translate-y-1 ${
                      activeAmenity === item.markerId ? 'scale-110' : ''
                    }`}
                    style={{ animationDelay: `${0.3 + (index * 0.05)}s` }}
                  >
                    <div className={`w-1.5 h-1.5 bg-[#D4AF37] rotate-45 transition-all duration-500 ${
                      activeAmenity === item.markerId 
                        ? 'scale-150 shadow-[0_0_10px_rgba(212,175,55,0.8)]' 
                        : 'group-hover:scale-150'
                    }`}></div>
                    <span className={`text-sm md:text-base font-serif tracking-wide transition-all duration-300 border-b pb-0.5 ${
                      activeAmenity === item.markerId
                        ? 'text-[#D4AF37] font-bold border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                        : 'text-gray-600 dark:text-gray-300 group-hover:text-[#D4AF37] border-transparent group-hover:border-[#D4AF37]/30'
                    }`}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Map Display with Interactive Markers */}
            <div className="w-full max-w-3xl h-[300px] relative bg-[#E6D5B8] rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[#D4AF37]/20 group animate-zoom-in" style={{ animationDelay: '0.5s' }}>
              <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/5 z-10"></div>
              <img 
                src="/master-plan-hq.jpg" 
                alt="Interactive Master Plan" 
                className="w-full h-full object-contain object-center transform transition-transform duration-[3s] scale-100 group-hover:scale-105 filter sepia-[0.2] group-hover:sepia-0"
              />
              {/* Interactive Markers - Point to locations when clicked */}
              {[
                  { id: 'education', top: '35%', left: '32%' },
                  { id: 'health', top: '42%', left: '36%' },
                  { id: 'cemetery', top: '38%', left: '28%' },
                  { id: 'highrise', top: '55%', left: '58%' },
                  { id: 'commercial', top: '68%', left: '48%' },
                  { id: 'restaurants', top: '58%', left: '65%' },
                  { id: 'utilities', top: '48%', left: '44%' },
                  { id: 'roads', top: '52%', left: '52%' },
                  { id: 'parks', top: '48%', left: '72%' }
              ].map((marker) => (
                <div
                  key={marker.id}
                  className="absolute z-20"
                  style={{ top: marker.top, left: marker.left }}
                >
                  {/* Glow Ring - Shows when active */}
                  {activeAmenity === marker.id && (
                    <div className="absolute inset-0 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-5 h-5 bg-[#D4AF37] rounded-full opacity-80 animate-glow-ring"></div>
                    </div>
                  )}
                  {/* Main Marker Dot */}
                  <div className={`rounded-full border-2 shadow-lg transition-all duration-500 -translate-x-1/2 -translate-y-1/2 ${
                    activeAmenity === marker.id 
                      ? 'w-4 h-4 bg-[#D4AF37] border-white animate-marker-pulse scale-150 shadow-[0_0_20px_rgba(212,175,55,0.9)]' 
                      : 'w-2.5 h-2.5 bg-[#D4AF37] border-white/70 animate-pulse'
                  }`}></div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </Section>

      {/* About Us Section (Moved) */}
      <Section id="about" className="py-24 bg-white dark:bg-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#C5B392]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C5B392]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-[#C5B392] font-bold uppercase tracking-[0.2em] mb-4">Our Vision</h3>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary dark:text-white mb-8 leading-tight">
                Redefining <br/>
                <span className="text-[#C5B392]">Premium Living</span>
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg font-light leading-relaxed">
                <p>
                  Ittefaq Residencia is more than just a housing society; it's a commitment to a superior lifestyle. 
                  Nestled in a prime location, we blend modern infrastructure with serene surroundings to create 
                  the perfect sanctuary for you and your family.
                </p>
                <p>
                  Our dedication to quality, transparency, and timely delivery sets us apart. Experience a community 
                  where luxury meets comfort, and every detail is crafted with excellence in mind.
                </p>
              </div>
              <div className="mt-10">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-10 py-4 bg-secondary text-white font-bold tracking-widest uppercase hover:bg-[#C5B392] transition-colors duration-300 shadow-lg"
                >
                  Discover More
                </button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative p-8 bg-white dark:bg-gray-800 rounded-full shadow-2xl border border-gray-100 dark:border-gray-700 animate-float">
                <img 
                  src="/about-logo.png" 
                  alt="Ittefaq Residencia Logo" 
                  className="w-64 md:w-80 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="contact" className="section-padding bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-primary font-bold uppercase tracking-widest mb-2">Contact Us</h3>
              <h2 className="text-4xl font-serif font-bold mb-6 text-secondary dark:text-white">
                Schedule a Visit
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
                Ready to experience luxury living? Contact our sales team or visit our site office. We are available 24/7 to assist you.
              </p>
              
              <div className="bg-accent dark:bg-[#151515] p-8 rounded-xl mb-8">
                <h4 className="text-xl font-bold mb-4 text-secondary dark:text-white">Head Office</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Main Lehtrar Road, Opp. Police Station, Nilore, Islamabad.</p>
                <p className="text-primary font-bold text-lg">+92 348 5604252</p>
              </div>

              <div className="bg-accent dark:bg-[#151515] p-8 rounded-xl">
                <h4 className="text-xl font-bold mb-4 text-secondary dark:text-white">Sales Agent</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-1 font-semibold">Kashif Naseer Satti</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mb-2">Chief Executive Officer</p>
                <p className="text-primary font-bold text-lg">+92 345 8128303</p>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Home;
