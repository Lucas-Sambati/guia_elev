import { motion } from "framer-motion";
import {
  Dumbbell,
  Brain,
  Trophy,
  BarChart3,
  MessageSquare,
  User,
} from "lucide-react";
import { ElevBrand } from "@/components/ElevBrand";

const features = [
  {
    icon: Dumbbell,
    title: "Controle de Treinos",
    description:
      "Planilha inteligente e visual para acompanhar séries, cargas e evolução.",
  },
  {
    icon: Brain,
    title: "Conteúdo Educativo",
    description:
      "Módulos explicativos com dicas práticas sobre treino e nutrição.",
  },
  {
    icon: BarChart3,
    title: "Métricas e Dashboard",
    description:
      "Acompanhe suas métricas de evolução em um painel completo.",
  },
  {
    icon: Trophy,
    title: "Ranking da Comunidade",
    description:
      "Compete com outros membros e suba no ranking com seu progresso.",
  },
  {
    icon: MessageSquare,
    title: "Consultoria com IA",
    description:
      "Plano alimentar personalizado e dicas de treino via inteligência artificial.",
  },
  {
    icon: User,
    title: "Perfil Completo",
    description:
      "Gerencie suas informações, acompanhe nível, pontos e conquistas.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export function FeaturesPreview() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que te espera no{" "}
            <ElevBrand />
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tudo que você precisa para elevar seus resultados na academia,
            em um só lugar.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="glass-card p-5 group hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-white mb-1.5">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
