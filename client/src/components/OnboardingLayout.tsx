import React from 'react';
import { useNavigate } from 'react-router-dom';

interface OnboardingLayoutProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps?: number;
  onBack?: () => void;
  onContinue?: () => void;
  continueDisabled?: boolean;
  showBack?: boolean;
  showTopLogos?: boolean;
}

const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({
  children,
  currentStep,
  totalSteps = 8,
  onBack,
  onContinue,
  continueDisabled = false,
  showBack = true,
  showTopLogos = true,
}) => {
  const progress = (currentStep / totalSteps) * 100;
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (currentStep > 1) {
      navigate(`/onboarding/step/${currentStep - 1}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Section */}
      <div className="bg-white">
        {/* Progress Bar with Back button on left, orange box on right */}
        <div className="px-6 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              {/* Left side: Back button */}
              {showBack && currentStep > 1 && (
                <button
                  onClick={handleBack}
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors flex-shrink-0"
                >
                  <span className="text-lg">←</span>
                  <span className="text-sm font-medium">Back</span>
                </button>
              )}
              
              {/* Progress bar - extends from left to orange box */}
              <div className="flex-1">
                <div className="h-1.5 bg-gray-200 overflow-hidden">
                  <div
                    className="h-full bg-gray-800 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
              
              {/* Right side: Orange box */}
              <div className="w-14 h-10 bg-[#FF6B2C] flex-shrink-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-8">
        <div className="w-full max-w-2xl">
          {children}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-[#1a1a2e] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-end gap-3">
            <span className="text-sm text-gray-400">or press Enter</span>
            <button
              onClick={onContinue}
              disabled={continueDisabled}
              className="px-8 py-2.5 bg-gray-700 hover:bg-gray-600 rounded font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingLayout;
