
import React, { useState, useEffect, useRef } from 'react';

interface DynamicCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function DynamicCounter({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = '',
}: DynamicCounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  
  useEffect(() => {
    // Only start the animation if the component is in the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    // Get the first parent element of the counter
    const el = document.getElementById(`counter-${end}`);
    if (el) observer.observe(el);
    
    return () => {
      observer.disconnect();
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end]);
  
  const startAnimation = () => {
    startTimeRef.current = null;
    
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      
      countRef.current = Math.floor(easedProgress * end);
      setCount(countRef.current);
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    frameRef.current = requestAnimationFrame(animate);
  };
  
  // Easing function for smoother animation
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4);
  };
  
  return (
    <span id={`counter-${end}`} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
