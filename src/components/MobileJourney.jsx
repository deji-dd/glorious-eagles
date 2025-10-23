import React from "react";

export default function MobileJourney() {
  return (
    <div
      style={{
        width: "30rem",
        display: "flex",
        justifyContent: "center",
        paddingTop: "2.5rem",
        paddingBottom: "4rem",
        paddingLeft: "1.25rem",
        paddingRight: "1.25rem",
        backgroundColor: "transparent",
      }}
    >
      <div
        style={{
          width: "100%",
          borderRadius: "1.5rem",
          backgroundColor: "#180344",
          padding: "1.25rem",
          alignItems: "center",
          color: "#FFFFFF",
        }}
        aria-labelledby="journey-title"
      >
        <div style={{ flex: 1 }}>
          <h3
            id="journey-title"
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.6rem",
              margin: 0,
              color: "#FFFFFF",
            }}
          >
            Let&apos;s Begin the Journey Together
          </h3>

          <p
            style={{
              marginTop: "0.6rem",
              fontSize: "0.95rem",
              lineHeight: "1.4rem",
              color: "rgba(255,255,255,0.92)",
            }}
          >
            Whether you&apos;re seeking help for yourself, your child, or your
            family, we&apos;re here to support you.
          </p>

          <div
            style={{
              marginTop: "0.8rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.45rem",
              fontSize: "0.95rem",
            }}
          >
            <a
              href="tel:+16124566090"
              style={{
                color: "#FFFFFF",
                textDecoration: "none",
                display: "inline-flex",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <span>📞</span>
              <span>Call Us: +1 612-4566-090</span>
            </a>

            <a
              href="mailto:info@gloeiouseagles.com"
              style={{
                color: "#FFFFFF",
                textDecoration: "none",
                display: "inline-flex",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <span>📧</span>
              <span>info@gloeiouseagles.com</span>
            </a>

            <div
              style={{
                display: "inline-flex",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <span>📍</span>
              <span style={{ color: "rgba(255,255,255,0.92)" }}>
                1865 132nd NW Coon Rapids MN 55448
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
