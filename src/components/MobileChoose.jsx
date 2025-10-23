import Choose1 from "../assets/choose1.svg";
import Choose2 from "../assets/choose2.svg";
import Choose3 from "../assets/choose3.svg";
import Choose4 from "../assets/choose4.svg";
import Choose5 from "../assets/choose5.svg";
import MobileChooseCard from "./MobileChooseCard";
import React from "react";

export default function MobileChoose() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1.2rem",
        padding: "2.72rem 1.28rem",
        alignSelf: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "0.3rem",
        }}
      >
        <p
          style={{
            color: "var(--Text, #4D4D4D)",
            fontSize: "1.12rem",
            lineHeight: "150.6%",
          }}
        >
          Our core values
        </p>
        <h1
          style={{
            lineHeight: "3.0256rem",
            fontSize: "2.56rem",
            letterSpacing: "0.0256rem",
          }}
        >
          Why choose us?
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1.6rem",
          flexDirection: "column",
        }}
      >
        <MobileChooseCard
          img={Choose1}
          title={"Expertise with Compassion"}
          desc={
            "Our team of highly trained professionals brings expertise, experience, and a commitment to compassionate care."
          }
        />
        <MobileChooseCard
          img={Choose2}
          title={"Proven Results"}
          desc={
            "Our evidence-based practices and methods consistently yield positive outcomes. We're proud of the progress our clients achieve."
          }
        />
        <MobileChooseCard
          img={Choose3}
          title={"Personalized Approach"}
          desc={
            "We recognize that every person is unique, and that's why our approach is tailored to your specific needs and goals."
          }
        />
        <MobileChooseCard
          img={Choose4}
          title={"Our mission"}
          desc={
            "Our mission is to provide exceptional, personalized, and evidence-based services that empower individuals of all ages to achieve their fullest potential. families we serve"
          }
        />
        <MobileChooseCard
          img={Choose5}
          title={"Our Vision"}
          desc={
            "We envision a future where every individual, regardless of their abilities or challenges, has the opportunity to lead a fulfilling and meaningful life. "
          }
        />
      </div>
    </div>
  );
}
