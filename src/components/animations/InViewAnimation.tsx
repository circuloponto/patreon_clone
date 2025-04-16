'use client';

import { ReactNode, useRef } from 'react';
import { motion, useInView, Variant } from 'framer-motion';

interface InViewAnimationProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  once?: boolean;
  className?: string;
  threshold?: number;
  margin?: string;
}

export default function InViewAnimation({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  once = true,
  className = '',
  threshold = 0.1,
  margin = '0px'
}: InViewAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold, // 'amount' is the correct prop name, not 'threshold'
    margin: margin as any // Type cast to fix TypeScript error
  });

  // Set initial and animate values based on direction
  let initial: Record<string, number> = { opacity: 0 };
  if (direction === 'up') initial = { ...initial, y: 50 };
  if (direction === 'down') initial = { ...initial, y: -50 };
  if (direction === 'left') initial = { ...initial, x: 50 };
  if (direction === 'right') initial = { ...initial, x: -50 };

  const animate: Record<string, number> = { 
    opacity: 1,
    ...(direction === 'up' || direction === 'down' ? { y: 0 } : {}),
    ...(direction === 'left' || direction === 'right' ? { x: 0 } : {})
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
