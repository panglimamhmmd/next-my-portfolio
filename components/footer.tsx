"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-xl">James Smith</h3>
            <p className="text-sm text-muted-foreground">
              Full-stack developer specializing in building exceptional digital experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="#services" className="text-sm text-muted-foreground hover:text-foreground">Services</Link></li>
              <li><Link href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground">Portfolio</Link></li>
              <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-muted-foreground">Web Development</span></li>
              <li><span className="text-sm text-muted-foreground">API Development</span></li>
              <li><span className="text-sm text-muted-foreground">Cloud Solutions</span></li>
              <li><span className="text-sm text-muted-foreground">Technical Consulting</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-muted-foreground">contact@example.com</span></li>
              <li><span className="text-sm text-muted-foreground">+1 (555) 123-4567</span></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} James Smith. All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}