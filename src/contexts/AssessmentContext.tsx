import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AssessmentState, AssessmentResponse, AssessmentResults } from '@/types/assessment';
import { assessmentQuestions } from '@/data/questions';

type AssessmentAction =
  | { type: 'START_ASSESSMENT' }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREVIOUS_QUESTION' }
  | { type: 'ANSWER_QUESTION'; payload: AssessmentResponse }
  | { type: 'COMPLETE_ASSESSMENT'; payload: AssessmentResults }
  | { type: 'RESET_ASSESSMENT' };

const initialState: AssessmentState = {
  currentSection: 0,
  currentQuestion: 0,
  responses: [],
  isComplete: false,
};

function assessmentReducer(state: AssessmentState, action: AssessmentAction): AssessmentState {
  switch (action.type) {
    case 'START_ASSESSMENT':
      return {
        ...state,
        currentSection: 0,
        currentQuestion: 0,
      };
    
    case 'NEXT_QUESTION':
      if (state.currentQuestion < assessmentQuestions.length - 1) {
        return {
          ...state,
          currentQuestion: state.currentQuestion + 1,
        };
      }
      return state;
    
    case 'PREVIOUS_QUESTION':
      if (state.currentQuestion > 0) {
        return {
          ...state,
          currentQuestion: state.currentQuestion - 1,
        };
      }
      return state;
    
    case 'ANSWER_QUESTION':
      const existingIndex = state.responses.findIndex(
        r => r.questionId === action.payload.questionId
      );
      
      let newResponses;
      if (existingIndex >= 0) {
        newResponses = [...state.responses];
        newResponses[existingIndex] = action.payload;
      } else {
        newResponses = [...state.responses, action.payload];
      }
      
      return {
        ...state,
        responses: newResponses,
      };
    
    case 'COMPLETE_ASSESSMENT':
      return {
        ...state,
        isComplete: true,
        results: action.payload,
      };
    
    case 'RESET_ASSESSMENT':
      return initialState;
    
    default:
      return state;
  }
}

interface AssessmentContextType {
  state: AssessmentState;
  startAssessment: () => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  answerQuestion: (response: AssessmentResponse) => void;
  completeAssessment: (results: AssessmentResults) => void;
  resetAssessment: () => void;
  getCurrentQuestion: () => typeof assessmentQuestions[0] | null;
  canGoNext: () => boolean;
  canGoPrevious: () => boolean;
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(assessmentReducer, initialState);

  const startAssessment = () => {
    dispatch({ type: 'START_ASSESSMENT' });
  };

  const nextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };

  const previousQuestion = () => {
    dispatch({ type: 'PREVIOUS_QUESTION' });
  };

  const answerQuestion = (response: AssessmentResponse) => {
    dispatch({ type: 'ANSWER_QUESTION', payload: response });
  };

  const completeAssessment = (results: AssessmentResults) => {
    dispatch({ type: 'COMPLETE_ASSESSMENT', payload: results });
  };

  const resetAssessment = () => {
    dispatch({ type: 'RESET_ASSESSMENT' });
  };

  const getCurrentQuestion = () => {
    if (state.currentQuestion < assessmentQuestions.length) {
      return assessmentQuestions[state.currentQuestion];
    }
    return null;
  };

  const canGoNext = () => {
    return state.currentQuestion < assessmentQuestions.length - 1;
  };

  const canGoPrevious = () => {
    return state.currentQuestion > 0;
  };

  const value: AssessmentContextType = {
    state,
    startAssessment,
    nextQuestion,
    previousQuestion,
    answerQuestion,
    completeAssessment,
    resetAssessment,
    getCurrentQuestion,
    canGoNext,
    canGoPrevious,
  };

  return (
    <AssessmentContext.Provider value={value}>
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment() {
  const context = useContext(AssessmentContext);
  if (context === undefined) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
}