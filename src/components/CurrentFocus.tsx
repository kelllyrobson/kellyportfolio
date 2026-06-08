import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Database, GitBranch, Server, Code2, Rocket } from "lucide-react";

const CurrentFocus = () => {
  const focusItems = [
    {
      icon: <Coffee className="h-7 w-7" />,
      title: "Java",
      description: "Base sólida da linguagem, sintaxe, métodos, classes e boas práticas."
    },
    {
      icon: <Code2 className="h-7 w-7" />,
      title: "POO",
      description: "Encapsulamento, herança, polimorfismo, abstração e organização de código."
    },
    {
      icon: <Server className="h-7 w-7" />,
      title: "Spring Boot",
      description: "Construção de APIs, controllers, services, repositories e validações."
    },
    {
      icon: <Database className="h-7 w-7" />,
      title: "SQL",
      description: "Modelagem, consultas, joins, relacionamentos e integração com aplicações."
    },
    {
      icon: <Rocket className="h-7 w-7" />,
      title: "APIs REST",
      description: "Endpoints, status HTTP, JSON, CRUD e comunicação entre sistemas."
    },
    {
      icon: <GitBranch className="h-7 w-7" />,
      title: "Git & GitHub",
      description: "Versionamento, repositórios, commits e organização dos projetos."
    }
  ];

  return (
    <section id="focus" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20">
            Foco atual
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Minha Jornada com Java
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Depois de estudar diferentes tecnologias, encontrei no backend Java o caminho que desejo seguir profissionalmente.
            Agora estou consolidando minha base técnica com projetos práticos e estudos direcionados para vagas júnior.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusItems.map((item, index) => (
            <Card
              key={index}
              className="group bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 border-0 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-xl p-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentFocus;
