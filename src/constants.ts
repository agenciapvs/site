import { 
  Users, 
  Globe, 
  TrendingUp, 
  Search, 
  Camera, 
  Video, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  MessageCircle,
  BarChart3,
  Rocket,
  ShieldCheck,
  Zap
} from 'lucide-react';

export const SERVICES = [
  {
    id: 'social-media',
    title: 'Social Media',
    description: 'Planejamento, criação e gestão de conteúdo para gerar posicionamento e constância.',
    icon: Users,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  },
  {
    id: 'captacao',
    title: 'Captação de Imagens',
    description: 'Produções profissionais e drone para elevar o nível da sua marca.',
    icon: Camera,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    id: 'sites',
    title: 'Desenvolvimento de Sites',
    description: 'Estrutura profissional para transmitir credibilidade e converter visitantes em clientes.',
    icon: Globe,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  },
  {
    id: 'trafego',
    title: 'Gestão de Tráfego Pago',
    description: 'Campanhas no Instagram, Facebook e Google para gerar alcance e oportunidades.',
    icon: TrendingUp,
    color: 'text-orange-400',
    bg: 'bg-orange-400/10'
  }
];

export const METHOD_STEPS = [
  {
    step: '01',
    title: 'Base: Presença Digital',
    description: 'Organizamos suas redes sociais e posicionamento estratégico.',
    icon: Layers
  },
  {
    step: '02',
    title: 'Estrutura: Profissionalização',
    description: 'Criamos seu site e fortalecemos sua marca visualmente.',
    icon: ShieldCheck
  },
  {
    step: '03',
    title: 'Aceleração: Crescimento',
    description: 'Ativamos tráfego pago e campanhas estratégicas de vendas.',
    icon: Zap
  },
  {
    step: '04',
    title: 'Escala: Sistema Completo',
    description: 'Integramos tudo para gerar resultados consistentes e previsíveis.',
    icon: Rocket
  }
];

export const FAQS = [
  {
    question: 'Preciso contratar tudo de uma vez?',
    answer: 'Não. Você pode começar pelo social media ou site e evoluir com o tempo, respeitando o momento da sua empresa.'
  },
  {
    question: 'Vocês atendem negócios locais?',
    answer: 'Sim, somos especializados em empresas de Atibaia, Bragança Paulista e região, focando em resultados reais para o comércio local.'
  },
  {
    question: 'Vocês criam os conteúdos?',
    answer: 'Sim, cuidamos de toda a estratégia, roteirização, criação visual e publicação para que você foque no seu negócio.'
  },
  {
    question: 'Vocês fazem anúncios também?',
    answer: 'Sim, gerenciamos campanhas completas no Instagram, Facebook e Google Ads para atrair clientes qualificados.'
  }
];
