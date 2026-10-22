import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Landing: React.FC = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (user) {
        // User is logged in, go to dashboard
        navigate('/dashboard', { replace: true });
      } else {
        // User is not logged in, go to signup
        navigate('/signup', { replace: true });
      }
    }
  }, [user, loading, navigate]);

  // Show loading while checking auth
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#5B8DB8]">
      <div className="text-white text-xl">Loading...</div>
    </div>
  );
};

export default Landing;
