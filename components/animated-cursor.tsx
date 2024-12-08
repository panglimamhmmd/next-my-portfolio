'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function AnimatedCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        const moveCircle = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out',
            });

            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.8,
                ease: 'power2.out',
            });
        };

        const handleMouseEnter = () => {
            gsap.to(follower, {
                scale: 1.5,
                duration: 0.3,
            });
        };

        const handleMouseLeave = () => {
            gsap.to(follower, {
                scale: 1,
                duration: 0.3,
            });
        };

        const interactiveElements = document.querySelectorAll(
            'a, button, input, textarea, h1 h2, h3, h4, h5, h6, img, svg'
        );
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        window.addEventListener('mousemove', moveCircle);

        return () => {
            window.removeEventListener('mousemove', moveCircle);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="cursor-dot" />
            <div ref={followerRef} className="cursor-follower" />
        </>
    );
}
