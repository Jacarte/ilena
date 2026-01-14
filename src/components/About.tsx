import { Download, Database, BarChart2, Lightbulb, Puzzle } from 'lucide-react';

export function About() {
  const cards = [
    {
      icon: Database,
      title: 'Data Management',
      description: 'Expert in organizing and maintaining complex datasets',
    },
    {
      icon: BarChart2,
      title: 'Analytics',
      description: 'Creating meaningful visualizations that tell stories',
    },
    {
      icon: Lightbulb,
      title: 'Strategic Insights',
      description: 'Turning data patterns into business strategies',
    },
    {
      icon: Puzzle,
      title: 'Problem Solving',
      description: 'Finding innovative solutions through data analysis',
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          A dedicated student pursuing Business Intelligence Analytics, driven by curiosity and a passion for data-driven decision making.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Currently studying Business Intelligence Analytics in Nackademin, I bring a unique blend of creative problem-solving and data-driven decision making. With a Master's degree in Industrial Design from ISDI - University of Havana (2017) and almost 10 years of professional experience, my background now enhances my approach to data visualization—creating insights that are not only accurate but intuitive and accessible.
            </p>
            
            <a 
              href="/cv.pdf"
              download="Dargys_Perez_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-background font-semibold rounded-lg transition-colors"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="text-2xl font-bold text-primary tracking-wider">
              DATA → INSIGHTS → ACTION
            </div>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div 
              key={card.title}
              className="p-6 rounded-xl bg-background-light/50 border border-white/5 hover:border-primary/30 transition-colors"
            >
              <card.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-400 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
