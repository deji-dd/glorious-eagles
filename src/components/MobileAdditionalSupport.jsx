import BG from "../assets/elipses.svg";
import Img1 from "../assets/aba-service-1.png";
import MobilePictureFrame from "./MobilePictureFrame";
import Img2 from "../assets/heart.svg";
import React from "react";

export default function MobileAdditionalSupport() {
  return (
    <div
      style={{
        maxWidth: "30rem",
        width: "100%",
        display: "flex",
        background: `url(${BG}) -11rem -5rem no-repeat`,
        gap: "3rem",
        flexDirection: "column",
        padding: "2.4rem 2.5rem",
        marginTop: "5rem",
      }}
    >
      <h3>Assessments</h3>
      <div style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
        <MobilePictureFrame
          desc={
            "We offer professional counseling to support emotional and mental well-being, helping children and families navigate challenges such as anxiety, stress, and behavioral difficulties."
          }
          title={"Psychotherapy"}
          img={Img1}
        />
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
            backgroundColor: "#F1EBFE",
            border: "2px solid #E0CAFE",
            borderRadius: "1.5rem",
            padding: "0.5rem",
            width: "25rem",
            alignItems: "center",
            paddingTop: "2rem",
          }}
        >
          <img style={{ width: "4rem" }} src={Img2} />
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flexDirection: "column",
            }}
          >
            <h4>Other Therapeutic Services</h4>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "21px",
                color: "#4D4D4D",
              }}
            >
              In addition to ABA, we provide additional interventions designed
              to meet the unique needs of each individual.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
