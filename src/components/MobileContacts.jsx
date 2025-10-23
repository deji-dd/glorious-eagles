import AdressIcon from "../assets/address-icon.svg";
import EmailIcon from "../assets/email-icon.svg";
import CallIcon from "../assets/call-icon.svg";
import React from "react";

export default function MobileContacts() {
  const h3_style = {
    fontSize: "1.92rem",
    lineHeight: "3.0256rem",
    letterSpacing: "0.0192rem",
  };
  const p_style = {
    color: "var(--Text, #4D4D4D)",
    textAlign: "center",
    fontSize: "1.28rem",
    lineHeight: "2.0888rem",
    width: "25.5rem",
  };
  const div_style = {
    borderRadius: "0.96rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.65rem",
    background: "#F1EBFE",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.9rem 0",
    width: "26rem",
  };
  const h3_small = { ...h3_style, lineHeight: "2.94025rem" };
  return (
    <div
      style={{
        width: "30rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "3.5rem",
        padding: "1.9rem 0",
      }}
    >
      <div style={div_style}>
        <img src={AdressIcon} />
        <h3 style={h3_style}>Address</h3>
        <p style={p_style}>
          1865 132nd LN NW Coon Rapids MN 55448.
          <br />
          <br />
          MN DHS Licensed Early Intensive Developmental and Behavioral
          Intervention
          <br />
          (EIDBI)
        </p>
      </div>
      <div style={div_style}>
        <img src={EmailIcon} />
        <h3 style={h3_small}>Email here</h3>
        <p style={p_style}>info@gloriouseagles.com</p>
      </div>
      <div style={div_style}>
        <img src={CallIcon} />
        <h3 style={h3_small}>Call Here</h3>
        <p style={p_style}>+1 952-2209-361</p>
      </div>
    </div>
  );
}
