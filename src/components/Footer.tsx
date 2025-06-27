import { Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const Footer = () => {
  return <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-3xl font-playfair font-bold mb-4 text-purple-400">
              Meltro Agency
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Especialistas em marketing digital para o setor pet care. 
              Transformamos agendas vazias em fluxo constante de clientes qualificados.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/meltroagency" target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 p-3 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <Link to="/servicos">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Nossos Serviços
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>© 2025 Meltro Agency. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Performance real para negócios que cuidam de vidas.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;