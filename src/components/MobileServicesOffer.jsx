/* eslint-disable react/prop-types */
import Clipboard from "../assets/clipboard.svg";
import Puzzle from "../assets/puzzle.svg";
import Heart from "../assets/heart.svg";
import { useState } from "react";
import React from "react";

export default function MobileServicesOffer(props) {
  const [selected, setSelected] = useState(0);

  const div_style = {
    display: "inline-flex",
    padding: "1rem 0.5rem",
    borderRadius: "1.5rem",
    background: "var(--Light-purple, #F1EBFE)",
    backdropFilter: "blur(8px)",
    flexDirection: "column",
    width: "9rem",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "2rem",
    height: "9rem",
  };

  const selected_style = {
    ...div_style,
    borderColor: "#180344",
    borderWidth: "2px",
    borderStyle: "solid",
  };

  return (
    <div
      style={{
        maxWidth: "30rem",
        display: "flex",
        gap: "3rem",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          maxWidth: "30rem",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          background: "var(--Light-purple, #F1EBFE)",
          padding: "4.88rem 1.6rem 4rem",
          flexDirection: "column",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Services we offer</h3>
        <p
          style={{
            fontFamily: "Lato",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "26.11px",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          At Glorious Eagles, we provide personalized therapy and support to
          help children develop essential skills, improve behaviors, and gain
          independence.
        </p>
      </div>
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={selected === 1 ? selected_style : div_style}
            onClick={() => {
              props.scroll1();
              setSelected(1);
            }}
          >
            <img style={{ width: "3rem" }} src={Clipboard} />
            <h5 style={{ fontSize: "14px" }}>Assessments</h5>
          </div>
          <div
            style={selected === 2 ? selected_style : div_style}
            onClick={() => {
              props.scroll2();
              setSelected(2);
            }}
          >
            <img style={{ width: "3rem" }} src={Puzzle} />
            <h5 style={{ fontSize: "14px" }}>ABA Therapy</h5>
          </div>
          <div
            style={selected === 3 ? selected_style : div_style}
            onClick={() => {
              props.scroll3();
              setSelected(3);
            }}
          >
            <img style={{ width: "3rem" }} src={Heart} />
            <h5 style={{ fontSize: "14px", textAlign: "center" }}>
              Psychotherapy & Additional Support
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
