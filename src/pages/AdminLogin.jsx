import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/admin/dashboard');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F8F6F3] via-white to-[#FFF9F0] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] via-[#F4E4C1] to-[#D4AF37]"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#C5B392]/10 to-transparent rounded-full blur-3xl"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#D4AF37]/30 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#C5B392]/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-[#D4AF37]/25 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl p-12 rounded-3xl shadow-[0_20px_60px_rgba(212,175,55,0.15)] border border-[#D4AF37]/20 relative z-10 animate-fade-in-up">
        {/* Logo Section */}
        <div className="text-center mb-10">
          <div className="w-24 h-24 bg-gradient-to-br from-[#D4AF37] to-[#C5B392] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img src="/logo.png" alt="Logo" className="w-16 h-16 object-contain brightness-0 invert" />
          </div>
          <h2 className="text-4xl font-serif text-gray-800 mb-3">
            Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#C5B392] italic">Portal</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-2"></div>
          <p className="text-gray-500 text-sm tracking-[0.3em] uppercase font-light">Ittefaq Residencias</p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm animate-fade-in">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
              </svg>
              {error}
            </div>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="group">
            <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-3 ml-1">Username</label>
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 text-gray-800 px-5 py-4 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 placeholder-gray-400 font-light"
                placeholder="Enter your username"
                required
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="group">
            <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-3 ml-1">Password</label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 text-gray-800 px-5 py-4 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 placeholder-gray-400 font-light"
                placeholder="Enter your password"
                required
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C5B392] text-white font-bold py-4 rounded-xl uppercase tracking-[0.3em] text-sm hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)] transform hover:-translate-y-1 transition-all duration-300 mt-8"
          >
            Access Dashboard
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400 tracking-wider">Secured by premium authentication</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
