import Gif from "../assets/contact.gif";
import React from "react";

export default function ContactCard() {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "90rem",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem 5.4rem",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "79.125rem",
          height: "27rem",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1.25rem",
          background: "var(--Light-purple, #F1EBFE)",
          gap: "8.25rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1.875rem",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
            }}
          >
            <h2 style={{ lineHeight: "140%" }}>Contact us</h2>
            <p
              style={{
                lineHeight: "2.71875rem",
                width: "46.875rem",
                color: "#465371",
                fontSize: "1.5rem",
              }}
            >
              We&apos;re here to assist you on your journey towards positive
              change. If you have questions, would like to schedule an
              appointment, or need more information about our services, please
              don&apos;t hesitate to reach out.
            </p>
          </div>
          <a href={"/contact-us"}>
            <button
              className={"button-p"}
              style={{
                background: "#FFF",
                color: "var(--Primary-colour, #180344)",
                width: "17.32rem",
              }}
            >
              Contact Us
            </button>
          </a>
        </div>
        <img style={{ width: "18.91138rem" }} src={Gif} />
      </div>
    </div>
  );
}
