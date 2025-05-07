
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Thomas Dubois",
    role: "CEO, TechStart",
    content: "La collaboration avec Makosso a été exceptionnelle. Il a compris nos besoins et a livré un produit qui dépasse nos attentes. Hautement recommandé!",
    stars: 5
  },
  {
    name: "Marie Leclerc",
    role: "Directrice Marketing, Innovatech",
    content: "Un professionnel talentueux qui a transformé notre présence en ligne. Le site qu'il a développé a considérablement augmenté notre taux de conversion.",
    stars: 5
  },
  {
    name: "Alexandre Martin",
    role: "Fondateur, DesignPlus",
    content: "Makosso a une compréhension approfondie du développement frontend. Sa capacité à traduire nos concepts en interfaces élégantes est remarquable.",
    stars: 4
  }
];

export default function Testimonials() {
  return (
    <section className="py-20  from-secondary/70 to-primary/5" id="temoignages">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Témoignages
          </h2>
          <p className="text-400 max-w-2xl mx-auto">
            Ce que mes clients disent de mon travail
          </p>
          <Separator className="mt-4 max-w-md mx-auto bg-primary/30" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-black/20 backdrop-blur-sm border border-gray-700/30 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                  {[...Array(5 - testimonial.stars)].map((_, i) => (
                    <Star key={i + testimonial.stars} className="h-5 w-5 text-gray-500" />
                  ))}
                </div>
                <blockquote className="text-gray-300 italic">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
              <CardFooter>
                <div>
                  <p className="font-medium text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
