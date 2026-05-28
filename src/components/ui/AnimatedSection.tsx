import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className, delay = 0, ...props }: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5, delay, ease: "easeOut" }}
      className={cn("w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
