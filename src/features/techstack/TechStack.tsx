import { Cpu } from 'lucide-react';

const technologies = [
  { name: "Angular", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Next.js", category: "Framework" },
  { name: "Node.js", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "Java SE", category: "Language" },
  { name: "Google Cloud", category: "DevOps" },
  { name: "TailwindCSS v4", category: "Styling" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Git", category: "VCS" },
  { name: "ESLint", category: "Linting" },
  { name: "Chrome Extensions MV3", category: "API" }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 bg-bg border-t border-border overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Sub-label */}
        <div className="flex items-center gap-2 mb-10 font-mono text-[10px] text-text-secondary">
          <Cpu size={12} className="text-accent-green" />
          <span>// PRIMARY TECH STACK INTEGRATIONS</span>
        </div>

        {/* Flex Loop Marquee / Responsive Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="p-4 bg-surface border border-border rounded-xl flex flex-col justify-between min-h-[90px] group hover:border-accent-green/20 transition-colors"
            >
              <span className="font-heading text-xs font-bold text-text-primary group-hover:text-accent-green transition-colors">
                {tech.name}
              </span>
              <span className="font-mono text-[8px] text-text-secondary uppercase tracking-widest mt-3">
                {tech.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
