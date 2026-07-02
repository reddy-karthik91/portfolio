import { Terminal, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg border-t border-border py-12 relative overflow-hidden font-mono text-[10px] text-text-secondary">
      {/* Subtle lines at footer bottom */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-accent-green via-bg to-accent-orange opacity-30" />

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: Copyright */}
        <div className="flex items-center gap-2.5">
          <Terminal size={14} className="text-accent-green" />
          <span>© {currentYear} REDDY KARTHIK. DESIGN INSPIRED BY IMAGINATION.</span>
        </div>

        {/* Right: Environment indicators */}
        <div className="flex flex-wrap items-center gap-6 text-[9px] text-text-muted">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-ping" />
            <span className="text-text-secondary font-bold">ALL SERVICES RUNNING</span>
          </div>
          <span className="hidden sm:inline">|</span>
          <div className="flex items-center gap-1">
            <Shield size={10} className="text-accent-green" />
            <span>SECURE HOST</span>
          </div>
          <span className="hidden sm:inline">|</span>
          <span>NETLIFY CLUSTER DEPLOY</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
