/**
 * Branded "ELEV" text component.
 * Montserrat SemiBold (600), uppercase, #4F46E5, letter-spacing 0.4em.
 * Renders as an inline <span> so it can be used inside headings, paragraphs, etc.
 */
export function ElevBrand({ className = "", color }: { className?: string; color?: string }) {
  return (
    <span
      className={`font-display font-semibold uppercase ${className}`}
      style={{ color: color || "#4F46E5", letterSpacing: "0.4em", marginRight: "-0.4em" }}
    >
      ELEV
    </span>
  );
}
