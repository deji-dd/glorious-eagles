import BG from "../assets/footer-bg.svg";
import logo from "../assets/logo.svg";
import Facebook from "../assets/facebook-footer.svg";
import Instagram from "../assets/instagram-footer.svg";
import Twitter from "../assets/twitter-footer.svg";

export default function Footer() {
  const link_style = {
    color: "#FFF",
    fontFamily: "Lato",
    fontSize: "1.5rem",
  };
  return (
    <div
      style={{
        width: "90rem",
        height: "33.625rem",
        flexShrink: "0",
        background: `url(${BG})`,
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          width: "90rem",
          height: "24.1875rem",
          flexShrink: "0",
          display: "flex",
          gap: "3.12rem",
          flexDirection: "column",
          alignItems: "center",
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
            <img src={logo} style={{ width: "5.607rem" }} />
            <h1
              style={{
                fontFamily: "Fascinate Inline",
                fontSize: "1.27275rem",
                color: "#FFF",
              }}
            >
              GLORIOUS EAGLES
            </h1>
          </a>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3.75rem",
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
            <a style={link_style}>How we work</a>
            <a style={link_style}>Resources</a>
          </div>
        </div>
        <hr
          style={{
            width: "73.4375rem",
            height: "0.03125rem",
            color: "#908C97",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15.3125rem",
          }}
        >
          <button
            className={"button-p"}
            style={{ background: "rgba(224, 211, 250, 0.50)", color: "#FFF" }}
          >
            Contact Us
          </button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2.5rem",
            }}
          >
            <p style={link_style}>president@gloriouseagles.com</p>
            <p style={link_style}>+1 470-3360-611</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1.8125rem",
              }}
            >
              <a>
                <img src={Facebook} />
              </a>
              <a>
                <img src={Instagram} />
              </a>
              <a>
                <img src={Twitter} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
