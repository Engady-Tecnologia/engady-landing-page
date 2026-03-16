import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, Shield, ChevronRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/engady-logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    desc: "Sistemas web modernos, responsivos e escaláveis para o seu negócio.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    desc: "Apps nativos e híbridos para Android e iOS com excelente experiência.",
  },
  {
    icon: Globe,
    title: "Consultoria em TI",
    desc: "Análise e planejamento tecnológico para otimizar seus processos.",
  },
  {
    icon: Shield,
    title: "Segurança Digital",
    desc: "Proteção de dados e infraestrutura com as melhores práticas do mercado.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-md border-b border-primary/80">
        <div className="container mx-auto flex items-center justify-between h-[84px] px-4">
          <img src={logo} alt="Engady Tecnologia" className="h-[68px] rounded" />
          <div className="hidden md:flex items-center gap-8 text-base font-medium text-primary-foreground/80">
            <a href="#sobre" className="hover:text-secondary transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-secondary transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-secondary transition-colors">Contato</a>
          </div>
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold text-base px-6 h-11">
            Fale Conosco
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative gradient-primary min-h-[90vh] flex items-center pt-16">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(14, 89%, 56%) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(270, 53%, 40%) 0%, transparent 50%)" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-900 text-primary-foreground leading-tight"
            >
              Transformamos ideias em{" "}
              <span className="text-gradient">soluções digitais</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-6 text-lg md:text-xl text-primary-foreground/75 max-w-xl font-body"
            >
              A Engady Tecnologia desenvolve software sob medida para empresas que buscam inovação, eficiência e crescimento.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-bold text-base px-8">
                Solicitar Orçamento <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground font-heading font-semibold">
                Nossos Serviços
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={0}
            >
              <span className="text-secondary font-heading font-bold text-sm uppercase tracking-widest">Quem Somos</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-heading font-800 text-foreground">
                Tecnologia que impulsiona o seu negócio
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                A Engady Tecnologia é uma empresa nova no mercado, fundada com a missão de criar soluções digitais personalizadas e acessíveis. Estamos começando do zero, mas com muita energia, conhecimento técnico e vontade de fazer a diferença.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Acreditamos que toda grande empresa começa com um primeiro passo. O nosso é entregar tecnologia de qualidade, com atendimento próximo e compromisso real com cada projeto. Queremos crescer junto com nossos clientes.
              </p>
              <div className="mt-10 grid sm:grid-cols-3 gap-6">
                {[
                  { icon: "🚀", title: "Inovação", desc: "Soluções modernas com as tecnologias mais atuais do mercado." },
                  { icon: "🤝", title: "Compromisso", desc: "Dedicação total a cada projeto, do início à entrega." },
                  { icon: "💡", title: "Criatividade", desc: "Ideias que transformam desafios em oportunidades digitais." },
                ].map((item) => (
                  <div key={item.title} className="bg-muted rounded-lg p-6 border border-border">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary font-heading font-bold text-sm uppercase tracking-widest">Serviços</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading font-800 text-foreground">
              Soluções completas para sua empresa
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-lg p-8 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mb-5">
                  <s.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="font-heading font-bold text-lg text-card-foreground">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-primary relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, hsl(14, 89%, 56%) 0%, transparent 60%)" }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-900 text-primary-foreground">
              Pronto para transformar sua ideia?
            </h2>
            <p className="mt-6 text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Entre em contato e descubra como podemos ajudar sua empresa a crescer com tecnologia.
            </p>
            <Button size="lg" className="mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-bold text-base px-10">
              Iniciar Projeto <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary font-heading font-bold text-sm uppercase tracking-widest">Contato</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading font-800 text-foreground">
              Fale com a gente
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: Mail, label: "E-mail", value: "contato@engady.com.br" },
              { icon: Phone, label: "Telefone", value: "(00) 00000-0000" },
              { icon: MapPin, label: "Localização", value: "Brasil" },
            ].map((item) => (
              <div key={item.label} className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-5 w-5 text-secondary" />
                </div>
                <div className="text-sm text-muted-foreground font-medium">{item.label}</div>
                <div className="mt-1 font-heading font-semibold text-foreground">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-primary py-10 border-t border-primary/80">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logo} alt="Engady Tecnologia" className="h-8 rounded" />
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Engady Tecnologia. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
