import React from 'react';
import { FEATURES } from '../constants';
import type { Feature } from '../types';

const Features: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Tudo que Você Precisa para uma Análise <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-start to-brand-primary-end">Completa</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Ferramentas poderosas que elevam a qualidade do seu atendimento e otimizam seu tempo.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((feature: Feature, index: number) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="bg-brand-secondary p-8 rounded-lg shadow-md flex flex-col items-start">
              <div className="mb-5">
                <Icon className="w-10 h-10 text-brand-primary-start" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
