import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #22D3EE, #3B82F6, #8B5CF6)",
          color: "white",
          fontSize: 15,
          fontWeight: 800,
          letterSpacing: -1,
          fontFamily: "sans-serif",
          borderRadius: 7,
        }}
      >
        EM
      </div>
    ),
    { ...size },
  );
}
