import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Monitor,
  Share,
  PlusSquare,
  MoreVertical,
  Download,
  ChevronDown,
  ChevronUp,
  Chrome,
  Apple,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ElevBrand } from "@/components/ElevBrand";

type Platform = "ios" | "android" | "desktop";

const platforms: { id: Platform; label: string; icon: React.ElementType }[] = [
  { id: "ios", label: "iPhone / iPad", icon: Apple },
  { id: "android", label: "Android", icon: Smartphone },
  { id: "desktop", label: "Computador", icon: Monitor },
];

interface Step {
  icon: React.ElementType;
  text: string;
  detail?: string;
}

const installSteps: Record<Platform, Step[]> = {
  ios: [
    {
      icon: Chrome,
      text: "Abra o Safari",
      detail:
        "O PWA só pode ser instalado pelo Safari no iPhone/iPad. Se abriu em outro navegador, copie o link e cole no Safari.",
    },
    {
      icon: Share,
      text: 'Toque no botão "Compartilhar"',
      detail:
        "É o ícone de quadrado com seta para cima, localizado na barra inferior do Safari.",
    },
    {
      icon: PlusSquare,
      text: 'Selecione "Adicionar à Tela de Início"',
      detail:
        'Role as opções para baixo até encontrar "Adicionar à Tela de Início" e toque nesta opção.',
    },
    {
      icon: Download,
      text: 'Confirme tocando em "Adicionar"',
      detail:
        "O ícone do ELEV aparecerá na sua tela inicial, como um app nativo.",
    },
  ],
  android: [
    {
      icon: Chrome,
      text: "Abra o Chrome",
      detail:
        "Recomendamos usar o Google Chrome para melhor compatibilidade. Acesse elevhq.com.",
    },
    {
      icon: MoreVertical,
      text: "Toque nos 3 pontos (⋮)",
      detail:
        "No canto superior direito da tela, toque no menu de três pontos verticais.",
    },
    {
      icon: Download,
      text: 'Selecione "Instalar aplicativo" ou "Adicionar à tela inicial"',
      detail:
        "Dependendo da versão do Chrome, o texto pode variar. Escolha a opção de instalar.",
    },
    {
      icon: PlusSquare,
      text: 'Confirme tocando em "Instalar"',
      detail:
        "O app ELEV será instalado e aparecerá na tela inicial e na gaveta de aplicativos.",
    },
  ],
  desktop: [
    {
      icon: Chrome,
      text: "Abra o Chrome, Edge ou Brave",
      detail: "Acesse elevhq.com em um navegador compatível com PWA.",
    },
    {
      icon: Download,
      text: "Clique no ícone de instalação",
      detail:
        'Na barra de endereço, clique no ícone de instalação (monitor com seta) ou vá em Menu → "Instalar ELEV".',
    },
    {
      icon: PlusSquare,
      text: 'Confirme clicando em "Instalar"',
      detail:
        "O ELEV será instalado como um aplicativo na sua área de trabalho.",
    },
  ],
};

export function InstallGuide() {
  const [selected, setSelected] = useState<Platform>("ios");
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

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
            Como instalar o{" "}
            <ElevBrand />
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            O <ElevBrand /> é um PWA (Progressive Web App). Ele funciona como um app
            nativo, mas é instalado direto pelo navegador. Selecione seu
            dispositivo:
          </p>
        </motion.div>

        {/* Platform Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => {
                setSelected(platform.id);
                setExpandedStep(null);
              }}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all",
                selected === platform.id
                  ? "gradient-cta text-white glow"
                  : "glass-card text-muted-foreground hover:text-white hover:border-primary/30"
              )}
            >
              <platform.icon className="w-4 h-4" />
              {platform.label}
            </button>
          ))}
        </div>

        {/* Steps */}
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-2xl mx-auto space-y-4"
        >
          {installSteps[selected].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedStep(expandedStep === index ? null : index)
                }
                className="w-full flex items-center gap-4 p-4 text-left hover:bg-white/[0.02] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-primary/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white font-medium">{step.text}</span>
                  </div>
                </div>
                {step.detail && (
                  <div className="text-muted-foreground">
                    {expandedStep === index ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                )}
              </button>

              <AnimatePresence>
                {expandedStep === index && step.detail && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pl-[4.5rem]">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Tip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto mt-8"
        >
          <div className="glass-card p-4 border-primary/20 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-accent text-lg">💡</span>
            </div>
            <div>
              <p className="text-sm font-medium text-white mb-1">Dica</p>
              <p className="text-sm text-muted-foreground">
                Após instalar, o ELEV funciona como um app nativo no seu
                dispositivo. Você pode acessá-lo diretamente pela tela inicial,
                sem precisar abrir o navegador.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
