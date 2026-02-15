import { ElevBrand } from "@/components/ElevBrand";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ElevBrand />
            <span className="text-muted-foreground" style={{ color: "#4F46E5" }}>·</span>
            <span className="font-sans text-sm" style={{ color: "#737d7f" }}>
              Eleve seu resultado
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {year} ELEV. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
