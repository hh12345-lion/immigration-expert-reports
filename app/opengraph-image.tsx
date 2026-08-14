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
          backgroundColor: "#F5F2EC",
          padding: 72,
        }}
      >
        <div
          style={{
            width: 56,
            height: 4,
            backgroundColor: "#C47A12",
            marginBottom: 28,
          }}
        />
        <div
          style={{
            fontSize: 52,
            fontWeight: 600,
            color: "#1B2430",
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
            color: "#2557D6",
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
