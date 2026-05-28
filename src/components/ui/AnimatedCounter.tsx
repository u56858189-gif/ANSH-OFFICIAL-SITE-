import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, animate } from 'motion/react';

interface AnimatedCounterProps {
  value: string; // E.g., "$10M+", "500+", "98%"
  className?: string;
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  
  // Extract number and suffix/prefix
  const numericMatch = value.match(/[\d,]+(\.\d+)?/);
  const numberStr = numericMatch ? numericMatch[0].replace(/,/g, '') : "0";
  const targetNumber = parseFloat(numberStr);
  const isDecimal = numberStr.includes(".");
  
  const prefix = value.substring(0, numericMatch ? numericMatch.index : 0);
  const suffix = value.substring(numericMatch ? (numericMatch.index ?? 0) + numericMatch[0].length : 0);

  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, targetNumber, {
        duration: 0.2, // exactly 0.2 seconds as requested, though it's very fast
        ease: "easeOut"
      });
    }
  }, [motionValue, isInView, targetNumber]);

  useEffect(() => {
    return motionValue.on("change", (latest) => {
      if (ref.current) {
        let displayStr;
        if (isDecimal) {
            const decimals = numberStr.split('.')[1]?.length || 1;
            displayStr = latest.toFixed(decimals);
        } else {
            displayStr = Math.floor(latest).toString();
        }
        
        if (value.includes(",")) {
            displayStr = parseFloat(displayStr).toLocaleString("en-US");
        }

        ref.current.textContent = `${prefix}${displayStr}${suffix}`;
      }
    });
  }, [motionValue, prefix, suffix, isDecimal, numberStr, value]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}
