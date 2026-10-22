# 🚀 Quick Start Guide

Get the Record Onboarding Application running in 5 minutes!

## ⚡ Prerequisites Check

Before starting, ensure you have:
- ✅ Node.js v18+ installed → Check: `node --version`
- ✅ npm installed → Check: `npm --version`
- ✅ MongoDB running OR MongoDB Atlas account

---

## 🎯 Option 1: Automated Setup (Recommended)

### Step 1: Install Dependencies
```powershell
.\install-dependencies.ps1
```

This will install both frontend and backend dependencies automatically.

### Step 2: Configure MongoDB
Edit `server/.env` and update:
```env
MONGODB_URI=mongodb://localhost:27017/onboarding
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/onboarding

JWT_SECRET=your_super_secret_key_change_this
```

### Step 3: Start the Application

**Terminal 1 - Backend:**
```powershell
.\start-backend.ps1
```

**Terminal 2 - Frontend:**
```powershell
.\start-frontend.ps1
```

### Step 4: Open Application
Navigate to: **http://localhost:5173**

---

## 🛠️ Option 2: Manual Setup

### Step 1: Install Backend
```bash
cd server
npm install
```

### Step 2: Install Frontend
```bash
cd client
npm install
```

### Step 3: Configure Environment
Update `server/.env` with your MongoDB URI and JWT secret.

### Step 4: Start Backend
```bash
cd server
npm run dev
```

### Step 5: Start Frontend (New Terminal)
```bash
cd client
npm run dev
```

### Step 6: Open Browser
Go to: **http://localhost:5173**

---

## 🧪 Quick Test

1. **Sign Up** → Create account with email/password
2. **Login** → Use your credentials
3. **Complete Onboarding** → Fill 6 steps
4. **View Dashboard** → See your completed profile

---

## 🐛 Common Issues

### Port Already in Use
```bash
# Kill process on port 5000 (backend)
netstat -ano | findstr :5000
taskkill /PID [PID_NUMBER] /F

# Kill process on port 5173 (frontend)
netstat -ano | findstr :5173
taskkill /PID [PID_NUMBER] /F
```

### MongoDB Not Running
```bash
# Start MongoDB service
net start MongoDB
```

### Dependencies Won't Install
```bash
# Clear cache and retry
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Next Steps

- Read **SETUP.md** for detailed setup instructions
- Check **TESTING-CHECKLIST.md** for comprehensive testing
- Review **IMPLEMENTATION-SUMMARY.md** for technical details
- See **README.md** for full documentation

---

## ✨ Features to Test

✅ Sign up with new account  
✅ Login with credentials  
✅ Fill personal information  
✅ Select your goals  
✅ Choose skills/interests  
✅ Set up profile  
✅ View dashboard  
✅ Test back/forward navigation (data persists!)  
✅ Refresh browser (data still there!)  
✅ Logout and login (progress saved!)

---

## 🎉 You're All Set!

The application is now running. Start testing and exploring!

**Questions?** Check the README.md or other documentation files.

**Happy Coding!** 🚀
