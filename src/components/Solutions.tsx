
import { Target, Zap, Crown, TrendingUp } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <Target className="h-12 w-12 text-blue-500" />,
      title: "Google Ads Hiperlocal",
      description: "Apareça primeiro quando pesquisam 'veterinário emergência' + sua cidade às 2h da manhã. Dominação total das buscas de urgência.",
      results: "+250% em consultas de emergência",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "Campanhas Sazonais Inteligentes",
      description: "Antecipamos feriados, férias escolares e épocas de pico. Sua creche e hotel lotados nos momentos de maior demanda.",
      results: "95% de ocupação em feriados",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Crown className="h-12 w-12 text-purple-500" />,
      title: "Posicionamento Premium",
      description: "Transformamos seu serviço em desejo. Antes/depois espetaculares, depoimentos exclusivos e estratégias que atraem quem paga pelo melhor.",
      results: "+180% no ticket médio",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-green-500" />,
      title: "Especialidades em Destaque",
      description: "Ortopedia, dermatologia, cardiologia... Criamos autoridade para cada especialidade e atraímos casos complexos e bem remunerados.",
      results: "Fluxo constante de especialidades",
      color: "from-green-400 to-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Como a Meltro 
            <span className="bg-gradient-success bg-clip-text text-transparent"> Resolve</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estratégias comprovadas que transformam negócios pet care em máquinas de gerar clientes qualificados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent hover:scale-105"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-6`}>
                {solution.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair group-hover:text-purple-600 transition-colors">
                {solution.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {solution.description}
              </p>
              
              <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                <div className="text-purple-700 font-bold text-lg">
                  📈 {solution.results}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-premium rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">
            🎯 Resultado Garantido em 30 Dias
          </h3>
          <p className="text-xl text-gray-700 mb-6">
            Se não aumentarmos seu fluxo de clientes qualificados em 30 dias, devolvemos 100% do investimento.
          </p>
          <div className="text-2xl font-bold text-purple-600">
            Essa é nossa confiança no que fazemos.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
