import { ImageResponse } from "next/og";

export const alt = "Elijah Monjardin — Full Stack Software Engineer";
export const size = { width: 1200, height: 630 };
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
          justifyContent: "center",
          padding: "90px",
          background: "#060913",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Aurora blobs */}
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -120,
            width: 540,
            height: 540,
            borderRadius: "9999px",
            background: "#22D3EE",
            opacity: 0.35,
            filter: "blur(140px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: "9999px",
            background: "#8B5CF6",
            opacity: 0.35,
            filter: "blur(150px)",
          }}
        />

        <div style={{ display: "flex", fontSize: 30, color: "#93a2bd", letterSpacing: 6 }}>
          PORTFOLIO
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 800,
            color: "#e8edf7",
            marginTop: 14,
            letterSpacing: -2,
          }}
        >
          Elijah Monjardin
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 700,
            marginTop: 8,
            backgroundImage: "linear-gradient(110deg, #22D3EE, #3B82F6, #8B5CF6)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Full Stack Software Engineer
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#93a2bd", marginTop: 40 }}>
          elijahmonjardin.tech
        </div>
      </div>
    ),
    { ...size },
  );
}
