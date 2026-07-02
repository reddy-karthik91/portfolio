import { motion } from 'framer-motion';
import { ArrowUpRight, Heart, Palette, ChefHat, FileSearch } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  stats: {
    lines?: string;
    stars?: number;
  };
  icon: any;
  cardStyle: string; // Tailored gradients
  status: string;
}

const projectsData: Project[] = [
  {
    id: "01",
    title: "The Weekend Chef",
    category: "AI SAAS",
    status: "🚧 In Development",
    description:
      "An AI-powered recipe and meal planning platform that helps users discover recipes, generate personalized meal plans, and simplify weekend cooking. Built with a scalable full-stack architecture featuring secure authentication, modern UI, and an extensible backend designed for future AI capabilities.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "Flask",
      "JWT",
      "REST API"
    ],
    githubUrl: "https://github.com/yourusername/weekend-chef",
    demoUrl: "",
    stats: {
      lines: "10k+ LOC",
      stars: 100
    },
    icon: ChefHat,
    cardStyle:
      "bg-surface hover:border-accent-green/30 shadow-2xl"
  },
  {
    id: "02",
    title: "Matrimony Platform",
    category: "WEB APPLICATION",
    status: "💼 Professional Experience",
    description:
      "Developed and enhanced features for a large-scale matrimony platform, focusing on responsive user interfaces, profile management, matchmaking workflows, and performance optimization. Collaborated with cross-functional teams to deliver scalable, production-ready features using modern Angular architecture.",
    tech: [
      "Angular",
      "TypeScript",
      "RxJS",
      "Angular Material",
      "REST API"
    ],
    githubUrl: "",
    stats: {
      lines: "10k+ LOC",
      stars: 100
    },
    icon: Heart,
    cardStyle:
      "bg-gradient-to-br from-accent-orange/10 via-surface to-bg border border-accent-orange/10 hover:border-accent-orange/30"
  },
  {
    id: "03",
    title: "Chromaura",
    category: "E-COMMERCE",
    status: "💡 Concept Project",
    description:
      "A modern color-driven e-commerce platform where users discover and shop products based on their favorite colors instead of traditional categories. Designed with an intuitive shopping experience, responsive UI, and scalable architecture for future AI-powered recommendations and personalization.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "REST API"
    ],
    githubUrl: "https://github.com/yourusername/chromaura",
    demoUrl: "https://chromaura.com",
    stats: {
      lines: "10k+ LOC",
      stars: 100
    },
    icon: Palette,
    cardStyle: "bg-surface hover:border-accent-green/30"
  },
  // {
  //   id: "04",
  //   title: "Re-Style",
  //   category: "FASHION E-COMMERCE",
  //   status: "💡 Concept Project",
  //   description:
  //     "A modern online fashion platform built with Next.js, offering a fast and responsive shopping experience for clothing and accessories. Features product discovery, category-based browsing, responsive design, and an optimized frontend architecture for seamless user interactions.",
  //   tech: [
  //     "Next.js",
  //     "React",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "REST API"
  //   ],
  //   githubUrl: "https://github.com/reddy-karthik91/re-style",
  //   demoUrl: "https://re-style-nu.vercel.app/",
  //   stats: {
  //     lines: "10k+ LOC",
  //     stars: 100
  //   },
  //   icon: ShoppingBag,
  //   cardStyle:
  //     "bg-gradient-to-br from-accent-green/5 via-surface to-bg border border-accent-green/10 hover:border-accent-green/30"
  // }
  {
    id: "05",
    title: "AI Resume Analyzer",
    category: "AI PLATFORM",
    status: "🚧 In Development",
    description:
      "An AI-powered resume analysis platform that evaluates resumes against job descriptions, provides ATS compatibility scores, identifies skill gaps, and generates actionable recommendations to help job seekers improve their chances of getting shortlisted. Built with a scalable full-stack architecture and designed for future AI-driven career guidance.",
    tech: [
      "React",
      "TypeScript",
      "Python",
      "Flask",
      "JWT",
      "REST API",
      "OpenAI",
      "PDF Processing"
    ],
    githubUrl: "https://github.com/yourusername/ai-resume-analyzer",
    demoUrl: "",
    stats: {
      lines: "10k+ LOC",
      stars: 100,
    },
    icon: FileSearch,
    cardStyle:
      "bg-gradient-to-br from-accent-blue/10 via-surface to-bg border border-accent-blue/10 hover:border-accent-blue/30"
  },
];

const GithubIcon = ({ size = 14, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-bg border-t border-border bg-grid">
      <div className="container mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-green">// SYSTEM APPLICATIONS</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-text-primary">
              THINGS I'VE <span className="opacity-30">BUILT.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-text-secondary max-w-sm">
            High-performance applications built focusing on design coherence, browser limits, and bundle size performance.
          </p>
        </div>

        {/* Bento Grid layout of projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => {
            const ProjectIcon = project.icon;
            return (
              <motion.div
                key={project.id}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group p-8 rounded-[28px] border border-border flex flex-col justify-between min-h-[360px] relative overflow-hidden transition-all duration-300 ${project.cardStyle}`}
              >
                {/* Visual tech line grids on backgrounds */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.015),transparent)] pointer-events-none" />

                {/* Card Top: ID and Status tags */}
                <div className="flex items-center justify-between font-mono text-[9px] text-text-secondary">
                  <div className="flex items-center gap-2">
                    <span className="text-accent-green font-bold">{project.id}</span>
                    <span>/</span>
                    <span className="bg-bg/50 px-2 py-0.5 border border-border/60 rounded-full">{project.category}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="bg-bg/50 px-2.5 py-1 border border-border/60 rounded-full font-mono text-[8px] text-text-secondary">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="space-y-4 my-8">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl border border-border bg-bg/50 flex items-center justify-center text-accent-green group-hover:scale-105 transition-transform">
                      <ProjectIcon size={16} />
                    </div>
                    <h3 className="font-heading text-xl font-bold tracking-tight text-text-primary group-hover:text-accent-green transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Card Bottom: Tech stacks and Link metrics */}
                <div className="space-y-5">
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                    {project.tech.map((techItem) => (
                      <span
                        key={techItem}
                        className="font-mono text-[9px] text-text-secondary bg-bg/30 px-2 py-0.5 border border-border/40 rounded-sm"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between font-mono text-[10px] text-text-secondary pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-text-primary transition-colors group/link"
                    >
                      <GithubIcon size={12} className="group-hover/link:rotate-12 transition-transform" />
                      <span>source_code</span>
                    </a>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-accent-green hover:underline group/link font-bold"
                      >
                        <span>live_deploy</span>
                        <ArrowUpRight size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
