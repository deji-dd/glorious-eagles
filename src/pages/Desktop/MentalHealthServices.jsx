import React from "react";
import { useEffect } from "react";
import BG from "../../assets/elipses.svg";
import one from "../../assets/mental-health-services-1.jpg";

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
      <div className="mt-5 grid w-full h-full grid-cols-2">
        <div className="flex w-full h-full flex-col gap-3">
          <div
            className="w-[40rem]"
            style={{ background: `url(${one}) 40rem 10rem no-repeat` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
