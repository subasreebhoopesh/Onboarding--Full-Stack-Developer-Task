import express from 'express';
import { getOnboarding, updateStep, completeOnboarding } from '../controllers/onboardingController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.use(protect); // All onboarding routes are protected

router.get('/', getOnboarding);
router.put('/step/:stepNumber', updateStep);
router.post('/complete', completeOnboarding);

export default router;
