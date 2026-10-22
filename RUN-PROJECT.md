# 🚀 How to Run the Complete Project

## ✅ Current Status

Your project is **READY** with:
- ✅ Frontend dependencies installed
- ✅ Backend dependencies installed  
- ✅ All files created and configured
- ✅ Environment variables set

## ⚠️ Missing: MongoDB Database

You need a MongoDB database. Choose ONE option:

---

## 🎯 OPTION 1: MongoDB Atlas (Cloud - No Installation) **RECOMMENDED**

### Quick Setup (5 minutes):

1. **Visit:** https://www.mongodb.com/cloud/atlas
2. **Sign up** for free account
3. **Create FREE M0 cluster** (skip billing if asked)
4. **Create database user:**
   - Username: `admin`
   - Password: `password123` (or your choice)
5. **Allow all IPs:** Add `0.0.0.0/0` to Network Access
6. **Get connection string:**
   - Click "Connect" → "Connect your application"
   - Copy the connection string
7. **Update `server/.env`:**
   ```env
   MONGODB_URI=mongodb+srv://admin:password123@cluster0.xxxxx.mongodb.net/onboarding?retryWrites=true&w=majority
   ```
   (Replace with YOUR actual connection string)

---

## 🎯 OPTION 2: Local MongoDB (On Your Computer)

### Install MongoDB:

1. **Download:** https://www.mongodb.com/try/download/community
2. **Install** with default settings
3. **Install as Windows Service** ✅
4. **Start MongoDB:**
   ```powershell
   net start MongoDB
   ```
5. **Your `.env` is already configured** for local MongoDB:
   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017/onboarding
   ```

---

## 🚀 RUN THE PROJECT

Once MongoDB is set up, run these commands:

### Terminal 1 - Start Backend:
```powershell
cd server
npm run dev
```

**You should see:**
```
MongoDB connected successfully
Server running on port 5000
```

### Terminal 2 - Start Frontend (NEW WINDOW):
```powershell
cd client
npm run dev
```

**You should see:**
```
VITE ready in XXX ms
➜ Local: http://localhost:5173/
```

### Open Browser:
```
http://localhost:5173
```

---

## 🧪 TEST THE APPLICATION

1. **Sign Up:**
   - Email: test@example.com
   - Password: password123
   - Click "SIGN UP"

2. **Login:**
   - Use same credentials
   - Click "LOGIN"

3. **Complete Onboarding:**
   - Fill Step 1: Personal info
   - Fill Step 2: Select goals
   - View Step 3: Info screen
   - Fill Step 4: Select skills
   - Review Step 5: Selected skills
   - Fill Step 6: Profile setup
   - Click "Continue" each step

4. **View Dashboard:**
   - See success message
   - Your name displayed
   - Logout button works

5. **Test Persistence:**
   - On any step, click "Back"
   - Data should be pre-filled
   - Refresh browser - data remains
   - Logout and login - progress saved

---

## 🔧 VERIFY CONNECTION (Optional)

Test MongoDB connection before running:

```powershell
npm run test:connection
```

This will show if MongoDB is accessible.

---

## 🐛 Troubleshooting

### "MongoDB connection error"
→ MongoDB is not running or connection string is wrong
→ Check MONGODB_URI in `server/.env`

### "Port 5000 already in use"
```powershell
netstat -ano | findstr :5000
taskkill /PID [PID_NUMBER] /F
```

### "Port 5173 already in use"
```powershell
netstat -ano | findstr :5173
taskkill /PID [PID_NUMBER] /F
```

---

## 📊 Architecture Verification

**Frontend → Backend Connection:**
- Frontend runs on `http://localhost:5173`
- Vite proxy forwards `/api/*` to `http://localhost:5000`
- Backend receives requests at Express server

**Backend → Database Connection:**
- Backend connects to MongoDB via Mongoose
- Connection string in `server/.env`
- Models: User, FormEntry

**Authentication Flow:**
- JWT tokens generated on login/signup
- Token stored in localStorage
- Token sent in Authorization header
- Protected routes verify token

---

## ✅ Success Indicators

When everything works:
- ✅ Backend terminal shows: "MongoDB connected successfully"
- ✅ Backend terminal shows: "Server running on port 5000"
- ✅ Frontend terminal shows: "Local: http://localhost:5173/"
- ✅ Browser shows signup page (blue background, white card)
- ✅ Can create account and login
- ✅ Can complete all onboarding steps
- ✅ Data persists on back/forward navigation
- ✅ Dashboard shows after completion

---

## 🎯 QUICK START SUMMARY

**If using MongoDB Atlas (cloud):**
```powershell
# 1. Set up MongoDB Atlas (one time)
# 2. Update server/.env with Atlas connection string
# 3. Start backend
cd server
npm run dev

# 4. Start frontend (new terminal)
cd client
npm run dev

# 5. Open http://localhost:5173
```

**If using Local MongoDB:**
```powershell
# 1. Install MongoDB (one time)
# 2. Start MongoDB service
net start MongoDB

# 3. Start backend
cd server
npm run dev

# 4. Start frontend (new terminal)
cd client
npm run dev

# 5. Open http://localhost:5173
```

---

## 💡 NEXT STEPS

1. Choose MongoDB option (Atlas or Local)
2. Set up MongoDB
3. Update `server/.env` if needed
4. Run both servers
5. Test the application
6. Take screenshots for submission

---

**Need Help?** 
- Check SETUP.md for detailed instructions
- Check TESTING-CHECKLIST.md for comprehensive testing
- Check README.md for full documentation

**The project is 99% ready - just need MongoDB to make it 100%!** 🎉
