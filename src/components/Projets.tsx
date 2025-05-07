
import { Card } from "@/components/ui/card";

const projets = [
  {
    title: "Application de Gestion Scolaire",
    description: "Site de gestion scolaire avec module inscription/connexion",
    tech: ["HTML", "CSS", "PHP", "JS", "Mysql"],
    image: "..//..//public//Capture d'écran 2025-04-22 154129.png"
  },

  {
    title: "Portfolio Personnel",
    description: "Site vitrine responsive et moderne",
    tech: ["React", "TailwindCSS", "TypeScript"],
    image: "..//..//public/porfolio.jpeg"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
          Mes Projets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-secondary">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
