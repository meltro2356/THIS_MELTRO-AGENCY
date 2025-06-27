
import { ArrowLeft, Target, Zap, Crown, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Servicos = () => {
  const servicos = [
    {
      icon: <Target className="h-12 w-12 text-blue-500" />,
      title: "Google Ads Hiperlocal",
      description: "Apareça primeiro quando pesquisam 'veterinário emergência' + sua cidade às 2h da manhã. Dominação total das buscas de urgência.",
      features: [
        "Otimização para buscas de emergência",
        "Segmentação hiperlocal precisa",
        "Campanhas 24/7 ativas",
        "Relatórios detalhados de performance"
      ],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "Campanhas Sazonais Inteligentes",
      description: "Antecipamos feriados, férias escolares e épocas de pico. Sua creche e hotel lotados nos momentos de maior demanda.",
      features: [
        "Planejamento antecipado de campanhas",
        "Automação para datas sazonais",
        "Estratégias de alta e baixa temporada",
        "Maximização da ocupação em feriados"
      ],
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Crown className="h-12 w-12 text-purple-500" />,
      title: "Posicionamento Premium",
      description: "Transformamos seu serviço em desejo. Antes/depois espetaculares, depoimentos exclusivos e estratégias que atraem quem paga pelo melhor.",
      features: [
        "Criação de conteúdo premium",
        "Estratégias de branding exclusivas",
        "Segmentação por poder aquisitivo",
        "Aumento do ticket médio"
      ],
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-green-500" />,
      title: "Especialidades em Destaque",
      description: "Ortopedia, dermatologia, cardiologia... Criamos autoridade para cada especialidade e atraímos casos complexos e bem remunerados.",
      features: [
        "Campanhas por especialidade médica",
        "Criação de autoridade no nicho",
        "Atração de casos complexos",
        "Posicionamento como referência"
      ],
      color: "from-green-400 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar ao início
          </Link>
          
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-playfair font-bold text-white mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos acelerar o crescimento do seu negócio pet care.
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
            Falar com Especialista
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Servicos;
