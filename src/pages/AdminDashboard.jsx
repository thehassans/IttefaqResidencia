import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('media');
  const [mediaItems, setMediaItems] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [settings, setSettings] = useState({ title: '', description: '', keywords: '' });
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/admin');
    fetchMedia();
    fetchInquiries();
    fetchSettings();
  }, []);

  const fetchMedia = async () => {
    const res = await fetch('http://localhost:5000/api/media');
    const data = await res.json();
    setMediaItems(data);
  };

  const fetchInquiries = async () => {
    const res = await fetch('http://localhost:5000/api/inquiries');
    const data = await res.json();
    setInquiries(data);
  };

  const fetchSettings = async () => {
    const res = await fetch('http://localhost:5000/api/settings');
    const data = await res.json();
    setSettings(data);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setUploading(true);
    const formData = new FormData(e.target);
    await fetch('http://localhost:5000/api/media', {
      method: 'POST',
      body: formData,
    });
    setUploading(false);
    e.target.reset();
    fetchMedia();
  };

  const handleSettingsUpdate = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    });
    alert('Settings updated successfully!');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F6F3] via-white to-[#FFF9F0] font-sans">
      {/* Top Bar */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#C5B392] rounded-xl flex items-center justify-center shadow-md">
              <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain brightness-0 invert" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-gray-800">Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#C5B392]">Dashboard</span></h1>
              <p className="text-xs text-gray-500 tracking-wider uppercase">Ittefaq Residencias</p>
            </div>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-red-50 to-red-100 text-red-600 rounded-xl hover:shadow-lg transition-all duration-300 text-sm font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Tab Navigation */}
        <div className="flex gap-3 mb-8 bg-white/60 backdrop-blur-sm p-2 rounded-2xl border border-[#D4AF37]/10 shadow-sm">
          {['media', 'inquiries', 'seo'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-6 py-4 rounded-xl uppercase text-xs font-bold tracking-[0.2em] transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#C5B392] text-white shadow-lg transform scale-105' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-[#D4AF37]/10 p-10 shadow-xl min-h-[600px]">
          
          {/* MEDIA TAB */}
          {activeTab === 'media' && (
            <div className="space-y-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-gradient-to-b from-[#D4AF37] to-[#C5B392] rounded-full"></div>
                <div>
                  <h2 className="text-3xl font-serif font-bold text-gray-800">Media Gallery</h2>
                  <p className="text-sm text-gray-500 mt-1">Upload and manage your gallery images</p>
                </div>
              </div>

              {/* Upload Form */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-dashed border-[#D4AF37]/30">
                <h3 className="text-[#D4AF37] font-bold uppercase tracking-[0.2em] text-sm mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                  Upload New Media
                </h3>
                <form onSubmit={handleUpload} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <input type="text" name="title" placeholder="Image Title" className="w-full bg-white border-2 border-gray-200 text-gray-800 px-5 py-3.5 rounded-xl focus:border-[#D4AF37] focus:shadow-[0_0_15px_rgba(212,175,55,0.15)] outline-none transition-all" required />
                    <input type="text" name="caption" placeholder="Caption / Description" className="w-full bg-white border-2 border-gray-200 text-gray-800 px-5 py-3.5 rounded-xl focus:border-[#D4AF37] focus:shadow-[0_0_15px_rgba(212,175,55,0.15)] outline-none transition-all" />
                  </div>
                  <div className="space-y-4">
                    <input type="file" name="image" accept="image/*" className="w-full bg-white border-2 border-gray-200 text-gray-800 px-5 py-3.5 rounded-xl focus:border-[#D4AF37] outline-none file:mr-4 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-gradient-to-r file:from-[#D4AF37] file:to-[#C5B392] file:text-white hover:file:shadow-lg file:transition-all" required />
                    <button type="submit" disabled={uploading} className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C5B392] text-white font-bold py-3.5 rounded-xl uppercase tracking-[0.2em] text-sm hover:shadow-lg transition-all disabled:opacity-50">
                      {uploading ? 'Uploading...' : 'Upload Media'}
                    </button>
                  </div>
                </form>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {mediaItems.length === 0 ? (
                  <div className="col-span-full text-center py-20">
                    <svg className="w-20 h-20 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <p className="text-gray-400 font-light">No media uploaded yet</p>
                  </div>
                ) : (
                  mediaItems.map((item) => (
                    <div key={item.id} className="group relative aspect-square bg-gray-100 rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[#D4AF37] transition-all hover:shadow-xl">
                      <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                        <div>
                          <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                          <p className="text-gray-200 text-xs line-clamp-2">{item.caption}</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* INQUIRIES TAB */}
          {activeTab === 'inquiries' && (
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-gradient-to-b from-[#D4AF37] to-[#C5B392] rounded-full"></div>
                <div>
                  <h2 className="text-3xl font-serif font-bold text-gray-800">Customer Inquiries</h2>
                  <p className="text-sm text-gray-500 mt-1">View and manage customer messages</p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border-2 border-gray-100">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                      <th className="p-5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Date</th>
                      <th className="p-5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Name</th>
                      <th className="p-5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Phone</th>
                      <th className="p-5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Email</th>
                      <th className="p-5 text-left text-xs font-bold text-gray-600 uppercase tracking-wider w-1/3">Message</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {inquiries.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="p-20 text-center">
                          <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
                          <p className="text-gray-400 font-light">No inquiries received yet</p>
                        </td>
                      </tr>
                    ) : (
                      inquiries.map((inq) => (
                        <tr key={inq.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="p-5 text-sm text-gray-500">{new Date(inq.created_at).toLocaleDateString()}</td>
                          <td className="p-5 text-sm font-semibold text-gray-800">{inq.name}</td>
                          <td className="p-5 text-sm text-gray-600">{inq.phone}</td>
                          <td className="p-5 text-sm text-gray-600">{inq.email || '-'}</td>
                          <td className="p-5 text-sm text-gray-600 italic">{inq.message}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* SEO TAB */}
          {activeTab === 'seo' && (
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-gradient-to-b from-[#D4AF37] to-[#C5B392] rounded-full"></div>
                <div>
                  <h2 className="text-3xl font-serif font-bold text-gray-800">SEO Settings</h2>
                  <p className="text-sm text-gray-500 mt-1">Optimize your website for search engines</p>
                </div>
              </div>

              <form onSubmit={handleSettingsUpdate} className="max-w-3xl space-y-8">
                <div className="group">
                  <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-3 ml-1 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                    Website Title
                  </label>
                  <input
                    type="text"
                    value={settings.title || ''}
                    onChange={(e) => setSettings({...settings, title: e.target.value})}
                    className="w-full bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 text-gray-800 px-5 py-4 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all"
                    placeholder="Ittefaq Residencias - Premium Living"
                  />
                </div>
                <div className="group">
                  <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-3 ml-1 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
                    Meta Description
                  </label>
                  <textarea
                    rows="4"
                    value={settings.description || ''}
                    onChange={(e) => setSettings({...settings, description: e.target.value})}
                    className="w-full bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 text-gray-800 px-5 py-4 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all resize-none"
                    placeholder="A brief description of the website for search engines..."
                  ></textarea>
                </div>
                <div className="group">
                  <label className="block text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-3 ml-1 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>
                    Keywords (Comma Separated)
                  </label>
                  <input
                    type="text"
                    value={settings.keywords || ''}
                    onChange={(e) => setSettings({...settings, keywords: e.target.value})}
                    className="w-full bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 text-gray-800 px-5 py-4 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all"
                    placeholder="real estate, luxury, lahore, housing scheme"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#D4AF37] to-[#C5B392] text-white font-bold py-4 px-10 rounded-xl uppercase tracking-[0.2em] text-sm hover:shadow-lg transition-all"
                >
                  Save Settings
                </button>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
