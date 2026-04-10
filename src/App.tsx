// ==========================================
// PVS Vibe Mode: Frontend Entry Point
// ==========================================
// This file contains the core React structure.
// Feel free to modify sections, add new components, or tweak animations.
// All CTAs are currently directed to WhatsApp (11) 91558-9705.

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  ChevronDown, 
  Menu, 
  X,
  Instagram,
  Facebook,
  Linkedin,
  Phone,
  TrendingUp
} from 'lucide-react';
import { SERVICES, METHOD_STEPS, FAQS } from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-display font-extrabold text-2xl tracking-tighter text-brand-purple">PVS</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-300">
          <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
          <a href="#metodo" className="hover:text-white transition-colors">Método</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-lg">Serviços</a>
            <a href="#metodo" onClick={() => setIsMenuOpen(false)} className="text-lg">Método</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-lg">FAQ</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
    <div className="purple-glow top-[-10%] right-[-10%] opacity-50" />
    <div className="purple-glow bottom-[-10%] left-[-10%] opacity-30" />
    
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-bold mb-6 tracking-widest uppercase">
              Marketing de Performance
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Sua empresa precisa de <span className="text-brand-purple">mais visibilidade</span>
              <br />
              para ter <span className="underline decoration-brand-purple/50">mais resultados.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl">
              Cuidamos de toda sua presença digital com redes sociais, site, tráfego pago, Google Ads e captação de conteúdo para transformar sua empresa em uma marca forte e profissional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <a href="https://wa.me/5511915589705" className="btn-primary">
                Quero estruturar meu marketing! <ArrowRight size={18} />
              </a>
            </div>

            <p className="text-sm text-slate-500 italic">
              <span className="text-brand-purple font-semibold">Você não precisa fazer tudo de uma vez.</span> Nós construímos isso com você, etapa por etapa.
            </p>
          </motion.div>
        </div>

        <div className="flex-1 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-purple/20">
              {/* VIBE MODE: HERO IMAGE */}
              <img 
                src="/agenciapvs.PNG" 
                alt="Marketing Dashboard" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-black uppercase font-bold">Visualizações geradas</p>
                  <p className="text-lg font-bold text-black">+142%</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 glass-card p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-purple/20 rounded-full flex items-center justify-center text-brand-purple">
                  <Instagram size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Alcance Mensal</p>
                  <p className="text-lg font-bold">85.4k</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const SectionHeading = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center mx-auto max-w-3xl' : ''}`}>
    <h2 className="text-3xl md:text-5xl mb-6 leading-tight">{title}</h2>
    {subtitle && <p className="text-lg text-slate-400">{subtitle}</p>}
  </div>
);

const ProblemSection = () => (
  <section className="py-24 bg-zinc-950/50">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1">
          <SectionHeading 
            centered={false}
            title="O problema não é falta de marketing, é falta de estrutura"
            subtitle="Sem estrutura, não existe crescimento previsível. A maioria das empresas hoje posta sem estratégia e acaba vendo o marketing como custo."
          />
          <ul className="space-y-4 mb-10">
            {[
              "Posta sem estratégia e constância",
              "Não tem identidade visual clara",
              "Não aparece no Google",
              "Não gera leads com consistência",
              "Depende apenas de indicações"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-300">
                <X className="text-red-500" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href="https://wa.me/5511915589705" className="btn-secondary inline-flex">Quero organizar meu marketing!</a>
        </div>
        <div className="flex-1">
          <div className="glass-card p-8 h-full flex flex-col justify-center border-brand-purple/20">
            <div className="mb-6 flex justify-between items-end h-48 w-full relative">
              <div className="absolute inset-0 flex flex-col justify-between opacity-5">
                <div className="border-t border-white w-full"></div>
                <div className="border-t border-white w-full"></div>
                <div className="border-t border-white w-full"></div>
                <div className="border-t border-white w-full"></div>
              </div>
              
              <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
                <path 
                  d="M0 85 L20 88 L40 82 L60 85 L80 78 L100 90 L120 82 L140 88 L160 80 L180 85 L200 88" 
                  fill="none" 
                  stroke="#ef4444" 
                  strokeWidth="2" 
                  strokeDasharray="4" 
                />
                <motion.path 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  d="M0 85 Q 50 85, 100 60 T 200 10" 
                  fill="none" 
                  stroke="#8b5cf6" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                />
                <motion.circle 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  cx="200" cy="10" r="4" fill="#8b5cf6" 
                />
              </svg>
            </div>
            <div className="flex justify-between text-[10px] text-slate-500 uppercase font-bold tracking-wider">
              <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500"></div> Sem Estrutura</span>
              <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-brand-purple"></div> Crescimento com PVS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section id="servicos" className="py-24 relative">
    <div className="container mx-auto px-6">
      <SectionHeading 
        title="Tudo que sua empresa precisa para crescer no digital"
        subtitle="Nós cuidamos de todas as etapas da sua presença digital, conectando tudo em um único ecossistema de vendas."
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="glass-card p-8 group hover:border-brand-purple/50 transition-all"
          >
            <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <service.icon size={28} />
            </div>
            <h3 className="text-xl mb-4">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {service.description}
            </p>
            <a href="https://wa.me/5511915589705" className="text-brand-purple font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
              Saiba mais! <ArrowRight size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const MethodSection = () => (
  <section id="metodo" className="py-24 bg-zinc-950">
    <div className="container mx-auto px-6">
      <SectionHeading 
        title="Você não precisa fazer tudo agora, mas precisa começar certo"
        subtitle="Nosso método funciona em etapas, respeitando o momento da sua empresa e garantindo evolução segura."
      />

      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 z-0" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {METHOD_STEPS.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-black border-2 border-brand-purple rounded-full flex items-center justify-center text-brand-purple font-black text-xl mb-6 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                {step.step}
              </div>
              <h3 className="text-xl mb-4">{step.title}</h3>
              <p className="text-slate-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ServiceDetail = ({ title, description, image, reversed = false, cta, isPrimaryCTA = false, centered = false }: { title: string, description: string, image: string, reversed?: boolean, cta: string, isPrimaryCTA?: boolean, centered?: boolean }) => (
  <section className="py-20 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
        <motion.div 
          initial={{ opacity: 0, x: reversed ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`flex-1 ${centered ? 'text-center flex flex-col items-center' : ''}`}
        >
          <h2 className={`text-3xl md:text-4xl mb-6 ${centered ? 'mx-auto' : ''}`}>{title}</h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">{description}</p>
          <a href="https://wa.me/5511915589705" className={isPrimaryCTA ? "btn-primary" : "btn-secondary"}>{cta}</a>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
          <div className="purple-glow opacity-20 scale-150" />
          {/* VIBE MODE: IMAGES FOR THIS SECTION ARE PASSED VIA PROPS IN THE MAIN APP COMPONENT BELOW */}
          <img 
            src={image} 
            alt={title} 
            className="rounded-2xl border border-white/10 shadow-2xl w-full aspect-video object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string, answer: string, key?: string | number }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-brand-purple transition-colors"
      >
        <span className="text-lg font-medium">{question}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-black pt-20 pb-10 border-t border-white/10">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="font-display font-extrabold text-2xl tracking-tighter text-brand-purple">PVS</span>
          </div>
          <p className="text-slate-400 max-w-sm mb-8">
            Transformamos sua presença digital em uma máquina de vendas com estratégia, design e tráfego pago.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/agenciapvs/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-purple transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg mb-6">Links Rápidos</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
            <li><a href="#metodo" className="hover:text-white transition-colors">Nosso Método</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg mb-6">Contato</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-center gap-3"><MessageCircle size={18} className="text-brand-purple" /> (11) 91558-9705</li>
            <li className="flex items-center gap-3"><Phone size={18} className="text-brand-purple" /> Atibaia, SP</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-10 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>© 2026 Agência PVS Marketing Estratégico. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

const WhatsAppFloatingButton = () => (
  <motion.a
    href="https://wa.me/5511915589705"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-[#5ff034] to-[#25d366] text-white rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] flex items-center justify-center hover:shadow-[0_8px_25px_rgba(37,211,102,0.6)] transition-all"
    aria-label="Falar no WhatsApp"
  >
    <svg 
      viewBox="0 0 24 24" 
      className="w-10 h-10 text-white" 
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </motion.a>
);

export default function App() {
  useEffect(() => {
    document.title = "Agência PVS - Marketing Estratégico";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatsAppFloatingButton />
      
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="h-16 w-40 flex items-center justify-center">
            <img src="/construforti.jpeg" alt="Construforti" className="max-h-full max-w-full object-contain" />
          </div>
          <div className="h-16 w-40 flex items-center justify-center">
            <img src="/fergus.jpeg" alt="Fergus" className="max-h-full max-w-full object-contain" />
          </div>
          <div className="h-16 w-40 flex items-center justify-center">
            <img src="/jms.jpeg" alt="JMS" className="max-h-full max-w-full object-contain" />
          </div>
          <div className="h-16 w-40 flex items-center justify-center">
            <img src="/moreira.jpeg" alt="Moreira" className="max-h-full max-w-full object-contain" />
          </div>
          <div className="h-16 w-40 flex items-center justify-center">
            <img src="/morumbi.jpeg" alt="Morumbi" className="max-h-full max-w-full object-contain" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <SectionHeading 
                centered={false}
                title="Uma agência completa para empresas que querem crescer de verdade"
                subtitle="Nós não somos apenas uma agência de posts. Somos um parceiro estratégico que cuida de toda a presença digital da sua empresa."
              />
              <p className="text-slate-400 mb-8">
                Enquanto você foca no seu negócio, nós estruturamos sua imagem no digital, sua comunicação e sua geração de oportunidades.
              </p>
              <a href="https://wa.me/5511915589705" className="btn-primary inline-flex">Quero ter um time cuidando disso!</a>
            </div>
            <div className="flex-1 flex justify-center items-center gap-6">
              <div className="glass-card p-8 text-center w-full max-w-[200px] transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-4xl font-bold text-brand-purple mb-2">+25</div>
                <p className="text-sm text-slate-400">Clientes Atendidos</p>
              </div>
              <div className="glass-card p-8 text-center w-full max-w-[200px] mt-12 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-4xl font-bold text-brand-purple mb-2">+80</div>
                <p className="text-sm text-slate-400">projetos entregues</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProblemSection />
      <ServicesSection />
      <MethodSection />

      <div id="cases">
        {/* VIBE MODE: CHANGE SERVICE IMAGES HERE */}
        <ServiceDetail 
          title="O primeiro passo: posicionar sua empresa no digital"
          description="O plano de Social Media é o início ideal para quem quer ter presença profissional, postar com estratégia e criar autoridade real."
          image="/socialmedia.jpeg"
          cta="Quero começar pelo social media!"
        />

        <ServiceDetail 
          title="Captação de Imagens"
          description="Produções profissionais e drone para elevar o nível da sua marca."
          image="/dronepvs.jpeg"
          cta="Saiba mais!"
        />

        <ServiceDetail 
          title="Desenvolvimento de Sites"
          description="O site é o que transforma sua presença digital em autoridade real. Com ele, você passa mais credibilidade e converte visitantes em clientes."
          image="/sitesresponsivospvs.png"
          cta="Quero um site profissional!"
        />

        <ServiceDetail 
          title="Gestão de Tráfego Pago"
          description="Campanhas no Instagram, Facebook e Google para gerar alcance e oportunidades."
          image="/socialmediapvs.jpeg"
          cta="Saiba mais!"
        />

        <ServiceDetail 
          title="A estrutura completa para empresas que querem crescer"
          description="Social Media + Site Profissional + Tráfego Pago + Google Ads. Um sistema completo trabalhando todos os dias para você, gerando visibilidade e resultados constantes."
          image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
          cta="Quero o plano completo!"
          isPrimaryCTA
          centered
        />
      </div>

      <section id="faq" className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeading title="Dúvidas Frequentes" />
          <div className="mt-8">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="purple-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl mb-8">Agora é sua vez de estruturar o marketing da sua empresa</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/5511915589705" className="btn-primary text-lg px-10 py-5">Quero falar com a equipe!</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
