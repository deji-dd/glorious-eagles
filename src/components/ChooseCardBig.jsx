/* eslint-disable react/prop-types */
import React from "react";

export default function ChooseCardBig(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        width: "40.125rem",
        height: "21.1875rem",
        borderRadius: "1rem",
        background: "var(--Light-purple, #F1EBFE)",
        flexDirection: "column",
        gap: "1.5rem",
        padding: "1.625rem 0.9rem",
      }}
    >
      <img src={props.img} />
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >
        <h4
          style={{
            color: "var(--Primary-colour, #180344)",
            fontSize: "2rem",
            lineHeight: "1.5rem",
            letterSpacing: "-0.022rem",
          }}
        >
          {props.title}
        </h4>
        <p
          style={{
            color: "var(--Text, #4D4D4D)",
            fontSize: "1.5rem",
            lineHeight: "2.5rem",
          }}
        >
          {props.desc}
        </p>
      </div>
    </div>
  );
}
