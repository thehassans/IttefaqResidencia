import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white dark:bg-[#151515] p-8 md:p-12 rounded-2xl shadow-2xl">
      <h3 className="text-2xl font-serif font-bold text-secondary dark:text-white mb-6">Get in Touch</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Your Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 rounded focus:outline-none focus:border-primary text-secondary dark:text-white transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 rounded focus:outline-none focus:border-primary text-secondary dark:text-white transition-colors"
              placeholder="+92 300 1234567"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Your Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 rounded focus:outline-none focus:border-primary text-secondary dark:text-white transition-colors"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">How can we help you?</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 rounded focus:outline-none focus:border-primary text-secondary dark:text-white transition-colors"
            placeholder="I am interested in..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full py-4 bg-primary text-white font-bold uppercase tracking-wider rounded hover:bg-yellow-600 transition-all duration-300 disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
        </button>

        {status === 'success' && (
          <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 text-center mt-4">Failed to send message. Please try again.</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
