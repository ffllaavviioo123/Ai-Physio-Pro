import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import { MenuIcon, XIcon } from './icons';

type AuthModalType = 'login' | 'signup' | null;
interface HeaderProps {
    isLoggedIn: boolean;
    onLogout: () => void;
    onOpenAuthModal: (type: 'login' | 'signup') => void;
}


const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout, onOpenAuthModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const loggedOutLinks = (
    <>
      {NAV_LINKS.map((link) => (
        <a key={link.label} href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
          {link.label}
        </a>
      ))}
       <a href="#" onClick={() => { onOpenAuthModal('login'); isMenuOpen && setIsMenuOpen(false); }} className="text-gray-300 hover:text-white transition-colors duration-300">
        Login
      </a>
       <a href="#pricing" onClick={() => { onOpenAuthModal('signup'); isMenuOpen && setIsMenuOpen(false); }} className="bg-gradient-to-r from-brand-primary-start to-brand-primary-end text-white font-bold py-2 px-4 rounded-full hover:opacity-90 transition-opacity duration-300">
        Começar Agora
      </a>
    </>
  );

  const loggedInLinks = (
      <>
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
            Dashboard
        </a>
        <button onClick={onLogout} className="bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-2 px-4 rounded-full hover:opacity-90 transition-opacity duration-300">
            Sair
        </button>
      </>
  );

  return (
    <header className="bg-brand-secondary/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          AI Physio <span className="text-brand-primary-start">Pro</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {isLoggedIn ? loggedInLinks : loggedOutLinks}
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
            {isLoggedIn ? loggedInLinks : loggedOutLinks}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
