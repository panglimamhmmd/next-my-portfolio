import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Michael Brown",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio."
  },
  {
    name: "Sarah Mitchell",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio."
  },
  {
    name: "David Cooper",
    role: "Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio."
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What People Say&apos;s About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}