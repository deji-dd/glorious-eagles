import Img from "../assets/member.svg";
import MobilePeopleCard from "./MobilePeopleCard";
import React from "react";

export default function MobilePeople() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "var(--Light-primary, #F6F5FF)",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.2rem",
        padding: "3rem 1.28rem",
        width: "30rem",
      }}
    >
      <h2
        style={{
          fontSize: "2.56rem",
          lineHeight: "3.0256rem",
          letterSpacing: "0.0256rem",
        }}
      >
        Team Members
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.875rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1.4rem",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "1.4rem",
            }}
          >
            <MobilePeopleCard img={Img} title={"CEO/Founder"} />
            <MobilePeopleCard img={Img} title={"Co-Founder"} />
          </div>
          <div
            style={{
              display: "flex",
              gap: "1.4rem",
            }}
          >
            <MobilePeopleCard img={Img} title={"Program Director"} />
            <MobilePeopleCard img={Img} title={"QSP"} />
          </div>
        </div>
      </div>
    </div>
  );
}
