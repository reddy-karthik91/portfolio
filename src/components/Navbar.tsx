import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', label: '// home' },
  { id: 'about', label: '// about' },
  { id: 'skills', label: '// skills' },
  { id: 'projects', label: '// projects' },
  { id: 'experience', label: '// timeline' },
  { id: 'contact', label: '// connect' }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      {/* Main Glass Navbar Pill */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-full max-w-4xl glass-panel rounded-full py-2.5 px-6 flex items-center justify-between shadow-2xl relative"
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
          className="flex items-center gap-2 group font-mono text-xs font-bold text-text-primary uppercase tracking-tight"
        >
          <div className="flex h-6 w-6 items-center justify-center border border-border bg-bg text-accent-green group-hover:border-accent-green/50 transition-colors rounded-sm">
            <Terminal size={12} />
          </div>
          <span className="group-hover:text-accent-green transition-colors">Karthik.R</span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 font-mono text-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 rounded-full transition-colors duration-300 outline-none cursor-pointer ${isActive ? 'text-bg font-semibold' : 'text-text-secondary hover:text-text-primary'
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-indicator"
                    className="absolute inset-0 bg-accent-green rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Mini Meta Info (Desktop) */}
        <div className="hidden lg:flex items-center gap-3 font-mono text-[10px] text-text-secondary">
          <span className="inline-block h-2 w-2 rounded-full bg-accent-green animate-pulse" />
          <span>SYS: ONLINE</span>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-text-primary hover:text-accent-green hover:border-accent-green/30 transition-colors"
        >
          {mobileMenuOpen ? <X size={14} /> : <Menu size={14} />}
        </button>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 glass-panel rounded-2xl p-4 flex flex-col gap-2 shadow-3xl border border-border/80 z-40 md:hidden"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left font-mono text-xs py-3 px-4 rounded-xl transition-all flex items-center justify-between ${isActive
                      ? 'bg-accent-green/10 text-accent-green font-bold border-l-2 border-accent-green'
                      : 'text-text-secondary hover:bg-surface hover:text-text-primary'
                    }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-[10px]">&lt;active&gt;</span>}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
