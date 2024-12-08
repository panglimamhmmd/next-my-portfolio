"use client";

import { useEffect, useRef } from 'react';
import { fadeInUp, fadeInScale, staggerFadeIn } from '@/lib/animations';

interface ClientWrapperProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInScale' | 'staggerFadeIn';
  className?: string;
}

export function ClientWrapper({ 
  children, 
  animation = 'fadeInUp',
  className = '' 
}: ClientWrapperProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (animation === 'fadeInUp') {
      fadeInUp(element);
    } else if (animation === 'fadeInScale') {
      fadeInScale(element);
    } else if (animation === 'staggerFadeIn') {
      const elements = Array.from(element.children);
      staggerFadeIn(elements);
    }
  }, [animation]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}