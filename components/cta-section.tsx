import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how we can bring your ideas to life with 
          clean code and modern technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="group">
            <Calendar className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            Schedule a Call
          </Button>
          <Button size="lg" variant="outline" className="group">
            <MessageSquare className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
}