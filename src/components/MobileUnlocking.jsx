import img1 from "../assets/unlocking-1.svg";
import img2 from "../assets/unlocking-2.svg";
import img3 from "../assets/unlocking-3.svg";
import img4 from "../assets/unlocking-4.svg";
import React from "react";
import Carousel from "./Carousel";

export default function MobileUnlocking() {
  return (
    <div
      style={{
        width: "30rem",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2.37rem",
        paddingTop: "3.16rem",
        paddingBottom: "5.12rem",
        backgroundColor: "#190244",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1.28rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            width: "26.30704rem",
            letterSpacing: "0.0256rem",
            fontSize: "2.56rem",
            lineHeight: "3.0256rem",
          }}
          className="text-white"
        >
          Helping You Rise, One Step at a Time
        </h1>
        <p
          style={{
            color: "#4D4D4D",
            fontSize: "1.28rem",
            lineHeight: "2rem",
            width: "25.56224rem",
          }}
          className="text-white"
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
            gap: "0.9rem",
          }}
        >
          <a href={"/intake-form"}>
            <button className="button-s button-mobile bg-white text-[#190244]">
              EIDBI Intake Form
            </button>
          </a>
          <a href={"/contact-us"}>
            <button className="button-s button-mobile border-white text-white">
              Contact us
            </button>
          </a>
        </div>
      </div>
      <Carousel
        images={[img1, img2, img3, img4]}
        height="13rem"
        width="20rem"
      />
    </div>
  );
}
