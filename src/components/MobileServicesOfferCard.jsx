/* eslint-disable react/prop-types */
import React from "react";

export default function MobileServicesOfferCard(props) {
  return (
    <div
      style={{
        background: `url(${props.img})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "8.86008rem",
        height: "10.4rem",
        flexShrink: "0",
        backgroundSize: "cover",
        borderRadius: "1.30792rem",
      }}
    >
      <h3 style={{ color: "#FFF", fontSize: "1.2rem" }}>{props.desc}</h3>
    </div>
  );
}
