export interface AssessmentResponse {
  questionId: string;
  value: number | string;
  section: AssessmentSection;
}

export type AssessmentSection = 
  | 'interest' 
  | 'personality' 
  | 'cognitive' 
  | 'motivation'
  | 'aptitude'
  | 'prerequisite'
  | 'domain'
  | 'wiscar';

export interface Question {
  id: string;
  section: AssessmentSection;
  text: string;
  type: 'likert' | 'multiple-choice' | 'scenario';
  options?: string[];
  scale?: { min: number; max: number; labels: string[] };
}

export interface AssessmentResults {
  psychometric: {
    interest: number;
    personality_fit: number;
    motivation: number;
    cognitive_style: number;
  };
  technical: {
    aptitude: number;
    prerequisite_knowledge: number;
    domain_knowledge: number;
  };
  wiscar: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability_to_learn: number;
    real_world: number;
  };
  recommendation: 'Yes' | 'Maybe' | 'No';
  confidence_score: number;
  next_steps: string[];
  career_paths: string[];
}

export interface AssessmentState {
  currentSection: number;
  currentQuestion: number;
  responses: AssessmentResponse[];
  isComplete: boolean;
  results?: AssessmentResults;
}