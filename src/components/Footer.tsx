
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-playfair font-bold mb-4 text-purple-400">
              Meltro Agency
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Especialistas em marketing digital para o setor pet care. 
              Transformamos agendas vazias em fluxo constante de clientes qualificados.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-purple-600 hover:bg-purple-700 p-3 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2 flex flex-col items-center justify-center">
            <Link to="/servicos">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Nossos Serviços
              </Button>
            </Link>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-purple-400">Contato</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="mailto:contato@meltroagency.com" className="hover:text-white transition-colors">
                  contato@meltroagency.com
                </a>
              </li>
              <li>
                <a href="tel:+5511999999999" className="hover:text-white transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Meltro Agency. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Performance real para negócios que cuidam de vidas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
