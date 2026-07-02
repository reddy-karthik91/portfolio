import { Quote, User } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Director of Engineering",
    company: "Systemic Solutions Ltd",
    text: "Karthik has an exceptional grasp of client performance frameworks. His refactoring of our core codebase decreased render delays by 25% and established a scalable structure our team loves."
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Product Owner",
    company: "Vector Networks",
    text: "Working with Karthik was a frictionless experience. He bridges high-fidelity UI design demands with highly performant, type-safe React engineering. A true professional."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-bg border-t border-border bg-grid">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-green">// DEPLOYMENT FEEDBACK</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-text-primary">
            CLIENT <span className="opacity-30">REVIEWS.</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonialsData.map((t) => (
            <div 
              key={t.id}
              className="p-8 bg-surface border border-border rounded-[28px] flex flex-col justify-between relative overflow-hidden group shadow-xl hover:border-accent-green/10 transition-colors"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-6 text-border/20 group-hover:text-accent-green/5 transition-colors">
                <Quote size={40} />
              </div>

              <p className="font-sans text-sm text-text-secondary leading-relaxed italic mb-8 relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-6 border-t border-border/50">
                <div className="h-9 w-9 rounded-full border border-border bg-bg/50 flex items-center justify-center text-text-secondary">
                  <User size={14} />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-text-primary">{t.name}</h4>
                  <p className="font-mono text-[9px] text-accent-green uppercase tracking-wider">
                    {t.role} // {t.company}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
