'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedButtonProps extends Omit<HTMLMotionProps<"button">, "children" | "className" | "variant" | "fullWidth"> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  fullWidth?: boolean;
  className?: string;
}

export default function AnimatedButton({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}: AnimatedButtonProps) {
  
  // Define base styles based on variant
  const getBaseStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-black text-white hover:bg-gray-800';
      case 'secondary':
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
      case 'outline':
        return 'bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-50';
      case 'danger':
        return 'bg-red-600 text-white hover:bg-red-700';
      default:
        return 'bg-black text-white hover:bg-gray-800';
    }
  };

  const baseStyles = getBaseStyles();
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      className={`px-4 py-2 rounded-md font-medium ${baseStyles} ${widthClass} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
