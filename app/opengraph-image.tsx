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
          justifyContent: "flex-end",
          backgroundColor: "#0C0E12",
          padding: 72,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "40%",
            height: "100%",
            background: "linear-gradient(270deg, rgba(79,143,255,0.35) 0%, transparent 100%)",
          }}
        />
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#C5E63A",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Pier Index
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Immigration Expert Reports
        </div>
        <p
          style={{
            marginTop: 24,
            fontSize: 26,
            fontWeight: 500,
            color: "#4F8FFF",
            lineHeight: 1.3,
            maxWidth: 800,
          }}
        >
          UK tribunal expert evidence — country, persecution, CPIN, human rights
        </p>
      </div>
    ),
    { ...size }
  );
}
