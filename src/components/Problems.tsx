
import { AlertTriangle, Clock, TrendingDown } from 'lucide-react';

const Problems = () => {
  const problems = [
    {
      icon: <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-red-500" />,
      title: "Agenda Vazia = Prejuízo Direto",
      description: "Cada horário vago na sua clínica ou creche é dinheiro perdido. Enquanto você espera o telefone tocar, a concorrência está dominando o Google.",
      audience: "Clínicas e Creches"
    },
    {
      icon: <AlertTriangle className="h-10 w-10 sm:h-12 sm:w-12 text-orange-500" />,
      title: "Emergências Invisíveis no Google",
      description: "Às 2h da manhã, um pet precisa de socorro. Se sua clínica não aparece primeiro no Google, o cliente vai para o concorrente.",
      audience: "Hospitais 24h"
    },
    {
      icon: <TrendingDown className="h-10 w-10 sm:h-12 sm:w-12 text-purple-500" />,
      title: "Competição por Preço Baixo",
      description: "Seus serviços premium são confundidos com os básicos. Clientes qualificados não te encontram e você fica brigando por migalhas.",
      audience: "Serviços Premium"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Você Reconhece Estes 
            <span className="text-red-500"> Problemas</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-4 sm:mb-6">{problem.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 font-playfair">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
