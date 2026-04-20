import { motion, type Variants} from 'framer-motion';
import profilePic from '../../assets/profile-picture.png';

const Hero = () => {
  // Animation variants for staggered entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-20 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-chroma-accent/20 blur-[120px] rounded-full z-0" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-chroma-purple/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-chroma-cyan/10 blur-[120px] pointer-events-none" />
      <motion.div 
        className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side: Text Content */}
        <div className="text-left">
          <motion.span 
            variants={itemVariants}
            className="inline-block px-4 py-1.5 rounded-full border border-chroma-accent/30 bg-chroma-accent/10 text-chroma-accent text-sm font-medium mb-6"
          >
            Available for Senior Roles
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-heading font-bold text-chroma-header leading-tight mb-6"
          >
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-chroma-cyan to-chroma-purple">Digital</span> Experiences.
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-chroma-text max-w-lg mb-8 leading-relaxed"
          >
            Senior Frontend Developer with 5+ years of expertise. I bridge the gap between 
            complex Angular architectures and modern React innovation to build 
            performant, user-centric applications.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-chroma-accent text-white rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300">
              View Projects
            </button>
            <button className="px-8 py-3 border border-chroma-border text-chroma-header rounded-lg font-semibold hover:bg-white/5 transition-all duration-300">
              Let's Connect
            </button>
          </motion.div>
        </div>

        {/* Right Side: Profile Picture with Decorative Elements */}
        <motion.div 
          variants={itemVariants}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            {/* Animated Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-chroma-cyan/60 blur-[1px]"
            />
            
            {/* Profile Image Container */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-chroma-dark bg-chroma-dark shadow-2xl">
              <img 
                src={profilePic} 
                alt="Reddy Karthik" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Floating Tech Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-chroma-dark/80 backdrop-blur-md p-3 rounded-xl border border-chroma-border shadow-xl"
            >
              <span className="text-2xl">⚛️</span>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-chroma-dark/80 backdrop-blur-md p-3 rounded-xl border border-chroma-border shadow-xl"
            >
              <span className="text-2xl">🅰️</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;