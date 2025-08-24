import React from 'react';
import { PRICING_PLANS } from '../constants';
import { CheckCircleIcon } from './icons';

interface PricingProps {
  onPlanSelect: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onPlanSelect }) => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Planos Flexíveis para <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-start to-brand-primary-end">Todos os Perfis</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Escolha o plano que melhor se adapta às suas necessidades e comece a analisar hoje mesmo.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 items-stretch">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.tier}
            className={`flex flex-col p-8 rounded-xl border ${
              plan.isFeatured
                ? 'bg-brand-dark border-brand-primary-end scale-105 shadow-2xl'
                : 'bg-brand-dark border-brand-secondary'
            }`}
          >
            {plan.isFeatured && (
              <span className="bg-gradient-to-r from-brand-primary-start to-brand-primary-end text-white text-xs font-bold px-3 py-1 rounded-full uppercase self-center mb-4">
                Mais Popular
              </span>
            )}
            <h3 className="text-2xl font-bold text-center">{plan.tier}</h3>
            <div className="mt-4 text-center text-gray-400">
              <span className="text-4xl font-extrabold text-white">{plan.price}</span>
              {plan.period}
            </div>
            <p className="mt-4 text-center font-semibold text-gray-300">{plan.analysisCount}</p>
            <ul className="mt-6 space-y-4 flex-grow">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={onPlanSelect}
              className={`w-full mt-8 py-3 px-6 text-center rounded-lg font-semibold transition-all duration-300 ${
                plan.isFeatured
                  ? 'bg-gradient-to-r from-brand-primary-start to-brand-primary-end text-white hover:opacity-90'
                  : 'bg-brand-secondary text-white hover:bg-brand-primary-start'
              }`}
            >
              Escolher Plano
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
