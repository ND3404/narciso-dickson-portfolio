import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// In Project brand palette
const INK = "#02000b";
const RUST = "#a04732";
const PAPER = "#edeae2";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          color: PAPER,
          background: INK,
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: "#ffffff" }}>
            Narciso M. Dickson, MS, PMP
          </div>
          <div
            style={{
              border: `1px solid ${RUST}`,
              borderRadius: 999,
              padding: "10px 18px",
              fontSize: 22,
              color: RUST,
            }}
          >
            Project Leadership | Analytics | AI
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: RUST, fontSize: 24, fontWeight: 800, marginBottom: 18 }}>
            Construction project controls portfolio
          </div>
          <div
            style={{
              fontSize: 70,
              lineHeight: 1.05,
              fontWeight: 900,
              maxWidth: 900,
              color: "#ffffff",
            }}
          >
            Construction Project Leadership, Powered by Data and AI
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 25, fontWeight: 800 }}>
          {["PMP certified", "15+ years", "Power BI + Tableau", "Responsible AI"].map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid rgba(237,234,226,.22)",
                borderRadius: 8,
                padding: "14px 18px",
                background: "rgba(237,234,226,.08)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
