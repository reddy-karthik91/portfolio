import { Sparkles, Calendar } from 'lucide-react';

interface Position {
  period: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
  skills: string[];
}

const experienceData: Position[] = [
  {
    period: "DEC 2023 — PRESENT",
    role: "Software Engineer II",
    company: "Systemic Solutions Ltd",
    location: "Bengaluru, IN",
    highlights: [
      "Architected a modular component library using React 19 and custom utility tokens, resulting in a 40% reduction in code duplicates.",
      "Optimized client rendering speeds by implementing layout viewport checks and lazy-loaded components, boosting Core Web Vitals (LCP) by 25%.",
      "Mentored junior engineers and designed internal workshop guidelines regarding modular React design patterns."
    ],
    skills: ["React 19", "TypeScript", "Performance Tuning", "Vite", "Framer Motion"]
  },
  {
    period: "NOV 2021 — DEC 2023",
    role: "Frontend Engineer",
    company: "Vector Networks",
    location: "Bengaluru, IN",
    highlights: [
      "Engineered real-time telemetry dashboard interfaces with WebSocket communication, tracking up to 5,000 active node payloads per second.",
      "Replaced standard heavy UI dependencies with lightweight native CSS/JS custom modules, trimming final bundle payload sizes by 45KB.",
      "Ensured pixel-perfect alignment across multiple viewport scales utilizing CSS grid layouts and clean media queries."
    ],
    skills: ["React", "JavaScript", "WebSockets", "CSS Grid", "TailwindCSS", "PostCSS"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-bg border-t border-border bg-dots">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-green flex items-center gap-1.5">
              <Calendar size={12} /> // CAREER PROGRESS
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-text-primary">
              EXPERIENCE <span className="opacity-30">TIMELINE.</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-text-secondary md:text-right">
            <span className="block font-bold text-text-primary">SPAN: 4.6 YEARS</span>
            <span className="block text-[10px] text-text-muted">Accumulated Industry Experience</span>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-border pl-6 md:pl-8 space-y-12 max-w-4xl mx-auto">
          {experienceData.map((job, idx) => (
            <div key={idx} className="relative group">
              {/* Pulsing point icon on the vertical line */}
              <span className="absolute -left-[31px] md:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-bg border border-border group-hover:border-accent-green/50 transition-colors">
                <span className="h-1.5 w-1.5 rounded-full bg-text-secondary group-hover:bg-accent-green transition-colors" />
              </span>

              {/* Timeline Card */}
              <div className="p-6 md:p-8 bg-surface border border-border hover:border-accent-green/10 transition-colors rounded-[24px] shadow-xl">
                
                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 font-mono">
                  <span className="text-[10px] text-accent-green uppercase tracking-widest font-semibold flex items-center gap-1">
                    <Sparkles size={10} /> {job.period}
                  </span>
                  <span className="text-[10px] text-text-secondary uppercase">
                    {job.company} // {job.location}
                  </span>
                </div>

                {/* Role Details */}
                <h3 className="font-heading text-xl font-bold tracking-tight text-text-primary mb-4">
                  {job.role}
                </h3>

                <ul className="space-y-3 font-sans text-xs text-text-secondary mb-6 leading-relaxed">
                  {job.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex gap-2 items-start">
                      <span className="font-mono text-accent-green select-none mt-0.5">&gt;</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags leveraged */}
                <div className="pt-6 border-t border-border/50 flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-[9px] text-text-muted uppercase tracking-wider mr-2">
                    Skills:
                  </span>
                  {job.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="font-mono text-[9px] text-text-secondary bg-bg px-2.5 py-1 border border-border/60 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
