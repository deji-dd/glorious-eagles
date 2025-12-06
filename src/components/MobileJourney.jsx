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
          <div className="flex gap-1 mt-7"><span>📍</span>
            <div className="flex flex-col gap-2"> <span style={{ color: "rgba(255,255,255,0.92)" }}>
              1865 132nd NW Coon Rapids MN 55448
            </span>
            <span style={{ color: "rgba(255,255,255,0.92)" }}>
              104 6th Ave s. Princeton MN 55371
            </span></div>
         </div>

          <div
            className="mt-7"
            style={{
              display: "inline-flex",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >

          </div>
        </div>
      </div>
    </div>
  );
}
