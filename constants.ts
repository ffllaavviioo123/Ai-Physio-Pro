import type { NavLink, HowItWorksStep, Feature, PricingPlan, FaqItem } from './types';
import { PlanTier } from './types';
import React from 'react';
import { CameraIcon, ChartBarIcon, DocumentTextIcon, CpuChipIcon, ShieldCheckIcon, RocketLaunchIcon, LockClosedIcon, UsersIcon, ChatBubbleLeftRightIcon } from './components/icons';

export const NAV_LINKS: NavLink[] = [
  { label: 'Como Funciona', href: '#howitworks' },
  { label: 'Recursos', href: '#features' },
  { label: 'Preços', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    icon: CameraIcon,
    title: '1. Grave o Vídeo',
    description: 'Use qualquer smartphone para gravar um vídeo de 10-30 segundos do movimento do paciente, em vista lateral.',
  },
  {
    icon: CpuChipIcon,
    title: '2. Processamento IA',
    description: 'Faça o upload e nossa IA avançada processará o vídeo, detectando pontos anatômicos com 94% de precisão.',
  },
  {
    icon: DocumentTextIcon,
    title: '3. Receba o Relatório',
    description: 'Em segundos, receba um relatório completo com gráficos, métricas e recomendações clínicas.',
  },
];

export const FEATURES: Feature[] = [
  {
    icon: RocketLaunchIcon,
    title: 'Análise Inteligente',
    description: 'IA avançada detecta automaticamente pontos anatômicos em tempo real com 94% de precisão validada.',
  },
  {
    icon: ChartBarIcon,
    title: 'Relatórios Profissionais',
    description: 'Gráficos detalhados, recomendações personalizadas e comparações temporais. Exporte em PDF/Word.',
  },
  {
    icon: UsersIcon,
    title: 'Foco no Profissional',
    description: 'Desenvolvido para Fisioterapeutas, Educadores Físicos, Ortopedistas e outros especialistas do movimento.',
  },
  {
    icon: LockClosedIcon,
    title: 'Segurança e Privacidade',
    description: 'Compatível com LGPD, com criptografia SSL/TLS e dados seguros na nuvem. Vídeos são anonimizados.',
  },
   {
    icon: ShieldCheckIcon,
    title: 'Validação Científica',
    description: 'Nossa tecnologia foi validada com mais de 10.000 análises para garantir resultados confiáveis.',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Suporte Dedicado',
    description: 'Acesso a chat online, email e WhatsApp (planos profissionais) para te auxiliar em cada passo.',
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    tier: PlanTier.Free,
    price: 'R$ 0',
    period: '/vitalício',
    analysisCount: '1 análise com anúncios',
    features: ['Análise básica', 'Relatório padrão', 'Suporte por email'],
    isFeatured: false,
  },
  {
    tier: PlanTier.Basic,
    price: 'R$ 39,90',
    period: '/mês',
    analysisCount: '50 análises',
    features: ['Todas as funcionalidades gratuitas', 'Relatórios sem anúncios', 'Suporte prioritário'],
    isFeatured: false,
  },
  {
    tier: PlanTier.Professional,
    price: 'R$ 89,90',
    period: '/mês',
    analysisCount: '200 análises',
    features: ['Todas as funcionalidades básicas', 'Exportação em PDF/Word', 'Marca personalizada', 'Suporte via WhatsApp'],
    isFeatured: true,
  },
  {
    tier: PlanTier.Unlimited,
    price: 'R$ 159,90',
    period: '/mês',
    analysisCount: 'Análises ilimitadas',
    features: ['Todas as funcionalidades profissionais', 'Acesso à API', 'White label completo', 'Dashboard de equipe'],
    isFeatured: false,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
    {
        question: 'A análise da IA é realmente confiável?',
        answer: 'Sim. Nossa IA foi treinada e validada com mais de 10.000 análises, alcançando uma precisão de 94% em comparação com sistemas de captura de movimento de laboratório. É uma ferramenta poderosa para auxiliar na sua avaliação clínica.',
    },
    {
        question: 'Preciso de algum equipamento especial?',
        answer: 'Não. Tudo o que você precisa é um smartphone com uma câmera. A plataforma foi projetada para ser acessível e fácil de usar, sem a necessidade de hardware caro ou complexo.',
    },
    {
        question: 'Como a privacidade dos meus pacientes é protegida?',
        answer: 'Levamos a privacidade muito a sério. A plataforma é compatível com a LGPD. Todos os dados são criptografados, e os vídeos são processados de forma anônima e não são armazenados permanentemente em nossos servidores.',
    },
    {
        question: 'Posso cancelar meu plano a qualquer momento?',
        answer: 'Sim. Nossos planos são flexíveis e você pode cancelar ou alterar seu plano a qualquer momento, sem taxas de cancelamento ou burocracia.',
    }
];