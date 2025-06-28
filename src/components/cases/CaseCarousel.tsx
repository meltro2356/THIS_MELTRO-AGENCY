
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CaseItem } from '@/types/case';
import CaseCard from './CaseCard';

interface CaseCarouselProps {
  cases: CaseItem[];
}

const CaseCarousel = ({ cases }: CaseCarouselProps) => {
  const [currentCase, setCurrentCase] = useState(0);

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentCase * 100}%)` }}
        >
          {cases.map((caseItem) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} />
          ))}
        </div>
      </div>

      {/* Controles do Carrossel */}
      <button
        onClick={prevCase}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextCase}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicadores */}
      <div className="flex justify-center mt-8 space-x-2">
        {cases.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentCase(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentCase 
                ? 'bg-purple-600 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseCarousel;
