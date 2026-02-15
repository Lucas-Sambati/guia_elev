import { motion } from "framer-motion";
import { HelpCircle, Mail, ExternalLink, Rocket } from "lucide-react";
import { ElevBrand } from "@/components/ElevBrand";

export function SupportSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Perguntas Frequentes
              </h2>
            </div>

            <div className="space-y-4">
              <FaqItem
                question="Preciso pagar algo a mais para usar o app?"
                answer="Não! Sua assinatura já inclui acesso completo a todas as funcionalidades do ELEV. Não há cobranças adicionais."
              />
              <FaqItem
                question="O app funciona sem internet?"
                answer="Algumas funcionalidades funcionam offline após o primeiro carregamento. Para funcionalidades que dependem de dados em tempo real (ranking, consultoria IA), é necessária conexão com a internet."
              />
              <FaqItem
                question="Posso usar em mais de um dispositivo?"
                answer="Sim! Basta acessar dev.elevhq.com e fazer login com a mesma conta em qualquer dispositivo. Seus dados são sincronizados automaticamente."
              />
              <FaqItem
                question="E se meu e-mail da compra for diferente da conta?"
                answer="Entre em contato com nosso suporte para vincularmos manualmente. É importante que o e-mail seja o mesmo para a ativação automática."
              />
              <FaqItem
                question="Como cancelo minha assinatura?"
                answer="Você pode gerenciar sua assinatura diretamente pela plataforma de pagamento utilizada na compra. Se precisar de ajuda, fale com nosso suporte."
              />
            </div>
          </motion.div>

          {/* Support CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="glass-card p-6 md:p-8 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Precisa de ajuda?
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Se tiver qualquer dúvida ou problema no acesso, entre em contato
              com nosso suporte. Estamos aqui para ajudar!
            </p>
            <a
              href="mailto:suporte@elevhq.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-cta text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              suporte@elevhq.com
            </a>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-5">
              Tudo pronto? Acesse o <ElevBrand /> agora e comece sua evolução!
            </p>
            <a
              href="https://dev.elevhq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-cta text-white font-semibold text-lg hover:opacity-90 transition-opacity glow animate-pulse-glow"
            >
              <Rocket className="w-5 h-5" />
              Acessar o <ElevBrand color="#FFFFFF" />
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="glass-card p-5">
      <h4 className="text-sm font-semibold text-white mb-2">{question}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
    </div>
  );
}
