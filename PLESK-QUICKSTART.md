# Plesk Deployment - Quick Start Guide

## ✅ GitHub Push Complete!
Your code is now at: https://github.com/thehassans/IttefaqResidencia.git

---

## 🚀 Plesk Deployment Steps

### 1. Login to Plesk Panel
Access your Plesk control panel at your hosting provider.

### 2. Enable Node.js
**Navigate:** Websites & Domains → Your Domain → Node.js
- Click "Enable Node.js"
- **Node.js Version:** 18.x or 20.x
- **Application Mode:** Production
- **Application Startup File:** `server/index.js`

### 3. Clone Your Repository
**Navigate:** Git
- Click "Add Repository"
- **Repository URL:** `https://github.com/thehassans/IttefaqResidencia.git`
- **Repository Path:** `/httpdocs` (or your document root)
- **Branch:** `main`
- Click "Deploy"

### 4. Install Dependencies
**Via Plesk Terminal or SSH:**
```bash
cd /var/www/vhosts/yourdomain.com/httpdocs
npm install
```

### 5. Set Environment Variables
**Navigate:** Node.js → Environment Variables

Add these variables:
```
NODE_ENV=production
PORT=5000
```

**Note:** Since we're not using a database currently, you don't need DB variables.

### 6. Build Frontend
**Via Terminal:**
```bash
npm run build
```

This creates the `dist/` folder with optimized production files.

### 7. Configure Application
**In Node.js settings:**
- **Application Root:** `/httpdocs` (or your path)
- **Application Startup File:** `server/index.js`
- **Application URL:** `/`

### 8. Start Application
**Via Plesk:**
- Click "Restart App" or "Enable Node.js"

**Or via SSH with PM2 (recommended):**
```bash
npm install -g pm2
pm2 start server/index.js --name ittefaq-residencias
pm2 save
pm2 startup
```

### 9. Configure Domain
- Ensure your domain DNS points to your Plesk server
- Install SSL certificate (Let's Encrypt) via Plesk

### 10. Test Your Site
Visit: `https://yourdomain.com`

**Admin Panel:** `https://yourdomain.com/admin`
- Username: `admin`
- Password: `admin123`

---

## 🔧 Important Configuration

### Apache/Nginx Settings (if needed)
If your site doesn't load properly, add to Apache settings:

**Navigate:** Apache & nginx Settings

**Additional directives for HTTP:**
```apache
ProxyPass / http://localhost:5000/
ProxyPassReverse / http://localhost:5000/
```

---

## 📝 Post-Deployment Checklist

- [ ] Node.js enabled and running
- [ ] Dependencies installed (`npm install`)
- [ ] Frontend built (`npm run build`)
- [ ] Environment variables set
- [ ] Application started
- [ ] Domain pointing to server
- [ ] SSL certificate installed
- [ ] Admin panel accessible
- [ ] Test all pages and features

---

## 🐛 Troubleshooting

### Site not loading?
1. Check Node.js logs in Plesk
2. Verify `dist/` folder exists
3. Check if port 5000 is available
4. Review Apache/Nginx proxy settings

### Admin login not working?
1. Verify backend is running: `pm2 status`
2. Check browser console for API errors
3. Ensure CORS is configured correctly

### Images not showing?
1. Check `public/` folder permissions
2. Verify image paths in code
3. Clear browser cache

---

## 📞 Support Commands

```bash
# Check application status
pm2 status

# View logs
pm2 logs ittefaq-residencias

# Restart application
pm2 restart ittefaq-residencias

# Stop application
pm2 stop ittefaq-residencias
```

---

## 🔄 Future Updates

To update your site after making changes:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Your update message"
   git push origin main
   ```

2. **In Plesk Git:**
   - Click "Pull Updates"
   
3. **Rebuild and Restart:**
   ```bash
   npm install
   npm run build
   pm2 restart ittefaq-residencias
   ```

---

## 📧 Need Help?
Refer to the full `DEPLOYMENT.md` file for detailed instructions.
