import { BarChart3, ChevronDown } from 'lucide-react';

interface HeroProps {
  onScrollTo: (section: string) => void;
}

export function Hero({ onScrollTo }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 hero-glow relative">
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
          <BarChart3 className="w-4 h-4 text-primary" />
          <span className="text-sm text-gray-300">Business Intelligence & Analytics</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="gradient-text">Dargys Pérez</span>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Transforming raw data into actionable insights. Passionate about uncovering stories hidden in numbers.
        </p>
        
        <div className="flex items-center justify-center gap-4">
          <button 
            onClick={() => onScrollTo('contact')}
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-background font-semibold rounded-lg transition-colors"
          >
            Get in Touch
          </button>
          <button 
            onClick={() => onScrollTo('skills')}
            className="px-8 py-3 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors"
          >
            View Skills
          </button>
        </div>
        
        <button 
          onClick={() => onScrollTo('about')}
          className="mt-16 text-gray-400 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
