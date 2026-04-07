import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";
export const alt = siteConfig.title;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #f8f5f0 0%, #f1e7da 40%, #ffffff 100%)",
          padding: "64px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            background:
              "radial-gradient(circle at top right, rgba(201,166,122,0.30), transparent 28%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: "36px",
            border: "1px solid rgba(15,23,42,0.06)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.78), rgba(255,255,255,0.96))",
            padding: "56px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
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
                    color: "#7A6247",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  TRIMLESS
                </div>
                <div
                  style={{
                    fontSize: 34,
                    color: "#111827",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  LED
                </div>
              </div>
            </div>
            <div style={{ fontSize: 20, color: "#64748b" }}>trimlessled.com</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "28px",
              maxWidth: 760,
            }}
          >
            <div
              style={{
                fontSize: 72,
                lineHeight: 1,
                letterSpacing: "-0.06em",
                color: "#020617",
              }}
            >
              Trimless led profil ile sıva altı ve çerçevesiz aydınlatma.
            </div>
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.5,
                color: "#475569",
                maxWidth: 700,
              }}
            >
              Türkiye geneli satış, hızlı teklif ve mimari lineer aydınlatma
              çözümleri.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "18px",
              alignItems: "center",
            }}
          >
            {["Trimless led profil", "Sıva altı led", "WhatsApp ile teklif"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    padding: "14px 22px",
                    borderRadius: 999,
                    border: "1px solid rgba(15,23,42,0.08)",
                    fontSize: 20,
                    color: "#334155",
                    background: "rgba(255,255,255,0.88)",
                  }}
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
