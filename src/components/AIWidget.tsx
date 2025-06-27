
import { MessageCircle, X, Instagram } from 'lucide-react';
import { useState } from 'react';

const AIWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999', '_blank');
    setShowPopup(false);
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/meltroagency', '_blank');
    setShowPopup(false);
  };

  return (
    <>
      {/* Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleButtonClick}
          className="bg-gradient-cta hover:opacity-90 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-slow"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm w-full mx-4 relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Entre em Contato</h3>
              <p className="text-gray-600">Escolha sua plataforma preferida</p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </button>
              
              <button
                onClick={handleInstagram}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </button>
            </div>
          </div>
        </div>
      )}

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
