
const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍💼</div>
                    <div className="text-xl font-bold text-gray-800">Fundador</div>
                    <div className="text-purple-600 font-semibold">Meltro Agency</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                Por Que Criei a 
                <span className="text-purple-600"> Meltro</span>
              </h2>
              
              <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
                <p>
                  "Depois de atender grandes players de fora, percebi o quanto o setor pet care no Brasil estava carente de marketing sério e com resultado."
                </p>
                
                <p>
                  "Vi clínicas veterinárias brilhantes lutando para encher a agenda, hospitais 24h invisíveis no momento que mais precisavam aparecer, e serviços premium sendo confundidos com o básico."
                </p>
                
                <p className="font-semibold text-purple-600">
                  "A Meltro nasce disso: performance de verdade, para negócios que realmente cuidam de vidas."
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Minha Missão</h3>
                <p className="text-gray-700">
                  Transformar cada negócio pet care em uma referência local, gerando impacto real na vida dos pets e retorno garantido para os proprietários.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
