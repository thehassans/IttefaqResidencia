# Complete Plesk Deployment Guide - Ittefaq Residencias
## Step-by-Step Instructions Based on Your Current Setup

---

## 📸 Your Current Plesk Configuration

Based on your screenshot, here's what you have:
- ✅ Node.js Version: 24.11.1
- ✅ Application Mode: production
- ✅ Document Root: /httpdocs
- ✅ Application Root: /httpdocs
- ✅ Application Startup File: server/index.js
- ✅ Custom Environment Variables: Configured
- ✅ Application URL: http://khewracrafts.com

---

## 🎯 STEP-BY-STEP DEPLOYMENT PROCESS

### ✅ STEP 1: Database Import (DO THIS FIRST)

#### 1.1 Access phpMyAdmin
```
Plesk → Databases → phpMyAdmin
```

#### 1.2 Select Your Database
- Click on `web_ittefaq` from the left sidebar

#### 1.3 Import SQL File
1. Click **"Import"** tab at the top
2. Click **"Choose File"**
3. Select: `ittefaq_residencias_plesk.sql` from your Desktop
4. Scroll down and click **"Go"**
5. Wait for success message: "Import has been successfully finished"

#### 1.4 Verify Tables Created
After import, check left sidebar. You should see:
- ✅ `users`
- ✅ `inquiries`
- ✅ `media`
- ✅ `settings`

Click on `users` table → Browse → Should see 1 admin user

---

### ✅ STEP 2: Update Environment Variables in Plesk

You already have environment variables configured. Update them:

#### 2.1 Go to Node.js Settings
```
Plesk → Websites & Domains → khewracrafts.com → Node.js
```

#### 2.2 Click "[specify]" next to Custom environment variables

#### 2.3 Update/Add These Variables:
```
NODE_ENV=production
DB_HOST=localhost
VITE_WEBSITE_URL=https://khewracrafts.com
DB_USER=web_ittefaq
DB_PASSWORD=&OsSQUS77dexyku@
DB_NAME=web_ittefaq
PORT=5000
```

**IMPORTANT:** Replace `DB_PASSWORD` with your actual database password if different.

#### 2.4 Click "OK" to save

---

### ✅ STEP 3: Upload/Update Your Code

#### Option A: Via Git (Recommended)

3.1 **Go to Git in Plesk:**
```
Plesk → Git
```

3.2 **If repository already exists:**
- Click "Pull Updates" to get latest code

3.3 **If repository doesn't exist:**
- Click "Add Repository"
- Repository URL: `https://github.com/thehassans/IttefaqResidencia.git`
- Repository path: `/httpdocs`
- Branch: `main`
- Click "OK"
- Click "Deploy"

#### Option B: Via File Manager

3.1 **Upload files via Plesk File Manager:**
```
Plesk → Files → File Manager
```

3.2 **Upload these folders/files to /httpdocs:**
- `server/` folder
- `src/` folder
- `public/` folder
- `package.json`
- `vite.config.js`
- `tailwind.config.js`
- All other project files

---

### ✅ STEP 4: Install Dependencies

#### 4.1 Open SSH Terminal in Plesk
```
Plesk → Websites & Domains → khewracrafts.com → SSH Terminal
```

#### 4.2 Navigate to Application Directory
```bash
cd /var/www/vhosts/khewracrafts.com/httpdocs
```

#### 4.3 Install Node Modules
```bash
npm install
```

Wait for installation to complete (may take 2-3 minutes).

---

### ✅ STEP 5: Build Frontend

#### 5.1 Build Production Bundle
```bash
npm run build
```

This creates the `dist/` folder with optimized files.

#### 5.2 Verify Build
```bash
ls -la dist/
```

You should see:
- `index.html`
- `assets/` folder

---

### ✅ STEP 6: Create Uploads Directory

#### 6.1 Create Directory for Media Uploads
```bash
mkdir -p public/uploads
chmod 755 public/uploads
```

#### 6.2 Verify Directory
```bash
ls -la public/
```

---

### ✅ STEP 7: Restart Node.js Application

#### 7.1 Go Back to Node.js Settings
```
Plesk → Node.js
```

#### 7.2 Click "Restart App" Button

#### 7.3 Check Status
- Status should show: "Running"
- If it shows "Stopped", click "Enable Node.js"

---

### ✅ STEP 8: Configure Apache/Nginx (If Needed)

If your site doesn't load properly:

#### 8.1 Go to Apache & nginx Settings
```
Plesk → Apache & nginx Settings
```

#### 8.2 Add to "Additional directives for HTTP:"
```apache
ProxyPass / http://localhost:5000/
ProxyPassReverse / http://localhost:5000/
ProxyPreserveHost On
```

#### 8.3 Click "OK"

---

### ✅ STEP 9: Test Your Website

#### 9.1 Visit Your Website
```
https://khewracrafts.com
```

You should see the Ittefaq Residencias homepage.

#### 9.2 Test Admin Panel
```
https://khewracrafts.com/admin
```

**Login Credentials:**
- Username: `admin`
- Password: `admin123`

#### 9.3 Verify Features
- ✅ Homepage loads
- ✅ Images display
- ✅ Admin login works
- ✅ Admin dashboard accessible
- ✅ Can upload media
- ✅ Can view inquiries
- ✅ Can update SEO settings

---

### ✅ STEP 10: Post-Deployment Security

#### 10.1 Change Admin Password
1. Login to admin panel
2. Go to Settings (or update directly in database)
3. Change password from `admin123` to a strong password

#### 10.2 Update Database Password (Recommended)
```sql
-- In phpMyAdmin, run:
UPDATE users SET password = 'your_new_strong_password' WHERE username = 'admin';
```

#### 10.3 Enable SSL Certificate
```
Plesk → SSL/TLS Certificates → Let's Encrypt
```
- Check "Secure the domain"
- Click "Get it free"

---

## 🔧 TROUBLESHOOTING

### Problem: Application Won't Start

**Check Logs:**
```
Plesk → Node.js → View Logs
```

**Common Issues:**
1. **Port already in use:** Change PORT in environment variables
2. **Missing dependencies:** Run `npm install` again
3. **Wrong startup file:** Verify it's `server/index.js`

### Problem: Database Connection Error

**Check:**
1. Database credentials in environment variables
2. Database exists: `web_ittefaq`
3. User has permissions

**Test Connection:**
```bash
mysql -u web_ittefaq -p web_ittefaq
```

### Problem: Images Not Loading

**Check:**
1. `public/uploads` directory exists
2. Directory permissions: `chmod 755 public/uploads`
3. Images uploaded via admin panel

### Problem: Admin Panel 404 Error

**Check:**
1. Frontend built: `npm run build`
2. `dist/` folder exists
3. Server serving static files (check server/index.js)

### Problem: API Calls Failing

**Check:**
1. `VITE_WEBSITE_URL` environment variable
2. Backend server running on port 5000
3. CORS enabled in server

---

## 📊 VERIFICATION CHECKLIST

After deployment, verify:

- [ ] Website loads at https://khewracrafts.com
- [ ] All images display correctly
- [ ] Admin panel accessible at /admin
- [ ] Can login with admin credentials
- [ ] Can upload media in admin panel
- [ ] Uploaded media appears in public gallery
- [ ] Contact form submissions work
- [ ] SEO settings can be updated
- [ ] SSL certificate installed and working
- [ ] No console errors in browser

---

## 🔄 UPDATING YOUR SITE

When you make changes and want to update:

### Method 1: Via Git (Easiest)
```
1. Push changes to GitHub
2. Plesk → Git → Pull Updates
3. SSH Terminal:
   npm install
   npm run build
4. Plesk → Node.js → Restart App
```

### Method 2: Manual Upload
```
1. Upload changed files via File Manager
2. SSH Terminal:
   npm install (if package.json changed)
   npm run build
3. Plesk → Node.js → Restart App
```

---

## 📞 SUPPORT COMMANDS

### Check Application Status
```bash
cd /var/www/vhosts/khewracrafts.com/httpdocs
pm2 status
```

### View Application Logs
```bash
pm2 logs
```

### Restart Application
```bash
pm2 restart all
```

### Check Node.js Version
```bash
node --version
```

### Check Installed Packages
```bash
npm list --depth=0
```

---

## 🎯 NEXT STEPS AFTER DEPLOYMENT

1. **Test Everything Thoroughly**
   - Browse all pages
   - Test all forms
   - Upload test images
   - Check mobile responsiveness

2. **Configure Email (Optional)**
   - Set up SMTP for inquiry notifications
   - Configure email templates

3. **Set Up Backups**
   - Enable automatic backups in Plesk
   - Backup database regularly

4. **Monitor Performance**
   - Check server resources
   - Monitor application logs
   - Set up uptime monitoring

5. **SEO Optimization**
   - Submit sitemap to Google
   - Set up Google Analytics
   - Configure meta tags via admin panel

---

## ✅ YOU'RE DONE!

Your Ittefaq Residencias website should now be live and fully functional!

**Live URL:** https://khewracrafts.com
**Admin Panel:** https://khewracrafts.com/admin

---

## 📝 IMPORTANT NOTES

1. **Document Root Warning:** Plesk recommends setting document root to `/httpdocs/public` for security. Consider this for production.

2. **Environment Variables:** All sensitive data (DB password, API keys) should be in environment variables, not in code.

3. **Regular Updates:** Keep Node.js, npm packages, and Plesk updated for security.

4. **Monitoring:** Set up monitoring to get alerts if the site goes down.

5. **Backups:** Always maintain recent backups before making major changes.

---

**Need Help?** Check the logs in Plesk → Node.js → View Logs
