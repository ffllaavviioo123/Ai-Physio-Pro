import React, { useState } from 'react';
import type { FaqItem } from '../types';
import { FAQ_ITEMS } from '../constants';
import { ChevronDownIcon } from './icons';

interface FaqCardProps {
  item: FaqItem;
  isOpen: boolean;
  toggle: () => void;
}

const FaqCard: React.FC<FaqCardProps> = ({ item, isOpen, toggle }) => {
  return (
    <div className="border-b border-brand-secondary">
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <h3 className="text-lg font-semibold text-white">{item.question}</h3>
        <ChevronDownIcon
          className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-gray-400">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};


const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Dúvidas Frequentes
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                    Encontre respostas para as perguntas mais comuns sobre o AI Physio Pro.
                </p>
            </div>
            <div className="max-w-3xl mx-auto">
                {FAQ_ITEMS.map((item, index) => (
                    <FaqCard 
                        key={index} 
                        item={item} 
                        isOpen={openIndex === index} 
                        toggle={() => handleToggle(index)} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Faq;