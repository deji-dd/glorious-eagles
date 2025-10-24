import React from "react";
import lines from "../assets/title-lines.svg";
import heart from "../assets/heart-svg.svg";

export default function MobileCaring() {
  return (
    <div
      style={{
        width: "30rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        paddingTop: "3rem",
        paddingBottom: "4.5rem",
        paddingLeft: "1.25rem",
        paddingRight: "1.25rem",
        backgroundColor: "#EDEBFF",
      }}
    >
      <h1
        style={{
          width: "26.3rem",
          textAlign: "center",
          fontSize: "1.9rem",
          lineHeight: "2.4rem",
          letterSpacing: "0.01rem",
          background: `url(${lines}) no-repeat`,
          backgroundPosition: "center -1.5rem",
          paddingTop: "1.25rem",
          paddingBottom: "0.25rem",
        }}
        className="text-[#180344]"
      >
        Caring for Every Mind, Every Age, Every Story
      </h1>

      <p
        style={{
          color: "#4D4D4D",
          fontSize: "1.05rem",
          lineHeight: "1.6rem",
          textAlign: "center",
          width: "25.6rem",
        }}
      >
        At Glorious Eagles, we provide a blend of Mental Health and ABA Therapy
        services designed to support individuals and families in achieving
        emotional balance, confidence, and independence.
      </p>

      {/* Cards container */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {/* Mental Health Card */}
        <section
          style={{
            borderRadius: "1.5rem",
            padding: "1.25rem",
            backgroundColor: "#190244",
            color: "#FFFFFF",
          }}
          aria-labelledby="mh-title"
        >
          <div
            style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
          >
            <div style={{ flex: 1 }}>
              <h3
                id="mh-title"
                style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}
                className="text-white"
              >
                Mental Health Services
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.4rem",
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                Life can feel overwhelming sometimes but you don&apos;t have to
                face it alone. Our compassionate therapists and counsellors walk
                beside you every step of the way, helping you find balance,
                healing, and hope.
              </p>

              <div style={{ marginTop: "0.9rem", fontSize: "0.95rem" }}>
                <strong className="block mb-2">Our Services Include:</strong>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.35rem",
                    paddingLeft: "1rem",
                  }}
                >
                  <li>Psychotherapy</li>
                  <li>Counselling</li>
                  <li>Medication Management</li>
                  <li>Family &amp; Marriage Counselling</li>
                  <li>Mental Health Therapy</li>
                </div>

                <div
                  style={{
                    marginTop: "0.9rem",
                    display: "flex",
                    gap: "0.6rem",
                  }}
                >
                  <a
                    href="/mental-health-services"
                    className="button-s button-mobile bg-white text-[#190244]"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <img
              src={heart}
              alt="Decorative heart"
              style={{
                width: "6.5rem",
                height: "6.5rem",
                objectFit: "contain",
                alignSelf: "flex-end",
              }}
            />
          </div>
        </section>

        {/* ABA Therapy Card */}
        <section
          style={{
            borderRadius: "1.5rem",
            padding: "1.25rem",
            backgroundColor: "#FB8E51",
            color: "#180344",
          }}
          aria-labelledby="aba-title"
        >
          <div
            style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
          >
            <div style={{ flex: 1 }}>
              <h3
                id="aba-title"
                style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}
              >
                ABA Therapy Services
              </h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.4rem" }}>
                Every child is full of potential. Our ABA programs nurture that
                potential in children and young adults ages 2–21, focusing on
                communication, life skills, and positive behaviour.
              </p>

              <div style={{ marginTop: "0.9rem", fontSize: "0.95rem" }}>
                <strong className="block mb-2">We help with:</strong>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.35rem",
                    paddingLeft: "1rem",
                  }}
                >
                  <li>Language &amp; Communication Skills</li>
                  <li>Functional Living Skills</li>
                  <li>Toilet Training</li>
                  <li>School Readiness</li>
                  <li>Parent &amp; Caregiver Training</li>
                  <li>Social Skills &amp; Play</li>
                </div>

                <div
                  style={{
                    marginTop: "0.9rem",
                    display: "flex",
                    gap: "0.6rem",
                  }}
                >
                  <a
                    href="/services"
                    className="button-s button-mobile border-[#180344] text-[#180344]"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <img
              src={heart}
              alt="Decorative heart"
              style={{
                width: "6.5rem",
                height: "6.5rem",
                objectFit: "contain",
                alignSelf: "flex-end",
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
