import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F0F0F] text-white pt-24 pb-12 relative overflow-hidden font-sans">
      {/* Background Pattern & Gradient */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Top Headline */}
        <div className="text-center mb-24">
          <h3 className="text-[#C5B392] tracking-[0.3em] text-xs font-bold uppercase mb-6 animate-fade-in-up">Are You Interested</h3>
          <h2 className="text-5xl md:text-7xl font-serif text-white tracking-wide leading-tight animate-fade-in-up delay-100">
            IT'S TIME TO DISCOVER <br />
            <span className="italic font-light text-[#C5B392]">THE CITY</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-gray-800 pb-24">
          
          {/* Column 1: Location (4 cols) */}
          <div className="lg:col-span-4 space-y-10">
            <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5B392] border-b border-gray-800 pb-4 inline-block">Location</h4>
            <div className="space-y-2">
              <h5 className="text-2xl font-serif text-white">Ittefaq Residencia</h5>
              <p className="text-gray-400 leading-relaxed font-light text-sm max-w-sm">
                The splendid residential society aspires to provide its residents with opulent living. Located away from the hustle and bustle of the city.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-2">
                <div className="mt-1 w-8 h-[1px] bg-[#C5B392]"></div>
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-500 block mb-1">Address</span>
                  <p className="text-gray-300 font-light text-sm leading-relaxed">
                    Main Lehtrar Road, Opp. Police Station, <br /> Nilore, Islamabad.
                  </p>
                </div>
              </div>
              <div className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-2">
                <div className="mt-1 w-8 h-[1px] bg-[#C5B392]"></div>
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-500 block mb-1">Phone</span>
                  <p className="text-gray-300 font-light text-sm">+92 336 5400073</p>
                </div>
              </div>
              <div className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-2">
                <div className="mt-1 w-8 h-[1px] bg-[#C5B392]"></div>
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-500 block mb-1">E-mail</span>
                  <p className="text-gray-300 font-light text-sm">sales@ittefaqresidencia.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Agent (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-10">
            <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5B392] border-b border-gray-800 pb-4 inline-block">Contact Agent</h4>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-[#C5B392] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-[#C5B392]/50 group-hover:border-[#C5B392] transition-colors duration-500 shadow-2xl">
                <img src="/ceo-profile.png" alt="Kashif Naseer Satti" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="text-2xl font-serif text-white tracking-wide">KASHIF NASEER SATTI</h5>
              <p className="text-[#C5B392] text-xs font-bold tracking-[0.2em] uppercase">Chief Executive Officer</p>
            </div>

            <div className="flex gap-6">
              <a href="tel:+923458128303" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#C5B392] hover:text-[#C5B392] hover:bg-[#C5B392]/10 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </a>
              <a href="mailto:sales@ittefaqresidencia.com" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#C5B392] hover:text-[#C5B392] hover:bg-[#C5B392]/10 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </div>

          {/* Column 3: Enquire Form (4 cols) */}
          <div className="lg:col-span-4 space-y-10">
            <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-[#C5B392] border-b border-gray-800 pb-4 inline-block">Enquire</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="group">
                  <input 
                    type="text" 
                    placeholder="Your name *" 
                    className="w-full bg-transparent border-b border-gray-800 text-white py-3 text-sm focus:border-[#C5B392] focus:outline-none transition-colors placeholder-gray-600 font-light"
                  />
                </div>
                <div className="group">
                  <input 
                    type="text" 
                    placeholder="Phone number" 
                    className="w-full bg-transparent border-b border-gray-800 text-white py-3 text-sm focus:border-[#C5B392] focus:outline-none transition-colors placeholder-gray-600 font-light"
                  />
                </div>
              </div>
              <div className="group">
                <input 
                  type="email" 
                  placeholder="Your e-mail *" 
                  className="w-full bg-transparent border-b border-gray-800 text-white py-3 text-sm focus:border-[#C5B392] focus:outline-none transition-colors placeholder-gray-600 font-light"
                />
              </div>
              <div className="group">
                <textarea 
                  placeholder="How can we help you?" 
                  rows="3"
                  className="w-full bg-transparent border-b border-gray-800 text-white py-3 text-sm focus:border-[#C5B392] focus:outline-none transition-colors placeholder-gray-600 resize-none font-light"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="group w-full bg-white text-black font-bold tracking-[0.2em] uppercase py-4 hover:bg-[#C5B392] hover:text-white transition-all duration-500 relative overflow-hidden"
              >
                <span className="relative z-10">Submit Request</span>
                <div className="absolute inset-0 bg-[#C5B392] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] tracking-[0.2em] uppercase font-medium">
            © {new Date().getFullYear()} Ittefaq Residencia. All Rights Reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[#C5B392] hover:text-white transition-colors duration-300"
          >
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Back to Top</span>
            <div className="w-10 h-10 border border-[#C5B392] rounded-full flex items-center justify-center group-hover:bg-[#C5B392] group-hover:text-black transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
