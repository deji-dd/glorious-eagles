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
        display: "flex",
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
          <p style={p_style}>+1 612-4566-090</p>
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
