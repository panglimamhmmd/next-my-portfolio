import { Button } from '@/components/ui/button';
import { Code, PlayCircle } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
    return (
        <div className="min-h-[calc(100vh-20rem)] flex items-center">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
                <div className="flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full w-fit mb-6">
                        <Code className="h-4 w-4" />
                        <span className="text-sm font-medium">
                            Full Stack Developer
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Hello, I'm
                        <br />
                        James Smith
                        <br />
                        <span className="text-primary">Web Developer</span>
                    </h1>
                    <p className="text-muted-foreground mb-8">
                        Crafting modern web experiences with clean code and
                        elegant design. Specialized in React, Next.js, and
                        full-stack development.
                    </p>
                    <div className="flex gap-4">
                        <Button size="lg" className="group">
                            View Projects
                            <Code className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                        </Button>
                        <Button size="lg" variant="outline">
                            <PlayCircle className="mr-2 h-4 w-4" />
                            Watch Demo
                        </Button>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 w-3/4 aspect-square rounded-full bg-primary/10 blur-3xl" />
                    <Image
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5"
                        alt="Profile"
                        width={500}
                        height={500}
                        className="relative z-10 w-full h-auto rounded-2xl"
                    />
                </div>
            </div>
        </div>
    );
}
