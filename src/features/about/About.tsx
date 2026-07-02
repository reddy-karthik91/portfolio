import { Shield, FastForward, Eye } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-bg border-t border-border bg-grid">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Heading (Columns 4/12) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-green">// BIO & PHILOSOPHY</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight text-text-primary leading-tight">
              DESIGNED FOR<br />
              PERFORMANCE.<br />
              <span className="opacity-30">BUILT TO LAST.</span>
            </h2>
          </div>

          {/* Right Column: Paragraphs (Columns 8/12) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-sans text-sm text-text-secondary leading-relaxed">
              <div className="space-y-4">
                <p>
                  As a Software Engineer, I'm fascinated by how thoughtful architecture transforms complex challenges into simple, reliable solutions. I enjoy building software with scalability, maintainability, and performance in mind, always aiming to create systems that empower both users and the developers who work on them.                </p>
                <p>
                  I believe codebases should be self-documenting, lightweight, and easily extendable. I avoid importing large third-party widgets, instead crafting custom CSS grids and hooks tailored to layout parameters.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  My development philosophy is inspired by Swiss design principles—clarity, precision, and purposeful simplicity. I strive to build systems that deliver a premium user experience through thoughtful architecture, intuitive interfaces, and efficient resource utilization.                </p>
                <p>
                  Beyond building user interfaces, I enjoy exploring the engineering behind software—optimizing build pipelines, experimenting with developer tooling, and creating utilities that improve development workflows. I'm always curious about how systems work beneath the surface and how they can be made more efficient.                </p>
              </div>
            </div>

            {/* Core Values Bento Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-border/60">

              {/* Value 1 */}
              <div className="p-5 bg-surface border border-border rounded-2xl flex flex-col gap-3">
                <div className="h-8 w-8 rounded-lg border border-border bg-bg/50 flex items-center justify-center text-accent-green">
                  <FastForward size={14} />
                </div>
                <div>
                  <h4 className="font-heading text-xs font-bold text-text-primary uppercase">Performance First</h4>
                  <p className="font-sans text-[11px] text-text-secondary mt-1 leading-relaxed">
                    Optimizing bundle payloads, caching hooks, and monitoring Core Web Vitals (LCP/INP).
                  </p>
                </div>
              </div>

              {/* Value 2 */}
              <div className="p-5 bg-surface border border-border rounded-2xl flex flex-col gap-3">
                <div className="h-8 w-8 rounded-lg border border-border bg-bg/50 flex items-center justify-center text-accent-green">
                  <Shield size={14} />
                </div>
                <div>
                  <h4 className="font-heading text-xs font-bold text-text-primary uppercase">Type Security</h4>
                  <p className="font-sans text-[11px] text-text-secondary mt-1 leading-relaxed">
                    Strict TypeScript architecture, API type synchronizations, and bulletproof static compilation check gates.
                  </p>
                </div>
              </div>

              {/* Value 3 */}
              <div className="p-5 bg-surface border border-border rounded-2xl flex flex-col gap-3">
                <div className="h-8 w-8 rounded-lg border border-border bg-bg/50 flex items-center justify-center text-accent-green">
                  <Eye size={14} />
                </div>
                <div>
                  <h4 className="font-heading text-xs font-bold text-text-primary uppercase">Swiss Precision</h4>
                  <p className="font-sans text-[11px] text-text-secondary mt-1 leading-relaxed">
                    Rigid grid frameworks, intentional white spaces, and subtle micro-interactions that feel premium.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
