
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
          Contact
        </h2>
        <Card className="p-6 md:p-8 animate-fade-in">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom
                </label>
                <Input placeholder="Votre nom" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input type="email" placeholder="votre@email.com" className="w-full" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <Textarea placeholder="Votre message..." className="w-full max-h" />
            </div>
            <Button className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white">
              Envoyer <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
