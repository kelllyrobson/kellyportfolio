import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Mail, Zap, Database, Coffee } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sistema de Gestão de Produtividade",
      description: "Projeto baseado em indicadores de desempenho, com proposta de login, registro de atividades, dashboards e relatórios para acompanhamento de produtividade.",
      technologies: ["Java", "SQL", "Dashboard", "API REST"],
      features: ["Controle de usuários", "Relatórios", "Indicadores de desempenho"],
      icon: <Database className="h-6 w-6" />,
      status: "Em desenvolvimento",
      highlight: "Projeto principal"
    },
    {
      title: "Sistema de Email Marketing",
      description: "Aplicação para gerenciamento de contatos e envio de emails, unindo frontend React com backend Node.js e integração SMTP.",
      technologies: ["React", "Node.js", "SMTP", "JavaScript"],
      features: ["Envio de emails", "Gerenciamento de contatos", "Relatórios"],
      icon: <Mail className="h-6 w-6" />,
      status: "Concluído",
      highlight: null
    },
    {
      title: "API REST com Java",
      description: "Projeto de estudos voltado para criação de APIs REST utilizando Java e Spring Boot, aplicando arquitetura backend, validação de dados e integração com banco.",
      technologies: ["Java", "Spring Boot", "SQL", "REST API"],
      features: ["CRUD completo", "Validação de dados", "Integração com banco"],
      icon: <Coffee className="h-6 w-6" />,
      status: "Em desenvolvimento",
      highlight: null
    },
    {
      title: "Biblioteca Virtual em Java",
      description: "Sistema para praticar Programação Orientada a Objetos com classes, encapsulamento, herança, polimorfismo e organização de regras de negócio.",
      technologies: ["Java", "POO", "Collections", "Git"],
      features: ["Cadastro de livros", "Controle de empréstimos", "Regras de negócio"],
      icon: <Zap className="h-6 w-6" />,
      status: "Em desenvolvimento",
      highlight: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Projetos que mostram minha evolução: da base web até o foco atual em backend Java
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 border-0 relative ${
                project.highlight ? 'ring-2 ring-primary/30' : ''
              }`}
            >
              {project.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground">
                    {project.highlight}
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/10 rounded-lg p-2 text-primary">
                    {project.icon}
                  </div>
                  <Badge variant={project.status === "Concluído" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-foreground">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Principais pontos:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <a href="https://github.com/kelllyrobson" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  </a>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/kelllyrobson" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
            >
              Ver Repositórios no GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
