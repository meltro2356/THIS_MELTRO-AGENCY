import { Target, Zap, Crown, TrendingUp } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <Target className="h-10 w-10 sm:h-12 sm:w-12 text-blue-500" />,
      title: "Google Ads Hiperlocal",
      description: "Apareça primeiro quando pesquisam 'emergência veterinária' + sua cidade às 2h da manhã. Dominação total das buscas de urgência.",
      results: "+250% em consultas de emergência",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-500" />,
      title: "Campanhas Sazonais Inteligentes",
      description: "Antecipamos feriados, férias escolares e épocas de pico. Sua creche e hotel lotados nos momentos de maior demanda.",
      results: "95% de ocupação em feriados",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Crown className="h-10 w-10 sm:h-12 sm:w-12 text-purple-500" />,
      title: "Funil de vendas personalizado",
      description: "fazemos a estratégia perfeita para cada caso, transformamos lead curioso em cliente guiando através de um funil personalizado",
      results: "+180% no ticket médio",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-green-500" />,
      title: "Especialidades em Destaque",
      description: "Ortopedia, dermatologia, cardiologia... Criamos autoridade para cada especialidade e atraímos casos complexos e bem remunerados.",
      results: "Fluxo constante de especialidades",
      color: "from-green-400 to-teal-500"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Como a Meltro 
            <span className="bg-gradient-success bg-clip-text text-transparent"> Resolve</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Estratégias comprovadas que transformam negócios pet care em máquinas de gerar clientes qualificados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent hover:scale-105"
            >
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4 sm:mb-6`}>
                {solution.icon}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 font-playfair group-hover:text-purple-600 transition-colors">
                {solution.title}
              </h3>
              
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {solution.description}
              </p>
              
              <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-3 sm:p-4 border-l-4 border-purple-500">
                <div className="text-purple-700 font-bold text-base sm:text-lg">
                  📈 {solution.results}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
