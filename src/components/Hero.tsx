
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Hero() {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = [
    "from-primary to-accent",
    "from-accent to-sky-400",
    "from-sky-400 to-[#D946EF]",
    "from-[#D946EF] to-primary"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center  from-secondary/60 to-sky-300/10 backdrop-blur-sm pt-24 pb-20 px-4" id="hero">
      <div className="container grid gap-8 lg:grid-cols-2 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            Je suis Daniel Makosso{" "}
            <span className={`bg-gradient-to-r ${colors[colorIndex]} bg-clip-text text-transparent transition-all duration-1000`}>
               Développeur Frontend
            </span>
            <br />

          </h1>
          <p className="text-lg md:text-xl text-black-300 max-w-xl animate-[slideIn_0.5s_ease-out_0.3s_both]">
            Je transforme des idées en expériences web exceptionnelles, en créant des interfaces élégantes et performantes.
          </p>
          <Button 
            size="lg"
            className="group bg-sky-500 hover:bg-sky-600 text-white px-8 py-6 rounded-full transition-all duration-300 animate-[slideIn_0.5s_ease-out_0.6s_both]"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contactez-moi
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        <div className="relative animate-[fadeIn_1s_ease-out_0.3s_both]">
          <div className="aspect-square rounded-full bg-gradient-to-tr from-sky-400/20 to-accent/20 absolute -inset-4 blur-3xl" />
          <img 
            src="/pp.jpg"
            alt="Makosso Daniel"
            className="relative rounded-2xl w-full max-w-md mx-auto shadow-2xl 
              hover:scale-[1.02] transition-transform duration-300
              animate-[fadeIn_1s_ease-out_0.6s_both]"
          />
        </div>
      </div>
    </section>
  );
}
