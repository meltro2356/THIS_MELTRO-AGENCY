
import { ArrowLeft, Target, Zap, Crown, TrendingUp, CheckCircle, ShoppingCart, FileText, Users, MessageCircle, Phone, Settings, BarChart3, Bot, Headphones, Lightbulb, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Servicos = () => {
  const servicos = [
    {
      icon: <Target className="h-12 w-12 text-orange-500" />,
      title: "Tráfego Pago",
      description: "Campanhas otimizadas no Google Ads e redes sociais para atrair clientes qualificados e aumentar suas vendas.",
      features: [
        "Google Ads e Facebook Ads",
        "Segmentação avançada",
        "Otimização contínua de campanhas",
        "Relatórios detalhados de ROI"
      ],
      color: "from-orange-400 to-red-500"
    },
    {
      icon: <FileText className="h-12 w-12 text-yellow-500" />,
      title: "Landing Page Otimizada",
      description: "Páginas de alta conversão projetadas para transformar visitantes em clientes pagantes.",
      features: [
        "Design responsivo e otimizado",
        "Formulários de alta conversão",
        "Testes A/B contínuos",
        "Integração com ferramentas de análise"
      ],
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-red-500" />,
      title: "Lojas Online E-commerces",
      description: "E-commerces completos e otimizados para vendas com todas as funcionalidades necessárias.",
      features: [
        "Plataforma completa de vendas",
        "Gateway de pagamento integrado",
        "Gestão de estoque automatizada",
        "Otimização para conversão"
      ],
      color: "from-red-400 to-orange-500"
    },
    {
      icon: <MessageCircle className="h-12 w-12 text-orange-600" />,
      title: "Scripts de Atendimento",
      description: "Scripts personalizados e treinamento para maximizar a conversão no atendimento ao cliente.",
      features: [
        "Scripts de vendas otimizados",
        "Treinamento da equipe",
        "Fluxos de atendimento personalizados",
        "Acompanhamento de performance"
      ],
      color: "from-orange-400 to-red-600"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-yellow-600" />,
      title: "Funil de Vendas Personalizado",
      description: "Funis de vendas estratégicos para nutrir leads e aumentar a taxa de conversão.",
      features: [
        "Mapeamento da jornada do cliente",
        "Automação de marketing",
        "Nutrição de leads qualificados",
        "Otimização contínua do funil"
      ],
      color: "from-yellow-400 to-red-500"
    },
    {
      icon: <Users className="h-12 w-12 text-red-600" />,
      title: "CRM Básico e Avançado",
      description: "Gestão completa de relacionamento com clientes para maximizar o lifetime value.",
      features: [
        "Organização completa de contatos",
        "Automação de follow-up",
        "Relatórios de vendas detalhados",
        "Integração com outras ferramentas"
      ],
      color: "from-red-400 to-yellow-500"
    },
    {
      icon: <Zap className="h-12 w-12 text-orange-500" />,
      title: "Remarketing",
      description: "Recuperação de vendas e reconversão de leads através de estratégias avançadas de remarketing.",
      features: [
        "Campanhas de retargeting",
        "E-mail marketing automatizado",
        "Recuperação de carrinho abandonado",
        "Segmentação comportamental"
      ],
      color: "from-orange-400 to-yellow-600"
    }
  ];

  const servicosIA = [
    {
      icon: <Bot className="h-12 w-12 text-purple-500" />,
      title: "Chatbots de IA Personalizados",
      description: "Atendimento automatizado 24/7 com inteligência artificial que converte visitantes em clientes.",
      features: [
        "Respostas personalizadas por nicho",
        "Integração com WhatsApp e site",
        "Qualificação automática de leads",
        "Relatórios de conversação"
      ],
      color: "from-purple-400 to-blue-500"
    },
    {
      icon: <Phone className="h-12 w-12 text-blue-500" />,
      title: "IA de Ligação",
      description: "Sistema de ligações automatizadas com IA para qualificação e agendamento de consultas.",
      features: [
        "Ligações automáticas personalizadas",
        "Agendamento inteligente",
        "Qualificação de prospects",
        "Integração com CRM"
      ],
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: <Settings className="h-12 w-12 text-green-500" />,
      title: "Sistemas Plug & Play de Inbound Marketing",
      description: "Soluções completas de marketing de entrada prontas para usar e gerar resultados imediatos.",
      features: [
        "Configuração automática",
        "Templates otimizados",
        "Automação de nutrição",
        "Dashboard de resultados"
      ],
      color: "from-green-400 to-blue-500"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-indigo-500" />,
      title: "Consultoria",
      description: "Consultoria especializada para implementação e otimização de todas as soluções de IA e automação.",
      features: [
        "Análise estratégica personalizada",
        "Implementação guiada",
        "Treinamento da equipe",
        "Suporte contínuo"
      ],
      color: "from-indigo-400 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Soluções completas de marketing digital especializadas no setor pet care. 
            Cada serviço é personalizado para maximizar seus resultados.
          </p>
        </div>
      </header>

      {/* Serviços */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {servicos.map((servico, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${servico.color} flex items-center justify-center mb-6`}>
                  {servico.icon}
                </div>
                
                <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
                  {servico.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {servico.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 mb-3">O que está incluso:</h4>
                  {servico.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção IA */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
              Substitua seu SDR caro por nossas soluções de IA
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Soluções Inteligentes com IA e Automação para donos de Clínicas veterinárias premium, 
              delivery premium e donos de e-comerces pet
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {servicosIA.map((servico, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${servico.color} flex items-center justify-center mb-6`}>
                  {servico.icon}
                </div>
                
                <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
                  {servico.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {servico.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 mb-3">O que está incluso:</h4>
                  {servico.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-playfair font-bold text-white mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos acelerar o crescimento do seu negócio pet care.
          </p>
          <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
            Falar com Especialista
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;
