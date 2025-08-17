import { AssessmentResponse, AssessmentResults, AssessmentSection } from '@/types/assessment';

// Answer keys for multiple choice questions
const answerKeys: Record<string, number> = {
  'aptitude_1': 1, // 30%
  'aptitude_2': 1, // $150K
  'aptitude_3': 0, // Acknowledge, apologize, propose solutions
  'prerequisite_1': 1, // Client Relationship Management
  'prerequisite_2': 1, // Awareness
  'prerequisite_3': 1, // Provide personalized service
  'domain_1': 1, // More detractors than promoters
  'domain_2': 1, // Total revenue expected from customer
  'domain_3': 2, // When client shows signs of success
  'wiscar_real_world_1': 0, // Schedule meeting to understand concerns
};

export function calculateAssessmentResults(responses: AssessmentResponse[]): AssessmentResults {
  // Group responses by section
  const responsesBySection = responses.reduce((acc, response) => {
    if (!acc[response.section]) {
      acc[response.section] = [];
    }
    acc[response.section].push(response);
    return acc;
  }, {} as Record<AssessmentSection, AssessmentResponse[]>);

  // Calculate scores for each section
  const psychometric = {
    interest: calculateLikertScore(responsesBySection.interest || []),
    personality_fit: calculateLikertScore(responsesBySection.personality || []),
    motivation: calculateLikertScore(responsesBySection.motivation || []),
    cognitive_style: calculateLikertScore(responsesBySection.cognitive || []),
  };

  const technical = {
    aptitude: calculateMultipleChoiceScore(responsesBySection.aptitude || []),
    prerequisite_knowledge: calculateMultipleChoiceScore(responsesBySection.prerequisite || []),
    domain_knowledge: calculateMultipleChoiceScore(responsesBySection.domain || []),
  };

  // Calculate WISCAR scores
  const wiscarResponses = responsesBySection.wiscar || [];
  const wiscar = {
    will: calculateWiscarSubsection(wiscarResponses, ['wiscar_will_1', 'wiscar_will_2']),
    interest: psychometric.interest, // Reuse interest score
    skill: calculateWiscarSubsection(wiscarResponses, ['wiscar_skill_1']),
    cognitive: psychometric.cognitive_style, // Reuse cognitive style
    ability_to_learn: calculateWiscarSubsection(wiscarResponses, ['wiscar_learning_1', 'wiscar_learning_2']),
    real_world: calculateWiscarSubsection(wiscarResponses, ['wiscar_real_world_1']),
  };

  // Calculate overall scores
  const psychometricAvg = Object.values(psychometric).reduce((a, b) => a + b, 0) / 4;
  const technicalAvg = Object.values(technical).reduce((a, b) => a + b, 0) / 3;
  const wiscarAvg = Object.values(wiscar).reduce((a, b) => a + b, 0) / 6;

  // Calculate confidence score (weighted average)
  const confidence_score = Math.round(
    (psychometricAvg * 0.4 + technicalAvg * 0.3 + wiscarAvg * 0.3)
  );

  // Determine recommendation
  let recommendation: 'Yes' | 'Maybe' | 'No';
  if (confidence_score >= 75 && psychometricAvg >= 70 && technicalAvg >= 60) {
    recommendation = 'Yes';
  } else if (confidence_score >= 60 && (psychometricAvg >= 60 || technicalAvg >= 60)) {
    recommendation = 'Maybe';
  } else {
    recommendation = 'No';
  }

  // Generate next steps based on scores
  const next_steps = generateNextSteps(psychometric, technical, recommendation);
  const career_paths = generateCareerPaths(recommendation, psychometric, technical);

  return {
    psychometric,
    technical,
    wiscar,
    recommendation,
    confidence_score,
    next_steps,
    career_paths,
  };
}

function calculateLikertScore(responses: AssessmentResponse[]): number {
  if (responses.length === 0) return 0;
  
  const total = responses.reduce((sum, response) => {
    return sum + (typeof response.value === 'number' ? response.value : 0);
  }, 0);
  
  // Convert to percentage (assuming 5-point Likert scale)
  const maxPossible = responses.length * 5;
  return Math.round((total / maxPossible) * 100);
}

function calculateMultipleChoiceScore(responses: AssessmentResponse[]): number {
  if (responses.length === 0) return 0;
  
  const correctAnswers = responses.filter(response => {
    const correctAnswer = answerKeys[response.questionId];
    return correctAnswer !== undefined && parseInt(response.value.toString()) === correctAnswer;
  }).length;
  
  return Math.round((correctAnswers / responses.length) * 100);
}

function calculateWiscarSubsection(responses: AssessmentResponse[], questionIds: string[]): number {
  const relevantResponses = responses.filter(r => questionIds.includes(r.questionId));
  
  if (relevantResponses.length === 0) return 0;
  
  // Mix of Likert and multiple choice
  let score = 0;
  relevantResponses.forEach(response => {
    if (answerKeys[response.questionId] !== undefined) {
      // Multiple choice question
      const correctAnswer = answerKeys[response.questionId];
      score += parseInt(response.value.toString()) === correctAnswer ? 5 : 1;
    } else {
      // Likert scale question
      score += typeof response.value === 'number' ? response.value : 0;
    }
  });
  
  const maxPossible = relevantResponses.length * 5;
  return Math.round((score / maxPossible) * 100);
}

function generateNextSteps(
  psychometric: any,
  technical: any,
  recommendation: 'Yes' | 'Maybe' | 'No'
): string[] {
  const steps: string[] = [];

  if (recommendation === 'Yes') {
    steps.push('Enroll in a comprehensive CRM certification course');
    steps.push('Practice with CRM tools like Salesforce or HubSpot');
    steps.push('Develop case studies showcasing client relationship scenarios');
    if (technical.domain_knowledge < 70) {
      steps.push('Study CRM metrics and KPIs (NPS, CLV, retention rates)');
    }
  } else if (recommendation === 'Maybe') {
    if (psychometric.interest < 70) {
      steps.push('Explore client-facing roles through internships or shadowing');
    }
    if (technical.prerequisite_knowledge < 70) {
      steps.push('Take introductory courses on customer relationship principles');
    }
    steps.push('Consider starting with customer support or inside sales roles');
    steps.push('Develop communication and interpersonal skills');
  } else {
    steps.push('Consider alternative career paths better aligned with your profile');
    steps.push('Explore roles in operations, analysis, or technical support');
    steps.push('Develop core business skills that transfer across roles');
  }

  return steps;
}

function generateCareerPaths(
  recommendation: 'Yes' | 'Maybe' | 'No',
  psychometric: any,
  technical: any
): string[] {
  if (recommendation === 'No') {
    return [
      'Business Analyst',
      'Operations Coordinator', 
      'Technical Support Specialist',
      'Data Analyst'
    ];
  }

  const paths: string[] = [];
  
  if (psychometric.personality_fit >= 75) {
    paths.push('Client Relationship Manager');
    paths.push('Customer Success Manager');
  }
  
  if (technical.aptitude >= 70) {
    paths.push('CRM Analyst');
    paths.push('Salesforce Administrator');
  }
  
  paths.push('Key Account Manager');
  paths.push('Business Development Executive');
  
  if (psychometric.motivation >= 75) {
    paths.push('Enterprise Sales Manager');
  }

  return paths.slice(0, 5); // Limit to top 5 recommendations
}