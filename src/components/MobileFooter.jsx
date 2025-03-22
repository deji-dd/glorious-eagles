import BG from "../assets/mobile-footer-bg.svg";
import logo from "../assets/logo.svg";
import Facebook from "../assets/facebook-footer.svg";
import Instagram from "../assets/instagram-footer.svg";
import Twitter from "../assets/twitter-footer.svg";
import MailIcon from "../assets/message-icon-footer.svg";
import CallIcon from "../assets/call-icon-footer.svg";

export default function MobileFooter() {
  const link_style = {
    color: "#FFF",
    fontFamily: "Lato",
    fontSize: "1.28rem",
  };
  const div_style = {
    display: "flex",
    gap: "0.6rem",
  };
  const img_style = { width: "1.4rem", height: "1.4rem", fill: "#FFF" };
  const p_style = { fontSize: "1.28032rem", color: "#FFF" };
  return (
    <div
      style={{
        width: "30rem",
        flexShrink: "0",
        background: `url(${BG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "5.7rem 0 2rem 1.45rem",
      }}
    >
      <div
        style={{
          flexShrink: "0",
          display: "flex",
          gap: "2rem",
          flexDirection: "column",
        }}
      >
        <a
          href={"/"}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <img src={logo} style={{ width: "5.61816rem" }} />
          <h1
            style={{
              fontFamily: "Fascinate Inline",
              fontSize: "1.27528rem",
              color: "#FFF",
              lineHeight: "normal",
            }}
          >
            GLORIOUS EAGLES
          </h1>
        </a>
        <div
          style={{
            display: "flex",
            gap: "1.9rem",
            flexDirection: "column",
          }}
        >
          <a href={"/"} style={link_style}>
            Home
          </a>
          <a href={"/services"} style={link_style}>
            Services
          </a>
          <a href={"/about-us"} style={link_style}>
            About Us
          </a>
          <a href={"/how-we-work"} style={link_style}>
            How we work
          </a>
          <a href={"/career"} style={link_style}>
            Career
          </a>
        </div>
        <a href={"/contact-us"}>
          <button
            className={"button-p button-mobile"}
            style={{ background: "rgba(224, 211, 250, 0.50)", color: "#FFF" }}
          >
            Contact Us
          </button>
        </a>
        <div style={div_style}>
          <img style={img_style} src={MailIcon} />
          <p style={p_style}>info@gloriouseagles.com</p>
        </div>
        <div style={div_style}>
          <img style={img_style} src={CallIcon} />
          <p style={p_style}>+1 952-2209-361</p>
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
          <p style={p_style}>218 5933 191</p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1.8125rem",
          }}
        >
          <a
            href={"https://web.facebook.com/people/Hero-Center/61557128850758/"}
          >
            <img src={Facebook} style={{ width: "1.56696rem" }} />
          </a>
          <a href={"https://www.instagram.com/hero_center_/"}>
            <img src={Instagram} style={{ width: "1.56696rem" }} />
          </a>
          <a href={"https://twitter.com/hero_center_"}>
            <img src={Twitter} style={{ width: "1.56696rem" }} />
          </a>
        </div>
      </div>
    </div>
  );
}
