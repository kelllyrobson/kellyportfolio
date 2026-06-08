import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Palette,
  Server,
  Globe,
  GitBranch,
  Zap,
  Coffee
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens & Base Técnica",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["Java", "SQL", "JavaScript", "TypeScript", "Python", "HTML/CSS"]
    },
    {
      title: "Backend & Arquitetura",
      icon: <Server className="h-6 w-6" />,
      skills: ["Spring Boot", "APIs REST", "POO", "PostgreSQL", "Node.js", "Git/GitHub"]
    }
  ];

  const tools = [
    "IntelliJ IDEA / Eclipse",
    "VS Code",
    "Git & GitHub",
    "PostgreSQL",
    "MySQL",
    "Postman",
    "Maven",
    "Docker",
    "Tailwind CSS",
    "Linux"
  ];

  const softSkills = [
    { name: "Resolução de Problemas", icon: <Zap /> },
    { name: "Comunicação", icon: <Globe /> },
    { name: "Trabalho em Equipe", icon: <GitBranch /> },
    { name: "Criatividade", icon: <Palette /> },
    { name: "Aprendizado Contínuo", icon: <Database /> },
    { name: "Disciplina nos Estudos", icon: <Coffee /> }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Habilidades & Tecnologias
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Base técnica em evolução, com foco atual em Java, backend, banco de dados e APIs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <div className="bg-primary/10 rounded-lg p-2 text-primary">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3 mt-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-card border-0 mb-16">
          <CardHeader>
            <CardTitle className="text-center text-foreground">
              Ferramentas & Tecnologias
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card border-0">
          <CardHeader>
            <CardTitle className="text-center text-foreground">
              Competências Comportamentais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-primary/10 transition-colors duration-300"
                >
                  <div className="text-primary">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
