"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Server } from "lucide-react";
import Image from "next/image";

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", 
  "AWS", "Docker", "GraphQL", "Tailwind CSS", "Git"
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-3/4 aspect-square rounded-full bg-primary/10 blur-3xl" />
          <Image
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
            alt="About Me"
            width={500}
            height={500}
            className="relative z-10 rounded-2xl w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full w-fit mb-6">
            <Code className="h-4 w-4" />
            <span className="text-sm font-medium">About Me</span>
          </div>
          <h2 className="text-3xl font-bold mb-6">
            Crafting Digital Experiences Through Code
          </h2>
          <p className="text-muted-foreground mb-6">
            Full-stack developer with 8+ years of experience building scalable web applications. 
            AWS Certified Developer and Open Source contributor with a passion for creating 
            efficient, maintainable code.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card className="p-4 bg-background">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">50+ Projects</h3>
                  <p className="text-sm text-muted-foreground">Successfully Delivered</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 bg-background">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">8+ Years</h3>
                  <p className="text-sm text-muted-foreground">Development Experience</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="mb-8">
            <h3 className="font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <Button className="w-fit">Download Resume</Button>
        </div>
      </div>
    </section>
  );
}