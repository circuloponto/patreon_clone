'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  direction = 'up', 
  duration = 0.5,
  className = '' 
}: FadeInProps) {
  
  const getDirectionOffset = () => {
    switch (direction) {
      case 'up': return { y: 20 };
      case 'down': return { y: -20 };
      case 'left': return { x: 20 };
      case 'right': return { x: -20 };
      case 'none': return {};
      default: return { y: 20 };
    }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0,
        ...getDirectionOffset()
      }}
      animate={{ 
        opacity: 1,
        y: 0,
        x: 0
      }}
      transition={{ 
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
