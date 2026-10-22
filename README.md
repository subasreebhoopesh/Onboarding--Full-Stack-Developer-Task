# Record Innovation Enterprises - Onboarding Platform

A modern, full-stack MERN application featuring a multi-step onboarding process and interactive dashboard for Record Innovation Enterprises.

## 🚀 Features

### Onboarding Flow (6 Steps)
- ✅ Personal Information Collection
- ✅ Educational Background
- ✅ Skills & Certifications
- ✅ Professional Experience
- ✅ Career Preferences
- ✅ Profile Picture Upload & Job Status

### Dashboard
- 📊 **Learning Progress Tracking** - YouTube course integration with progress bars
- 🏆 **Skill Badges** - Role-based and super skills display
- 🔗 **Platform Integration** - Connect LeetCode, HackerRank, Dribbble, GitHub, LinkedIn, Naukri, Behance, Stack Overflow
- 📈 **Activity Heatmap** - Visual learning activity calendar
- 🎨 **Modern UI** - Responsive design with Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **React Router** - Navigation
- **Axios** - HTTP client
- **Lucide React** - Modern icons

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcrypt** - Password hashing

## 📁 Project Structure

```
record-task/
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── dashboard/   # Dashboard-specific components
│   │   │   │   ├── HeroBanner.tsx
│   │   │   │   ├── LearningSection.tsx
│   │   │   │   ├── ShowcaseSection.tsx
│   │   │   │   ├── RightRail.tsx
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   ├── TopBar.tsx
│   │   │   │   └── logos.tsx
│   │   │   ├── OnboardingLayout.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   ├── context/         # React Context providers
│   │   │   └── AuthContext.tsx
│   │   ├── pages/           # Page components
│   │   │   ├── onboarding/  # Onboarding steps
│   │   │   │   ├── Step1.tsx
│   │   │   │   ├── Step2.tsx
│   │   │   │   ├── Step3.tsx
│   │   │   │   ├── Step4.tsx
│   │   │   │   ├── Step5.tsx
│   │   │   │   └── Step6.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Login.tsx
│   │   │   └── SignUp.tsx
│   │   ├── types/           # TypeScript type definitions
│   │   │   └── index.ts
│   │   ├── utils/           # Utility functions
│   │   │   └── api.ts
│   │   ├── data/            # Static data
│   │   │   └── dashboard.ts
│   │   ├── lib/             # Helper libraries
│   │   │   └── utils.ts
│   │   ├── assets/          # Images and static assets
│   │   ├── App.tsx          # Root component
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles
│   ├── public/              # Static public assets
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── tsconfig.json
│
├── server/                   # Backend Node.js application
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   │   ├── authController.js
│   │   │   └── onboardingController.js
│   │   ├── middleware/      # Custom middleware
│   │   │   └── auth.js
│   │   ├── models/          # Mongoose models
│   │   │   ├── User.js
│   │   │   └── FormEntry.js
│   │   ├── routes/          # API routes
│   │   │   ├── authRoutes.js
│   │   │   └── onboardingRoutes.js
│   │   └── server.js        # Server entry point
│   ├── .env                 # Environment variables
│   └── package.json
│
├── .gitignore               # Git ignore rules
├── README.md                # Project documentation
├── QUICKSTART.md            # Quick start guide
├── SETUP.md                 # Detailed setup instructions
└── package.json             # Root package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd record-task
```

2. **Install dependencies**
```bash
# Install all dependencies (root, client, server)
npm install

# Or install separately
cd server && npm install
cd ../client && npm install
```

3. **Environment Setup**
```bash
# Server .env file (server/.env)
PORT=5000
MONGODB_URI=mongodb://localhost:27017/record-onboarding
JWT_SECRET=your_jwt_secret_key_here

# Client .env file (client/.env) - Optional
VITE_API_URL=http://localhost:5000
```

4. **Start MongoDB**
```bash
# Windows - MongoDB should be running as a service
# Or start manually:
mongod
```

5. **Run the application**

**Option 1: Using PowerShell scripts**
```powershell
# Terminal 1 - Backend
.\start-backend.ps1

# Terminal 2 - Frontend
.\start-frontend.ps1
```

**Option 2: Manual commands**
```bash
# Terminal 1 - Backend
cd server
npm start

# Terminal 2 - Frontend
cd client
npm run dev
```

6. **Access the application**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 📖 User Flow

1. **Sign Up** → Create new account with email & password
2. **Onboarding Steps 1-6** → Complete profile information
3. **Dashboard** → Access personalized dashboard with:
   - Learning progress tracking
   - Skill badges
   - Platform connections
   - Activity heatmap

## 🔐 Authentication

- JWT-based authentication
- Protected routes with middleware
- Secure password hashing with bcrypt
- Token-based session management

## 🎨 Design System

### Colors
- **Brand Orange**: `#EC6737`
- **Primary Blue**: `#3B82F6`
- **Background**: White/Light gray
- **Text**: Dark gray/Black

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px

## 📱 Responsive Design

✅ **Mobile-first approach**
- Optimized for all screen sizes
- Touch-friendly interfaces
- Collapsible navigation
- Adaptive layouts

## 🧪 Testing

### Manual Testing Checklist
- [ ] Sign up with new account
- [ ] Login with existing account
- [ ] Complete all 6 onboarding steps
- [ ] Upload profile picture
- [ ] Navigate to dashboard
- [ ] Connect to external platforms
- [ ] Test responsive design on different devices

## 📦 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Onboarding
- `GET /api/onboarding` - Get onboarding progress
- `PUT /api/onboarding/step/:stepNumber` - Update specific step
- `POST /api/onboarding/complete` - Mark onboarding as complete

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software of Record Innovation and Enterprises Pvt. Ltd.

## 👥 Team

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express + MongoDB
- **Design**: Based on Figma specifications

## 🐛 Known Issues

- File size limit for profile pictures: 5MB
- Base64 encoding used for image storage (consider cloud storage for production)

## 🚧 Future Enhancements

- [ ] Email verification
- [ ] Password reset functionality
- [ ] Social login (Google, LinkedIn)
- [ ] Real-time notifications
- [ ] Cloud storage for images
- [ ] Advanced analytics dashboard
- [ ] Mobile app version

## 📞 Support

For support, email: support@recordenterprises.com

---

**© 2025 Record Innovation and Enterprises Pvt. Ltd. All rights reserved.**
