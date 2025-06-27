import { AlertTriangle, Clock, TrendingDown } from 'lucide-react';
const Problems = () => {
  const problems = [{
    icon: <Clock className="h-12 w-12 text-red-500" />,
    title: "Agenda Vazia = Prejuízo Direto",
    description: "Cada horário vago na sua clínica ou creche é dinheiro perdido. Enquanto você espera o telefone tocar, a concorrência está dominando o Google.",
    audience: "Clínicas e Creches"
  }, {
    icon: <AlertTriangle className="h-12 w-12 text-orange-500" />,
    title: "Emergências Invisíveis no Google",
    description: "Às 2h da manhã, um pet precisa de socorro. Se sua clínica não aparece primeiro no Google, o cliente vai para o concorrente.",
    audience: "Hospitais 24h"
  }, {
    icon: <TrendingDown className="h-12 w-12 text-purple-500" />,
    title: "Competição por Preço Baixo",
    description: "Seus serviços premium são confundidos com os básicos. Clientes qualificados não te encontram e você fica brigando por migalhas.",
    audience: "Serviços Premium"
  }];
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Você Reconhece Estes 
            <span className="text-red-500"> Problemas</span>?
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="mb-6">{problem.icon}</div>
              <div className="mb-4">
                <span className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {problem.audience}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>)}
        </div>

        <div className="text-center mt-16">
          
        </div>
      </div>
    </section>;
};
export default Problems;