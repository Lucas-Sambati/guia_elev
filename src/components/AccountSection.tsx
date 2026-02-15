import { motion } from "framer-motion";
import { Mail, AlertTriangle, ShieldCheck, LogIn } from "lucide-react";
import { ElevBrand } from "@/components/ElevBrand";

export function AccountSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sobre sua{" "}
            <span className="text-gradient">conta</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Informações importantes sobre o cadastro e a validação da sua
            assinatura.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card: Novo usuario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 md:p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Primeira vez?
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Ao abrir o <ElevBrand />, toque em <strong className="text-white">"Criar conta"</strong>. Preencha
              seus dados e use{" "}
              <strong className="text-white">
                o mesmo e-mail utilizado na compra
              </strong>
              .
            </p>
            <div className="flex items-start gap-2 p-3 rounded-lg bg-accent/5 border border-accent/10">
              <ShieldCheck className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <p className="text-xs text-accent/90">
                A validação do pagamento é feita automaticamente pelo e-mail.
                Não é necessário inserir nenhum código.
              </p>
            </div>
          </motion.div>

          {/* Card: Ja tem conta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="glass-card p-6 md:p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <LogIn className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Já tem conta?
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Basta <strong className="text-white">fazer login</strong> normalmente.
              Se o e-mail da conta for o mesmo da compra, sua assinatura será{" "}
              <strong className="text-white">ativada automaticamente</strong>{" "}
              assim que você entrar.
            </p>
            <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
              <LogIn className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-xs text-primary/90">
                Caso já esteja logado, basta fechar e reabrir o app para
                atualizar o status da assinatura.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Warning */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-4xl mx-auto mt-6"
        >
          <div className="glass-card p-4 border-yellow-500/20 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertTriangle className="w-4 h-4 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-white mb-1">Importante</p>
              <p className="text-sm text-muted-foreground">
                O e-mail da sua conta no <ElevBrand />{" "}
                <strong className="text-white">
                  precisa ser o mesmo e-mail utilizado na compra
                </strong>
                . Caso contrário, a validação automática do pagamento não será
                possível. Se isso acontecer, entre em contato com nosso suporte.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
