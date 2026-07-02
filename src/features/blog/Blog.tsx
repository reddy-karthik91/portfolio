import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

const postsData: BlogPost[] = [
  {
    id: 1,
    title: "Optimizing React 19 Client Rendering Speeds",
    excerpt: "Exploring runtime optimizations, compiler behaviors, and structural hooks to decrease load delays and lift Core Web Vitals.",
    date: "JUN 14, 2026",
    readTime: "5 min read",
    category: "PERFORMANCE",
    slug: "optimizing-react-19-client-rendering"
  },
  {
    id: 2,
    title: "Building Manifest V3 Extensions with Custom AST Tokenizers",
    excerpt: "A deep dive into service worker scripts, security permissions, and building type-safe shortcuts to search documentation indexes.",
    date: "MAY 28, 2026",
    readTime: "8 min read",
    category: "DEV TOOLS",
    slug: "building-mv3-extensions-ast-tokenizers"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-bg border-t border-border bg-dots">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-green flex items-center gap-1.5">
              <BookOpen size={12} /> // DEV LOGS
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-text-primary">
              RECENT <span className="opacity-30">WRITINGS.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-text-secondary max-w-sm">
            Technical notes, build logs, and architecture studies from my ongoing engineering roadmap.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {postsData.map((post) => (
            <motion.article 
              key={post.id}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-8 bg-surface border border-border rounded-[28px] flex flex-col justify-between min-h-[260px] group shadow-xl hover:border-accent-green/10 transition-colors"
            >
              <div className="space-y-4">
                {/* Meta Row */}
                <div className="flex items-center justify-between font-mono text-[9px] text-text-secondary">
                  <span className="bg-bg/50 px-2.5 py-1 border border-border/60 rounded-full font-bold text-accent-green">
                    {post.category}
                  </span>
                  
                  <span className="flex items-center gap-1">
                    <Clock size={10} /> {post.readTime}
                  </span>
                </div>

                {/* Title and Excerpt */}
                <div className="space-y-2">
                  <h3 className="font-heading text-lg font-bold tracking-tight text-text-primary group-hover:text-accent-green transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Footer: Date and Action */}
              <div className="pt-6 border-t border-border/50 flex items-center justify-between font-mono text-[9px] text-text-secondary uppercase">
                <span>{post.date}</span>
                <span className="inline-flex items-center gap-1 text-text-primary group-hover:text-accent-green transition-colors font-bold">
                  Read Article <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
