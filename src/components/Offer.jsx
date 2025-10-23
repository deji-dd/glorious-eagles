import lines from "../assets/title-lines.svg";
import OfferCard from "./OfferCard";
import Offer1 from "../assets/offer1.svg";
import Offer2 from "../assets/offer2.svg";
import Offer3 from "../assets/offer3.svg";
import React from "react";

export default function Offer() {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "90rem",
        width: "100%",
        padding: "4rem 4.375rem",
        justifyContent: "center",
        alignItems: "center",
        background: "#F6F5FF",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          background: `url(${lines}) 58rem -3rem no-repeat`,
          height: "13rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        We offer therapy to kids aged 0-21
      </h1>
      <div
        style={{
          display: "inline-flex",
          alignItems: "flex-start",
          gap: "1.25rem",
        }}
      >
        <OfferCard img={Offer1} desc={"At home"} />
        <OfferCard img={Offer2} desc={"In school"} />
        <OfferCard img={Offer3} desc={"Virtual"} />
      </div>
    </div>
  );
}
