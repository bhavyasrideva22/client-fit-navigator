import { Question } from '@/types/assessment';

export const assessmentQuestions: Question[] = [
  // Interest Scale Questions
  {
    id: 'interest_1',
    section: 'interest',
    text: 'I enjoy building long-term professional relationships with clients.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'interest_2',
    section: 'interest',
    text: 'I find client interaction energizing rather than draining.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'interest_3',
    section: 'interest',
    text: 'I genuinely care about helping clients achieve their business goals.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'interest_4',
    section: 'interest',
    text: 'I enjoy problem-solving and finding creative solutions for clients.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },

  // Personality Compatibility Questions
  {
    id: 'personality_1',
    section: 'personality',
    text: 'I am comfortable initiating conversations with new people.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'personality_2',
    section: 'personality',
    text: 'I remain calm and composed during challenging conversations.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'personality_3',
    section: 'personality',
    text: 'I follow through consistently on commitments and promises.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'personality_4',
    section: 'personality',
    text: 'I can easily understand and relate to others\' perspectives.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },

  // Cognitive Style Questions
  {
    id: 'cognitive_1',
    section: 'cognitive',
    text: 'I prefer structured environments with clear processes and procedures.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'cognitive_2',
    section: 'cognitive',
    text: 'I enjoy analyzing data to make informed decisions.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'cognitive_3',
    section: 'cognitive',
    text: 'I can quickly adapt when priorities or requirements change.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },

  // Motivation Questions
  {
    id: 'motivation_1',
    section: 'motivation',
    text: 'I am motivated by helping others succeed in their business objectives.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'motivation_2',
    section: 'motivation',
    text: 'Career growth and advancement opportunities are important to me.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'motivation_3',
    section: 'motivation',
    text: 'I am driven by achieving measurable results and targets.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },

  // Aptitude Questions
  {
    id: 'aptitude_1',
    section: 'aptitude',
    text: 'A client\'s quarterly revenue increased from $200K to $260K. What is the percentage increase?',
    type: 'multiple-choice',
    options: ['25%', '30%', '35%', '40%']
  },
  {
    id: 'aptitude_2',
    section: 'aptitude',
    text: 'If Client A generates 3x more revenue than Client B, and Client B generates $50K monthly, what does Client A generate?',
    type: 'multiple-choice',
    options: ['$100K', '$150K', '$200K', '$250K']
  },
  {
    id: 'aptitude_3',
    section: 'aptitude',
    text: 'Which communication approach is most appropriate for addressing a client complaint?',
    type: 'multiple-choice',
    options: [
      'Acknowledge the issue, apologize, and propose solutions',
      'Defend your company\'s position firmly',
      'Redirect the complaint to another department',
      'Offer a discount immediately'
    ]
  },

  // Prerequisite Knowledge Questions
  {
    id: 'prerequisite_1',
    section: 'prerequisite',
    text: 'What does CRM stand for?',
    type: 'multiple-choice',
    options: [
      'Customer Revenue Management',
      'Client Relationship Management',
      'Customer Retention Model',
      'Client Revenue Metrics'
    ]
  },
  {
    id: 'prerequisite_2',
    section: 'prerequisite',
    text: 'Which stage comes first in a typical customer lifecycle?',
    type: 'multiple-choice',
    options: ['Retention', 'Awareness', 'Advocacy', 'Purchase']
  },
  {
    id: 'prerequisite_3',
    section: 'prerequisite',
    text: 'What is the primary purpose of client segmentation?',
    type: 'multiple-choice',
    options: [
      'To increase prices for premium clients',
      'To provide personalized service based on client needs',
      'To reduce the number of clients',
      'To standardize all client interactions'
    ]
  },

  // Domain Knowledge Questions
  {
    id: 'domain_1',
    section: 'domain',
    text: 'A client with a Net Promoter Score (NPS) of -10 indicates:',
    type: 'multiple-choice',
    options: [
      'Highly satisfied customers',
      'More detractors than promoters',
      'Perfect customer satisfaction',
      'Average customer satisfaction'
    ]
  },
  {
    id: 'domain_2',
    section: 'domain',
    text: 'What is Customer Lifetime Value (CLV)?',
    type: 'multiple-choice',
    options: [
      'The cost to acquire a customer',
      'The total revenue expected from a customer over their relationship',
      'The number of years a customer stays',
      'The average purchase amount'
    ]
  },
  {
    id: 'domain_3',
    section: 'domain',
    text: 'When should you identify upselling opportunities?',
    type: 'multiple-choice',
    options: [
      'Only during contract renewals',
      'When the client is experiencing problems',
      'When the client shows signs of success with current services',
      'Never, it damages relationships'
    ]
  },

  // WISCAR Framework Questions
  {
    id: 'wiscar_will_1',
    section: 'wiscar',
    text: 'I am willing to persist through challenging client relationships to achieve long-term success.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'wiscar_will_2',
    section: 'wiscar',
    text: 'I have a consistent track record of completing long-term projects or commitments.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'wiscar_skill_1',
    section: 'wiscar',
    text: 'I can effectively communicate complex information in simple terms.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'wiscar_learning_1',
    section: 'wiscar',
    text: 'I actively seek feedback and use it to improve my performance.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'wiscar_learning_2',
    section: 'wiscar',
    text: 'I enjoy learning new tools and technologies to improve my work.',
    type: 'likert',
    scale: { min: 1, max: 5, labels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
  },
  {
    id: 'wiscar_real_world_1',
    section: 'wiscar',
    text: 'How would you handle a situation where a key client is considering switching to a competitor?',
    type: 'scenario',
    options: [
      'Schedule an immediate meeting to understand their concerns and address them',
      'Offer a significant discount to retain them',
      'Accept their decision and focus on other clients',
      'Escalate to senior management immediately'
    ]
  }
];

export const sectionInfo = {
  interest: {
    title: 'Interest Assessment',
    description: 'Evaluate your genuine interest in client relationship activities'
  },
  personality: {
    title: 'Personality Fit',
    description: 'Assess personality traits crucial for CRM success'
  },
  cognitive: {
    title: 'Cognitive Style',
    description: 'Understand your problem-solving and work preferences'
  },
  motivation: {
    title: 'Motivation Evaluation',
    description: 'Identify what drives you in professional settings'
  },
  aptitude: {
    title: 'General Aptitude',
    description: 'Test logical reasoning and communication skills'
  },
  prerequisite: {
    title: 'Prerequisite Knowledge',
    description: 'Assess basic understanding of CRM concepts'
  },
  domain: {
    title: 'Domain-Specific Knowledge',
    description: 'Evaluate knowledge of CRM metrics and strategies'
  },
  wiscar: {
    title: 'WISCAR Framework',
    description: 'Comprehensive readiness assessment'
  }
};