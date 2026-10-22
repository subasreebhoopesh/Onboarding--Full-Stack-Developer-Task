import mongoose from 'mongoose';

const formEntrySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    currentStep: {
      type: Number,
      default: 1,
      min: 1,
      max: 8,
    },
    step1Data: {
      name: String,
      username: String,
      appUsername: String,
      description: String,
      location: String,
      howDidYouKnow: String,
    },
    step2Data: {
      goals: [String],
    },
    step3Data: {
      viewed: {
        type: Boolean,
        default: false,
      },
    },
    step4Data: {
      interests: [String],
    },
    step5Data: {
      interests: [String],
    },
    step6Data: {
      profilePicture: String,
      lookingForJob: String,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const FormEntry = mongoose.model('FormEntry', formEntrySchema);

export default FormEntry;
