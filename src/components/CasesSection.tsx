import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, TrendingUp, Users, Target, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const CasesSection = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const cases = [
    {
      id: 1,
      title: "Clínica VetLife - Especialidades",
      category: "Clínica Veterinária",
      image: "/placeholder.svg",
      results: {
        revenue: "+380%",
        leads: "+250%",
        roi: "4.2x"
      },
      description: "Transformamos uma clínica veterinária comum em referência em dermatologia e ortopedia animal.",
      fullDescription: "A Clínica VetLife estava com agenda vazia e competindo apenas por preço. Implementamos uma estratégia completa de Google Ads focada em especialidades, campanhas educativas no Instagram e landing pages otimizadas. Em 90 dias, se tornaram a principal referência em dermatologia animal da região.",
      challenge: "Agenda vazia e baixo ticket médio",
      solution: "Google Ads para especialidades + Instagram educativo + Landing pages otimizadas",
      timeframe: "90 dias",
      testimonial: "A Meltro transformou nossa clínica. Antes tínhamos 2-3 consultas por dia, hoje nossa agenda está sempre cheia com casos de alta complexidade."
    },
    {
      id: 2,
      title: "PetHotel Premium - Ocupação Total",
      category: "Hotel para Pets",
      image: "/placeholder.svg",
      results: {
        revenue: "+420%",
        leads: "+180%",
        roi: "5.1x"
      },
      description: "Hotel de luxo para pets atingiu 98% de ocupação em feriados e alta temporada.",
      fullDescription: "O PetHotel Premium tinha quartos vazios e dificuldade para se diferenciar da concorrência. Criamos campanhas sazonais inteligentes, conteúdo premium mostrando as instalações e estratégias de remarketing para aumentar o ticket médio.",
      challenge: "Baixa ocupação e concorrência por preço",
      solution: "Campanhas sazonais + Marketing premium + Remarketing estratégico",
      timeframe: "120 dias",
      testimonial: "Nunca imaginei que poderíamos ter lista de espera nos feriados. A Meltro nos posicionou como o hotel premium que sempre quisemos ser."
    },
    {
      id: 3,
      title: "Emergency Pet 24h - Dominação Noturna",
      category: "Hospital 24h",
      image: "/placeholder.svg",
      results: {
        revenue: "+300%",
        leads: "+400%",
        roi: "3.8x"
      },
      description: "Hospital veterinário 24h se tornou a primeira opção em emergências na cidade.",
      fullDescription: "O Emergency Pet 24h não aparecia nas buscas de emergência e perdia clientes para concorrentes. Implementamos Google Ads hiperlocal, otimização para buscas móveis e campanhas focadas em urgências. Hoje dominam as buscas de emergência veterinária 24h.",
      challenge: "Invisibilidade nas buscas de emergência",  
      solution: "Google Ads hiperlocal + Mobile first + Campanhas de urgência",
      timeframe: "60 dias",
      testimonial: "Às 3h da manhã nosso telefone toca constantemente. A Meltro nos fez ser a primeira opção em emergências veterinárias."
    },
    {
      id: 4,
      title: "Spa Pet Deluxe - Estética Premium",
      category: "Estética Animal",
      image: "/placeholder.svg",
      results: {
        revenue: "+450%",
        leads: "+220%",
        roi: "4.7x"
      },
      description: "Spa de estética animal premium aumentou ticket médio e atraiu público qualificado.",
      fullDescription: "O Spa Pet Deluxe competia por preço e não conseguia comunicar seu valor premium. Desenvolvemos uma estratégia de antes/depois espetaculares, depoimentos exclusivos e campanhas segmentadas para público de alta renda.",
      challenge: "Competição por preço baixo e baixo reconhecimento do valor premium",
      solution: "Marketing visual premium + Segmentação por renda + Depoimentos exclusivos",
      timeframe: "75 dias",
      testimonial: "Nossos clientes agora entendem o valor do que oferecemos. Aumentamos nossos preços em 60% e a demanda só cresce."
    }
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/12365000042', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Cases de 
            <span className="bg-gradient-success bg-clip-text text-transparent"> Sucesso</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados reais de negócios pet care que transformaram suas operações e multiplicaram o faturamento.
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentCase * 100}%)` }}
            >
              {cases.map((caseItem, index) => (
                <div key={caseItem.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                    {/* Imagem */}
                    <div className="relative">
                      <img 
                        src={caseItem.image} 
                        alt={caseItem.title}
                        className="w-full h-80 object-cover rounded-2xl"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {caseItem.category}
                        </span>
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
                        {caseItem.title}
                      </h3>
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        {caseItem.description}
                      </p>

                      {/* Métricas */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="text-center bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4">
                          <div className="text-2xl font-bold text-green-600 mb-1">
                            {caseItem.results.revenue}
                          </div>
                          <div className="text-sm text-green-700">Faturamento</div>
                        </div>
                        <div className="text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4">
                          <div className="text-2xl font-bold text-blue-600 mb-1">
                            {caseItem.results.leads}
                          </div>
                          <div className="text-sm text-blue-700">Leads</div>
                        </div>
                        <div className="text-center bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-4">
                          <div className="text-2xl font-bold text-purple-600 mb-1">
                            {caseItem.results.roi}
                          </div>
                          <div className="text-sm text-purple-700">ROI</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles do Carrossel */}
          <button
            onClick={prevCase}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextCase}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 space-x-2">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCase(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentCase 
                    ? 'bg-purple-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Centralizado */}
        <div className="text-center mt-16">
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-gradient-cta hover:opacity-90 text-white px-12 py-6 text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl animate-pulse"
          >
            🚀 Quero Mais Clientes Agora
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
