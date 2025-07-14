// src/app/twitter-image.tsx
import { loadGoogleFont } from "@/lib/google-font";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Moovie Twitter Card";

export default async function Image() {
  const title = "🎬 Moovie";
  const description = "Nonton Drama & Film Asia Tanpa Iklan";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff", // putih
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            fontSize: 88,
            fontWeight: 900,
            color: "#1e293b", // slate-800
            display: "flex",
            alignItems: "center",
            gap: "24px",
            lineHeight: 1,
            fontFamily: "Roboto-Black",
          }}
        >
          {title}
        </div>

        <p
          style={{
            fontSize: 36,
            fontWeight: 600,
            marginTop: 24,
            color: "#475569",
            fontFamily: "Roboto",
          }}
        >
          {description}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Roboto-Black",
          data: await loadGoogleFont("Roboto", 900, title),
        },
        {
          name: "Roboto",
          data: await loadGoogleFont("Roboto", 400, description),
        },
      ],
    },
  );
}
