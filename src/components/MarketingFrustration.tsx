import { TrendingDown, Eye, Instagram } from 'lucide-react';

const MarketingFrustration = () => {
  const frustrations = [
    {
      icon: <TrendingDown className="h-12 w-12 text-red-500" />,
      title: "Custo por clique cada vez mais alto",
      description: "Você investe em anúncios, mas o custo por clique está cada vez mais alto."
    },
    {
      icon: <Eye className="h-12 w-12 text-orange-500" />,
      title: "Site invisível no Google",
      description: "Você tenta crescer no Google, mas seu site continua invisível."
    },
    {
      icon: <Instagram className="h-12 w-12 text-purple-500" />,
      title: "Posts sem engajamento",
      description: "Você posta no Instagram, mas não engaja."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-red-50 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-200/20 rounded-full blur-3xl translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -translate-x-32 translate-y-32"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6 px-2">
            Você já percebeu como o 
            <span className="text-red-500"> marketing digital</span> pode ser
            <span className="text-orange-500"> frustrante</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {frustrations.map((frustration, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100"
            >
              <div className="mb-6 flex justify-center">
                {frustration.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                {frustration.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {frustration.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-white mb-4">
              O problema não é a ferramenta.
            </h3>
            <p className="text-xl text-white/90 font-semibold">
              É a estratégia por trás da ferramenta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingFrustration;