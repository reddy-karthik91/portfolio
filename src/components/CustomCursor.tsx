import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position of the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring effect for organic movement
  const springConfig = { damping: 30, stiffness: 220, mass: 0.6 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if hovering over links, buttons, form controls, or elements with click handlers
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('.cursor-pointer') !== null ||
        target.getAttribute('role') === 'button';

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 rounded-full z-[9999] bg-[#A8FF35]/15 blur-[12px] hidden md:block"
      style={{
        x: glowX,
        y: glowY,
        translateX: '-50%',
        translateY: '-50%',
        width: 50,
        height: 50,
        boxShadow: '0 0 30px rgba(168, 255, 53, 0.3)',
      }}
      animate={{
        scale: isHovered ? 1.8 : 1.0,
        backgroundColor: isHovered ? 'rgba(168, 255, 53, 0.25)' : 'rgba(168, 255, 53, 0.15)',
        boxShadow: isHovered 
          ? '0 0 50px rgba(168, 255, 53, 0.5)' 
          : '0 0 30px rgba(168, 255, 53, 0.3)',
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 25, mass: 0.5 }}
    />
  );
}
