import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Brain, Target, Users, TrendingUp } from 'lucide-react';

interface AssessmentLandingProps {
  onStartAssessment: () => void;
}

const AssessmentLanding = ({ onStartAssessment }: AssessmentLandingProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background" />
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-6 float-animation">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-5xl font-bold mb-6 gradient-text">
              Should I Learn Client Relationship Management?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover if CRM is the right career path for you with our comprehensive psychometric and aptitude assessment
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-accent">
                <CheckCircle className="h-5 w-5" />
                <span>20-30 minutes</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <CheckCircle className="h-5 w-5" />
                <span>Scientifically validated</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <CheckCircle className="h-5 w-5" />
                <span>Personalized results</span>
              </div>
            </div>
            <Button 
              onClick={onStartAssessment}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent-glow text-white px-8 py-4 text-lg font-semibold glow-effect transition-all duration-300 hover:scale-105"
            >
              Start Assessment
            </Button>
          </div>
        </div>
      </div>

      {/* Assessment Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">What You'll Discover</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Psychological Fit</h3>
                  <p className="text-muted-foreground">Assess personality traits, motivation, and cognitive style alignment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Target className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Technical Readiness</h3>
                  <p className="text-muted-foreground">Evaluate aptitude and prerequisite knowledge for CRM roles</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-success/10">
                  <TrendingUp className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Career Guidance</h3>
                  <p className="text-muted-foreground">Get personalized recommendations and learning paths</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">What is Client Relationship Management?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Client Relationship Management involves maintaining and enhancing relationships with clients through 
              strategic communication, problem-solving, and personalized service. CRM professionals use tools like 
              Salesforce, HubSpot, and Zoho to manage client interactions and drive business growth.
            </p>
            <div className="space-y-3">
              <h3 className="font-semibold">Typical Career Paths:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Client Relationship Manager</li>
                <li>• Customer Success Manager</li>
                <li>• Key Account Manager</li>
                <li>• Business Development Executive</li>
                <li>• CRM Consultant</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Assessment Sections Preview */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Assessment Sections</h2>
            <p className="text-muted-foreground">Our comprehensive evaluation covers multiple dimensions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-gradient p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="p-3 rounded-full bg-primary/10 mx-auto mb-4 w-fit">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Psychometric</h3>
              <p className="text-sm text-muted-foreground">Interest, personality, cognitive style, and motivation assessment</p>
            </Card>
            <Card className="card-gradient p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="p-3 rounded-full bg-accent/10 mx-auto mb-4 w-fit">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Aptitude</h3>
              <p className="text-sm text-muted-foreground">Logical reasoning, numerical skills, and communication abilities</p>
            </Card>
            <Card className="card-gradient p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="p-3 rounded-full bg-success/10 mx-auto mb-4 w-fit">
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold mb-2">Knowledge</h3>
              <p className="text-sm text-muted-foreground">CRM concepts, tools, and industry best practices</p>
            </Card>
            <Card className="card-gradient p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="p-3 rounded-full bg-warning/10 mx-auto mb-4 w-fit">
                <TrendingUp className="h-6 w-6 text-warning" />
              </div>
              <h3 className="font-semibold mb-2">WISCAR</h3>
              <p className="text-sm text-muted-foreground">Will, Interest, Skill, Cognitive readiness, Ability to learn, Real-world alignment</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentLanding;