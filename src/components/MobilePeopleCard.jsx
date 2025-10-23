/* eslint-disable react/prop-types */
import React from "react";

export default function MobilePeopleCard(props) {
  return (
    <div
      style={{
        width: "13.02888rem",
        height: "16.88928rem",
        display: "flex",
        flexDirection: "column",
        border: "0.54px solid #E7DDFD",
        background: "var(--White, #FFF)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "12.06376rem",
          justifyContent: "center",
          width: "13.02888rem",
        }}
      >
        <img style={{ width: "5.83136rem" }} src={props.img} />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p
          style={{
            color: "var(--Primary-colour, #180344)",
            fontSize: "1.28rem",
            lineHeight: "150.6%",
          }}
        >
          {props.title}
        </p>
      </div>
    </div>
  );
}
