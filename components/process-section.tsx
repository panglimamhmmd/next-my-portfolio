import { ArrowRight, BarChart3, Lightbulb, PenTool } from "lucide-react";

const processes = [
  {
    title: "Business Planning",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    icon: Lightbulb
  },
  {
    title: "Design Strategy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    icon: PenTool
  },
  {
    title: "Grow Your Business",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    icon: BarChart3
  }
];

export function ProcessSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          My Working Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div key={process.title} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <process.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{process.title}</h3>
              <p className="text-muted-foreground">{process.description}</p>
              {index < processes.length - 1 && (
                <ArrowRight className="hidden md:block h-8 w-8 text-primary absolute top-1/2 -right-4 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}