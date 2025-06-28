
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'Sobre Nós' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/casos', label: 'Estudos de Caso' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl sm:text-3xl font-playfair font-bold text-purple-600">
              Meltro Agency
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-purple-600 ${
                  isActive(item.path) 
                    ? 'text-purple-600 border-b-2 border-purple-600 pb-1' 
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-gradient-cta hover:opacity-90 text-white px-6 py-2 rounded-full">
              Falar Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-purple-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors hover:text-purple-600 px-2 py-1 ${
                    isActive(item.path) ? 'text-purple-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="bg-gradient-cta hover:opacity-90 text-white px-6 py-2 rounded-full w-fit">
                Falar Conosco
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
