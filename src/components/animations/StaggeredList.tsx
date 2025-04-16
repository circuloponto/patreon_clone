'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggeredListProps {
  children: ReactNode | ReactNode[];
  staggerDelay?: number;
  className?: string;
  direction?: 'vertical' | 'horizontal';
  staggerIndex?: number;
}

export default function StaggeredList({ 
  children, 
  staggerDelay = 0.1,
  className = '',
  direction = 'vertical',
  staggerIndex = 0
}: StaggeredListProps) {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: staggerIndex * 0.05, // Apply delay based on staggerIndex
      }
    }
  };
  
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'vertical' ? 20 : 0,
      x: direction === 'horizontal' ? 20 : 0 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24
      }
    }
  };

  // Handle both single child and array of children
  const childrenArray = Array.isArray(children) ? children : [children];
  
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {childrenArray.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
