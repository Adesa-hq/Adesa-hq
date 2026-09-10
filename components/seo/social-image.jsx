import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const SOCIAL_IMAGE_SIZE = {
  width: 1200,
  height: 630,
};

export function createSocialImage({ headline, summary }) {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#0B0F19",
          color: "#F8FAFC",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "18px",
            background: "#D4A017",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "64px",
            top: "64px",
            width: "170px",
            height: "170px",
            border: "1px solid rgba(212,160,23,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#D4A017",
            fontSize: "48px",
            fontWeight: 700,
          }}
        >
          AH
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px 282px 64px 76px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              color: "#D4A017",
              fontSize: "24px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            <span>{siteConfig.name}</span>
            <span style={{ color: "rgba(248,250,252,0.5)" }}>Africa</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "26px",
              maxWidth: "820px",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: headline.length > 44 ? "58px" : "68px",
                lineHeight: 1.04,
                fontWeight: 700,
              }}
            >
              {headline}
            </h1>
            <p
              style={{
                margin: 0,
                maxWidth: "760px",
                color: "rgba(248,250,252,0.78)",
                fontSize: "26px",
                lineHeight: 1.35,
              }}
            >
              {summary}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              color: "rgba(248,250,252,0.62)",
              fontSize: "20px",
            }}
          >
            <span style={{ width: "42px", height: "2px", background: "#D4A017" }} />
            <span>www.adesahq.com</span>
          </div>
        </div>
      </div>
    ),
    {
      ...SOCIAL_IMAGE_SIZE,
      headers: {
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    },
  );
}
