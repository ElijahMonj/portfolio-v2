import { ImageResponse } from "next/og";
import { EXPERIENCES } from "./lib/content";

/**
 * Read from the same figures the page shows, so the share card can never
 * disagree with the site. content.ts is pure data (pillar icons are string
 * keys, not react-icons imports), so it is safe inside the next/og runtime.
 */
const stats = EXPERIENCES.find((exp) => exp.showcase)?.showcase?.stats ?? [];
const statLine = stats
  .slice(0, 2)
  .map((stat, i) => {
    const value = stat.value.toLocaleString("en-US", {
      minimumFractionDigits: stat.decimals ?? 0,
      maximumFractionDigits: stat.decimals ?? 0,
    });
    // No star glyph: satori's built-in font has no U+2605 and renders tofu.
    return i === 0
      ? `${value}${stat.suffix ?? ""} ${stat.label} shipped`
      : `${value}/5 ${stat.label}`;
  })
  .join("  ·  ");

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
        {statLine && (
          <div style={{ display: "flex", fontSize: 34, color: "#e8edf7", marginTop: 34 }}>
            {statLine}
          </div>
        )}
        <div style={{ display: "flex", fontSize: 30, color: "#93a2bd", marginTop: 34 }}>
          elijahmonjardin.vercel.app
        </div>
      </div>
    ),
    { ...size },
  );
}
