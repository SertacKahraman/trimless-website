import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f0e1ce 0%, #c9a57e 100%)",
          borderRadius: 40,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 12,
            borderRadius: 32,
            border: "1px solid rgba(255,247,239,0.55)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 44,
            left: 54,
            width: 72,
            height: 10,
            borderRadius: 999,
            background: "#1C1B1A",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 44,
            left: 54,
            width: 10,
            height: 92,
            borderRadius: 999,
            background: "#1C1B1A",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 84,
            left: 64,
            width: 62,
            height: 10,
            borderRadius: 999,
            background: "#FFF7EF",
          }}
        />
      </div>
    ),
    size,
  );
}
