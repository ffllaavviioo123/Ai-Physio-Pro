
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen font-sans">
      <Header />
      <main>
        <HeroSection />
        <section id="howitworks" className="py-20 bg-brand-secondary">
          <HowItWorks />
        </section>
        <section id="features" className="py-20">
          <Features />
        </section>
        <section id="pricing" className="py-20 bg-brand-secondary">
          <Pricing />
        </section>
         <section id="faq" className="py-20">
          <Faq />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
