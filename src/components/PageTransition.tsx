import { motion } from 'framer-motion';
import type { ReactNode, CSSProperties } from 'react';
import { EASE_OUT } from '../utils/motion';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function PageTransition({ children, className = '', style }: PageTransitionProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
