import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import { MenuIcon, XIcon } from './icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-brand-secondary/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          AI Physio <span className="text-brand-primary-start">Pro</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
           <a
            href="#"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Login
          </a>
           <a
            href="#pricing"
            className="bg-gradient-to-r from-brand-primary-start to-brand-primary-end text-white font-bold py-2 px-4 rounded-full hover:opacity-90 transition-opacity duration-300"
          >
            Começar Agora
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-brand-secondary">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
             <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Login
            </a>
             <a
              href="#pricing"
              onClick={() => setIsMenuOpen(false)}
              className="bg-gradient-to-r from-brand-primary-start to-brand-primary-end text-white font-bold py-2 px-4 rounded-full hover:opacity-90 transition-opacity duration-300"
            >
              Começar Agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;