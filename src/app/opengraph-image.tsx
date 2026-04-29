import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import path from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Lee Junseob — C++ 서버 개발자 포트폴리오";

async function loadGoogleFont(family: string, weight: number): Promise<ArrayBuffer> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`,
    { headers: { "User-Agent": "Mozilla/5.0" } }
  ).then((res) => res.text());
  const fontUrl = css.match(/src: url\((https:[^)]+)\) format/)?.[1];
  if (!fontUrl) throw new Error(`Font URL not found for ${family} ${weight}`);
  return fetch(fontUrl).then((res) => res.arrayBuffer());
}

export default async function Image() {
  const imageBytes = readFileSync(
    path.join(process.cwd(), "public/images/profile.jpg")
  );
  const imageDataUri = `data:image/jpeg;base64,${imageBytes.toString("base64")}`;

  const [bold, regular] = await Promise.all([
    loadGoogleFont("Noto+Sans+KR", 700),
    loadGoogleFont("Noto+Sans+KR", 400),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#FAFAF9",
          padding: "80px",
          gap: "70px",
          alignItems: "center",
          fontFamily: "Noto Sans KR",
        }}
      >
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img
          src={imageDataUri}
          width={320}
          height={410}
          style={{
            width: 320,
            height: 410,
            objectFit: "cover",
            objectPosition: "top",
            borderRadius: "50%",
            border: "1px solid #E4E4E7",
            flexShrink: 0,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              fontSize: 24,
              color: "#71717A",
              letterSpacing: "0.25em",
              fontFamily: "monospace",
              marginBottom: 24,
            }}
          >
            PORTFOLIO
          </div>
          <div
            style={{
              fontSize: 110,
              fontWeight: 700,
              color: "#18181B",
              lineHeight: 1,
              marginBottom: 18,
              letterSpacing: "-0.02em",
            }}
          >
            이준섭
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#71717A",
              marginBottom: 40,
            }}
          >
            Lee Junseob · C++ 서버 개발자
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#B45309",
              fontFamily: "monospace",
            }}
          >
            seober-web-portfolio.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Noto Sans KR", data: bold, weight: 700 },
        { name: "Noto Sans KR", data: regular, weight: 400 },
      ],
    }
  );
}
