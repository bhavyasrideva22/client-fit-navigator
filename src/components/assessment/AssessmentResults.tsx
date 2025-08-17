import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { AssessmentResults as Results } from '@/types/assessment';
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Brain, 
  Target, 
  TrendingUp,
  BookOpen,
  Users,
  Award,
  RefreshCw
} from 'lucide-react';

interface AssessmentResultsProps {
  results: Results;
  onRestart: () => void;
}

const AssessmentResults = ({ results, onRestart }: AssessmentResultsProps) => {
  const getRecommendationIcon = () => {
    switch (results.recommendation) {
      case 'Yes':
        return <CheckCircle className="h-8 w-8 text-success" />;
      case 'Maybe':
        return <AlertTriangle className="h-8 w-8 text-warning" />;
      case 'No':
        return <XCircle className="h-8 w-8 text-destructive" />;
    }
  };

  const getRecommendationColor = () => {
    switch (results.recommendation) {
      case 'Yes':
        return 'text-success';
      case 'Maybe':
        return 'text-warning';
      case 'No':
        return 'text-destructive';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-destructive';
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return 'bg-success';
    if (score >= 60) return 'bg-warning';
    return 'bg-destructive';
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <div className="flex justify-center mb-6">
            {getRecommendationIcon()}
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Your Assessment Results
          </h1>
          <div className={`text-2xl font-semibold mb-2 ${getRecommendationColor()}`}>
            {results.recommendation === 'Yes' && 'You should learn Client Relationship Management!'}
            {results.recommendation === 'Maybe' && 'CRM might be a good fit for you'}
            {results.recommendation === 'No' && 'Consider alternative career paths'}
          </div>
          <p className="text-muted-foreground">
            Confidence Score: <span className={`font-bold ${getScoreColor(results.confidence_score)}`}>
              {results.confidence_score}%
            </span>
          </p>
        </div>

        {/* Main Results Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Psychometric Results */}
          <Card className="card-gradient p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Psychological Fit</h2>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Interest</span>
                  <span className={`text-sm font-bold ${getScoreColor(results.psychometric.interest)}`}>
                    {results.psychometric.interest}%
                  </span>
                </div>
                <Progress value={results.psychometric.interest} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Personality Fit</span>
                  <span className={`text-sm font-bold ${getScoreColor(results.psychometric.personality_fit)}`}>
                    {results.psychometric.personality_fit}%
                  </span>
                </div>
                <Progress value={results.psychometric.personality_fit} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Motivation</span>
                  <span className={`text-sm font-bold ${getScoreColor(results.psychometric.motivation)}`}>
                    {results.psychometric.motivation}%
                  </span>
                </div>
                <Progress value={results.psychometric.motivation} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Cognitive Style</span>
                  <span className={`text-sm font-bold ${getScoreColor(results.psychometric.cognitive_style)}`}>
                    {results.psychometric.cognitive_style}%
                  </span>
                </div>
                <Progress value={results.psychometric.cognitive_style} className="h-2" />
              </div>
            </div>
          </Card>

          {/* Technical Results */}
          <Card className="card-gradient p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl font-semibold">Technical Readiness</h2>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">General Aptitude</span>
                  <span className={`text-sm font-bold ${getScoreColor(results.technical.aptitude)}`}>
                    {results.technical.aptitude}%
                  </span>
                </div>
                <Progress value={results.technical.aptitude} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Prerequisite Knowledge</span>
                  <span className={`text-sm font-bold ${getScoreColor(results.technical.prerequisite_knowledge)}`}>
                    {results.technical.prerequisite_knowledge}%
                  </span>
                </div>
                <Progress value={results.technical.prerequisite_knowledge} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Domain Knowledge</span>
                  <span className={`text-sm font-bold ${getScoreColor(results.technical.domain_knowledge)}`}>
                    {results.technical.domain_knowledge}%
                  </span>
                </div>
                <Progress value={results.technical.domain_knowledge} className="h-2" />
              </div>
            </div>
          </Card>
        </div>

        {/* WISCAR Framework */}
        <Card className="card-gradient p-6 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-success/10">
              <Award className="h-6 w-6 text-success" />
            </div>
            <h2 className="text-2xl font-semibold">WISCAR Framework Analysis</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(results.wiscar).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className={`text-2xl font-bold mb-1 ${getScoreColor(value)}`}>
                  {value}%
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {key.replace('_', ' ')}
                </div>
                <Progress value={value} className="h-1 mt-2" />
              </div>
            ))}
          </div>
        </Card>

        {/* Recommendations and Next Steps */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Next Steps */}
          <Card className="card-gradient p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Next Steps</h2>
            </div>
            <ul className="space-y-3">
              {results.next_steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-primary/20 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">{step}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Career Paths */}
          <Card className="card-gradient p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl font-semibold">Recommended Career Paths</h2>
            </div>
            <ul className="space-y-3">
              {results.career_paths.map((path, index) => (
                <li key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <BookOpen className="h-5 w-5 text-accent" />
                  <span className="font-medium">{path}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <Button
            onClick={onRestart}
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-5 w-5" />
            Take Assessment Again
          </Button>
          <p className="text-sm text-muted-foreground">
            Want to explore other career paths? Take assessments for different roles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResults;