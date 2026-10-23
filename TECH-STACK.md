# 🛠️ Technology Stack

## Complete List of Technologies Used in This Project

---

## Frontend Technologies

### Core Framework
- **React 18.2.0** - JavaScript library for building user interfaces
- **TypeScript 5.2.2** - Typed superset of JavaScript for better code quality
- **Vite 5.1.4** - Modern build tool and development server

### Routing & Navigation
- **React Router DOM 6.22.0** - Client-side routing and navigation

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS transformation tool
- **Autoprefixer 10.4.17** - CSS vendor prefix automation

### Icons & Graphics
- **Lucide React 1.61.0** - Modern icon library
- **Custom SVG Logos** - Hand-crafted platform logos (LeetCode, HackerRank, etc.)

### Form Management
- **React Hook Form 7.50.1** - Form validation and state management
- **Zod 3.22.4** - TypeScript-first schema validation
- **@hookform/resolvers 3.3.4** - Validation resolver for React Hook Form

### HTTP Client
- **Axios 1.6.7** - Promise-based HTTP client for API requests

### Utilities
- **clsx 2.1.1** - Conditional className utility
- **tailwind-merge 3.7.0** - Merge Tailwind CSS classes intelligently

---

## Backend Technologies

### Runtime & Framework
- **Node.js** - JavaScript runtime environment
- **Express.js 4.18.2** - Web application framework

### Database
- **MongoDB** - NoSQL document database
- **Mongoose 8.1.1** - MongoDB object modeling for Node.js

### Authentication & Security
- **bcryptjs 2.4.3** - Password hashing and encryption
- **JSON Web Token (JWT) 9.0.2** - Secure token-based authentication
- **CORS 2.8.5** - Cross-Origin Resource Sharing middleware

### Environment Management
- **dotenv 16.4.1** - Environment variable management

---

## Development Tools

### Code Quality
- **ESLint 8.56.0** - JavaScript/TypeScript linting
- **@typescript-eslint/eslint-plugin 6.21.0** - TypeScript-specific linting rules
- **@typescript-eslint/parser 6.21.0** - TypeScript parser for ESLint

### Build Tools
- **@vitejs/plugin-react 4.2.1** - React plugin for Vite
- **TypeScript Compiler** - Type checking and compilation

---

## Architecture & Patterns

### Design Patterns
- **MERN Stack** - MongoDB, Express, React, Node.js
- **REST API** - RESTful API architecture
- **MVC Pattern** - Model-View-Controller (Backend)
- **Component-Based Architecture** - React components (Frontend)
- **Context API** - Global state management (Authentication)

### Authentication Flow
- **JWT-based Authentication** - Secure token system
- **Protected Routes** - Route guards for authenticated pages
- **Persistent Sessions** - localStorage token storage

### Database Design
- **Schema-based Design** - Mongoose schemas
- **Relational References** - User-FormEntry relationship
- **Timestamps** - Automatic createdAt/updatedAt

---

## Key Features Implementation

### Frontend Features
✅ Multi-step onboarding form (6 steps)
✅ Responsive design (Mobile, Tablet, Desktop)
✅ Modern dashboard with sidebar navigation
✅ Real-time form validation
✅ Profile picture upload (Base64)
✅ Protected routes with authentication
✅ LocalStorage persistence for form data
✅ Custom error handling and display

### Backend Features
✅ RESTful API endpoints
✅ Password encryption with bcrypt
✅ JWT token generation and verification
✅ Middleware authentication
✅ MongoDB data persistence
✅ Email duplicate validation
✅ CORS enabled for cross-origin requests
✅ Environment-based configuration

---

## API Architecture

### Authentication Endpoints
```
POST /api/auth/signup    - User registration
POST /api/auth/login     - User authentication
GET  /api/auth/me        - Get current user
```

### Onboarding Endpoints
```
GET  /api/onboarding          - Get user's form data
PUT  /api/onboarding/step/:n  - Save step data (1-6)
POST /api/onboarding/complete - Mark onboarding complete
```

---

## Database Schema

### Users Collection
```javascript
{
  name: String (required),
  email: String (required, unique),
  passwordHash: String (required),
  createdAt: Date,
  updatedAt: Date
}
```

### FormEntries Collection
```javascript
{
  userId: ObjectId (ref: User),
  step1Data: Object,  // Profile details
  step2Data: Object,  // Goals
  step3Data: Object,  // Info screen
  step4Data: Object,  // Skills
  step5Data: Object,  // Interests
  step6Data: Object,  // Photo & preferences
  currentStep: Number,
  isCompleted: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

---

## Development Environment

### System Requirements
- **Node.js** 18+ or higher
- **MongoDB** 5.0+ or higher
- **npm** 9+ or higher
- **Modern Browser** (Chrome, Firefox, Edge)

### Development Ports
- **Frontend:** localhost:5173 (Vite dev server)
- **Backend:** localhost:5000 (Express server)
- **Database:** localhost:27017 (MongoDB)

---

## File Structure

```
project/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React Context (Auth)
│   │   ├── utils/         # Helper functions
│   │   ├── types/         # TypeScript types
│   │   └── assets/        # Images, logos
│   ├── public/
│   └── package.json
│
├── server/                # Express Backend
│   ├── src/
│   │   ├── controllers/  # Route controllers
│   │   ├── models/       # Mongoose schemas
│   │   ├── routes/       # API routes
│   │   ├── middleware/   # Custom middleware
│   │   └── server.js     # Entry point
│   └── package.json
│
└── Documentation/         # Project docs
```

---

## Security Features

### Password Security
✅ bcrypt hashing (10 salt rounds)
✅ Passwords never stored in plain text
✅ Secure password validation (min 6 characters)

### Token Security
✅ JWT with 30-day expiration
✅ Secret key from environment variables
✅ Token verification middleware

### Data Validation
✅ Email format validation
✅ Required field validation
✅ Duplicate email prevention
✅ File size validation (5MB limit)

### Network Security
✅ CORS enabled with specific origins
✅ Environment-based configuration
✅ Secure HTTP headers

---

## Performance Optimizations

### Frontend
✅ Code splitting with Vite
✅ Lazy loading of components
✅ Optimized bundle size
✅ Fast refresh for development

### Backend
✅ Efficient database queries
✅ Middleware optimization
✅ Connection pooling (Mongoose)
✅ Error handling middleware

### Database
✅ Indexed fields (email)
✅ Efficient schema design
✅ Query optimization

---

## Additional Tools & Scripts

### PowerShell Scripts
- **start-backend.ps1** - Start Express server
- **start-frontend.ps1** - Start Vite dev server
- **install-dependencies.ps1** - Install all dependencies
- **check-mongodb.ps1** - Verify MongoDB connection
- **open-mongodb-gui.ps1** - Open MongoDB Compass

### Node.js Scripts
- **check-passwords.js** - View encrypted passwords
- **view-all-data.js** - Display all database data
- **check-all-screens-data.js** - Verify form data storage
- **test-connection.js** - Test database connection

---

## Package Managers Used

### Frontend
- **npm** - Node Package Manager

### Backend
- **npm** - Node Package Manager

---

## Version Control

### Git & GitHub
- **Git** - Version control system
- **GitHub** - Remote repository hosting
- **.gitignore** - Excluded files configuration
- **Branches** - main (production)

---

## Documentation

### Project Documentation
- **README.md** - Project overview and setup
- **SETUP.md** - Detailed installation guide
- **QUICKSTART.md** - Quick start guide
- **CONTRIBUTING.md** - Contribution guidelines
- **LICENSE** - MIT License
- **CONNECTION-VERIFIED.md** - Database connection docs
- **FIXES-APPLIED.md** - Bug fixes documentation
- **TESTING-CHECKLIST.md** - Testing guidelines

---

## UI/UX Features

### Design System
- **Color Palette** - Orange (#EC6737) primary color
- **Typography** - System fonts, clear hierarchy
- **Spacing** - Consistent padding and margins
- **Responsive Breakpoints** - Mobile (< 768px), Tablet (768-1024px), Desktop (> 1024px)

### User Experience
✅ Clear navigation flow
✅ Form data persistence (localStorage)
✅ Helpful error messages
✅ Loading states
✅ Success feedback
✅ Smooth transitions

---

## Browser Compatibility

### Supported Browsers
✅ Google Chrome (latest)
✅ Mozilla Firefox (latest)
✅ Microsoft Edge (latest)
✅ Safari (latest)

### Not Supported
❌ Internet Explorer

---

## Future Technologies (Mentioned but Not Implemented)

### Optional Enhancements
- **shadcn/ui** - Pre-built component library (mentioned in requirements)
- **MongoDB Atlas** - Cloud database (for production deployment)
- **Vercel/Netlify** - Frontend hosting platforms
- **Render/Railway** - Backend hosting platforms

---

## License

**MIT License** - Free and open source

---

## Summary

### Core Stack
**MERN** - MongoDB + Express + React + Node.js

### Primary Languages
- **TypeScript** - Frontend
- **JavaScript** - Backend

### Database
- **MongoDB** - NoSQL database

### Authentication
- **JWT** - JSON Web Tokens

### Styling
- **Tailwind CSS** - Utility-first CSS

### Total Dependencies
- **Frontend:** 12 dependencies, 11 devDependencies
- **Backend:** 7 dependencies

---

## Total Lines of Code

- **173 files**
- **20,313+ lines of code**
- **717.32 KB** total size

---

This project demonstrates modern full-stack development practices with:
✅ Type safety (TypeScript)
✅ Component-based architecture (React)
✅ RESTful API design (Express)
✅ Secure authentication (JWT + bcrypt)
✅ Responsive design (Tailwind CSS)
✅ Professional documentation
✅ Version control (Git/GitHub)
