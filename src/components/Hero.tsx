
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
            Transforme Sua Agenda 
            <span className="block bg-gradient-to-r from-pink-300 to-yellow-300 bg-clip-text text-transparent">
              Vazia em Lucro
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Especialistas em tráfego pago para <strong>clínicas veterinárias</strong>, <strong>creches pet</strong> e <strong>serviços premium</strong>. 
            Performance real para negócios que cuidam de vidas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-cta hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Quero Mais Clientes Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/20 border-white/30 text-white hover:bg-white/30 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Cases de Sucesso
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">300%</div>
              <div className="text-sm opacity-90">Aumento médio em consultas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">24h</div>
              <div className="text-sm opacity-90">Para primeiros resultados</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">R$ 50M+</div>
              <div className="text-sm opacity-90">Faturamento gerado em 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
