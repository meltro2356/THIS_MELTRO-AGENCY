
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold mb-4 sm:mb-6 leading-tight px-2">
            Transforme Sua Agenda 
            <span className="block bg-gradient-to-r from-pink-300 to-yellow-300 bg-clip-text text-transparent">
              Vazia em Lucro
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light px-4">
            <strong>Aumente o faturamento do seu negócio pet ainda esse mês.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-cta hover:opacity-90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Quero Mais Clientes Agora
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto bg-white/20 border-white/30 text-white hover:bg-white/30 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full backdrop-blur-sm"
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Ver Cases de Sucesso
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold mb-2">300%</div>
              <div className="text-sm opacity-90">Aumento médio em consultas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold mb-2">24h</div>
              <div className="text-sm opacity-90">Para primeiros resultados</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold mb-2">R$ 50M+</div>
              <div className="text-sm opacity-90">Faturamento gerado em 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
