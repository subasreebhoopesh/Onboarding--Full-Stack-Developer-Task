# 🚀 Deployment Guide - Step by Step

## How to Deploy Your MERN Stack Project to Production

---

## 📋 Overview

You need to deploy **3 parts** separately:

1. **MongoDB** → Database (MongoDB Atlas - FREE)
2. **Backend** → Express API (Render/Railway - FREE)
3. **Frontend** → React App (Vercel/Netlify - FREE)

---

## 🎯 Deployment Strategy

```
┌─────────────────────────────────────────────────────────┐
│                    DEPLOYMENT FLOW                      │
└─────────────────────────────────────────────────────────┘

Step 1: Deploy Database (MongoDB Atlas)
   ↓
Step 2: Deploy Backend (Render/Railway)
   ↓
Step 3: Deploy Frontend (Vercel/Netlify)
   ↓
Step 4: Connect Everything
   ↓
Step 5: Test Live Application
```

---

## 📦 STEP 1: Deploy Database (MongoDB Atlas)

### Why MongoDB Atlas?
- ✅ FREE tier available
- ✅ Cloud-hosted (no local setup needed)
- ✅ Automatic backups
- ✅ Easy to use

### Steps:

#### 1.1 Create MongoDB Atlas Account
1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up with email (FREE)
3. Choose **FREE tier** (M0 Sandbox)
4. Click "Create"

#### 1.2 Create Cluster
1. After login, click **"Build a Database"**
2. Choose **"FREE"** (M0)
3. Select region: **AWS, Singapore** (closest to India)
4. Cluster name: `onboarding-cluster`
5. Click **"Create Cluster"** (takes 3-5 minutes)

#### 1.3 Create Database User
1. Go to **"Database Access"** (left sidebar)
2. Click **"Add New Database User"**
3. Username: `admin`
4. Password: (create strong password - SAVE IT!)
5. Database User Privileges: **"Read and write to any database"**
6. Click **"Add User"**

#### 1.4 Whitelist IP Address
1. Go to **"Network Access"** (left sidebar)
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (0.0.0.0/0)
4. Click **"Confirm"**

#### 1.5 Get Connection String
1. Go to **"Database"** (left sidebar)
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Copy the connection string:
```
mongodb+srv://admin:<password>@onboarding-cluster.xxxxx.mongodb.net/onboarding?retryWrites=true&w=majority
```
5. Replace `<password>` with your actual password
6. **SAVE THIS STRING!** You'll need it for backend.

#### 1.6 Import Your Data (Optional)
If you want to migrate existing data:
1. Export from local MongoDB:
```bash
mongodump --db=onboarding --out=./backup
```
2. Use MongoDB Compass to connect to Atlas
3. Import collections manually

---

## 📦 STEP 2: Deploy Backend (Render)

### Why Render?
- ✅ FREE tier available
- ✅ Easy deployment from GitHub
- ✅ Automatic HTTPS
- ✅ Good for Node.js

### Prerequisites:
- ✅ Backend code on GitHub (DONE!)
- ✅ MongoDB Atlas connection string (from Step 1)

### Steps:

#### 2.1 Prepare Backend for Deployment

**Update `server/src/server.js`** to use PORT from environment:
```javascript
const PORT = process.env.PORT || 5000;
```

**Create `server/.env.example`** (if not exists):
```
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
PORT=5000
CLIENT_URL=https://your-frontend-url.vercel.app
NODE_ENV=production
```

**Update `server/package.json`** - Add start script:
```json
{
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  }
}
```

#### 2.2 Create Render Account
1. Go to: https://render.com/
2. Click **"Get Started"**
3. Sign up with **GitHub** (easiest)
4. Authorize Render to access your repositories

#### 2.3 Create Web Service
1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository: `Onboarding--Full-Stack-Developer-Task`
3. Render will detect your repo

#### 2.4 Configure Service
Fill in these details:
```
Name: onboarding-backend
Region: Singapore (or closest)
Branch: main
Root Directory: server
Runtime: Node
Build Command: npm install
Start Command: npm start
Instance Type: Free
```

#### 2.5 Add Environment Variables
Click **"Advanced"** → **"Add Environment Variable"**

Add these:
```
MONGODB_URI = mongodb+srv://admin:password@cluster.mongodb.net/onboarding
JWT_SECRET = your_super_secret_jwt_key_change_this
CLIENT_URL = http://localhost:5173 (update later)
NODE_ENV = production
PORT = 10000
```

#### 2.6 Deploy
1. Click **"Create Web Service"**
2. Wait 3-5 minutes for deployment
3. You'll get a URL like: `https://onboarding-backend.onrender.com`
4. **SAVE THIS URL!**

#### 2.7 Test Backend
Open in browser:
```
https://onboarding-backend.onrender.com/api/auth/me
```
Should show: `{"message": "Unauthorized"}` (This is correct!)

---

## 📦 STEP 3: Deploy Frontend (Vercel)

### Why Vercel?
- ✅ FREE for personal projects
- ✅ Best for React/Vite
- ✅ Automatic deployments from GitHub
- ✅ Global CDN

### Steps:

#### 3.1 Prepare Frontend for Deployment

**Update `client/src/utils/api.ts`**:
```typescript
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

**Create `client/.env.production`**:
```
VITE_API_URL=https://onboarding-backend.onrender.com/api
```

**Update `client/vite.config.ts`** (if needed):
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    outDir: 'dist',
  },
})
```

#### 3.2 Create Vercel Account
1. Go to: https://vercel.com/
2. Click **"Sign Up"**
3. Sign up with **GitHub** (easiest)
4. Authorize Vercel to access your repositories

#### 3.3 Import Project
1. Click **"Add New..."** → **"Project"**
2. Select your repository: `Onboarding--Full-Stack-Developer-Task`
3. Click **"Import"**

#### 3.4 Configure Project
```
Framework Preset: Vite
Root Directory: client
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

#### 3.5 Add Environment Variables
Click **"Environment Variables"**

Add:
```
Name: VITE_API_URL
Value: https://onboarding-backend.onrender.com/api
```

#### 3.6 Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes
3. You'll get a URL like: `https://onboarding-app.vercel.app`
4. **SAVE THIS URL!**

---

## 📦 STEP 4: Connect Everything

### 4.1 Update Backend CORS

**On Render (Backend):**
1. Go to your service
2. Click **"Environment"**
3. Update `CLIENT_URL`:
```
CLIENT_URL=https://onboarding-app.vercel.app
```
4. Click **"Save Changes"**
5. Backend will auto-redeploy

### 4.2 Update Backend CORS Code (Optional)

**In `server/src/server.js`**:
```javascript
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://onboarding-app.vercel.app',
    process.env.CLIENT_URL
  ],
  credentials: true
}));
```

### 4.3 Test Connection
1. Open frontend: `https://onboarding-app.vercel.app`
2. Try to sign up
3. If it works → ✅ SUCCESS!
4. If error → Check browser console (F12)

---

## 📦 STEP 5: Final Testing

### Test Checklist:

#### ✅ Test 1: Sign Up
```
1. Go to your Vercel URL
2. Click Sign Up
3. Fill: Name, Email, Password
4. Click Sign Up
5. Should go to onboarding
```

#### ✅ Test 2: Complete Onboarding
```
1. Complete all 6 steps
2. Upload profile picture
3. Click Finish
4. Should go to dashboard
```

#### ✅ Test 3: Login
```
1. Logout
2. Go to login page
3. Enter credentials
4. Should login successfully
```

#### ✅ Test 4: Dashboard
```
1. Check sidebar loads
2. Check profile picture shows
3. Check all data displays
```

---

## 🔧 Troubleshooting

### Problem 1: Backend not connecting to MongoDB
**Solution:**
- Check MongoDB Atlas IP whitelist (should be 0.0.0.0/0)
- Verify connection string has correct password
- Check Render environment variables

### Problem 2: Frontend can't reach Backend
**Solution:**
- Check CORS settings in backend
- Verify `VITE_API_URL` in Vercel
- Check browser console for errors

### Problem 3: 404 on page refresh
**Solution (Vercel):**
Create `client/vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Problem 4: Environment variables not working
**Solution:**
- Rebuild after adding env vars
- Check variable names match exactly
- Restart services

---

## 📊 Your Deployed URLs

After deployment, you'll have:

```
MongoDB:  mongodb+srv://admin:xxx@cluster.mongodb.net/onboarding
Backend:  https://onboarding-backend.onrender.com
Frontend: https://onboarding-app.vercel.app
```

---

## 💰 Cost Breakdown

| Service | Tier | Cost |
|---------|------|------|
| MongoDB Atlas | M0 (512MB) | FREE |
| Render Backend | 750 hours/month | FREE |
| Vercel Frontend | 100GB bandwidth | FREE |
| **Total** | | **FREE** 🎉 |

### Free Tier Limits:
- MongoDB: 512MB storage
- Render: Sleeps after 15min inactivity (wakes on request)
- Vercel: 100GB bandwidth/month

---

## 🎯 Quick Start Commands

### Commit changes:
```bash
# Add deployment configs
git add .
git commit -m "Add: Deployment configuration"
git push origin main
```

### Update environment:
```bash
# Backend .env (Render dashboard)
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your-secret
CLIENT_URL=https://your-frontend.vercel.app

# Frontend .env (Vercel dashboard)
VITE_API_URL=https://your-backend.onrender.com/api
```

---

## ✅ Deployment Checklist

### Before Deployment:
- [ ] Code pushed to GitHub
- [ ] MongoDB Atlas account created
- [ ] Database user created
- [ ] IP whitelist configured
- [ ] Connection string saved

### During Deployment:
- [ ] Backend deployed to Render
- [ ] Environment variables added
- [ ] Backend URL saved
- [ ] Frontend deployed to Vercel
- [ ] Frontend env vars added
- [ ] CORS updated

### After Deployment:
- [ ] Sign up works
- [ ] Login works
- [ ] Onboarding works
- [ ] Dashboard loads
- [ ] All features tested

---

## 🚀 You're Ready to Deploy!

**Start with Step 1 (MongoDB Atlas) and follow in order!**

Each step is independent, so take your time da! 

Good luck! 🎉
