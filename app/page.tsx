import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { AboutSection } from '@/components/about-section';
import { ProcessSection } from '@/components/process-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { CTASection } from '@/components/cta-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { AnimatedSection } from '@/components/animated-section';

export default function Home() {
    return (
        <>
            <AnimatedSection animation="fadeInScale">
                <HeroSection />
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp">
                <ServicesSection />
            </AnimatedSection>

            <AnimatedSection animation="fadeInScale">
                <AboutSection />
            </AnimatedSection>

            <AnimatedSection animation="staggerFadeIn">
                <ProcessSection />
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp">
                <TestimonialsSection />
            </AnimatedSection>

            <AnimatedSection animation="staggerFadeIn">
                <PortfolioSection />
            </AnimatedSection>

            <AnimatedSection animation="fadeInScale">
                <CTASection />
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp">
                <ContactSection />
            </AnimatedSection>

            <Footer />
        </>
    );
}
