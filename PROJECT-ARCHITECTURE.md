# 🏗️ Project Architecture

## Complete Architecture Documentation

---

## 1. High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER / BROWSER                          │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             │ HTTP Requests
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    FRONTEND (React + Vite)                      │
│                     Port: 5173                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Pages          Components        Context       Utils    │  │
│  │  ├─ SignUp      ├─ Onboarding    ├─ Auth      ├─ API   │  │
│  │  ├─ Login       ├─ Protected     │             │        │  │
│  │  ├─ Dashboard   ├─ Dashboard     │             │        │  │
│  │  └─ Steps 1-6   │   Components   │             │        │  │
│  └──────────────────────────────────────────────────────────┘  │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             │ REST API Calls
                             │ (Axios)
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                   BACKEND (Node.js + Express)                   │
│                     Port: 5000                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Routes         Controllers       Middleware    Models   │  │
│  │  ├─ Auth        ├─ Auth           ├─ Auth      ├─ User  │  │
│  │  │  Routes      │  Controller     │  Middleware │ Model │  │
│  │  └─ Onboard     └─ Onboard        │             └─ Form │  │
│  │     Routes         Controller      │                Entry│  │
│  └──────────────────────────────────────────────────────────┘  │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             │ Mongoose ODM
                             │ Queries
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    DATABASE (MongoDB)                           │
│                     Port: 27017                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Collections:                                            │  │
│  │  ├─ users          (name, email, passwordHash)          │  │
│  │  └─ formentries    (userId, step1-6 data, status)       │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. MERN Stack Architecture

```
┌────────────────────────────────────────────────────────────┐
│                     MERN STACK                             │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  M  →  MongoDB        Database (NoSQL)                    │
│                       Stores users & form data            │
│                                                            │
│  E  →  Express.js     Backend Framework                   │
│                       REST API server                     │
│                                                            │
│  R  →  React          Frontend Library                    │
│                       User Interface                      │
│                                                            │
│  N  →  Node.js        JavaScript Runtime                  │
│                       Server environment                  │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## 3. Frontend Architecture (React)

```
client/
│
├── public/
│   └── (static assets)
│
├── src/
│   ├── main.tsx                    # Entry point
│   ├── App.tsx                     # Root component with routes
│   │
│   ├── pages/                      # Page components
│   │   ├── Landing.tsx             # / (redirects)
│   │   ├── SignUp.tsx              # /signup
│   │   ├── Login.tsx               # /login
│   │   ├── Dashboard.tsx           # /dashboard (protected)
│   │   └── onboarding/
│   │       ├── Step1.tsx           # Profile details
│   │       ├── Step2.tsx           # Goals
│   │       ├── Step3.tsx           # Info screen
│   │       ├── Step4.tsx           # Skills
│   │       ├── Step5.tsx           # Interests
│   │       └── Step6.tsx           # Photo & preferences
│   │
│   ├── components/                 # Reusable components
│   │   ├── OnboardingLayout.tsx   # Layout wrapper
│   │   ├── ProtectedRoute.tsx     # Auth guard
│   │   └── dashboard/              # Dashboard components
│   │       ├── Sidebar.tsx
│   │       ├── TopBar.tsx
│   │       ├── HeroBanner.tsx
│   │       ├── LearningSection.tsx
│   │       ├── ShowcaseSection.tsx
│   │       ├── RightRail.tsx
│   │       └── logos.tsx
│   │
│   ├── context/                    # Global state
│   │   └── AuthContext.tsx        # Authentication state
│   │
│   ├── utils/                      # Helper functions
│   │   └── api.ts                 # Axios instance
│   │
│   ├── types/                      # TypeScript types
│   │   └── index.ts               # Type definitions
│   │
│   ├── data/                       # Static data
│   │   └── dashboard.ts           # Dashboard data
│   │
│   ├── lib/                        # Utilities
│   │   └── utils.ts               # Helper functions
│   │
│   ├── assets/                     # Images & media
│   │   ├── avatar.jpg
│   │   └── (thumbnails)
│   │
│   └── index.css                   # Global styles
│
└── package.json                    # Dependencies
```

### Component Hierarchy:
```
App
├── Landing → SignUp/Login
├── SignUp
├── Login
├── Protected Routes
│   ├── Dashboard
│   │   ├── Sidebar
│   │   ├── TopBar
│   │   ├── HeroBanner
│   │   ├── LearningSection
│   │   ├── ShowcaseSection
│   │   └── RightRail
│   │
│   └── Onboarding Steps (1-6)
│       └── OnboardingLayout
│           ├── Progress Bar
│           ├── Step Content
│           └── Navigation Buttons
```

---

## 4. Backend Architecture (Express)

```
server/
│
├── src/
│   ├── server.js                   # Entry point & Express setup
│   │
│   ├── routes/                     # API routes
│   │   ├── authRoutes.js          # /api/auth/*
│   │   └── onboardingRoutes.js    # /api/onboarding/*
│   │
│   ├── controllers/                # Business logic
│   │   ├── authController.js      # Auth operations
│   │   └── onboardingController.js # Form operations
│   │
│   ├── models/                     # Database schemas
│   │   ├── User.js                # User schema
│   │   └── FormEntry.js           # Form entry schema
│   │
│   └── middleware/                 # Custom middleware
│       └── auth.js                # JWT verification
│
├── .env                            # Environment variables
└── package.json                    # Dependencies
```

### Request Flow:
```
Client Request
    ↓
Express Server (server.js)
    ↓
CORS Middleware
    ↓
JSON Parser
    ↓
Route Handler (/api/auth or /api/onboarding)
    ↓
Authentication Middleware (if protected)
    ↓
Controller (Business Logic)
    ↓
Model (Database Query)
    ↓
MongoDB
    ↓
Response ← Client
```

---

## 5. Database Architecture (MongoDB)

### Collections Structure:

#### Users Collection:
```javascript
{
  _id: ObjectId("..."),
  name: "John Doe",
  email: "john@example.com",
  passwordHash: "$2a$10$...",  // bcrypt hash
  createdAt: ISODate("2026-10-22T..."),
  updatedAt: ISODate("2026-10-22T...")
}
```

#### FormEntries Collection:
```javascript
{
  _id: ObjectId("..."),
  userId: ObjectId("..."),  // Reference to users
  
  step1Data: {
    name: "John Doe",
    username: "johndoe",
    description: "Student",
    location: "India",
    howDidYouKnow: "Social Media"
  },
  
  step2Data: {
    goals: ["Build my Skill Repository", "Get a Good Job"]
  },
  
  step3Data: {},  // No data (info screen)
  
  step4Data: {
    interests: ["Python", "JavaScript", "React"]
  },
  
  step5Data: {
    interests: ["Web Development", "AI/ML"]
  },
  
  step6Data: {
    profilePicture: "data:image/jpeg;base64,...",
    lookingForJob: "yes-actively"
  },
  
  currentStep: 6,
  isCompleted: true,
  createdAt: ISODate("2026-10-22T..."),
  updatedAt: ISODate("2026-10-22T...")
}
```

### Relationships:
```
users (1) ←──────── (1) formentries
   ↑                        ↓
   │                        │
 _id ←─── Referenced by ── userId
```

---

## 6. Authentication Flow

```
┌─────────────────────────────────────────────────────────────┐
│                       SIGNUP FLOW                           │
└─────────────────────────────────────────────────────────────┘

User enters: Name, Email, Password
        ↓
Frontend validation
        ↓
POST /api/auth/signup
        ↓
Backend receives data
        ↓
Check: Email already exists?
        ↓
    Yes → Return error "Email already registered"
    No  → Continue
        ↓
Hash password with bcrypt
        ↓
Create user in MongoDB
        ↓
Generate JWT token
        ↓
Return: { token, user }
        ↓
Frontend stores token in localStorage
        ↓
Redirect to /onboarding/step/1


┌─────────────────────────────────────────────────────────────┐
│                       LOGIN FLOW                            │
└─────────────────────────────────────────────────────────────┘

User enters: Email, Password
        ↓
Frontend validation
        ↓
POST /api/auth/login
        ↓
Backend receives credentials
        ↓
Find user by email
        ↓
User exists?
        ↓
    No  → Return error "Invalid credentials"
    Yes → Continue
        ↓
Compare password with bcrypt
        ↓
Password correct?
        ↓
    No  → Return error "Invalid credentials"
    Yes → Continue
        ↓
Generate JWT token
        ↓
Return: { token, user }
        ↓
Frontend stores token in localStorage
        ↓
Fetch onboarding progress
        ↓
    Completed? → Redirect to /dashboard
    Incomplete → Redirect to current step
```

---

## 7. Protected Routes Flow

```
User navigates to /dashboard
        ↓
ProtectedRoute component
        ↓
Check: Token in localStorage?
        ↓
    No  → Redirect to /login
    Yes → Continue
        ↓
GET /api/auth/me
        ↓
Backend verifies JWT token
        ↓
Token valid?
        ↓
    No  → Return 401 Unauthorized
          → Frontend redirects to /login
    Yes → Return user data
          → Render protected component
```

---

## 8. Onboarding Flow

```
User signs up successfully
        ↓
Redirect to /onboarding/step/1
        ↓
┌────────────────────────────────┐
│ Step 1: Profile Details        │
│ (Name, Username, Location...)  │
└────────────────┬───────────────┘
                 ↓
    PUT /api/onboarding/step/1
    Save data to FormEntry.step1Data
                 ↓
┌────────────────────────────────┐
│ Step 2: Select Goals           │
│ (Build Skills, Get Job...)     │
└────────────────┬───────────────┘
                 ↓
    PUT /api/onboarding/step/2
    Save data to FormEntry.step2Data
                 ↓
┌────────────────────────────────┐
│ Step 3: Information Screen     │
│ (No data to save)              │
└────────────────┬───────────────┘
                 ↓
┌────────────────────────────────┐
│ Step 4: Select Skills          │
│ (Python, React, MongoDB...)    │
└────────────────┬───────────────┘
                 ↓
    PUT /api/onboarding/step/4
    Save data to FormEntry.step4Data
                 ↓
┌────────────────────────────────┐
│ Step 5: Select Interests       │
│ (Web Dev, AI/ML...)            │
└────────────────┬───────────────┘
                 ↓
    PUT /api/onboarding/step/5
    Save data to FormEntry.step5Data
                 ↓
┌────────────────────────────────┐
│ Step 6: Profile Photo & Job    │
│ (Upload photo, Job preference) │
└────────────────┬───────────────┘
                 ↓
    PUT /api/onboarding/step/6
    Save data to FormEntry.step6Data
    Mark isCompleted = true
                 ↓
        Redirect to /dashboard
```

---

## 9. API Architecture

### REST API Endpoints:

```
┌─────────────────────────────────────────────────────────────┐
│                    AUTHENTICATION API                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  POST   /api/auth/signup                                   │
│         Body: { name, email, password }                    │
│         Returns: { token, user }                           │
│                                                             │
│  POST   /api/auth/login                                    │
│         Body: { email, password }                          │
│         Returns: { token, user }                           │
│                                                             │
│  GET    /api/auth/me                                       │
│         Headers: { Authorization: "Bearer <token>" }       │
│         Returns: { user }                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    ONBOARDING API                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  GET    /api/onboarding                                    │
│         Headers: { Authorization: "Bearer <token>" }       │
│         Returns: { formEntry }                             │
│                                                             │
│  PUT    /api/onboarding/step/:stepNumber                   │
│         Headers: { Authorization: "Bearer <token>" }       │
│         Body: { ...stepData }                              │
│         Returns: { formEntry }                             │
│                                                             │
│  POST   /api/onboarding/complete                           │
│         Headers: { Authorization: "Bearer <token>" }       │
│         Returns: { formEntry }                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 10. Data Flow Diagram

```
┌──────────┐       ┌──────────┐       ┌──────────┐
│          │       │          │       │          │
│  CLIENT  │◄─────►│  SERVER  │◄─────►│ DATABASE │
│  (React) │       │ (Express)│       │ (MongoDB)│
│          │       │          │       │          │
└──────────┘       └──────────┘       └──────────┘
     │                   │                   │
     │                   │                   │
     │ 1. User Action   │                   │
     ├──────────────────►│                   │
     │                   │                   │
     │                   │ 2. Process Request│
     │                   │                   │
     │                   │ 3. Query Database │
     │                   ├──────────────────►│
     │                   │                   │
     │                   │ 4. Return Data    │
     │                   │◄──────────────────┤
     │                   │                   │
     │ 5. Send Response │                   │
     │◄──────────────────┤                   │
     │                   │                   │
     │ 6. Update UI     │                   │
     │                   │                   │
```

---

## 11. Security Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    SECURITY LAYERS                          │
└─────────────────────────────────────────────────────────────┘

Layer 1: Frontend Validation
    ├─ Required field checks
    ├─ Email format validation
    ├─ Password length validation
    └─ File size validation (5MB)

Layer 2: Network Security
    ├─ CORS enabled
    ├─ HTTPS recommended for production
    └─ Environment variables for secrets

Layer 3: Backend Validation
    ├─ Duplicate email check
    ├─ Input sanitization
    ├─ Schema validation
    └─ Type checking

Layer 4: Authentication
    ├─ JWT token with expiration
    ├─ Token verification middleware
    ├─ Protected routes
    └─ Secure token storage

Layer 5: Password Security
    ├─ bcrypt hashing (10 rounds)
    ├─ Salt generation
    ├─ Never store plain text
    └─ Secure comparison

Layer 6: Database Security
    ├─ Mongoose schema validation
    ├─ Indexed unique fields
    ├─ Connection string security
    └─ Access control
```

---

## 12. State Management

```
┌─────────────────────────────────────────────────────────────┐
│              FRONTEND STATE MANAGEMENT                      │
└─────────────────────────────────────────────────────────────┘

Global State (Context API):
├─ AuthContext
│   ├─ user: User | null
│   ├─ loading: boolean
│   ├─ login()
│   ├─ signup()
│   └─ logout()

Local State (useState):
├─ Form data (each step)
├─ Error messages
├─ Loading states
└─ UI toggles

Persistent State (localStorage):
├─ token (JWT)
├─ signup_name (temp)
├─ signup_email (temp)
└─ signup_password (temp)

Server State:
├─ User data
├─ Form entries
└─ Onboarding progress
```

---

## 13. Routing Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      ROUTE STRUCTURE                        │
└─────────────────────────────────────────────────────────────┘

Public Routes:
├─ /                  → Landing (redirects to /signup)
├─ /signup            → SignUp page
└─ /login             → Login page

Protected Routes (requires JWT):
├─ /dashboard         → Dashboard
├─ /onboarding/step/1 → Step 1: Profile
├─ /onboarding/step/2 → Step 2: Goals
├─ /onboarding/step/3 → Step 3: Info
├─ /onboarding/step/4 → Step 4: Skills
├─ /onboarding/step/5 → Step 5: Interests
└─ /onboarding/step/6 → Step 6: Photo & Job

Route Guards:
├─ ProtectedRoute component
│   ├─ Checks localStorage for token
│   ├─ Verifies token with backend
│   ├─ Redirects to /login if invalid
│   └─ Renders component if valid
```

---

## 14. Build & Deployment Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                  DEVELOPMENT ENVIRONMENT                    │
└─────────────────────────────────────────────────────────────┘

Frontend (localhost:5173):
├─ Vite dev server
├─ Hot module replacement
├─ Fast refresh
└─ Source maps

Backend (localhost:5000):
├─ Node.js server
├─ Nodemon (auto-restart)
├─ Express middleware
└─ MongoDB connection

Database (localhost:27017):
├─ MongoDB local instance
├─ Database: onboarding
└─ Collections: users, formentries


┌─────────────────────────────────────────────────────────────┐
│                PRODUCTION ARCHITECTURE                      │
└─────────────────────────────────────────────────────────────┘

Frontend:
├─ Built with Vite (npm run build)
├─ Static files in dist/
├─ Deployed to: Vercel/Netlify
└─ CDN delivery

Backend:
├─ Node.js production mode
├─ PM2 process manager
├─ Deployed to: Render/Railway
└─ Environment variables

Database:
├─ MongoDB Atlas (cloud)
├─ Replica set
├─ Automated backups
└─ Connection pooling
```

---

## 15. Error Handling Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                   ERROR HANDLING FLOW                       │
└─────────────────────────────────────────────────────────────┘

Frontend Errors:
├─ Form validation errors
│   └─ Display inline error messages
│
├─ API request errors
│   ├─ Catch with try-catch
│   ├─ Display error in UI
│   └─ Log to console
│
└─ Route errors
    └─ Redirect to appropriate page

Backend Errors:
├─ Validation errors (400)
│   └─ Return error message
│
├─ Authentication errors (401)
│   └─ Return "Unauthorized"
│
├─ Not found errors (404)
│   └─ Return "Not found"
│
└─ Server errors (500)
    ├─ Log error
    └─ Return generic message

Database Errors:
├─ Connection errors
├─ Query errors
├─ Validation errors
└─ Duplicate key errors
```

---

## Summary

### Architecture Type: **Three-Tier Architecture**

```
┌─────────────────────┐
│  Presentation Tier  │  →  React Frontend (UI/UX)
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│   Application Tier  │  →  Express Backend (API/Logic)
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│     Data Tier       │  →  MongoDB (Data Storage)
└─────────────────────┘
```

### Key Architectural Patterns:
✅ **MVC Pattern** (Backend)
✅ **Component-Based Architecture** (Frontend)
✅ **RESTful API Design**
✅ **JWT Authentication**
✅ **Protected Routes**
✅ **Middleware Pattern**
✅ **Context API for State**
✅ **Schema-Based Data Modeling**

### Total Architecture Components:
- **3 Layers** (Frontend, Backend, Database)
- **2 Collections** (users, formentries)
- **11 Routes** (1 landing + 2 auth + 6 steps + 2 protected)
- **6 API Endpoints** (3 auth + 3 onboarding)
- **20+ Components** (Pages + Reusable)
- **3 Ports** (5173, 5000, 27017)
