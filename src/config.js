// API Configuration
// This file centralizes the API URL configuration

const API_URL = import.meta.env.VITE_WEBSITE_URL || 'http://localhost:5000';

export const config = {
  apiUrl: API_URL,
  endpoints: {
    login: `${API_URL}/api/auth/login`,
    media: `${API_URL}/api/media`,
    inquiries: `${API_URL}/api/inquiries`,
    settings: `${API_URL}/api/settings`,
  }
};

export default config;
