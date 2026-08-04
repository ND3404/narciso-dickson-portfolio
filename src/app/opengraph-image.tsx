import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

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
          color: "white",
          background:
            "radial-gradient(circle at 82% 10%, rgba(46,205,227,.32), transparent 34%), linear-gradient(135deg, #02000b, #0b1020 58%, #132747)",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 28, fontWeight: 800 }}>Narciso M. Dickson</div>
          <div
            style={{
              border: "1px solid rgba(255,255,255,.28)",
              borderRadius: 999,
              padding: "10px 18px",
              fontSize: 22,
              color: "#9cf4ff",
            }}
          >
            Project Leadership | Analytics | AI
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#2ecde3", fontSize: 24, fontWeight: 800, marginBottom: 18 }}>
            Construction project controls portfolio
          </div>
          <div style={{ fontSize: 70, lineHeight: 1.05, fontWeight: 900, maxWidth: 900 }}>
            Construction Project Leadership, Powered by Data and AI
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 25, fontWeight: 800 }}>
          {["PMP certified", "10+ years", "Power BI + Tableau", "Responsible AI"].map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid rgba(255,255,255,.18)",
                borderRadius: 8,
                padding: "14px 18px",
                background: "rgba(255,255,255,.08)",
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
