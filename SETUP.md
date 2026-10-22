# Quick Setup Guide

## Prerequisites
- Node.js v18+ installed
- MongoDB installed locally OR MongoDB Atlas account
- npm or yarn package manager

## Installation Steps

### 1. Install Backend Dependencies
```bash
cd server
npm install
```

If the above times out, install packages individually:
```bash
npm install express mongoose bcryptjs jsonwebtoken cors dotenv multer
```

### 2. Install Frontend Dependencies
```bash
cd client
npm install
```

If the above times out, install in batches:
```bash
npm install react react-dom react-router-dom
npm install axios
npm install react-hook-form zod @hookform/resolvers
npm install -D @vitejs/plugin-react vite typescript
npm install -D tailwindcss postcss autoprefixer
npm install -D @types/react @types/react-dom
npm install -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### 3. Configure Environment Variables

#### Server Configuration
The `server/.env` file has been created with default values. Update it:

```env
MONGODB_URI=mongodb://localhost:27017/onboarding
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/onboarding

JWT_SECRET=change_this_to_a_long_random_string_for_production
PORT=5000
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

**IMPORTANT:** Change the `JWT_SECRET` to a strong random string!

#### Client Configuration (Optional)
Create `client/.env` if needed:
```env
VITE_API_URL=/api
```

### 4. Start MongoDB

#### Option A: Local MongoDB
```bash
mongod
```

#### Option B: MongoDB Atlas
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get your connection string
4. Update `MONGODB_URI` in `server/.env`
5. Add your IP to the whitelist (or allow access from anywhere: 0.0.0.0/0)

## Running the Application

### Development Mode

Open TWO terminal windows:

#### Terminal 1 - Backend
```bash
cd server
npm run dev
```
Server runs on http://localhost:5000

#### Terminal 2 - Frontend
```bash
cd client
npm run dev
```
Frontend runs on http://localhost:5173

### Access the Application
Open your browser and go to: http://localhost:5173

## Testing the Complete Flow

1. **Sign Up**
   - Navigate to http://localhost:5173
   - Create an account with email and password
   - Click "SIGN UP"
   - You'll be redirected to the login page

2. **Login**
   - Enter your credentials
   - Click "LOGIN"
   - You'll be redirected to Step 1 of onboarding

3. **Complete Onboarding Steps**
   - **Step 1**: Fill in your personal information
   - **Step 2**: Select your goals (multiple selections allowed)
   - **Step 3**: View the information screen (just click Continue)
   - **Step 4**: Select skills/interests from the list
   - **Step 5**: Review and modify your selected skills
   - **Step 6**: Upload a profile photo (optional) and select job status
   - Click Continue on each step

4. **Test Persistence**
   - While on any step, click "Back" - your data should be pre-filled
   - Refresh the browser - your progress should remain
   - Navigate forward and backward multiple times

5. **View Dashboard**
   - After completing Step 6, you'll be redirected to the dashboard
   - You'll see a success message with your name
   - All navigation, skill badges, and learning activities will be displayed

6. **Test Logout/Login**
   - Click "Logout" in the dashboard
   - Log back in with your credentials
   - You should be taken directly to the dashboard (since onboarding is complete)

## Troubleshooting

### Port Already in Use
If port 5000 or 5173 is already in use:
- **Backend**: Change `PORT` in `server/.env`
- **Frontend**: Change port in `client/vite.config.ts`

### MongoDB Connection Failed
- Ensure MongoDB is running: `mongod`
- Check connection string in `server/.env`
- For Atlas: verify IP whitelist and credentials

### CORS Errors
- Ensure `CLIENT_URL` in `server/.env` matches your frontend URL
- Check that backend is running before frontend requests

### Authentication Issues
- Clear browser localStorage and cookies
- Verify JWT_SECRET is set in `server/.env`
- Check browser console for specific errors

### Module Not Found Errors
- Delete `node_modules` folders: `rm -rf node_modules`
- Delete package-lock.json files
- Reinstall: `npm install`

## Project Structure Check

Verify these directories exist:
```
record task/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   │   └── onboarding/
│   │   ├── types/
│   │   └── utils/
│   └── package.json
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   └── routes/
│   ├── .env
│   └── package.json
└── README.md
```

## API Testing (Optional)

You can test the API endpoints using tools like Postman or curl:

### Sign Up
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### Get Onboarding Data (requires token)
```bash
curl http://localhost:5000/api/onboarding \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## Next Steps

After successful testing:
1. Change JWT_SECRET to a strong random value
2. Set up proper MongoDB Atlas cluster for production
3. Deploy backend (Render, Railway, Heroku)
4. Deploy frontend (Vercel, Netlify)
5. Update CORS and environment URLs for production

## Need Help?

Check the main README.md for detailed documentation.
