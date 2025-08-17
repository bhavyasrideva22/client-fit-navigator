import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Target, TrendingUp, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background" />
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block p-4 rounded-full bg-primary/10 mb-8 float-animation glow-effect">
              <Brain className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-6xl font-bold mb-6 gradient-text leading-tight">
              Career Assessment Platform
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Discover your ideal career path with our scientifically-validated psychometric assessments. 
              Get personalized insights, recommendations, and learning paths tailored to your unique profile.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 rounded-lg bg-card/50 border border-border/50">
                <div className="p-3 rounded-full bg-primary/10 mx-auto mb-4 w-fit">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Psychometric Analysis</h3>
                <p className="text-muted-foreground text-sm">Deep personality and cognitive assessment</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-card/50 border border-border/50">
                <div className="p-3 rounded-full bg-accent/10 mx-auto mb-4 w-fit">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Aptitude Testing</h3>
                <p className="text-muted-foreground text-sm">Skills and knowledge evaluation</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-card/50 border border-border/50">
                <div className="p-3 rounded-full bg-success/10 mx-auto mb-4 w-fit">
                  <TrendingUp className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Career Guidance</h3>
                <p className="text-muted-foreground text-sm">Personalized recommendations and paths</p>
              </div>
            </div>

            <Button
              onClick={() => navigate('/assessment')}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent-glow text-white px-12 py-6 text-xl font-semibold glow-effect transition-all duration-300 hover:scale-105 group"
            >
              Start Your Assessment
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-6">
              ✓ 20-30 minutes • ✓ Scientifically validated • ✓ Instant results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
