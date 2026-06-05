/**
 * Ambient page background — layered, restrained depth.
 * Fixed behind all content; purely decorative.
 */
export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base wash */}
      <div className="absolute inset-0 bg-canvas" />

      {/* Soft top spotlight */}
      <div
        className="absolute left-1/2 top-[-20%] h-[60vh] w-[80vw] -translate-x-1/2 rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, oklch(64% 0.18 302 / 0.17), transparent)",
        }}
      />

      {/* Faint magenta-purple glow, lower right — harmonizes with the accent */}
      <div
        className="absolute bottom-[-10%] right-[-10%] h-[50vh] w-[50vw] rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, oklch(68% 0.12 326 / 0.12), transparent)",
        }}
      />

      {/* Hairline grid, masked to fade out */}
      <div className="absolute inset-0 bg-grid mask-radial-faded opacity-[0.4]" />

      {/* Subtle grain for texture */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
