import React from "react";
import { useEffect } from "react";
import BG from "../../assets/elipses.svg";
import one from "../../assets/mhs-1.jpg";
import six from "../../assets/mhs-6.png";
import two from "../../assets/mhs-2.jpg";
import three from "../../assets/mhs-3.jpg";
import four from "../../assets/mhs-4.jpg";
import MentalHealthServicesCard from "@/components/MentalHealthServicesCard";
import Journey from "@/components/Journey";

export default function MentalHealthServices() {
  useEffect(() => {
    document.title = "Glorious Eagles | Mental Health Services";
  }, []);

  return (
    <div style={{ display: "flex", gap: "1.25rem", flexDirection: "column" }}>
      <div
        className="pb-[10rem] pt-[5rem]"
        style={{
          maxWidth: "90rem",
          width: "100%",
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
            Our mental health services
          </h1>
          <p
            style={{
              color: "#fff",
              fontSize: "1.5rem",
              lineHeight: "2rem",
              width: "66.5rem",
            }}
          >
            We support teens, adults, and families with therapy and counselling
            designed to meet you where you are. Whether you&apos;re facing
            stress, relationship challenges, or emotional struggles, our trained
            professionals help you rediscover hope and healing.
          </p>
        </div>
      </div>
      <div className="mt-5 mb-24 grid gap-y-24 grid-cols-2">
        <MentalHealthServicesCard
          img={one}
          title={"Psychotherapy"}
          desc={
            "Personalized one-on-one sessions to help manage anxiety, depression, and life transitions. A safe, judgment-free space to heal and grow at your pace."
          }
        />
        <MentalHealthServicesCard
          img={two}
          title={"Counseling"}
          desc={
            "Gentle, confidential conversations to explore emotions and challenges. We help you find clarity, confidence, and calm in your everyday life."
          }
        />
        <MentalHealthServicesCard
          img={three}
          title={"Medication Management"}
          desc={
            "Professional support for clients who may benefit from medication as part of care. We ensure safe, informed decisions and consistent follow-up."
          }
        />
        <MentalHealthServicesCard
          img={four}
          title={"Family & Marriage Counselling"}
          desc={
            "Guided sessions that rebuild trust and strengthen communication. We help families and couples reconnect and create harmony at home."
          }
        />
        <MentalHealthServicesCard
          img={three}
          title={"Stress Management"}
          desc={
            "Learn effective techniques to manage daily work stressors, enhancing your overall well-being, work productivity, and mental resilience."
          }
        />
        <MentalHealthServicesCard
          img={six}
          title={"Grief & Loss"}
          desc={
            "Our therapists provide compassionate care to help you navigate the challenging journey of grief and loss of loved ones in your life."
          }
        />
      </div>
      <Journey />
    </div>
  );
}
