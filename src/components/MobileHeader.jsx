import logo from "../assets/logo.svg";
import icon from "../assets/navbar-icon.svg";
import { useLocation } from "react-router-dom";
import MailIcon from "../assets/message-icon.svg";
import CallIcon from "../assets/call-icon.svg";
import Facebook from "../assets/social-facebook.svg";
import Instagram from "../assets/social-instagram.svg";
import Twitter from "../assets/social-twitter.svg";

export default function MobileHeader() {
  const location = useLocation();
  const path = location.pathname;
  const link_style = {
    color: "var(--Text-Color, #151411)",
    fontFamily: "Hanken Grotesk",
    fontSize: "1.28rem",
    fontWeight: "500",
    lineHeight: "180%",
    width: "fit-content",
  };
  const link_active = {
    ...link_style,
    display: "flex",
    padding: "0.16rem 1rem",
    gap: "0.5rem",
    borderRadius: "8rem",
    background: "var(--Light-purple, #F1EBFE)",
  };
  const div_style = {
    display: "flex",
    gap: "0.55rem",
  };
  const img_style = { width: "1.3rem", height: "1.3rem" };

  return (
    <div
      style={{
        maxWidth: "30rem",
        width: "100%",
        height: "5rem",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "0.8px solid #FFF",
        position: "fixed",
        left: "0",
        top: "0",
        background: "#E5E2FD",
        zIndex: "50",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "9.44rem",
        }}
      >
        <a
          href={"/"}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.54rem",
          }}
        >
          <img src={logo} style={{ width: "3.18368rem" }} />
          <h1
            style={{
              fontFamily: "Fascinate Inline",
              fontSize: "0.72264rem",
              width: "3.92rem",
            }}
          >
            GLORIOUS EAGLES
          </h1>
        </a>
        <div style={{ display: "flex", gap: "1.6rem" }} className="w-fit">
          <a href={"/intake-form"}>
            <button
              className={"button-p button-mobile w-fit whitespace-nowrap"}
            >
              EIDBI Intake Form
            </button>
          </a>
          <nav className="navbar navbar-dark p-0">
            <div
              style={{ paddingTop: "0.3125rem" }}
              className="container-fluid px-0"
            >
              <button
                style={{
                  width: "1.375rem",
                  border: "none",
                }}
                className="navbar-toggler p-0"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span
                  style={{
                    width: "1.375rem",
                    background: `url(${icon})`,
                  }}
                  className="navbar-toggler-icon"
                ></span>
              </button>
              <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    flexDirection: "column",
                    gap: "2rem",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      justifyContent: "space-between",
                      width: "20.1rem",
                    }}
                  >
                    <a
                      href={"/"}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.54rem",
                        paddingTop: "0.5rem",
                      }}
                    >
                      <img src={logo} style={{ width: "3.18368rem" }} />
                      <h1
                        style={{
                          fontFamily: "Fascinate Inline",
                          fontSize: "0.72264rem",
                        }}
                      >
                        GLORIOUS EAGLES
                      </h1>
                    </a>
                    <button
                      style={{ marginTop: "0.5rem" }}
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      flexDirection: "column",
                      gap: "5rem",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        flexDirection: "column",
                        gap: "2.5rem",
                      }}
                    >
                      <a
                        href={"/"}
                        style={path == "/" ? link_active : link_style}
                        // data-bs-dismiss="offcanvas"
                      >
                        Home
                      </a>
                      <a
                        href={"/services"}
                        style={path == "/services" ? link_active : link_style}
                        // data-bs-dismiss="offcanvas"
                      >
                        Services
                      </a>
                      <a
                        href={"/about-us"}
                        style={path == "/about-us" ? link_active : link_style}
                        // data-bs-dismiss="offcanvas"
                      >
                        About Us
                      </a>
                      <a
                        href={"/how-we-work"}
                        style={
                          path == "/how-we-work" ? link_active : link_style
                        }
                        // data-bs-dismiss="offcanvas"
                      >
                        How we work
                      </a>
                      <a
                        href={"/career"}
                        style={path == "/career" ? link_active : link_style}
                        // data-bs-dismiss="offcanvas"
                      >
                        Career
                      </a>
                      <a href={"/contact-us"}>
                        <button
                          className={"button-p button-mobile"}
                          style={{
                            padding: "1.28rem 0.96rem",
                            width: "12.48rem",
                            fontSize: "1.44rem",
                            lineHeight: "1.44rem",
                          }}
                          // data-bs-dismiss="offcanvas"
                        >
                          Contact us
                        </button>
                      </a>
                    </div>
                    <div
                      style={{
                        display: "inline-flex",
                        flexDirection: "column",
                        gap: "2.5rem",
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
                          className="bi bi-printer"
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
                          gap: "1.57rem",
                        }}
                      >
                        <a
                          href={
                            "https://web.facebook.com/people/Hero-Center/61557128850758/"
                          }
                        >
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
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
