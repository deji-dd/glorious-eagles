import BG from "../assets/elipses.svg";
import img1 from "../assets/unlocking-1.svg";
import img2 from "../assets/unlocking-2.svg";
import img3 from "../assets/unlocking-3.svg";
import img4 from "../assets/unlocking-4.svg";
import Carousel from "./Carousel";
import React from "react";

export default function Unlocking() {
  return (
    <div
      style={{
        maxWidth: "90rem",
        width: "100%",
        height: "60rem",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "3.56rem",
        background: `url(${BG}) 8rem 8rem no-repeat`,
        backgroundColor: "#190245",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1.75rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            width: "68.4375rem",
            letterSpacing: "0.04rem",
            color: "#fff",
          }}
        >
          Helping You Rise, One Step at a Time
        </h1>
        <p
          style={{
            color: "#fff",
            fontSize: "1.5rem",
            lineHeight: "2rem",
            width: "66.5rem",
          }}
        >
          At Glorious Eagles, we believe that everyone, no matter their age or
          story, deserves care, and the chance to thrive. We provide gentle,
          personalized mental health and ABA therapy services that help
          individuals and families build confidence, connection, and lasting
          well-being.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.5rem",
          }}
        >
          <a href={"/intake-form"}>
            <button className={"button-s"} style={{ background: "#fff" }}>
              Get started
            </button>
          </a>
          <a href={"/contact-us"}>
            <button
              className={"button-s"}
              style={{ color: "#fff", borderColor: "#fff" }}
            >
              Contact us
            </button>
          </a>
        </div>
      </div>
      <Carousel images={[img1, img2, img3, img4]} />
    </div>
  );
}
