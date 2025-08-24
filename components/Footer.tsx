import React from 'react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-secondary border-t border-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white">
              AI Physio <span className="text-brand-primary-start">Pro</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-xs">
              Transformando a análise de movimento com Inteligência Artificial.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-200 uppercase">Navegação</h2>
              <ul className="text-gray-400">
                {NAV_LINKS.map((link) => (
                    <li key={link.label} className="mb-2">
                        <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                    </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-200 uppercase">Legal</h2>
              <ul className="text-gray-400">
                <li className="mb-2"><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Serviço</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-200 uppercase">Contato</h2>
              <ul className="text-gray-400">
                <li className="mb-2"><a href="mailto:suporte@gaitanalyzer.pro" className="hover:text-white transition-colors">suporte@aiphysio.pro</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-gray-500">
          <p>&copy; {currentYear} AI Physio Pro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;