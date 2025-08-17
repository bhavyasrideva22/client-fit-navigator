import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Question, AssessmentResponse } from '@/types/assessment';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (response: AssessmentResponse) => void;
  onNext: () => void;
  onPrevious: () => void;
  currentResponse?: AssessmentResponse;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

const QuestionCard = ({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
  onNext,
  onPrevious,
  currentResponse,
  canGoNext,
  canGoPrevious
}: QuestionCardProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    currentResponse?.value?.toString() || ''
  );

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    onAnswer({
      questionId: question.id,
      value: question.type === 'likert' ? parseInt(value) : value,
      section: question.section
    });
  };

  const renderLikertScale = () => {
    if (!question.scale) return null;
    
    return (
      <div className="space-y-4">
        <RadioGroup value={selectedValue} onValueChange={handleValueChange}>
          <div className="grid grid-cols-1 gap-3">
            {question.scale.labels.map((label, index) => {
              const value = (index + question.scale!.min).toString();
              return (
                <div key={value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value={value} id={value} />
                  <Label htmlFor={value} className="flex-1 cursor-pointer text-sm">
                    {label}
                  </Label>
                </div>
              );
            })}
          </div>
        </RadioGroup>
      </div>
    );
  };

  const renderMultipleChoice = () => {
    if (!question.options) return null;

    return (
      <div className="space-y-4">
        <RadioGroup value={selectedValue} onValueChange={handleValueChange}>
          <div className="grid grid-cols-1 gap-3">
            {question.options.map((option, index) => {
              const value = index.toString();
              return (
                <div key={value} className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value={value} id={value} />
                  <Label htmlFor={value} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              );
            })}
          </div>
        </RadioGroup>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="card-gradient p-8 fade-in-up">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Question {currentIndex + 1} of {totalQuestions}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(((currentIndex + 1) / totalQuestions) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Content */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">
            {question.text}
          </h2>
          
          {question.type === 'likert' && renderLikertScale()}
          {(question.type === 'multiple-choice' || question.type === 'scenario') && renderMultipleChoice()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={!canGoPrevious}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          
          <div className="flex-1 text-center">
            {selectedValue && (
              <p className="text-sm text-success">
                ✓ Answer recorded
              </p>
            )}
          </div>
          
          <Button
            onClick={onNext}
            disabled={!canGoNext || !selectedValue}
            className="flex items-center gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent-glow"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default QuestionCard;