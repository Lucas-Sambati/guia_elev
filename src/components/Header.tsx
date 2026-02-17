import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-cta flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Elev</span>
        </div>
        <a
          href="https://elevhq.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg gradient-cta text-white text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Acessar o Elev
        </a>
      </div>
    </motion.header>
  );
}
