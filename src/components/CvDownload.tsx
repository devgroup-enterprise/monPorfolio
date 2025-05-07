
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText, Eye } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { useState } from "react";

export default function CvDownload() {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const handleDownload = () => {
    // Create a link to download a sample PDF
    const link = document.createElement('a');
    
    // You would replace this with your actual CV file path
    link.href = '../../cv.pdf';
    link.download = 'cv.pdf';
    
    // Append to body, trigger click, then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    
  };

  const togglePreview = () => {
    setIsPreviewVisible(!isPreviewVisible);
  };

  return (
    <section className="py-16 bg-sky-100/20">
      <div className="container">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-sky-200/70 to-primary/20 border-none shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Téléchargez mon CV</h3>
              <p className="text-gray-700 mb-6">
                Consultez mon parcours professionnel complet, mes compétences et mes formations
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={handleDownload}
                  className="group bg-primary hover:bg-primary-dark text-white flex items-center gap-2 px-6"
                >
                  <Download className="h-5 w-5 group-hover:animate-bounce" />
                  Télécharger le CV
                </Button>
                <Button
                  onClick={togglePreview}
                  variant="outline"
                  className="border-primary/40 hover:bg-sky-100/50 flex items-center gap-2"
                >
                  <Eye className="h-5 w-5" />
                  {isPreviewVisible ? "Cacher l'aperçu" : "Voir l'aperçu"}
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-100/70 to-accent/20 p-8 flex justify-center items-center">
              <div className="relative w-full max-w-xs">
                {/* CV Preview */}
                <div className="w-full aspect-[3/4] bg-white rounded-md shadow-lg border border-sky-200/50 p-4 transform hover:scale-105 transition-all duration-300">
                  <div className="h-6 w-24 bg-sky-200 rounded mb-4"></div>
                  <div className="h-4 w-full bg-gray-100 rounded mb-3"></div>
                  <div className="h-4 w-5/6 bg-gray-100 rounded mb-6"></div>
                  
                  <div className="h-5 w-32 bg-primary/30 rounded mb-2"></div>
                  <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
                  <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
                  <div className="h-4 w-3/4 bg-gray-100 rounded mb-6"></div>
                  
                  <div className="h-5 w-32 bg-primary/30 rounded mb-2"></div>
                  <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
                  <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
                  <div className="h-4 w-4/5 bg-gray-100 rounded"></div>
                  
                  <div className="absolute bottom-3 right-3">
                    <FileText className="h-8 w-8 text-sky-400/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Extended CV Preview panel that shows when toggled */}
          {isPreviewVisible && (
            <div className="p-6 bg-white/80 border-t border-sky-200/30">
              <div className="max-w-3xl mx-auto">
                <h4 className="text-xl font-bold mb-4 text-sky-900">Aperçu du CV</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-sky-800 mb-2">Expérience</h5>
                    <div className="space-y-3">
                      <div className="bg-sky-50 p-3 rounded shadow-sm">
                        <div className="font-medium">Frontend Developer</div>
                        <div className="text-sm text-gray-600">DevGroup</div>
                        <div className="text-sm mt-1">Développement d'interfaces web modernes avec React</div>
                      </div>
                      <div className="bg-sky-50 p-3 rounded shadow-sm">
                        <div className="font-medium">Web Designer</div>
                        <div className="text-sm text-gray-600">Adobe XD</div>
                        <div className="text-sm mt-1">Création de maquettes </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sky-800 mb-2">Compétences</h5>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-sky-50 p-2 rounded shadow-sm text-center">React</div>
                      <div className="bg-sky-50 p-2 rounded shadow-sm text-center">TailwindCSS</div>
                      <div className="bg-sky-50 p-2 rounded shadow-sm text-center">TypeScript</div>
                      <div className="bg-sky-50 p-2 rounded shadow-sm text-center">Node.js</div>
                      <div className="bg-sky-50 p-2 rounded shadow-sm text-center">UI/UX</div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
