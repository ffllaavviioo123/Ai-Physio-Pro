import type { FC } from 'react';

export type IconComponent = FC<{ className?: string }>;

export interface NavLink {
  label: string;
  href: string;
}

export interface HowItWorksStep {
  icon: IconComponent;
  title: string;
  description: string;
}

export interface Feature {
  icon: IconComponent;
  title: string;
  description: string;
}

export enum PlanTier {
  Free = 'Gratuito',
  Basic = 'Básico',
  Professional = 'Profissional',
  Unlimited = 'Ilimitado'
}

export interface PricingPlan {
  tier: PlanTier;
  price: string;
  period: string;
  analysisCount: string;
  features: string[];
  isFeatured: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface User {
  name: string;
  email: string;
  plan: 'free' | 'basic' | 'professional' | 'unlimited';
}
