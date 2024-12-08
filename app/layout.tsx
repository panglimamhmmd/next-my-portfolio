import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { ScrollToTop } from '@/components/scroll-to-top';
import { AnimatedCursor } from '@/components/animated-cursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Portfolio - Web Developer',
    description: 'Professional portfolio showcasing web development work',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <AnimatedCursor />
                    <Navbar />
                    <main>{children}</main>
                    <ScrollToTop />
                </ThemeProvider>
            </body>
        </html>
    );
}
