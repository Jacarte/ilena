import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about data analytics.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a 
            href="mailto:diperez0494@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-background font-semibold rounded-lg transition-colors"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </a>
          
          <a 
            href="https://www.linkedin.com/in/dargysperez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          
        </div>
        
        <div className="flex items-center justify-center gap-2 text-gray-400">
          <MapPin className="w-5 h-5 text-primary" />
          <span>Stockholm, Sweden</span>
        </div>
      </div>
    </section>
  );
}
