import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingLayout from '../../components/OnboardingLayout';
import api from '../../utils/api';

const Step1: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    appUsername: '',
    description: '',
    location: '',
    howDidYouKnow: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get('/onboarding');
      if (response.data.formEntry.step1Data) {
        setFormData(response.data.formEntry.step1Data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = async () => {
    if (!formData.name || !formData.username || !formData.description || !formData.location || !formData.howDidYouKnow) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      await api.put('/onboarding/step/1', formData);
      navigate('/onboarding/step/2');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Failed to save data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <OnboardingLayout
      currentStep={1}
      onContinue={handleContinue}
      continueDisabled={loading}
      showBack={false}
    >
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
          It's your time!
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Let us know about yourself first.
        </p>

        <div className="space-y-3">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400 bg-white"
              placeholder="Your Name"
            />
          </div>

          <div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400 bg-white"
              placeholder="Your Username"
            />
          </div>

          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16v-4m0-4h.01"></path>
              </svg>
            </div>
            <input
              type="text"
              name="appUsername"
              value="app.getrecord/username"
              readOnly
              disabled
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-gray-400 bg-gray-50 cursor-not-allowed"
              placeholder="app.getrecord/username"
            />
          </div>

          <div>
            <select
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 appearance-none focus:outline-none focus:border-gray-400 bg-white cursor-pointer"
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em'
              }}
            >
              <option value="">What best describes you?</option>
              <option value="Student">Student</option>
              <option value="Professional">Professional</option>
              <option value="Freelancer">Freelancer</option>
              <option value="Entrepreneur">Entrepreneur</option>
              <option value="Job Seeker">Job Seeker</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 appearance-none focus:outline-none focus:border-gray-400 bg-white cursor-pointer"
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em'
              }}
            >
              <option value="">Select your location</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="Singapore">Singapore</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <select
              name="howDidYouKnow"
              value={formData.howDidYouKnow}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 appearance-none focus:outline-none focus:border-gray-400 bg-white cursor-pointer"
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em'
              }}
            >
              <option value="">How do you know us?</option>
              <option value="Social Media">Social Media</option>
              <option value="Friend">Friend or Colleague</option>
              <option value="Search Engine">Search Engine (Google, etc.)</option>
              <option value="Advertisement">Advertisement</option>
              <option value="Blog/Article">Blog or Article</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default Step1;
