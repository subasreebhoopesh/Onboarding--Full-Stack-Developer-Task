import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingLayout from '../../components/OnboardingLayout';
import api from '../../utils/api';
import { useAuth } from '../../context/AuthContext';

const Step2: React.FC = () => {
  const [goals, setGoals] = useState<string[]>([]);
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const goalOptions = [
    'Build my Skill Repository',
    'Get a Good Job',
    'Upskill for Current Role',
    'Explore New Skills',
    'Make Learning a Habit',
    'Others',
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get('/onboarding');
      if (response.data.formEntry.step2Data?.goals) {
        setGoals(response.data.formEntry.step2Data.goals);
      }
      // Get name from step1 or user
      if (response.data.formEntry.step1Data?.name) {
        setUserName(response.data.formEntry.step1Data.name);
      } else if (user?.name) {
        setUserName(user.name);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const toggleGoal = (goal: string) => {
    if (goals.includes(goal)) {
      setGoals(goals.filter((g) => g !== goal));
    } else {
      setGoals([...goals, goal]);
    }
  };

  const handleContinue = async () => {
    if (goals.length === 0) {
      alert('Please select at least one goal');
      return;
    }

    setLoading(true);
    try {
      await api.put('/onboarding/step/2', { goals });
      navigate('/onboarding/step/3');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Failed to save data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <OnboardingLayout
      currentStep={2}
      onContinue={handleContinue}
      continueDisabled={loading}
    >
      <div className="bg-white rounded-lg p-5 sm:p-6 shadow-sm max-w-xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
          Hey {userName || 'there'} 👋
        </h1>
        <p className="text-gray-600 text-sm mb-1">
          We're excited to have you onboard!
        </p>
        <p className="text-gray-600 text-sm mb-6">
          What's your main goal?
        </p>

        <div className="space-y-2">
          {goalOptions.map((goal) => (
            <label
              key={goal}
              className="flex items-center p-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <input
                type="checkbox"
                checked={goals.includes(goal)}
                onChange={() => toggleGoal(goal)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-0"
              />
              <span className="ml-3 text-gray-700 text-sm">{goal}</span>
            </label>
          ))}
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default Step2;
