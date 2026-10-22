import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingLayout from '../../components/OnboardingLayout';
import api from '../../utils/api';

const Step4: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const skillCategories = {
    Business: [
      'Business Development',
      'Microsoft Excel/VBA',
      'Microsoft PowerPoint',
      'Microsoft Office',
      'Go (Golang)',
      'Certificate in Business Analysis',
      'Microsoft Azure',
      'Management Skills',
      'Law',
      'Blog Topaz',
      'Quality Checking',
      'Business Model Canvas',
      'Technical Writing',
    ],
    Design: [
      'Cinematic Editing',
      'UX',
      'Adobe Premiere Pro',
      'User Experience (UX) Design',
      'Fashion',
      'Sketch',
      'Game Design',
      'Canva',
      'Character Design',
      'Painting',
      'Building Information Modelling (BIM)',
      'Plastic And Design',
      'Textiles',
      'Sustainable',
      'Virtual Reality',
    ],
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get('/onboarding');
      if (response.data.formEntry.step4Data?.interests) {
        setSelectedSkills(response.data.formEntry.step4Data.interests);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleContinue = async () => {
    if (selectedSkills.length === 0) {
      alert('Please select at least one interest');
      return;
    }

    setLoading(true);
    try {
      await api.put('/onboarding/step/4', { interests: selectedSkills });
      navigate('/onboarding/step/5');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Failed to save data');
    } finally {
      setLoading(false);
    }
  };

  const filteredCategories = Object.entries(skillCategories).reduce(
    (acc, [category, skills]) => {
      const filtered = skills.filter((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filtered.length > 0) {
        acc[category] = filtered;
      }
      return acc;
    },
    {} as Record<string, string[]>
  );

  return (
    <OnboardingLayout
      currentStep={4}
      onContinue={handleContinue}
      continueDisabled={loading}
    >
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm max-w-4xl mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
          What's your Interest?
        </h1>
        <p className="text-gray-600 text-sm mb-4">
          Let us know what skills or topics you're interested in
        </p>

        <div className="mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
            placeholder="Search skills or being, type what you want to add..."
          />
        </div>

        <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
          {Object.entries(filteredCategories).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-base font-semibold text-gray-800 mb-2">{category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`px-3 py-1.5 rounded-full text-xs transition-colors ${
                      selectedSkills.includes(skill)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {selectedSkills.length > 0 && (
          <div className="mt-4 pt-4 border-t">
            <p className="text-xs text-gray-600">
              {selectedSkills.length} skill{selectedSkills.length !== 1 ? 's' : ''} selected
            </p>
          </div>
        )}
      </div>
    </OnboardingLayout>
  );
};

export default Step4;
