import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#111827",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Glow background */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(108,59,255,0.4) 0%, rgba(39,184,255,0.1) 70%, transparent 100%)",
            top: "-100px",
            left: "300px",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #6C3BFF, #27B8FF, #FF8B35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
          <span
            style={{
              fontSize: "48px",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-1px",
            }}
          >
            ArrowFlow <span style={{ color: "#FFD84D" }}>MANIA</span>
          </span>
        </div>

        <div
          style={{
            fontSize: "46px",
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            maxWidth: "920px",
            lineHeight: 1.2,
            marginBottom: "18px",
          }}
        >
          {siteConfig.tagline}
        </div>

        <div
          style={{
            fontSize: "22px",
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          {siteConfig.subheading}
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "36px",
          }}
        >
          <div
            style={{
              padding: "10px 24px",
              borderRadius: "9999px",
              background: "rgba(108,59,255,0.3)",
              border: "1px solid rgba(108,59,255,0.6)",
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            4.8 Rating • 500+ Stages • Free to Play
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
