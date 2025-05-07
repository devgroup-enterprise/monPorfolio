
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Code, Layout, Server } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Design UI/UX",
    description: "Création d'interfaces utilisateur modernes et intuitives."
  },
  {
    icon: Code,
    title: "Développement Frontend",
    description: "Développement d'applications web réactives et performantes avec les technologies modernes (React)."
  },
  {
    icon: Code,
    title: "Développement Backend",
    description: "Développement d'applications web réactives et performantes avec les technologies modernes (Node, Espress, Mysql)."
  },

];

export default function Services() {
  return (
    <section className="py-20 bg-secondary/5" id="services">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Mes Services
          </h2>
          <p className="text-400 font-bold max-w-2xl mx-auto">
            Des solutions web sur mesure pour répondre à tous vos besoins numériques.
          </p>
          <Separator className="mt-4 max-w-md mx-auto bg-primary/30" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-secondary/10 border border-gray-700/30 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 group">
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="bg-primary/20 p-3 rounded-lg group-hover:bg-primary/30 transition-all">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-400">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
