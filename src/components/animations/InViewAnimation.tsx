'use client';

import { ReactNode } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

interface InViewAnimationProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  style?: React.CSSProperties;
}

export default function InViewAnimation({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  style = {}
}: InViewAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const getVariants = (direction: string): Variants => ({
    hidden: {
      opacity: 0,
      ...(direction === 'up' ? { y: 50 } :
         direction === 'down' ? { y: -50 } :
         direction === 'left' ? { x: 50 } :
         direction === 'right' ? { x: -50 } : {})
    },
    visible: {
      opacity: 1,
      y: direction === 'up' || direction === 'down' ? 0 : undefined,
      x: direction === 'left' || direction === 'right' ? 0 : undefined,
      transition: {
        duration: 0.5,
        delay
      }
    }
  });

  return (
    <motion.div
      ref={ref}
      variants={getVariants(direction)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
