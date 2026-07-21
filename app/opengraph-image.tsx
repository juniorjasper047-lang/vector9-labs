import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vector9 Labs — Intelligent systems for modern businesses";
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
          padding: "72px",
          backgroundColor: "#060912",
          backgroundImage:
            "linear-gradient(135deg, #060912 0%, #0b1024 55%, #100f30 100%)",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 460,
            height: 460,
            borderRadius: 999,
            background:
              "radial-gradient(circle, rgba(249,115,22,0.45), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            left: -60,
            width: 440,
            height: 440,
            borderRadius: 999,
            background:
              "radial-gradient(circle, rgba(245,158,11,0.42), transparent 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 15,
              background: "linear-gradient(135deg,#f97316,#f59e0b)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            9
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: -0.5 }}>
            Vector9 Labs
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            zIndex: 1,
            maxWidth: 980,
          }}
        >
          <div
            style={{
              fontSize: 28,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#fdba74",
            }}
          >
            AI &amp; Software Studio
          </div>
          <div
            style={{
              fontSize: 74,
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: -2,
              background: "linear-gradient(90deg,#fb923c,#f59e0b)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Intelligent systems for modern businesses
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 1,
            fontSize: 26,
            color: "#c7d0e8",
          }}
        >
          <div>Accra, Ghana · Worldwide</div>
          <div
            style={{
              padding: "10px 22px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.22)",
              fontSize: 22,
            }}
          >
            vector9labs.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
