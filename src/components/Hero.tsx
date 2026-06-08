import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Coffee, Database, Code2 } from "lucide-react";
// Removida imagem de fundo por solicitação — usar apenas estilos/gradientes

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-primary/25"></div>
      <div className="absolute top-24 left-10 hidden md:block w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 hidden md:block w-56 h-56 rounded-full bg-orange-500/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-lg bg-primary/10 border border-primary/20 rounded-full px-5 py-2">
              <Coffee className="h-5 w-5" /> Atualmente focada em Java
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-float drop-shadow-lg">
            Kelly Alves Robson
          </h1>

          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Desenvolvedora Backend em Formação | Java
          </h2>

          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Estou direcionando minha carreira para o desenvolvimento backend com Java,
            estudando Programação Orientada a Objetos, SQL, APIs REST e Spring Boot.
            Minha trajetória também passa por React, Node.js e Python, o que me ajuda a
            entender melhor o desenvolvimento de ponta a ponta.
            <span className="text-primary font-semibold"> Meu objetivo é atuar como Desenvolvedora Java Júnior.</span>
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-foreground/90">
              <Coffee className="h-4 w-4 text-primary" /> Java
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-foreground/90">
              <Code2 className="h-4 w-4 text-primary" /> POO
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-foreground/90">
              <Database className="h-4 w-4 text-primary" /> SQL
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-foreground/90">
              Spring Boot
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("#about")}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-3"
            >
              Conhecer Minha Jornada
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
            >
              Ver Projetos
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/kelllyrobson" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all duration-300">
                <Github className="h-6 w-6" />
              </Button>
            </a>
            <a href="https://linkedin.com/in/kelllyrobson" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all duration-300">
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
            <a href="mailto:kellyalvesrobson@gmail.com">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all duration-300">
                <Mail className="h-6 w-6" />
              </Button>
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("#about")}
            className="animate-bounce hover:text-primary transition-colors duration-300"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
