import BG from "../assets/elipses.svg";
import PictureFrame from "./PictureFrame";
import Img1 from "../assets/additional-support-1.png";
import Img2 from "../assets/additional-support-2.png";
import Img3 from "../assets/heart.svg";
import React from "react";

export default function AdditionalSupport() {
  return (
    <div
      style={{
        maxWidth: "90rem",
        width: "100%",
        // height: "53.75rem",
        display: "flex",
        background: `url(${BG}) -22rem -11rem no-repeat`,
        gap: "5rem",
        flexDirection: "column",
        padding: "2.4rem 2.5rem",
      }}
    >
      <h2>Psychotherapy & Additional Support</h2>
      <div className="grid grid-cols-2 gap-3">
        <PictureFrame
          desc={
            "We offer professional counseling to support emotional and mental well-being, helping children and families navigate challenges such as anxiety, stress, and behavioral difficulties."
          }
          title={"Psychotherapy"}
          img={Img1}
        />
        <PictureFrame
          desc={
            "We offer convenient, confidential mental health sessions online, so you can access support from the comfort of your home."
          }
          title={"Telehealth Mental Health Service"}
          img={Img2}
        />
        <div
          style={{
            display: "flex",
            gap: "5rem",
            flexDirection: "column",
            backgroundColor: "#F1EBFE",
            border: "2px solid #E0CAFE",
            borderRadius: "1.5rem",
            padding: "1rem",
            width: "40rem",
            alignItems: "center",
            paddingTop: "10rem",
          }}
        >
          <img style={{ width: "7.5rem" }} src={Img3} />
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
                width: "36.3125rem",
                fontSize: "1.5rem",
                lineHeight: "2.3125rem",
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
