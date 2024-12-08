import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Server } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with React, Next.js, and modern CSS.",
    icon: Code
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side applications with Node.js, Express, and databases.",
    icon: Server
  },
  {
    title: "Full Stack Solutions",
    description: "End-to-end web application development with modern tech stack and best practices.",
    icon: Globe
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Code className="h-4 w-4" />
            <span className="text-sm font-medium">Services</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Specialized Development Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering high-quality web solutions with modern technologies and best practices
            for optimal performance and user experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="group hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}