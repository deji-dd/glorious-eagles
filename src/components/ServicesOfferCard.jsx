/* eslint-disable react/prop-types */
import React from "react";

export default function ServicesOfferCard(props) {
  return (
    <div
      style={{
        background: `url(${props.img})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "16.1875rem",
        height: "13.375rem",
        flexShrink: "0",
      }}
    >
      <h3 style={{ color: "#FFF" }}>{props.desc}</h3>
    </div>
  );
}
