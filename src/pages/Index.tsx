
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projets.tsx";
import Skills from "@/components/Competences.tsx";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import CvDownload from "@/components/CvDownload";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Experience />
      <Skills />
      <CvDownload />
      <Contact />
    </div>
  );
};

export default Index;
