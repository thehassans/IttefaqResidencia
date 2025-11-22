# Environment Variables Setup

## Overview
This project uses environment variables to configure the API URL and other settings. This allows you to easily switch between development and production environments.

## Setup Instructions

### 1. Create .env File

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

### 2. Configure Variables

Edit the `.env` file with your settings:

**For Development (Local):**
```env
NODE_ENV=development
PORT=5000
VITE_WEBSITE_URL=http://localhost:5000
```

**For Production (Plesk):**
```env
NODE_ENV=production
PORT=5000
VITE_WEBSITE_URL=https://yourdomain.com
```

### 3. Important Notes

- **VITE_WEBSITE_URL**: This is the base URL for API calls
  - Development: `http://localhost:5000`
  - Production: Your actual domain (e.g., `https://ittefaqresidencias.com`)
  
- The `VITE_` prefix is required for Vite to expose the variable to the frontend

- Never commit `.env` to git (it's already in `.gitignore`)

## Plesk Configuration

### Setting Environment Variables in Plesk

1. **Login to Plesk Panel**
2. **Navigate to:** Websites & Domains → Your Domain → Node.js
3. **Click:** "Environment Variables"
4. **Add these variables:**

```
NODE_ENV=production
PORT=5000
VITE_WEBSITE_URL=https://yourdomain.com
```

### Alternative: Using .env File in Plesk

1. **Via File Manager or SSH**, create `.env` file in your application root
2. **Add the production variables** as shown above
3. **Restart the Node.js application**

## How It Works

The project uses a centralized configuration file (`src/config.js`) that reads the `VITE_WEBSITE_URL` environment variable:

```javascript
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
```

All frontend components import and use this config file, making it easy to change the API URL in one place.

## Testing

### Development
```bash
# Start backend
node server/index.js

# Start frontend (in another terminal)
npm run dev
```

The frontend will use `http://localhost:5000` for API calls.

### Production
```bash
# Build frontend
npm run build

# Start backend
NODE_ENV=production node server/index.js
```

The frontend will use your production domain for API calls.

## Troubleshooting

### API calls failing?
1. Check that `VITE_WEBSITE_URL` is set correctly
2. Verify the backend server is running
3. Check browser console for CORS errors
4. Ensure the URL doesn't have a trailing slash

### Environment variable not updating?
1. Restart the development server (`npm run dev`)
2. Clear browser cache
3. Rebuild the frontend (`npm run build`)

## Security Notes

- Never expose sensitive credentials in frontend environment variables
- Use `VITE_` prefix only for non-sensitive configuration
- Keep database credentials in backend `.env` only
- Use HTTPS in production

## Additional Variables

You can add more environment variables as needed:

```env
# Email Configuration
VITE_CONTACT_EMAIL=info@yourdomain.com

# Feature Flags
VITE_ENABLE_GALLERY=true

# Analytics
VITE_GA_ID=UA-XXXXXXXXX-X
```

Remember to prefix with `VITE_` for frontend access!
