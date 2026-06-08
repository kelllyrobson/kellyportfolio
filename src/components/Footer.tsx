import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Kelly Robson
            </h3>
            <p className="text-muted-foreground">
              Desenvolvedora Full Stack & Especialista em Segurança
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all duration-300">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all duration-300">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all duration-300">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <Button 
              variant="outline"
              onClick={scrollToTop}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Voltar ao Topo
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Kelly Alves Robson. Feito com 
            <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> 
            e muito código.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;