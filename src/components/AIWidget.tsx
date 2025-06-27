
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const AIWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-cta hover:opacity-90 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-slow"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Widget Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-40 animate-slide-up">
          <div className="bg-gradient-hero text-white p-4 rounded-t-2xl">
            <h3 className="font-bold text-lg">💬 Tire Suas Dúvidas</h3>
            <p className="text-sm opacity-90">Nosso assistente IA está aqui para ajudar!</p>
          </div>
          
          <div className="p-6">
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-3 text-sm">
                <strong>🤖 Assistente:</strong> Olá! Como posso ajudar você a transformar sua agenda vazia em lucro?
              </div>
              
              <div className="space-y-2">
                <button className="w-full text-left bg-purple-50 hover:bg-purple-100 p-3 rounded-lg text-sm transition-colors border border-purple-200">
                  📊 Como funciona o Google Ads para veterinárias?
                </button>
                <button className="w-full text-left bg-blue-50 hover:bg-blue-100 p-3 rounded-lg text-sm transition-colors border border-blue-200">
                  💰 Qual o investimento mínimo necessário?
                </button>
                <button className="w-full text-left bg-green-50 hover:bg-green-100 p-3 rounded-lg text-sm transition-colors border border-green-200">
                  ⏰ Em quanto tempo vejo resultados?
                </button>
              </div>
            </div>
            
            <button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Falar com Especialista
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIWidget;
