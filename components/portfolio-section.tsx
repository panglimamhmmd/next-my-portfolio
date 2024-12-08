"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const portfolioItems = [
  {
    category: "Landing Page",
    title: "Brain Landing Page",
    image: "/portfolio1.jpg"
  },
  {
    category: "App Design",
    title: "Education Platform",
    image: "/portfolio2.jpg"
  },
  {
    category: "Web Product",
    title: "Litigation Mobile App",
    image: "/portfolio3.jpg"
  }
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Digital Product Showcases
        </h2>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex justify-center mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="landing">Landing Page</TabsTrigger>
            <TabsTrigger value="app">App Design</TabsTrigger>
            <TabsTrigger value="web">Web Product</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <Image
                  src={`https://source.unsplash.com/random/800x600?${item.category}`}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-sm uppercase tracking-wider mb-2">{item.category}</p>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}