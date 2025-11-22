// API Configuration
// This file centralizes the API URL configuration

// In production, use relative URLs (same domain)
// In development, use the full localhost URL
const isDevelopment = import.meta.env.DEV;
const API_URL = isDevelopment ? 'http://localhost:5000' : '';

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
