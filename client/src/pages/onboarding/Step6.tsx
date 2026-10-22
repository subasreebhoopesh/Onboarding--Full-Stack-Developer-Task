import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingLayout from '../../components/OnboardingLayout';
import api from '../../utils/api';

const Step6: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<string>('');
  const [lookingForJob, setLookingForJob] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get('/onboarding');
      if (response.data.formEntry.step6Data) {
        setProfilePicture(response.data.formEntry.step6Data.profilePicture || '');
        setLookingForJob(response.data.formEntry.step6Data.lookingForJob || '');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }

      // Convert image to base64 for storing in database
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfilePicture(base64String);
      };
      reader.onerror = () => {
        alert('Error reading file. Please try again.');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContinue = async () => {
    if (!lookingForJob) {
      alert('Please select your job search status');
      return;
    }

    setLoading(true);
    try {
      await api.put('/onboarding/step/6', {
        profilePicture,
        lookingForJob,
      });
      
      // Complete the onboarding
      await api.post('/onboarding/complete');
      
      navigate('/dashboard');
    } catch (error: any) {
      console.error('Error saving data:', error);
      const errorMessage = error.response?.data?.message || 'Failed to save data. Please try with a smaller image.';
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <OnboardingLayout
      currentStep={6}
      totalSteps={6}
      onContinue={handleContinue}
      continueDisabled={loading}
    >
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Profile Picture - Top Right Corner */}
        <div className="flex justify-end mb-4">
          <div>
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
              {profilePicture ? (
                <img 
                  src={profilePicture} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <svg
                  className="w-16 h-16 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <p className="text-gray-500 text-sm mt-2 text-center">Your Profile Preview</p>
          </div>
        </div>
        
        {/* Upload Profile Picture Heading */}
        <h2 className="text-gray-700 text-lg font-medium mt-8">
          Upload Profile Picture
        </h2>

        {/* Upload Photo Button */}
        <label className="cursor-pointer inline-flex items-center space-x-2 px-6 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
          </svg>
          <span className="text-sm font-medium">Upload Photo</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {/* Job Status Question */}
        <div className="mt-12">
          <p className="text-gray-700 text-base font-medium mb-6">
            Are you actively looking for a job?
          </p>

          {/* Radio Options */}
          <div className="space-y-4 max-w-md mx-auto">
            <label className="flex items-center justify-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="jobStatus"
                value="yes-actively"
                checked={lookingForJob === 'yes-actively'}
                onChange={(e) => setLookingForJob(e.target.value)}
                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-gray-700 text-base">
                Yes, actively seeking
              </span>
            </label>

            <label className="flex items-center justify-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="jobStatus"
                value="no-not-looking"
                checked={lookingForJob === 'no-not-looking'}
                onChange={(e) => setLookingForJob(e.target.value)}
                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-gray-700 text-base">
                No, I'm not looking
              </span>
            </label>
          </div>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default Step6;
