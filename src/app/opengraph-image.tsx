import { ImageResponse } from "next/og";

export const alt = "Boston Wax — A Record Shop for Local Boston Bands";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#efe4cd",
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 340,
            height: 340,
            borderRadius: "50%",
            background: "#17120c",
            marginRight: 64,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 130,
              height: 130,
              borderRadius: "50%",
              background: "#c8912f",
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "#17120c",
                display: "flex",
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 6,
              color: "#7a2622",
              textTransform: "uppercase",
              fontWeight: 700,
              marginBottom: 12,
            }}
          >
            Boston, MA
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 108,
              fontWeight: 700,
              color: "#2a1f14",
              lineHeight: 1,
            }}
          >
            Boston Wax
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: "#5a4a37",
              marginTop: 24,
            }}
          >
            A record shop for locals only.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
