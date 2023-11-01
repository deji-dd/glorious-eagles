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
        <p>president@gloriouseagles.com</p>
      </div>
      <div style={div_style}>
        <img style={img_style} src={MailIcon} />
        <p>info@gloriouseagles.com</p>
      </div>
      <div style={div_style}>
        <img style={img_style} src={CallIcon} />
        <p>+1 612-4566-090</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.78569rem",
        }}
      >
        <a href={"https://web.facebook.com/profile.php?id=61552151991164"}>
          <img src={Facebook} />
        </a>
        <a href={"https://www.instagram.com/gloriouseaglesus"}>
          <img src={Instagram} />
        </a>
        <img src={Twitter} />
      </div>
    </div>
  );
}
