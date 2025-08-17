import { useState, useEffect } from 'react';
import { useAssessment } from '@/contexts/AssessmentContext';
import AssessmentLanding from '@/components/assessment/AssessmentLanding';
import QuestionCard from '@/components/assessment/QuestionCard';
import AssessmentResults from '@/components/assessment/AssessmentResults';
import { calculateAssessmentResults } from '@/utils/assessmentScoring';
import { assessmentQuestions } from '@/data/questions';

const Assessment = () => {
  const {
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
  } = useAssessment();

  const [assessmentStarted, setAssessmentStarted] = useState(false);

  useEffect(() => {
    // Check if we've reached the end of questions
    if (state.currentQuestion >= assessmentQuestions.length && !state.isComplete && assessmentStarted) {
      // Calculate and set results
      const results = calculateAssessmentResults(state.responses);
      completeAssessment(results);
    }
  }, [state.currentQuestion, state.responses, state.isComplete, assessmentStarted, completeAssessment]);

  const handleStartAssessment = () => {
    setAssessmentStarted(true);
    startAssessment();
  };

  const handleNext = () => {
    if (state.currentQuestion >= assessmentQuestions.length - 1) {
      // This is the last question, results will be calculated in useEffect
      return;
    }
    nextQuestion();
  };

  const handleRestart = () => {
    setAssessmentStarted(false);
    resetAssessment();
  };

  const getCurrentResponse = () => {
    const currentQ = getCurrentQuestion();
    if (!currentQ) return undefined;
    return state.responses.find(r => r.questionId === currentQ.id);
  };

  // Show results if assessment is complete
  if (state.isComplete && state.results) {
    return (
      <AssessmentResults 
        results={state.results} 
        onRestart={handleRestart}
      />
    );
  }

  // Show question if assessment has started
  if (assessmentStarted) {
    const currentQ = getCurrentQuestion();
    if (!currentQ) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Processing your results...</h2>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <QuestionCard
            question={currentQ}
            currentIndex={state.currentQuestion}
            totalQuestions={assessmentQuestions.length}
            onAnswer={answerQuestion}
            onNext={handleNext}
            onPrevious={previousQuestion}
            currentResponse={getCurrentResponse()}
            canGoNext={canGoNext()}
            canGoPrevious={canGoPrevious()}
          />
        </div>
      </div>
    );
  }

  // Show landing page by default
  return <AssessmentLanding onStartAssessment={handleStartAssessment} />;
};

export default Assessment;