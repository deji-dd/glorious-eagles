/* eslint-disable react/prop-types */
import React from "react";

export default function PictureFrame(props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        flexDirection: "column",
        backgroundColor: "#F1EBFE",
        border: "2px solid #E0CAFE",
        borderRadius: "1.5rem",
        padding: "1rem",
        width: "40rem",
      }}
    >
      <img src={props.img} />
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexDirection: "column",
        }}
      >
        <h4>{props.title}</h4>
        <p
          style={{
            width: "36.3125rem",
            fontSize: "1.5rem",
            lineHeight: "2.3125rem",
            color: "#4D4D4D",
          }}
        >
          {props.desc}
        </p>
      </div>
    </div>
  );
}
