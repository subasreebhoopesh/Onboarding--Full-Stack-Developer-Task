import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Step1 from './pages/onboarding/Step1';
import Step2 from './pages/onboarding/Step2';
import Step3 from './pages/onboarding/Step3';
import Step4 from './pages/onboarding/Step4';
import Step5 from './pages/onboarding/Step5';
import Step6 from './pages/onboarding/Step6';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          
          <Route
            path="/onboarding/step/1"
            element={
              <ProtectedRoute>
                <Step1 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/onboarding/step/2"
            element={
              <ProtectedRoute>
                <Step2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/onboarding/step/3"
            element={
              <ProtectedRoute>
                <Step3 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/onboarding/step/4"
            element={
              <ProtectedRoute>
                <Step4 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/onboarding/step/5"
            element={
              <ProtectedRoute>
                <Step5 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/onboarding/step/6"
            element={
              <ProtectedRoute>
                <Step6 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
