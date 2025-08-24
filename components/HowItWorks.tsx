import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../constants';
import type { HowItWorksStep } from '../types';

const HowItWorks: React.FC = () => {
  return (
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Análise de Movimento em <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-start to-brand-primary-end">3 Passos Simples</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-16">
        Nosso processo é rápido, intuitivo e não requer equipamentos caros.
      </p>
      <div className="grid md:grid-cols-3 gap-10">
        {HOW_IT_WORKS_STEPS.map((step: HowItWorksStep, index: number) => {
          const Icon = step.icon;
          return (
            <div key={index} className="flex flex-col items-center p-8 bg-brand-dark rounded-xl shadow-lg border border-brand-secondary hover:border-brand-primary-start transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6 p-4 bg-brand-secondary rounded-full">
                <Icon className="w-12 h-12 text-brand-primary-start" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
