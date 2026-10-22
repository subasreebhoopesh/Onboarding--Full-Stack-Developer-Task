import FormEntry from '../models/FormEntry.js';

export const getOnboarding = async (req, res) => {
  try {
    let formEntry = await FormEntry.findOne({ userId: req.user._id });

    if (!formEntry) {
      // Create new form entry for the user
      formEntry = await FormEntry.create({
        userId: req.user._id,
        currentStep: 1,
      });
    }

    res.json({ formEntry });
  } catch (error) {
    console.error('Get onboarding error:', error);
    res.status(500).json({ message: 'Server error fetching onboarding data' });
  }
};

export const updateStep = async (req, res) => {
  try {
    const { stepNumber } = req.params;
    const stepData = req.body;

    const step = parseInt(stepNumber);
    if (step < 1 || step > 8) {
      return res.status(400).json({ message: 'Invalid step number' });
    }

    let formEntry = await FormEntry.findOne({ userId: req.user._id });

    if (!formEntry) {
      formEntry = await FormEntry.create({
        userId: req.user._id,
        currentStep: step,
      });
    }

    // Update the specific step data
    const stepField = `step${step}Data`;
    formEntry[stepField] = stepData;
    
    // Update current step if moving forward
    if (step > formEntry.currentStep) {
      formEntry.currentStep = step;
    }

    await formEntry.save();

    res.json({
      message: 'Step data saved successfully',
      formEntry,
    });
  } catch (error) {
    console.error('Update step error:', error);
    res.status(500).json({ message: 'Server error updating step data' });
  }
};

export const completeOnboarding = async (req, res) => {
  try {
    const formEntry = await FormEntry.findOne({ userId: req.user._id });

    if (!formEntry) {
      return res.status(404).json({ message: 'Onboarding data not found' });
    }

    formEntry.isCompleted = true;
    formEntry.currentStep = 8;
    await formEntry.save();

    res.json({
      message: 'Onboarding completed successfully',
      formEntry,
    });
  } catch (error) {
    console.error('Complete onboarding error:', error);
    res.status(500).json({ message: 'Server error completing onboarding' });
  }
};
