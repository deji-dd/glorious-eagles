/* eslint-disable react/prop-types */
import React from "react";

export default function PeopleCard(props) {
  return (
    <div
      style={{
        width: "18.85181rem",
        height: "24.4375rem",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #E7DDFD",
        position: "relative",
        background: "var(--White, #FFF)",
        alignItems: "center",
        justifyContent: "center",
        gap: "6.19rem",
      }}
    >
      <img src={props.img} />
      <p
        style={{
          color: "var(--Primary-colour, #180344)",
          fontSize: "1.11713rem",
          lineHeight: "150.6%",
        }}
      >
        {props.title}
      </p>
    </div>
  );
}
