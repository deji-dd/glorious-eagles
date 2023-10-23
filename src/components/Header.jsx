import { useState } from "preact/hooks";
import logo from "../assets/logo.svg";
import { useLocation } from "preact-iso/router";

export default function Header() {
  const location = useLocation();
  const path = location.path;
  const link_style = {
    color: "var(--Text-Color, #151411)",
    fontFamily: "Hanken Grotesk",
    fontSize: "1.125rem",
    fontWeight: "500",
    lineHeight: "180%",
  };
  const link_active = {
    ...link_style,
    display: "flex",
    padding: "0.25rem 1.6875rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    borderRadius: "6.25rem",
    background: "var(--Light-purple, #F1EBFE)",
  };

  return (
    <div
      style={{
        width: "90rem",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "2px solid var(--Line-Color, #F3F3F3)",
        padding: "0.8125rem 3.9695rem 0.8125rem 4.1875rem",
        position: "fixed",
        left: "0",
        top: "-1px",
        background: "rgba(255,255,255,97%)",
        zIndex: "2",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "9.81rem",
        }}
      >
        <a
          href={"/"}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <img src={logo} style={{ width: "4.4055rem" }} />
          <h1 style={{ fontFamily: "Fascinate Inline", fontSize: "1rem" }}>
            GLORIOUS EAGLES
          </h1>
        </a>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "62rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3.75rem",
            }}
          >
            <a href={"/"} style={path == "/" ? link_active : link_style}>
              Home
            </a>
            <a
              href={"/services"}
              style={path == "/services" ? link_active : link_style}
            >
              Services
            </a>
            <a
              href={"/about-us"}
              style={path == "/about-us" ? link_active : link_style}
            >
              About Us
            </a>
            <a
              href={"/how-we-work"}
              style={path == "/how-we-work" ? link_active : link_style}
            >
              How we work
            </a>
            <a
              href={"/career"}
              style={path == "/career" ? link_active : link_style}
            >
              Career
            </a>
          </div>
          <a href={"/contact-us"}>
            <button className={"button-p"}>Contact us</button>
          </a>
        </div>
      </div>
    </div>
  );
}
