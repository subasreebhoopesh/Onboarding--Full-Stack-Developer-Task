import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Always redirect to signup page (no auto-login to dashboard)
    navigate('/signup', { replace: true });
  }, [navigate]);

  // Show loading while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#5B8DB8]">
      <div className="text-white text-xl">Loading...</div>
    </div>
  );
};

export default Landing;
