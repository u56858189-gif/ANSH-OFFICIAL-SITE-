import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export function GlassCard({ children, className, glowOnHover = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card rounded-2xl p-8 relative overflow-hidden transition-colors duration-500",
        glowOnHover && "hover:border-brand-purple/50 group",
        className
      )}
      {...props}
    >
      {glowOnHover && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
