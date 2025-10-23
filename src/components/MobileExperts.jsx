/* eslint-disable react/prop-types */
import Arrow from "../assets/down-arrow.svg";
import Img1 from "../assets/experts1.svg";
import Img2 from "../assets/experts2.svg";
import React from "react";

export default function MobileExperts(props) {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "30rem",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: "2.5rem",
        background: "var(--Light-purple, #F1EBFE)",
        padding: "4.88rem 1.6rem 4rem",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.28rem",
        }}
      >
        <h1
          style={{
            lineHeight: "3.0256rem",
            width: "26.30704rem",
            fontSize: "2.56rem",
            letterSpacing: "0.0256rem",
            textAlign: "center",
          }}
        >
          We are experts with a difference
        </h1>
        <p
          style={{
            color: "var(--Text, #4D4D4D)",
            fontSize: "1.28rem",
            lineHeight: "2.0888rem",
            width: "26.8rem",
            textAlign: "center",
          }}
        >
          Our commitment to excellence, innovation, and client-centered care
          sets us apart. With a team of dedicated professionals and a passion
          for transformative solutions, we stand ready to exceed your
          expectations. Discover the exceptional difference that sets us apart
        </p>
        <img
          style={{
            width: "2.68392rem",
            height: "2.68392rem",
            cursor: "pointer",
            alignSelf: "center",
          }}
          src={Arrow}
          onClick={props.scroll}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          height: "20.30232rem",
        }}
      >
        <img
          style={{ alignSelf: "flex-start", width: "12.80664rem" }}
          src={Img1}
        />
        <img
          style={{ alignSelf: "flex-end", width: "12.80664rem" }}
          src={Img2}
        />
      </div>
    </div>
  );
}
