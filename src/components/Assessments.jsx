import BG from "../assets/elipses.svg";
import Img1 from "../assets/aba-service-1.png";
import PictureFrame from "./PictureFrame";
import Img2 from "../assets/aba-service-2.png";
import React from "react";

export default function Assessments() {
  return (
    <div
      style={{
        maxWidth: "90rem",
        width: "100%",
        height: "53.75rem",
        display: "flex",
        background: `url(${BG}) -22rem -11rem no-repeat`,
        gap: "5rem",
        flexDirection: "column",
        padding: "2.4rem 2.5rem",
      }}
    >
      <h2>Assessments</h2>
      <div style={{ display: "flex", gap: "2rem" }}>
        <PictureFrame
          desc={
            "We conduct a thorough assessment to understand your child’s strengths, challenges, and unique needs."
          }
          title={"Comprehensive Multi-Disciplinary Evaluation (CMDE)"}
          img={Img1}
        />
        <PictureFrame
          desc={
            "We create a customized therapy plan designed to help your child grow and succeed based on their abilities and goals."
          }
          title={"Individual Treatment Program (ITP)"}
          img={Img2}
        />
      </div>
    </div>
  );
}
