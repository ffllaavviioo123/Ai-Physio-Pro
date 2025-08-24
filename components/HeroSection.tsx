import React from 'react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCtaClick();
  };

  return (
    <section className="relative text-white py-32 sm:py-40 lg:py-48 overflow-hidden">
       <div 
        className="absolute inset-0 bg-brand-dark"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 30%, #667eea33 0%, transparent 40%), radial-gradient(circle at 75% 70%, #764ba233 0%, transparent 40%)',
        }}
      ></div>
      <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Transforme a Análise de Movimento com Inteligência Artificial
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Relatórios precisos e detalhados em segundos. Desenvolvido por profissionais, para profissionais da saúde e movimento.
        </p>
        <form className="mt-8 max-w-xl mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
                <input
                    type="email"
                    placeholder="Seu melhor email para começar"
                    onClick={onCtaClick}
                    readOnly
                    className="w-full sm:w-auto flex-grow px-6 py-4 bg-brand-secondary/50 border border-brand-secondary rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary-start transition-all duration-300 cursor-pointer"
                    aria-label="Email para cadastro"
                />
                <button
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-brand-primary-start to-brand-primary-end text-white font-bold py-4 px-8 rounded-full text-lg hover:scale-105 transform transition-transform duration-300 shadow-lg whitespace-nowrap"
                >
                    Começar Agora
                </button>
            </div>
        </form>
        <p className="mt-4 text-sm text-gray-400">Cadastre-se para 1 análise gratuita. Não é necessário cartão de crédito.</p>
      </div>
    </section>
  );
};

export default HeroSection;
