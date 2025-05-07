
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Briefcase } from "lucide-react";

const experiences = [


  {
    period: "2025 - ",
    title: "Developpeur Web & Mobile",
    company: "DevGroup Africa",
    description: " Developpeur Web & Mobile Developer",
  }
];

export default function Experience() {
  return (
    <section className="py-20" id="experience">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Expérience Professionnelle
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mon parcours professionnel en tant que développeur frontend
          </p>
          <Separator className="mt-4 max-w-md mx-auto bg-primary/30" />
        </div>

        <div className="max-w-3xl mx-auto space-y-8 relative">
          <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />
          
          {experiences.map((exp, index) => (
            <Card key={index} className="ml-12 bg-secondary/10 border border-gray-700/30 hover:border-primary/50 transition-all hover:shadow-md hover:shadow-primary/10">
              <div className="absolute -left-3 bg-secondary p-3 rounded-full border border-primary/50 shadow-lg shadow-primary/20">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              
              <CardHeader>
                <div className="text-sm text-primary font-medium mb-1">
                  {exp.period}
                </div>
                <CardTitle>{exp.title} • {exp.company}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-400">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
