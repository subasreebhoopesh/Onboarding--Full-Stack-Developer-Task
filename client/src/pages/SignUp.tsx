import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignUp: React.FC = () => {
  const [name, setName] = useState(() => localStorage.getItem('signup_name') || '');
  const [email, setEmail] = useState(() => localStorage.getItem('signup_email') || '');
  const [password, setPassword] = useState(() => localStorage.getItem('signup_password') || '');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signup } = useAuth();

  // Removed auto-redirect - users can access signup page anytime

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      await signup(email, password, name);
      // Clear saved data after successful signup
      localStorage.removeItem('signup_name');
      localStorage.removeItem('signup_email');
      localStorage.removeItem('signup_password');
      navigate('/onboarding/step/1');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to sign up');
    } finally {
      setLoading(false);
    }
  };

  // Save to localStorage on every change
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    localStorage.setItem('signup_name', value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    localStorage.setItem('signup_email', value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    localStorage.setItem('signup_password', value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#5B8DB8] p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          SIGN UP
        </h2>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 rounded">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-red-800">
                  {error}
                </p>
                {error.includes('already registered') && (
                  <p className="mt-1 text-xs text-red-600">
                    Please use a different email or <Link to="/login" className="font-semibold underline">login here</Link>
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
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
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'SIGNING UP...' : 'SIGN UP'}
          </button>
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
          Already a user?{' '}
          <Link to="/login" className="text-pink-500 hover:text-pink-600 font-semibold">
            LOGIN
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
