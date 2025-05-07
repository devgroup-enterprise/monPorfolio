
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const competences = [
  { name: "Frontend Development", level: 40, details: ["React", "TypeScript"] },
  { name: "Backend Development", level: 55, details: ["Node.js", "Express", "Mysql", "MongoDB"] },
  { name: "UI/UX Design", level: 70, details: ["Adobe XD", "TailwindCSS"] },
  { name: "DevOps", level: 50, details: ["Git"] },
];

export default function Competences() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
          Compétences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competences.map((skill, index) => (
            <Card key={index} className="p-6 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
              <h3 className="text-xl font-semibold mb-4 text-secondary">{skill.name}</h3>
              <Progress value={skill.level} className="h-2 mb-4" />
              <div className="flex flex-wrap gap-2">
                {skill.details.map((detail, i) => (
                  <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {detail}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
