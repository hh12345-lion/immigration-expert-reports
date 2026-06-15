import { ImageResponse } from "next/og";

export const alt = "Immigration Expert Reports - UK Immigration Tribunal Expert Evidence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          backgroundColor: "#1E3A5F",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Immigration Expert Reports
        </div>
        <p
          style={{
            marginTop: 32,
            fontSize: 32,
            fontWeight: 600,
            color: "#0E7490",
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          UK Immigration Tribunal Expert Evidence
        </p>
      </div>
    ),
    { ...size }
  );
}
