# Deployment Guide - Ittefaq Residencias

## Part 1: Push to GitHub

### Step 1: Initialize Git (if not already done)
```bash
cd /Users/hassansarwar/Desktop/IttefaqResidencias
git init
```

### Step 2: Add Remote Repository
```bash
git remote add origin https://github.com/thehassans/IttefaqResidencia.git
```

### Step 3: Create .gitignore
Create a `.gitignore` file to exclude sensitive and unnecessary files:
```
node_modules/
.env
.DS_Store
dist/
build/
*.log
.vscode/
.idea/
server/database.sqlite
public/uploads/*
!public/uploads/.gitkeep
```

### Step 4: Stage and Commit Changes
```bash
git add .
git commit -m "Initial commit: Ittefaq Residencias website with Admin Panel"
```

### Step 5: Push to GitHub
```bash
git branch -M main
git push -u origin main
```

---

## Part 2: Plesk Deployment Setup

### Prerequisites on Plesk
- Node.js support enabled
- Git support enabled
- SSH access (optional but recommended)

### Step 1: Create Node.js Application in Plesk

1. **Login to Plesk Panel**
2. **Go to:** Websites & Domains → Your Domain → Node.js
3. **Click:** "Enable Node.js"
4. **Configure:**
   - **Application Mode:** Production
   - **Node.js Version:** 18.x or higher
   - **Document Root:** `public_html` (or your preferred directory)
   - **Application Root:** Same as document root
   - **Application Startup File:** `server/index.js`

### Step 2: Clone Repository via Plesk

1. **Go to:** Git in Plesk
2. **Click:** "Add Repository"
3. **Enter:**
   - **Repository URL:** `https://github.com/thehassans/IttefaqResidencia.git`
   - **Repository Path:** `/httpdocs` or `/public_html`
   - **Branch:** `main`
4. **Deploy:** Click "Deploy"

### Step 3: Install Dependencies

**Via Plesk Terminal or SSH:**
```bash
cd /var/www/vhosts/yourdomain.com/httpdocs
npm install
```

### Step 4: Configure Environment Variables in Plesk

1. **Go to:** Node.js settings in Plesk
2. **Click:** "Environment Variables"
3. **Add the following variables:**

```
NODE_ENV=production
PORT=5000
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=ittefaq_db
```

**Alternative: Create .env file via SSH/File Manager**
```bash
# In your application root
nano .env
```

Add:
```env
NODE_ENV=production
PORT=5000
DB_HOST=localhost
DB_USER=your_plesk_db_user
DB_PASSWORD=your_plesk_db_password
DB_NAME=ittefaq_residencias
```

### Step 5: Build Frontend

**Via SSH or Plesk Terminal:**
```bash
npm run build
```

This creates optimized production files in the `dist/` directory.

### Step 6: Configure Reverse Proxy (Important!)

Since you have both frontend (Vite) and backend (Express), you need to configure Plesk to serve both:

**Option A: Serve Built Frontend + Backend API**

1. **Build frontend:**
   ```bash
   npm run build
   ```

2. **Update server/index.js to serve static files:**
   Add this BEFORE your API routes:
   ```javascript
   import { fileURLToPath } from 'url';
   import path from 'path';
   
   const __filename = fileURLToPath(import.meta.url);
   const __dirname = path.dirname(__filename);
   
   // Serve static files from dist
   app.use(express.static(path.join(__dirname, '../dist')));
   
   // ... your API routes here ...
   
   // Serve index.html for all other routes (SPA)
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, '../dist/index.html'));
   });
   ```

3. **In Plesk Node.js settings:**
   - **Application Startup File:** `server/index.js`
   - **Application URL:** `/` (serves everything)

**Option B: Use Apache/Nginx Reverse Proxy**

1. **Go to:** Apache & nginx Settings in Plesk
2. **Add to "Additional directives for HTTP":**

```apache
ProxyPass /api http://localhost:5000/api
ProxyPassReverse /api http://localhost:5000/api

# Serve static files from dist
DocumentRoot /var/www/vhosts/yourdomain.com/httpdocs/dist
```

### Step 7: Start the Application

**Via Plesk:**
1. Go to Node.js settings
2. Click "Enable Node.js"
3. Click "Restart App"

**Via SSH:**
```bash
# Using PM2 (recommended for production)
npm install -g pm2
pm2 start server/index.js --name ittefaq-residencias
pm2 save
pm2 startup
```

### Step 8: Configure Database (if using MariaDB/MySQL)

1. **Create Database in Plesk:**
   - Go to: Databases
   - Create new database: `ittefaq_residencias`
   - Create user with full permissions

2. **Import Schema:**
   ```bash
   mysql -u your_user -p ittefaq_residencias < server/schema.sql
   ```

---

## Part 3: Deployment Checklist

- [ ] `.gitignore` created and committed
- [ ] Code pushed to GitHub
- [ ] Node.js enabled in Plesk
- [ ] Repository cloned in Plesk
- [ ] Dependencies installed (`npm install`)
- [ ] Environment variables configured
- [ ] Frontend built (`npm run build`)
- [ ] Database created and schema imported
- [ ] Static file serving configured
- [ ] Application started and running
- [ ] Domain DNS pointing to Plesk server
- [ ] SSL certificate installed (Let's Encrypt via Plesk)

---

## Part 4: Continuous Deployment

### Auto-deploy on Git Push

1. **In Plesk Git settings:**
   - Enable "Pull updates automatically"
   - Set webhook URL in GitHub repository settings

2. **Add deployment script** (optional):
   Create `deploy.sh`:
   ```bash
   #!/bin/bash
   cd /var/www/vhosts/yourdomain.com/httpdocs
   git pull origin main
   npm install
   npm run build
   pm2 restart ittefaq-residencias
   ```

---

## Troubleshooting

### Application won't start
- Check Node.js logs in Plesk
- Verify environment variables are set
- Ensure port 5000 is not in use

### Database connection errors
- Verify DB credentials in .env
- Check database exists
- Ensure user has proper permissions

### Static files not loading
- Verify `npm run build` completed successfully
- Check dist/ directory exists
- Verify static file serving configuration

### API routes not working
- Check reverse proxy configuration
- Verify backend server is running
- Check firewall rules

---

## Production Optimizations

1. **Enable Gzip Compression** in Plesk
2. **Configure Caching** for static assets
3. **Install SSL Certificate** (Let's Encrypt)
4. **Set up monitoring** with PM2 or Plesk monitoring tools
5. **Configure log rotation**
6. **Set up automated backups** in Plesk

---

## Support Commands

```bash
# Check application status
pm2 status

# View logs
pm2 logs ittefaq-residencias

# Restart application
pm2 restart ittefaq-residencias

# Stop application
pm2 stop ittefaq-residencias

# Monitor application
pm2 monit
```
