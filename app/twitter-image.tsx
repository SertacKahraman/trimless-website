import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";
export const alt = siteConfig.title;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#0f172a",
          color: "white",
          padding: "64px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(201,166,122,0.35), transparent 28%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: "36px",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.04)",
            padding: "56px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 16,
                background: "linear-gradient(135deg, #243040 0%, #151B24 100%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 15,
                  left: 14,
                  width: 24,
                  height: 4,
                  borderRadius: 999,
                  background: "#F7F1E8",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 15,
                  left: 14,
                  width: 4,
                  height: 22,
                  borderRadius: 999,
                  background: "#F7F1E8",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 28,
                  left: 18,
                  width: 18,
                  height: 4,
                  borderRadius: 999,
                  background: "#B99773",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <div
                style={{
                  letterSpacing: "0.28em",
                  fontSize: 16,
                  color: "rgba(216,181,138,0.9)",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                TRIMLESS
              </div>
              <div
                style={{
                  fontSize: 34,
                  color: "#F7F1E8",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                LED
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "28px",
              maxWidth: 780,
            }}
          >
            <div
              style={{
                fontSize: 76,
                lineHeight: 1,
                letterSpacing: "-0.06em",
              }}
            >
              Trimless led profil ile daha temiz yüzey, daha net çizgi.
            </div>
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.45,
                color: "rgba(255,255,255,0.72)",
                maxWidth: 760,
              }}
            >
              Sıva altı çerçevesiz lineer aydınlatma için Türkiye geneli hızlı
              teklif.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 22,
              color: "rgba(255,255,255,0.68)",
            }}
          >
            <div>trimlessled.com</div>
            <div>Türkiye geneli</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
