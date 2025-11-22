import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// Serve static files from public directory (for uploads and assets)
app.use(express.static(path.join(__dirname, '../public')));

// Serve static files from dist in production (built frontend)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist'), {
    setHeaders: (res, filePath) => {
      // Set correct MIME types
      if (filePath.endsWith('.js')) {
        res.setHeader('Content-Type', 'application/javascript; charset=UTF-8');
      } else if (filePath.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css; charset=UTF-8');
      } else if (filePath.endsWith('.html')) {
        res.setHeader('Content-Type', 'text/html; charset=UTF-8');
      } else if (filePath.endsWith('.json')) {
        res.setHeader('Content-Type', 'application/json; charset=UTF-8');
      } else if (filePath.endsWith('.png')) {
        res.setHeader('Content-Type', 'image/png');
      } else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
        res.setHeader('Content-Type', 'image/jpeg');
      } else if (filePath.endsWith('.svg')) {
        res.setHeader('Content-Type', 'image/svg+xml');
      } else if (filePath.endsWith('.ico')) {
        res.setHeader('Content-Type', 'image/x-icon');
      }
    }
  }));
}

// File Upload Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../public/uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// --- API Endpoints ---

// Login (Simplified - works without database)
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  
  // Hardcoded admin credentials for demo
  if (username === 'admin' && password === 'admin123') {
    res.json({ token: 'mock-jwt-token', user: { username: 'admin' } });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Inquiries (works without database)
app.get('/api/inquiries', async (req, res) => {
  // Return empty array (no database)
  res.json([]);
});

app.post('/api/inquiries', async (req, res) => {
  const { name, phone, email, message } = req.body;
  // Return success with mock ID (no database)
  res.json({ id: Date.now(), message: 'Inquiry received' });
});

// Media / Gallery (works without database)
app.get('/api/media', async (req, res) => {
  // Return empty array (no database)
  res.json([]);
});

app.post('/api/media', upload.single('image'), async (req, res) => {
  const { title, caption } = req.body;
  const imageUrl = `/uploads/${req.file.filename}`;
  // Return success with mock ID (no database)
  res.json({ id: Date.now(), url: imageUrl, title, caption });
});

// Settings (SEO) (works without database)
app.get('/api/settings', async (req, res) => {
  // Return default settings (no database)
  res.json({
    title: 'Ittefaq Residencias - Premium Living',
    description: 'Luxury residential and commercial plots in Lahore',
    keywords: 'real estate, luxury, lahore, housing, plots'
  });
});

app.post('/api/settings', async (req, res) => {
  // Return success (no database)
  res.json({ message: 'Settings received' });
});

// Serve index.html for all other routes in production (SPA support)
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    // Don't serve index.html for API routes
    if (req.path.startsWith('/api')) {
      return res.status(404).json({ error: 'API endpoint not found' });
    }
    
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
