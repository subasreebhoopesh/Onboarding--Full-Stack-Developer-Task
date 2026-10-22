import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingLayout from '../../components/OnboardingLayout';
import api from '../../utils/api';

const Step3: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleContinue = async () => {
    setLoading(true);
    try {
      await api.put('/onboarding/step/3', { viewed: true });
      navigate('/onboarding/step/4');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Failed to save data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <OnboardingLayout
      currentStep={3}
      onContinue={handleContinue}
      continueDisabled={loading}
      showTopLogos={false}
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Main card with rounded corners */}
        <div className="bg-white shadow-2xl overflow-hidden rounded-2xl">
          <div className="flex flex-col lg:flex-row">
            {/* Left side - Main content */}
            <div className="flex-1 p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                You bring the curiosity.
              </h2>
              <h2 className="text-lg sm:text-xl font-bold mb-3 text-orange-500">
                We'll back it up with proof.
              </h2>

              <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                Record is built for people like you – learners, job-seekers, builders. Whatever your goal, 
                we help you earn verified skill badges and turn effort into outcomes.
              </p>

              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2 h-2 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 text-xs leading-snug">
                    <span className="font-semibold">Earn verified skill badges</span> from projects, courses & YouTube
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2 h-2 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 text-xs leading-snug">
                    <span className="font-semibold">Take AI-powered assessments</span> to showcase your skills
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2 h-2 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 text-xs leading-snug">
                    <span className="font-semibold">Share your profile & badges publicly</span>, like a mini portfolio
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2 h-2 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-700 text-xs leading-snug">
                    <span className="font-semibold">Be visible to 200+ recruiters</span> hiring via Record
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Dark navy panel */}
            <div className="w-full lg:w-72 bg-[#2C3E5E] text-white p-5 sm:p-6 flex flex-col justify-center">
              <div>
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <p className="text-xs leading-snug mb-3">
                  Throughout my journey spanning projects, work experience, courses, education, and even my personal life & learning playlist—I've built a strong skill set. And now, I can verify them all in one place with Record!
                </p>
                <div className="text-xs">
                  <p className="font-semibold">— Arunmathavan</p>
                  <p className="text-white/70 mt-0.5">Mobile App Developer at NEC</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom trusted by section with logos */}
          <div className="bg-[#1A1F2E] px-4 py-3">
            <p className="text-center text-xs text-gray-500 mb-2">Trusted & Supported by</p>
            <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-6">
              {/* ZOHO */}
              <div className="flex items-center justify-center h-5">
                <span className="text-gray-400 text-xs font-bold tracking-wider">Z O H O</span>
              </div>
              
              {/* AWS */}
              <div className="flex items-center justify-center h-5">
                <span className="text-gray-400 text-xs font-bold">aws</span>
              </div>
              
              {/* Microsoft */}
              <div className="flex items-center justify-center h-5">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-1.5 h-1.5 bg-red-500"></div>
                  <div className="w-1.5 h-1.5 bg-green-500"></div>
                  <div className="w-1.5 h-1.5 bg-blue-500"></div>
                  <div className="w-1.5 h-1.5 bg-yellow-500"></div>
                </div>
                <span className="ml-1.5 text-gray-400 text-xs font-semibold">Founders Hub</span>
              </div>
              
              {/* Notion */}
              <div className="flex items-center justify-center h-5">
                <span className="text-gray-400 text-xs font-bold">N Notion</span>
              </div>
              
              {/* StartupTN */}
              <div className="flex items-center justify-center h-5">
                <span className="text-gray-400 text-xs font-bold">● StartupTN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default Step3;
