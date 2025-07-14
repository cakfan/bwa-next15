import { loadGoogleFont } from "@/lib/google-font";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const title = request?.nextUrl.searchParams.get("title") ?? "Moovie";
  const description =
    request?.nextUrl.searchParams.get("description") ??
    "Nonton drama & film Asia tanpa iklan";

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #ef4444, #8b5cf6)", // merah → ungu
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: 96,
              lineHeight: "1",
            }}
          >
            🍿
          </div>
          <div
            style={{
              fontSize: 72,
              color: "white",
              textAlign: "center",
              fontFamily: "Geist-Black",
            }}
          >
            {title}
          </div>
        </div>

        <p
          style={{
            fontSize: 32,
            color: "white",
            marginTop: 24,
            fontFamily: "Geist",
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
          name: "Geist-Black",
          data: await loadGoogleFont("Geist", 900, title),
        },
        {
          name: "Geist",
          data: await loadGoogleFont("Geist", 400, description),
        },
      ],
    },
  );
}
