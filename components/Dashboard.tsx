import React from 'react';
import type { User } from '../types';
import { UserCircleIcon, CloudArrowUpIcon, ClockIcon } from './icons';

interface DashboardProps {
  user: User;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
    
  const getPlanName = (plan: User['plan']) => {
    const names = {
      'free': 'Gratuito',
      'basic': 'Básico',
      'professional': 'Profissional',
      'unlimited': 'Ilimitado'
    };
    return names[plan] || 'Gratuito';
  };

  // Mock data for recent analyses
  const recentAnalyses = [
    { id: 1, patient: 'Paciente A', date: '24 de Ago, 2024', status: 'Concluída' },
    { id: 2, patient: 'Paciente B', date: '23 de Ago, 2024', status: 'Concluída' },
    { id: 3, patient: 'Paciente C', date: '22 de Ago, 2024', status: 'Processando' }
  ];

  return (
    <div className="container mx-auto px-6 py-12 animate-fade-in-up">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Bem-vindo, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-start to-brand-primary-end">{user.name}</span>!
      </h1>
      <p className="text-gray-400 max-w-2xl mb-12">
        Aqui você pode gerenciar suas análises, visualizar relatórios e acompanhar o progresso de seus pacientes.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-1 space-y-8">
          <div className="bg-brand-secondary p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center">
              <UserCircleIcon className="w-6 h-6 mr-2 text-brand-primary-start" />
              Seu Plano
            </h3>
            <div className="text-center bg-brand-dark p-4 rounded-lg">
              <p className="text-2xl font-bold text-brand-primary-start">{getPlanName(user.plan)}</p>
              <p className="text-sm text-gray-400">
                {user.plan === 'free' ? '1 análise gratuita disponível' : '50 análises/mês'}
              </p>
            </div>
             <button className="w-full mt-4 bg-gradient-to-r from-brand-primary-start to-brand-primary-end text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
                Fazer Upgrade
            </button>
          </div>
          <div className="bg-brand-secondary p-6 rounded-lg text-center">
             <h3 className="font-bold text-lg mb-4 flex items-center justify-center">
                <CloudArrowUpIcon className="w-6 h-6 mr-2 text-brand-primary-start" />
                Nova Análise
            </h3>
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 hover:border-brand-primary-start hover:bg-brand-dark cursor-pointer transition-colors">
                <CloudArrowUpIcon className="w-12 h-12 mx-auto text-gray-500" />
                <p className="mt-2 text-gray-400">Clique para fazer upload</p>
                <p className="text-xs text-gray-500">MP4, MOV (máx. 100MB)</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2 bg-brand-secondary p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <ClockIcon className="w-6 h-6 mr-2 text-brand-primary-start" />
            Análises Recentes
          </h3>
          <div className="space-y-4">
            {recentAnalyses.map(analysis => (
              <div key={analysis.id} className="bg-brand-dark p-4 rounded-lg flex justify-between items-center flex-wrap gap-2">
                <div>
                  <p className="font-semibold">{analysis.patient}</p>
                  <p className="text-sm text-gray-400">{analysis.date}</p>
                </div>
                <div className="flex items-center gap-4">
                    <span className={`text-sm font-semibold px-2 py-1 rounded-full ${analysis.status === 'Concluída' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                        {analysis.status}
                    </span>
                    <button className="bg-brand-primary-start/50 text-white text-xs font-bold py-1 px-3 rounded-full hover:bg-brand-primary-start transition-colors">Ver Relatório</button>
                </div>
              </div>
            ))}
             {recentAnalyses.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    <p>Nenhuma análise realizada ainda.</p>
                </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
