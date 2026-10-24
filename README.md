Record Innovation Enterprises — Onboarding Platform

A full-stack onboarding application developed as part of the **Full Stack Developer Assessment for Record Innovation Enterprises Pvt. Ltd.** The application provides user authentication, a multi-step onboarding workflow with persistent data storage, and a personalized dashboard.

Features

1. User Authentication
- User registration with name, email, and password.
- Form validation and appropriate success/error feedback.
- Secure password hashing using bcrypt.
- JWT-based authentication.
- Protected routes for authenticated users.

2. Multi-Step Onboarding
- Six-step onboarding workflow.
- Personal information and profile details.
- Education, skills, and professional experience.
- Career preferences and job-seeking status.
- Form validation and step-by-step navigation.
- Persistent form data stored in MongoDB.
- Previously entered values restored when navigating back.

3. Dashboard
- Personalized dashboard interface.
- Learning progress indicators.
- Skill badges and profile information.
- External platform integration section.
- Activity heatmap and learning activity visualization.
- Responsive dashboard layout.

Dashboard elements and progress indicators should be described as static or mock data wherever they are not connected to live services.

echnology Stack

| Layer | Technologies |
|---|---|
| Frontend | React 18, TypeScript, Vite |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| API Integration | Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | JSON Web Tokens (JWT) |
| Password Security | bcrypt |

Project Structure

```text
record-task/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── dashboard/
│   │   │   ├── OnboardingLayout.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   ├── context/
│   │   ├── pages/
│   │   │   ├── onboarding/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Login.tsx
│   │   │   └── SignUp.tsx
│   │   ├── types/
│   │   ├── utils/
│   │   ├── data/
│   │   ├── lib/
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
├── .gitignore
├── README.md
└── package.json
```

Prerequisites

- Node.js 16 or later
- npm
- MongoDB local instance or MongoDB Atlas account

Getting Started

1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd record-task
```

Replace the repository URL with your actual GitHub repository URL.

2. Install Dependencies

If the root `package.json` is configured to install all required dependencies:

```bash
npm install
```

Otherwise, install the frontend and backend dependencies separately:

```bash
cd server
npm install

cd ../client
npm install
```

3. Configure Environment Variables

Create a `server/.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_secret_key
```

If the frontend uses a configurable API URL, create `client/.env`:

```env
VITE_API_URL=http://localhost:5000
```

Use your own MongoDB connection string and secret. Do not commit `.env` files or credentials to GitHub.

4. Start the Backend

Open a terminal:

```bash
cd server
npm start
```

Use the start command defined in `server/package.json` if it differs.

5. Start the Frontend

Open another terminal:

```bash
cd client
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

Application Workflow

1. Register a new account.
2. Log in with the registered credentials.
3. Complete the onboarding steps.
4. Navigate between steps and verify that saved data is restored.
5. Submit the completed onboarding form.
6. View the dashboard.

API Endpoints

The following endpoints describe the intended API structure. Verify the actual route definitions in the backend before treating this list as final.

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/auth/signup` | Register a user |
| POST | `/api/auth/login` | Authenticate a user |
| GET | `/api/auth/me` | Retrieve the authenticated user |
| GET | `/api/onboarding` | Retrieve onboarding data |
| PUT | `/api/onboarding/step/:stepNumber` | Save a step's data |
| POST | `/api/onboarding/complete` | Complete onboarding |

Security and Data Persistence

- Passwords are hashed before storage.
- JWTs are used for authentication.
- MongoDB stores user accounts and onboarding information.
- Environment variables are used for configuration and secrets.

Responsive Design

The interface is designed to adapt to desktop, tablet, and mobile screen sizes. Final responsiveness should be verified on all three viewport sizes.

Assessment Deliverables

- Full-stack application source code.
- GitHub repository with frontend and backend code.
- PDF document containing screenshots of the implemented screens, from signup through the dashboard.

License

This project was developed for the Record Innovation Enterprises Pvt. Ltd. Full Stack Developer Assessment.

