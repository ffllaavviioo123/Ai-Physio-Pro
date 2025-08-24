import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Dashboard from './components/Dashboard';
import type { User } from './types';

type AuthModalType = 'login' | 'signup' | null;

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authModal, setAuthModal] = useState<AuthModalType>(null);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('aiPhysioProUser');
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem('aiPhysioProUser');
    }
  }, []);

  const handleAuthSuccess = (user: User) => {
    localStorage.setItem('aiPhysioProUser', JSON.stringify(user));
    setCurrentUser(user);
    setAuthModal(null);
    // Reset form fields
    setName('');
    setEmail('');
    setPassword('');
    setIsLoading(false);
  };
  
  const handleLogout = () => {
    localStorage.removeItem('aiPhysioProUser');
    setCurrentUser(null);
  };
  
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      handleAuthSuccess({ name: email.split('@')[0], email, plan: 'basic' });
    }, 1000);
  };
  
  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      handleAuthSuccess({ name, email, plan: 'free' });
    }, 1000);
  };

  if (currentUser) {
    return (
      <div className="bg-brand-dark min-h-screen font-sans text-gray-200">
        <Header isLoggedIn={true} onLogout={handleLogout} onOpenAuthModal={() => {}} />
        <main>
          <Dashboard user={currentUser} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-brand-dark min-h-screen font-sans text-gray-200">
      <Header isLoggedIn={false} onLogout={() => {}} onOpenAuthModal={setAuthModal} />
      <main>
        <HeroSection onCtaClick={() => setAuthModal('signup')} />
        <section id="howitworks" className="py-20 bg-brand-secondary">
          <HowItWorks />
        </section>
        <section id="features" className="py-20">
          <Features />
        </section>
        <section id="pricing" className="py-20 bg-brand-secondary">
          <Pricing onPlanSelect={() => setAuthModal('signup')} />
        </section>
         <section id="faq" className="py-20">
          <Faq />
        </section>
      </main>
      <Footer />
      
      {/* Login Modal */}
      <Modal isOpen={authModal === 'login'} onClose={() => setAuthModal(null)} title="Login">
        <form onSubmit={handleLoginSubmit}>
            <div className="space-y-4">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 bg-brand-dark border border-brand-secondary rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary-start"/>
                <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-3 bg-brand-dark border border-brand-secondary rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary-start"/>
            </div>
            <button type="submit" disabled={isLoading} className="w-full mt-6 bg-gradient-to-r from-brand-primary-start to-brand-primary-end text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity duration-300 disabled:opacity-50">
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
            <p className="text-center mt-4 text-sm text-gray-400">
                Não tem conta? <button type="button" onClick={() => setAuthModal('signup')} className="font-semibold text-brand-primary-start hover:underline">Cadastre-se</button>
            </p>
        </form>
      </Modal>

      {/* Signup Modal */}
      <Modal isOpen={authModal === 'signup'} onClose={() => setAuthModal(null)} title="Criar Conta Grátis">
        <form onSubmit={handleSignupSubmit}>
            <div className="space-y-4">
                 <input type="text" placeholder="Nome Completo" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-3 bg-brand-dark border border-brand-secondary rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary-start"/>
                <input type="email" placeholder="Email Profissional" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 bg-brand-dark border border-brand-secondary rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary-start"/>
                <input type="password" placeholder="Crie uma Senha" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-3 bg-brand-dark border border-brand-secondary rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary-start"/>
            </div>
            <button type="submit" disabled={isLoading} className="w-full mt-6 bg-gradient-to-r from-brand-primary-start to-brand-primary-end text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity duration-300 disabled:opacity-50">
              {isLoading ? 'Criando conta...' : 'Criar Conta e Começar'}
            </button>
            <p className="text-center mt-4 text-sm text-gray-400">
                Já tem conta? <button type="button" onClick={() => setAuthModal('login')} className="font-semibold text-brand-primary-start hover:underline">Faça login</button>
            </p>
        </form>
      </Modal>
    </div>
  );
};

export default App;
