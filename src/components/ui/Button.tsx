import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: ReactNode;
  href?: string;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}

export function Button({ children, variant = 'primary', size = 'md', className, icon, href, target, ...props }: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 rounded-full overflow-hidden group cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:shadow-[0_0_40px_rgba(0,180,255,0.6)] before:absolute before:inset-0 before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
    secondary: "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]",
    outline: "border border-brand-purple/50 text-white hover:bg-brand-purple/10 hover:border-brand-purple hover:shadow-[0_0_20px_rgba(157,78,221,0.3)]",
    ghost: "text-text-soft hover:text-white hover:bg-white/5"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base md:text-lg"
  };

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
          {icon}
        </span>
      )}
    </span>
  );

  const finalClassName = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <motion.a 
        href={href}
        target={target}
        rel={target === '_blank' ? "noopener noreferrer" : undefined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={finalClassName}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={finalClassName}
      {...props}
    >
      {content}
    </motion.button>
  );
}
