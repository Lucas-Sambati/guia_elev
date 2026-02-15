import { motion } from "framer-motion";
import {
  Globe,
  Download,
  UserPlus,
  CheckCircle2,
} from "lucide-react";
import { ElevBrand } from "@/components/ElevBrand";

const steps = [
  {
    icon: Globe,
    number: "01",
    title: "Acesse o ELEV",
    description:
      "Abra o navegador do seu celular e acesse o link abaixo:",
    highlight: "dev.elevhq.com",
    highlightLink: "https://dev.elevhq.com",
  },
  {
    icon: Download,
    number: "02",
    title: "Instale o App",
    description:
      "Siga o passo a passo de instalação do PWA conforme seu dispositivo (veja detalhes na seção abaixo).",
  },
  {
    icon: UserPlus,
    number: "03",
    title: "Crie sua conta",
    description:
      "Cadastre-se usando o mesmo e-mail utilizado na compra da assinatura. Isso é essencial para a validação automática do seu pagamento.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Pronto!",
    description:
      "Sua assinatura será validada automaticamente. Se você já tem conta, basta fazer login e o acesso será liberado na hora.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function StepsSection() {
  return (
    <section id="passos" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Configure em{" "}
            <span className="text-gradient">4 passos simples</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leva menos de 2 minutos para deixar tudo pronto.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="glass-card p-6 relative group hover:border-primary/30 transition-colors"
            >
              {/* Step number */}
              <div className="text-5xl font-bold text-primary/10 absolute top-4 right-4 select-none">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>

              {step.highlight && (
                <a
                  href={step.highlightLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-mono font-semibold hover:bg-primary/20 transition-colors"
                >
                  {step.highlight}
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
