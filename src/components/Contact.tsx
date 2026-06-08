import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs.sendForm(
      "service_u1r0s4x",
      "template_6hfb1av",
      formRef.current,
      "n6jbIFpgjH9HllwOH"
    ).then(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigada pelo contato. Retornarei em breve!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }).catch((error) => {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
      console.error("EmailJS error:", error);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "kellyalvesrobson@gmail.com",
      link: "mailto:kellyalvesrobson@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Telefone",
      value: "(31) 99359-9740",
      link: "tel:+5531993599740"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Localização",
      value: "Belo Horizonte, MG - Brasil",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      link: "https://github.com/kelllyrobson",
      username: "@kelllyrobson"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/kelllyrobson",
      username: "Kelly Alves Robson"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberta a novas oportunidades e conversas interessantes sobre tecnologia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card dark:bg-[#121212] text-card-foreground dark:text-white shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-foreground dark:text-white">Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground dark:text-white">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      className="mt-1 bg-card text-card-foreground dark:bg-[#121212] dark:text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground dark:text-white">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="mt-1 bg-card text-card-foreground dark:bg-[#121212] dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-foreground dark:text-white">Assunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Sobre o que você gostaria de conversar?"
                    required
                    className="mt-1 bg-card text-card-foreground dark:bg-[#121212] dark:text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground dark:text-white">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Sua mensagem..."
                    rows={5}
                    required
                    className="mt-1 bg-card text-card-foreground dark:bg-[#121212] dark:text-white"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-card dark:bg-[#121212] text-card-foreground dark:text-white shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-foreground dark:text-white">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-lg p-2 text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground dark:text-white">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground dark:text-gray-300 hover:text-primary transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground dark:text-gray-300">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card dark:bg-[#121212] text-card-foreground dark:text-white shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-foreground dark:text-white">Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/10 transition-colors duration-300 group"
                  >
                    <div className="bg-primary/10 rounded-lg p-2 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {social.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground dark:text-white">{social.label}</p>
                      <p className="text-muted-foreground dark:text-gray-300">{social.username}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-primary text-primary-foreground shadow-glow border-0">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Pronta para Novos Desafios!</h3>
                <p className="mb-4 opacity-90">
                  Buscando oportunidades em equipes inovadoras que valorizam
                  qualidade, segurança e criatividade.
                </p>

                <a
                  href="https://curriculo-interativo-gray.vercel.app/"
                  className="w-full block"
                >
                  <Button
                    variant="secondary"
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 w-full"
                  >
                    Ver Currículo
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
