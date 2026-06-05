import { ImageResponse } from "next/og";
import { personal } from "@/config/personal";

// Render the OG image once at build time (required for `output: export`).
export const dynamic = "force-static";

export const alt = `${personal.name} — ${personal.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(900px 500px at 15% -10%, rgba(160,86,232,0.30), transparent), #0a0a0b",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 600,
              background: "rgba(255,255,255,0.04)",
            }}
          >
            {personal.initials}
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.55)" }}>
            {personal.url.replace("https://", "")}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {personal.name}
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#c084fc",
              fontWeight: 500,
            }}
          >
            {personal.title}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            {personal.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
