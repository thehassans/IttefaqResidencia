import React, { useState, useEffect } from 'react';

const ScheduleVisitModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-lg my-auto bg-[#111] rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.1)] border border-[#D4AF37]/30 transform transition-all duration-300 animate-zoom-in overflow-hidden">
        
        {/* Decorative Header Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif text-white mb-2">Schedule a <span className="text-[#D4AF37] italic">Visit</span></h2>
            <p className="text-gray-400 text-sm tracking-wide">Experience luxury living firsthand.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="group">
                <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-2 ml-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#1A1A1A] border border-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors duration-300 placeholder-gray-600"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="group">
                <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-2 ml-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#1A1A1A] border border-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors duration-300 placeholder-gray-600"
                  placeholder="+92 300 0000000"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="group">
                <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-2 ml-1">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-[#1A1A1A] border border-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors duration-300 placeholder-gray-600"
                  required
                />
              </div>
              <div className="group">
                <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-2 ml-1">Preferred Time</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-[#1A1A1A] border border-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors duration-300 placeholder-gray-600 appearance-none"
                  required
                >
                  <option value="" disabled>Select Time</option>
                  <option value="morning">Morning (10:00 AM - 1:00 PM)</option>
                  <option value="afternoon">Afternoon (2:00 PM - 5:00 PM)</option>
                  <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                </select>
              </div>
            </div>

            <div className="group">
              <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-2 ml-1">Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full bg-[#1A1A1A] border border-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors duration-300 placeholder-gray-600 resize-none"
                placeholder="Any specific requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C5B392] text-black font-bold py-4 rounded-lg uppercase tracking-[0.2em] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transform hover:-translate-y-1 transition-all duration-300 mt-4"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScheduleVisitModal;
