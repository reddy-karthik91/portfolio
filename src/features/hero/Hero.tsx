import { motion, type Variants } from 'framer-motion';
import { Mail, Compass, ShieldCheck, ArrowRight, ArrowDown } from 'lucide-react';
import profilePic from '../../assets/reddy_karthik.png';

// Inline SVGs to avoid package version issues
const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid">
      {/* Radial spotlight effect behind content */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-green/5 blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/2 right-[10%] w-[350px] h-[350px] bg-accent-orange/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <motion.div
        className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-stretch z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Left Side: Profile Card (Columns: 4/12) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-4 flex flex-col justify-between p-6 bg-surface border border-border rounded-[24px] shadow-2xl relative overflow-hidden"
        >
          {/* Subtle decoration inside ProfileCard */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent-green/5 blur-xl rounded-full" />

          <div className="space-y-6 relative z-10">
            {/* Header info */}
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 px-2.5 py-1 bg-accent-green/10 text-accent-green rounded-full font-mono text-[9px] font-bold uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse" />
                Active now
              </span>
              <span className="font-mono text-[9px] text-text-secondary flex items-center gap-1">
                <Compass size={10} /> Visakhapatnam, IN
              </span>
            </div>

            {/* Profile Avatar & Details */}
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full overflow-hidden border border-border p-1 bg-bg flex-shrink-0">
                <img src={profilePic} alt="Karthik Profile" className="h-full w-full object-cover rounded-full grayscale" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold tracking-tight text-text-primary">Reddy Karthik</h3>
                <p className="font-mono text-[10px] text-accent-green uppercase tracking-wider">Software Engineer</p>
              </div>
            </div>

            {/* Short technical bio */}
            <p className="font-sans text-xs text-text-secondary leading-relaxed">
              Designing software that scales with people and products. With <strong className="text-text-primary">4.6 years of professional experience,</strong> I build reliable, maintainable applications where thoughtful architecture meets exceptional user experience.
            </p>
          </div>

          {/* Socials & Meta */}
          <div className="mt-8 pt-6 border-t border-border flex items-center justify-between font-mono text-[10px] text-text-secondary">
            <div className="flex items-center gap-4">
              <a href="https://github.com/reddy-karthik91" target="_blank" rel="noopener noreferrer" className="hover:text-accent-green transition-colors">
                <GithubIcon size={14} />
              </a>
              <a href="https://www.linkedin.com/in/reddy-karthik91/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-green transition-colors">
                <LinkedinIcon size={14} />
              </a>
              <a href="mailto:reddykarthik2491@gmail.com" className="hover:text-accent-green transition-colors">
                <Mail size={14} />
              </a>
            </div>

            <div className="flex items-center gap-1">
              <ShieldCheck size={12} className="text-accent-green" />
              <span>STK: VERIFIED</span>
            </div>
          </div>
        </motion.div>

        {/* Center: Hero Typography & CTAs (Columns: 5/12) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8 lg:px-4">
          <motion.div variants={itemVariants} className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent-green">// REDESIGNED INTERFACE</span>

            {/* Huge dynamic typography */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-heading font-bold tracking-tight text-text-primary leading-[1.05] uppercase">
              Building<br />
              Digital<br />
              <span className="opacity-30">Experiences.</span>
            </h1>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <button
              onClick={handleScrollToProjects}
              className="cursor-pointer group flex items-center gap-2 bg-accent-green text-bg font-mono text-[11px] font-bold uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-white hover:text-bg hover:scale-[1.02] transition-all duration-300 active:scale-95 shadow-[0_0_30px_rgba(168,255,53,0.2)] hover:shadow-none"
            >
              <span>View Projects</span>
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleScrollToContact}
              className="cursor-pointer font-mono text-[11px] font-bold uppercase tracking-wider text-text-primary px-6 py-3.5 rounded-full border border-border bg-surface/50 hover:bg-surface hover:text-accent-green hover:border-accent-green/20 transition-all duration-300"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Statistics Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 pt-6 border-t border-border font-mono"
          >
            <div>
              <p className="text-xl md:text-2xl font-bold font-heading text-text-primary flex items-baseline gap-0.5">
                4.6<span className="text-xs text-accent-green font-normal">+</span>
              </p>
              <p className="text-[9px] uppercase tracking-wider text-text-secondary mt-1">// Years Exp</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold font-heading text-text-primary flex items-baseline gap-0.5">
                5<span className="text-xs text-accent-green font-normal">+</span>
              </p>
              <p className="text-[9px] uppercase tracking-wider text-text-secondary mt-1">// Projects</p>
            </div>
            <div >
              <p className="text-xl md:text-2xl font-bold font-heading text-text-primary flex items-baseline gap-0.5">
                ∞<span className="text-xs text-accent-green font-normal">+</span>
              </p>
              <p className="text-[9px] uppercase tracking-wider text-text-secondary mt-1">// Curiosity</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Portrait Frame (Columns: 3/12) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-3 flex items-center justify-center"
        >
          <div className="relative group w-full max-w-[280px] aspect-[4/5] border border-border bg-surface p-3.5 rounded-[24px] shadow-2xl overflow-hidden hover:border-accent-green/20 transition-all duration-300">

            {/* Visual Crosshairs / Tech lines */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-text-secondary/50 pointer-events-none" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-text-secondary/50 pointer-events-none" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-text-secondary/50 pointer-events-none" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-text-secondary/50 pointer-events-none" />

            {/* Inner Border Screen */}
            <div className="w-full h-full rounded-[16px] overflow-hidden bg-bg relative">
              <img
                src={profilePic}
                alt="Portrait Reddy Karthik"
                className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* Decorative Tech Metrics Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 bg-bg/70 backdrop-blur-xs text-[8px] font-mono text-text-secondary px-1.5 py-0.5 rounded border border-border uppercase">
                ISO 400
              </div>
              <div className="absolute bottom-3 right-3 text-[8px] font-mono text-accent-green/80 flex items-center gap-1">
                <span className="h-1.5 w-1.5 bg-accent-green rounded-full inline-block animate-ping" />
                RENDER: SUCCESS
              </div>
            </div>

          </div>
        </motion.div>

      </motion.div>

      {/* Decorative arrow helper at bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 font-mono text-[9px] text-text-secondary opacity-50 z-10 animate-bounce">
        <span>SCROLL DOWN</span>
        <ArrowDown size={10} />
      </div>
    </section>
  );
};

export default Hero;