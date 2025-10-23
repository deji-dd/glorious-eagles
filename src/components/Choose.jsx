import BG from "../assets/elipses.svg";
import ChooseCardSmall from "./ChooseCardSmall";
import Choose1 from "../assets/choose1.svg";
import Choose2 from "../assets/choose2.svg";
import Choose3 from "../assets/choose3.svg";
import Choose4 from "../assets/choose4.svg";
import Choose5 from "../assets/choose5.svg";
import ChooseCardBig from "./ChooseCardBig";
import React from "react";

export default function Choose() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "3.12rem",
        background: `url(${BG}) -20rem -10rem no-repeat`,
        height: "60.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "0.625rem",
        }}
      >
        <p
          style={{
            color: "var(--Text, #4D4D4D)",
            fontSize: "1.25rem",
            lineHeight: "150.6%",
          }}
        >
          Our core values
        </p>
        <h1 style={{ lineHeight: "5.375rem" }}>Why choose us?</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.75rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "2rem",
          }}
        >
          <ChooseCardSmall
            img={Choose1}
            title={"Expertise with Compassion"}
            desc={
              "Our team of highly trained professionals brings expertise, experience, and a commitment to compassionate care."
            }
          />
          <ChooseCardSmall
            img={Choose2}
            title={"Proven Results"}
            desc={
              "Our evidence-based practices and methods consistently yield positive outcomes. We're proud of the progress our clients achieve."
            }
          />
          <ChooseCardSmall
            img={Choose3}
            title={"Personalized Approach"}
            desc={
              "We recognize that every person is unique, and that's why our approach is tailored to your specific needs and goals."
            }
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "1.75rem",
          }}
        >
          <ChooseCardBig
            img={Choose4}
            title={"Our mission"}
            desc={
              "Our mission is to provide exceptional, personalized, and evidence-based services that empower individuals of all ages to achieve their fullest potential. families we serve"
            }
          />
          <ChooseCardBig
            img={Choose5}
            title={"Our Vision"}
            desc={
              "We envision a future where every individual, regardless of their abilities or challenges, has the opportunity to lead a fulfilling and meaningful life. "
            }
          />
        </div>
      </div>
    </div>
  );
}
