# 🚀 Quick Deployment Guide

## Super Simple 3-Step Deployment

---

## Step 1: Database (MongoDB Atlas - 10 minutes)

1. **Sign up:** https://www.mongodb.com/cloud/atlas/register
2. **Create FREE cluster** (M0)
3. **Create user:** admin / your-password
4. **Whitelist IP:** Allow from anywhere (0.0.0.0/0)
5. **Copy connection string:**
   ```
   mongodb+srv://admin:PASSWORD@cluster.mongodb.net/onboarding
   ```

✅ **Done!** Database is live in cloud!

---

## Step 2: Backend (Render - 10 minutes)

1. **Sign up:** https://render.com/ (use GitHub)
2. **New Web Service** → Select your GitHub repo
3. **Configure:**
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
4. **Add Environment Variables:**
   ```
   MONGODB_URI = (paste from Step 1)
   JWT_SECRET = any_random_secret_key_123
   CLIENT_URL = http://localhost:5173
   NODE_ENV = production
   ```
5. **Deploy!**

✅ **Done!** You'll get: `https://your-app.onrender.com`

---

## Step 3: Frontend (Vercel - 5 minutes)

1. **Sign up:** https://vercel.com/ (use GitHub)
2. **Import Project** → Select your GitHub repo
3. **Configure:**
   - Root Directory: `client`
   - Build Command: `npm run build`
4. **Add Environment Variable:**
   ```
   VITE_API_URL = https://your-app.onrender.com/api
   ```
5. **Deploy!**

✅ **Done!** You'll get: `https://your-app.vercel.app`

---

## Step 4: Connect (2 minutes)

1. Go back to **Render** (backend)
2. Update environment variable:
   ```
   CLIENT_URL = https://your-app.vercel.app
   ```
3. Save → Backend will redeploy

✅ **DONE!** Your app is LIVE! 🎉

---

## Test Your Live App

Open: `https://your-app.vercel.app`

Try:
1. ✅ Sign up
2. ✅ Complete onboarding
3. ✅ View dashboard
4. ✅ Logout & login

---

## Your 3 URLs

```
Database:  MongoDB Atlas
Backend:   https://[your-name].onrender.com
Frontend:  https://[your-name].vercel.app
```

---

## Cost: **100% FREE!** 💰

All three services have free tiers perfect for your project!

---

## Need Help?

See detailed guide: `DEPLOYMENT-GUIDE.md`

**Good luck da!** 🚀
