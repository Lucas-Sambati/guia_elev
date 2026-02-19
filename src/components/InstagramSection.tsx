import { motion } from "framer-motion";
import instagramIcon from "@/assets/images/instagram-icon.png";

export function InstagramSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card relative overflow-hidden p-8 md:p-10 text-center">
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#833AB4]/10 via-[#E1306C]/10 to-[#F77737]/10 pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#E1306C]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#833AB4]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Instagram icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="mx-auto mb-6 w-16 h-16 md:w-20 md:h-20"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Heading */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Siga-nos no Instagram
              </h2>

              {/* Description */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto">
                Fique por dentro de comunicados, atualizações, dicas exclusivas
                e conecte-se com a comunidade <span className="text-primary font-semibold">ELEV</span>.
                Acompanhe tudo em primeira mão!
              </p>

              {/* CTA Button */}
              <motion.a
                href="https://instagram.com/elev.hq"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-opacity hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F77737 100%)",
                  boxShadow: "0 0 24px rgba(225, 48, 108, 0.25)",
                }}
              >
                <img
                  src={instagramIcon}
                  alt=""
                  className="w-5 h-5 object-contain brightness-0 invert"
                />
                @elev.hq
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
