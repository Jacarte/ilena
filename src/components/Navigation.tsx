import { BarChart3 } from 'lucide-react';

interface NavigationProps {
  onScrollTo: (section: string) => void;
}

export function Navigation({ onScrollTo }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-primary font-semibold text-lg">
          <BarChart3 className="w-6 h-6" />
          <span>DP</span>
        </a>
        
        <div className="flex items-center gap-8">
          <button 
            onClick={() => onScrollTo('about')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => onScrollTo('skills')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => onScrollTo('contact')}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
