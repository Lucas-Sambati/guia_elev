import { motion } from "framer-motion";
import { PartyPopper, Rocket } from "lucide-react";
import { ElevBrand } from "@/components/ElevBrand";

const LOGO_URL =
  "https://res.cloudinary.com/dnyylurcv/image/upload/v1770233888/bbtntttjzaalbrdb9xrf.png";

export function HeroSection() {
  return (
    <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Logo */}
          <motion.img
            src={LOGO_URL}
            alt="Elev"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 180 }}
            className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 rounded-2xl"
          />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.25, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6"
          >
            <PartyPopper className="w-4 h-4" />
            <span className="text-sm font-medium">Compra confirmada!</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Bem-vindo ao <ElevBrand />
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Obrigado por escolher elevar seus resultados! Siga o guia abaixo
            para configurar seu acesso e começar sua transformação.
          </p>

          <motion.a
            href="#passos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-cta text-white font-semibold text-lg hover:opacity-90 transition-opacity glow"
          >
            <Rocket className="w-5 h-5" />
            Começar configuração
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
