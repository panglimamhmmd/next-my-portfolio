"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <Link href="/" className="font-bold text-xl">
          Brand
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#contact">Contact</Link>
          <ThemeToggle />
          <Button>Download CV</Button>
        </div>
      </div>
    </nav>
  );
}