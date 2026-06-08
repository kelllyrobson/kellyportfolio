import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Code, Lightbulb, Users, Layers } from "lucide-react";
import profileImage from "@/assets/nova_foto.png";

const About = () => {
  const highlights = [
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Java & Backend",
      description: "Foco atual em Java, SQL, APIs REST, Spring Boot e construção de sistemas backend"
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Programação Orientada a Objetos",
      description: "Estudo constante de classes, encapsulamento, herança, polimorfismo e organização de código"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Aprendizado Prático",
      description: "Construção de projetos reais para transformar estudo em experiência demonstrável"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Evolução Profissional",
      description: "Comunicação, disciplina e vontade de crescer em equipe como desenvolvedora júnior"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma trajetória em tecnologia com foco atual em backend Java
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block relative mb-8">
              <img
                src={profileImage}
                alt="Kelly Alves Robson"
                className="w-64 h-64 rounded-full object-cover mx-auto lg:mx-0 shadow-glow"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-full p-3">
                <Coffee className="h-6 w-6" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground dark:text-white">Kelly Alves Robson</h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                <Badge variant="secondary">Java Developer</Badge>
                <Badge variant="secondary">Backend Developer</Badge>
                <Badge variant="secondary">Spring Boot Student</Badge>
              </div>
            </div>
          </div>

          <div className="space-y-6 prose prose-lg max-w-none">
            <p className="text-foreground/90 dark:text-gray-300 leading-relaxed">
              Olá! Sou <strong className="text-primary">Kelly Alves Robson</strong>, apaixonada por tecnologia e desenvolvimento de software.
            </p>

            <p className="text-foreground/90 dark:text-gray-300 leading-relaxed">
              Minha trajetória começou explorando diferentes áreas do desenvolvimento, passando por
              <strong className="text-primary"> Python</strong>, <strong className="text-primary">JavaScript</strong>,
              <strong className="text-primary"> React</strong> e desenvolvimento web. Essa base me ajudou a entender como uma aplicação funciona tanto no visual quanto na lógica por trás dela.
            </p>

            <p className="text-foreground/90 dark:text-gray-300 leading-relaxed">
              Hoje meu principal foco está no ecossistema <strong className="text-primary">Java</strong>.
              Estou aprofundando conhecimentos em <strong className="text-primary">Programação Orientada a Objetos</strong>,
              <strong className="text-primary"> SQL</strong>, <strong className="text-primary">APIs REST</strong> e
              <strong className="text-primary"> Spring Boot</strong>, desenvolvendo projetos práticos para construir uma carreira sólida como Desenvolvedora Java.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="bg-card dark:bg-[#121212] text-card-foreground dark:text-white shadow-card hover:shadow-glow transition-all duration-300 border-0"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-primary">
                  {highlight.icon}
                </div>
                <h4 className="font-semibold mb-2 text-foreground dark:text-white">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground dark:text-gray-300">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
