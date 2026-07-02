import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Cpu, Globe, Server, CloudLightning, GitPullRequest, Database, Sparkles } from 'lucide-react';

interface BentoItem {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: any;
  sizeClass: string;
  themeClass: string; // Tailored gradient/background setups
  tag: string;
}

const bentoItems: BentoItem[] = [
  {
    id: 1,
    title: "Angular Ecosystem",
    category: "FRONTEND",
    description: "Building scalable enterprise applications with Angular, TypeScript, RxJS, Signals, and reusable component-driven architectures.",
    icon: Code2,
    sizeClass: "md:col-span-8 lg:col-span-8",
    themeClass: "bg-surface hover:border-accent-green/20 text-text-primary",
    tag: "Primary Framework"
  },
  {
    id: 2,
    title: "TypeScript Core",
    category: "LANGUAGES",
    description: "Strict typing compile systems, custom utilities, and advanced interfaces for robust code compiler targets.",
    icon: Cpu,
    sizeClass: "md:col-span-4 lg:col-span-4",
    themeClass: "bg-gradient-to-br from-accent-orange/10 via-surface to-bg border border-accent-orange/10 hover:border-accent-orange/30 text-text-primary",
    tag: "Type Safe"
  },
  {
    id: 3,
    title: "Next.js Architecture",
    category: "FRAMEWORKS",
    description: "App router orchestration, SSR layouts, edge functions, and server actions configured for fast client delivery.",
    icon: Globe,
    sizeClass: "md:col-span-4 lg:col-span-4",
    themeClass: "bg-surface hover:border-accent-green/20 text-text-primary",
    tag: "Server Side"
  },
  {
    id: 4,
    title: "Node.js Platform",
    category: "BACKEND",
    description: "Async event processors, REST APIs, fastify integrations, and telemetry handlers with low execution times.",
    icon: Server,
    sizeClass: "md:col-span-4 lg:col-span-4",
    themeClass: "bg-gradient-to-br from-accent-green/5 via-surface to-bg border border-accent-green/10 hover:border-accent-green/30 text-text-primary",
    tag: "Scalable APIs"
  },
  {
    id: 5,
    title: "Spring Boot & Java",
    category: "BACKEND",
    description: "Microservices engine design, JPA integrations, Hibernate sync layers, and enterprise multi-threaded processes.",
    icon: Database,
    sizeClass: "md:col-span-4 lg:col-span-4",
    themeClass: "bg-surface hover:border-accent-green/20 text-text-primary",
    tag: "Java / Enterprise"
  },
  {
    id: 6,
    title: "Cloud & DevOps",
    category: "CLOUD",
    description: "Exploring cloud-native development with Google Cloud Platform while building a strong foundation in CI/CD, containerization, and modern deployment workflows.",
    icon: CloudLightning,
    sizeClass: "md:col-span-6 lg:col-span-6",
    themeClass: "bg-surface hover:border-accent-green/20 text-text-primary",
    tag: "Learning & Growth"
  },
  {
    id: 7,
    title: "Developer Tooling",
    category: "ENGINEERING",
    description: "Building internal utilities, exploring automation workflows, and creating tools that improve developer productivity and streamline engineering processes.",
    icon: GitPullRequest,
    sizeClass: "md:col-span-6 lg:col-span-6",
    themeClass: "bg-gradient-to-br from-accent-green/10 via-[#1a2512] to-surface border border-accent-green/20 hover:border-accent-green/40 text-text-primary",
    tag: "Developer Experience"
  }
];

const SkillsBento = () => {
  return (
    <section id="skills" className="py-24 bg-bg relative bg-dots">
      {/* Decorative Blur Background Blob */}
      <div className="absolute bottom-10 left-[10%] w-[400px] h-[400px] bg-accent-orange/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="flex flex-col space-y-3 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-green flex items-center gap-1.5">
            <Sparkles size={12} /> // CAPABILITIES
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-text-primary">
            SKILLS BENTO <span className="opacity-30">GRID.</span>
          </h2>
          <p className="font-sans text-xs text-text-secondary max-w-md mt-2">
            A visual overview of technologies and architectural disciplines prioritized in my standard development cycle.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {bentoItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`${item.sizeClass} group p-8 rounded-[28px] border border-border shadow-xl flex flex-col justify-between min-h-[220px] transition-colors relative overflow-hidden ${item.themeClass}`}
              >
                {/* Visual grid accent lines inside cards */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.02),transparent)] pointer-events-none" />

                {/* Top Row: Category and Arrow */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-bold text-text-secondary uppercase tracking-widest bg-bg/50 px-2.5 py-1 rounded-full border border-border/40">
                    {item.category}
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg/40 text-text-secondary group-hover:text-accent-green group-hover:border-accent-green/30 transition-all">
                    <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
                  </div>
                </div>

                {/* Center Content */}
                <div className="space-y-3 my-6">
                  <div className="flex items-center gap-2.5">
                    <div className="text-accent-green group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-heading text-lg font-bold tracking-tight text-text-primary">
                      {item.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs text-text-secondary leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Tag Row */}
                <div className="pt-4 border-t border-border/50 flex items-center justify-between font-mono text-[9px] text-text-secondary uppercase tracking-wider">
                  <span>{item.tag}</span>
                  <span className="opacity-0 group-hover:opacity-100 text-accent-green transition-opacity">SYS.INIT()</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SkillsBento;
