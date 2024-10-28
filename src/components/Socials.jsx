import MailIcon from "../assets/message-icon.svg";
import CallIcon from "../assets/call-icon.svg";
import Facebook from "../assets/social-facebook.svg";
import Instagram from "../assets/social-instagram.svg";
import Twitter from "../assets/social-twitter.svg";

export default function Socials() {
  const div_style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.625rem",
  };
  const img_style = { width: "1.5rem", height: "1.5rem" };
  return (
    <div
      style={{
        display: "flex",
        width: "90rem",
        height: "4.25rem",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: "0",
        gap: "10.12rem",
        position: "absolute",
        top: "85px",
        background: "#FFF",
      }}
    >
      <div style={div_style}>
        <img style={img_style} src={MailIcon} />
        <p>info@gloriouseagles.com</p>
      </div>
      <div style={div_style}>
        <img style={img_style} src={CallIcon} />
        <p>+1 952-2209-361</p>
      </div>
      <div style={div_style}>
        <svg
          style={img_style}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-printer"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
          <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1" />
        </svg>
        <p>218 5933 191</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.78569rem",
        }}
      >
        <a href={"https://web.facebook.com/people/Hero-Center/61557128850758/"}>
          <img src={Facebook} />
        </a>
        <a href={"https://www.instagram.com/hero_center_/"}>
          <img src={Instagram} />
        </a>
        <a href={"https://twitter.com/hero_center_"}>
          <img src={Twitter} />
        </a>
      </div>
    </div>
  );
}
