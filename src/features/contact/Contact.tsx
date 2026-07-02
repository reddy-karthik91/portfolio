import React, { useState } from 'react';
import { Mail, Send, Sparkles, Compass } from 'lucide-react';

const GithubIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setEmail('');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-bg border-t border-border bg-grid">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Left: Contact Info (5 Columns) */}
          <div className="lg:col-span-5 p-8 bg-surface border border-border rounded-[28px] flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-accent-green">// TRANSMISSION NODE</span>
              <h2 className="text-3xl font-heading font-bold uppercase tracking-tight text-text-primary">
                ESTABLISH <span className="opacity-30">PIPELINE.</span>
              </h2>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                Have a project design spec, an opening for an engineer, or want to discuss core performance logic? Drop a signal below.
              </p>
            </div>

            <div className="space-y-8 mt-12">
              {/* Direct Links */}
              <div className="space-y-3 font-mono text-[10px] text-text-secondary">
                <a 
                  href="mailto:karthik@example.com" 
                  className="flex items-center gap-3 hover:text-accent-green transition-colors group"
                >
                  <div className="flex h-7 w-7 items-center justify-center border border-border bg-bg text-text-secondary group-hover:border-accent-green/30 transition-colors rounded-sm">
                    <Mail size={12} />
                  </div>
                  <span>karthik@example.com</span>
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-accent-green transition-colors group"
                >
                  <div className="flex h-7 w-7 items-center justify-center border border-border bg-bg text-text-secondary group-hover:border-accent-green/30 transition-colors rounded-sm">
                    <GithubIcon size={12} />
                  </div>
                  <span>github.com/reddy-karthik91</span>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-accent-green transition-colors group"
                >
                  <div className="flex h-7 w-7 items-center justify-center border border-border bg-bg text-text-secondary group-hover:border-accent-green/30 transition-colors rounded-sm">
                    <LinkedinIcon size={12} />
                  </div>
                  <span>linkedin.com/in/reddykarthik</span>
                </a>
              </div>

              {/* Ping stats */}
              <div className="border-t border-border/50 pt-4 font-mono text-[9px] text-text-muted flex items-center justify-between">
                <span>TIME: IST (UTC+5:30)</span>
                <span className="flex items-center gap-1">
                  <Compass size={10} /> ping ~24h
                </span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form (7 Columns) */}
          <div className="lg:col-span-7 p-8 bg-surface border border-border rounded-[28px] shadow-xl flex flex-col justify-center">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 border border-dashed border-accent-green/20 bg-bg/50 rounded-2xl min-h-[320px]">
                <Sparkles className="text-accent-green mb-4 animate-bounce" size={24} />
                <p className="font-mono text-xs font-bold text-text-primary mb-2">PIPELINE.LOGGED</p>
                <p className="font-sans text-xs text-text-secondary max-w-xs leading-relaxed">
                  Your communication has been processed. I will reply to you as soon as the queue clears.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Inputs block */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                      // NAME
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      className="w-full border border-border bg-bg/50 px-4 py-3 text-xs rounded-xl focus:outline-none focus:border-accent-green/30 focus:bg-bg transition-all placeholder:text-text-secondary/50 font-sans text-text-primary"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                      // EMAIL
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="client@company.com"
                      className="w-full border border-border bg-bg/50 px-4 py-3 text-xs rounded-xl focus:outline-none focus:border-accent-green/30 focus:bg-bg transition-all placeholder:text-text-secondary/50 font-sans text-text-primary"
                    />
                  </div>

                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                    // TRANSMISSION BODY
                  </label>
                  <textarea 
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter project specs, roles details, or messaging context..."
                    className="w-full border border-border bg-bg/50 px-4 py-3 text-xs rounded-xl focus:outline-none focus:border-accent-green/30 focus:bg-bg transition-all placeholder:text-text-secondary/50 resize-none font-sans text-text-primary leading-relaxed"
                  />
                </div>

                {/* Submit button */}
                <button 
                  type="submit"
                  className="cursor-pointer w-full inline-flex items-center justify-center gap-2 bg-accent-green text-bg px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-bg hover:scale-[1.01] transition-all duration-300 active:scale-95 shadow-[0_0_30px_rgba(168,255,53,0.15)] hover:shadow-none"
                >
                  <span>Transmit Transmission</span>
                  <Send size={12} />
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
