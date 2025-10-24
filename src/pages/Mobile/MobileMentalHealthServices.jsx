import { useEffect } from "react";
import React from "react";
import one from "../../assets/mhs-1.jpg";
import six from "../../assets/mhs-6.png";
import two from "../../assets/mhs-2.jpg";
import three from "../../assets/mhs-3.jpg";
import four from "../../assets/mhs-4.jpg";
import MentalHealthServicesCard from "@/components/MentalHealthServicesCard";
import MobileJourney from "@/components/MobileJourney";

export default function MobileMentalHealthServices() {
  useEffect(() => {
    document.title = "Glorious Eagles | Mental Health Services";
  }, []);

  return (
    <>
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
            Our mental health services
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
            We support teens, adults, and families with therapy and counselling
            designed to meet you where you are. Whether you&apos;re facing
            stress, relationship challenges, or emotional struggles, our trained
            professionals help you rediscover hope and healing.
          </p>
        </div>
      </div>
      <div className="mt-5 w-full px-3 mb-24 grid gap-y-12 grid-cols-1">
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
      <MobileJourney />
    </>
  );
}
