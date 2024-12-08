import { ClientWrapper } from './client-wrapper';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInScale' | 'staggerFadeIn';
  className?: string;
}

export function AnimatedSection({ 
  children, 
  animation = 'fadeInUp',
  className = '' 
}: AnimatedSectionProps) {
  return (
    <ClientWrapper animation={animation} className={className}>
      {children}
    </ClientWrapper>
  );
}