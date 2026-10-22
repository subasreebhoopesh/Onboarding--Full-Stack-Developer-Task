import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, user } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      await login(email, password);
      
      // Fetch onboarding progress
      const response = await api.get('/onboarding');
      const formEntry = response.data.formEntry;

      if (formEntry.isCompleted) {
        navigate('/dashboard');
      } else {
        navigate(`/onboarding/step/${formEntry.currentStep}`);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#5B8DB8] p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          LOGIN
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
              Remember me?
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'LOGGING IN...' : 'LOGIN'}
          </button>

          <div className="text-center">
            <Link to="/forgot-password" className="text-sm text-gray-500 hover:text-gray-700">
              Forgot Password?
            </Link>
          </div>
        </form>

        <div className="mt-6 flex items-center justify-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <button className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-pink-500 transition-colors">
            <span className="text-red-500 font-bold">G</span>
          </button>
          <button className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-pink-500 transition-colors">
            <span className="text-blue-600 font-bold">f</span>
          </button>
          <button className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-pink-500 transition-colors">
            <span className="text-blue-700 font-bold">in</span>
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Need an account?{' '}
          <Link to="/signup" className="text-pink-500 hover:text-pink-600 font-semibold">
            SIGN UP
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
