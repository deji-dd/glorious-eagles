import logo from "../assets/logo.svg";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const path = location.pathname;
  const link_style = {
    color: "#FFF",
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
    background: "var(--Light-purple, #453269)",
  };

  return (
    <div
      style={{
        maxWidth: "90rem",
        width: "100%",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "2px solid var(--Line-Color, #453269)",
        padding: "0.8125rem 3.9695rem 0.8125rem 4.1875rem",
        position: "sticky",
        top: "0",
        background: "#190244",
        zIndex: "50",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "7rem",
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
          <h1
            style={{
              fontFamily: "Fascinate Inline",
              fontSize: "1rem",
              color: "#FFF",
              width: "full",
              flexShrink: "0",
            }}
          >
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
          <a href={"/intake-form"}>
            <button
              style={{
                fontSize: "1rem",
                padding: "1rem 1.2rem",
                background: "#FFF",
              }}
              className={"button-s"}
            >
              Get started
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
