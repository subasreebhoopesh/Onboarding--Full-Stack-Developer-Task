export interface User {
  _id: string;
  name?: string;
  email: string;
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name?: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

export interface FormData {
  step1?: {
    name: string;
    username: string;
    appUsername: string;
    description: string;
    location: string;
    howDidYouKnow: string;
  };
  step2?: {
    goals: string[];
  };
  step3?: {
    viewed: boolean;
  };
  step4?: {
    interests: string[];
  };
  step5?: {
    interests: string[];
  };
  step6?: {
    profilePicture?: string;
    lookingForJob: string;
  };
}

export interface FormEntry {
  _id?: string;
  userId: string;
  currentStep: number;
  step1Data?: FormData['step1'];
  step2Data?: FormData['step2'];
  step3Data?: FormData['step3'];
  step4Data?: FormData['step4'];
  step5Data?: FormData['step5'];
  step6Data?: FormData['step6'];
  isCompleted: boolean;
  createdAt?: string;
  updatedAt?: string;
}
