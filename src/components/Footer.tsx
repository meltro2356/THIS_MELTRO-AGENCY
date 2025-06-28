
import { Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div>
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold mb-3 sm:mb-4 text-purple-400">
              Meltro Agency
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Especialistas em marketing digital para o setor pet care. 
              Transformamos agendas vazias em fluxo constante de clientes qualificados.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/meltro_agency7857/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-purple-600 hover:bg-purple-700 p-2.5 sm:p-3 rounded-full transition-colors"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <Link to="/servicos">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Nossos Serviços
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">© 2025 Meltro Agency. Todos os direitos reservados.</p>
          <p className="mt-2 text-xs sm:text-sm">
            Performance real para negócios que cuidam de vidas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
