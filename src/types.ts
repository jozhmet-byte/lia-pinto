export type DimensionKey = 
  | 'confianza' 
  | 'pasion' 
  | 'valia' 
  | 'conexion' 
  | 'voz' 
  | 'intuicion' 
  | 'apertura' 
  | 'encarnacion';

export interface QuestionItem {
  id: number;
  text: string;
  dimensionKey: DimensionKey;
}

export interface DimensionTheme {
  bg: string;
  headerBg: string;
  glow: string;
  accent: string;
  element: string;
  archetypeBadge: string;
}

export interface DimensionMeta {
  key: DimensionKey;
  romanNumeral: string;
  name: string;
  startId: number;
  endId: number;
  shortDescription: string;
  leakDescription: string;
  somaticRecommendation: string;
  firstStep: string;
  theme: DimensionTheme;
}

export interface DimensionScoreResult {
  meta: DimensionMeta;
  score: number;
  percentage: number;
}

export interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  duration: string;
  description: string;
  bullets: string[];
  cta: string;
  badge: string;
}

export interface TestQuestion {
  id: number;
  question: string;
  context: string;
  options: {
    label: string;
    dimension: 'boundaries' | 'voice' | 'sovereignty' | 'integration';
    insight: string;
  }[];
}

export interface TestResult {
  dominantDimension: 'boundaries' | 'voice' | 'sovereignty' | 'integration';
  title: string;
  archetype: string;
  subtitle: string;
  description: string;
  fugaEnergy: string;
  prescripcion: string;
  firstStep: string;
}
