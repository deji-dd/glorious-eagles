import BG from "../assets/elipses.svg";
import WorkImg from "../assets/work-img.svg";
import Line from "../assets/work-line.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Work() {
  const h3_style = {
    fontSize: "2rem",
    color: "var(--Secondary-orange, #FD7528)",
  };
  const h5_style = {
    color: "var(--Primary-colour, #180344)",
    width: "19.8125rem",
  };
  const h5_right = {
    ...h5_style,
    textAlign: "right",
  };
  const img_style = {
    width: "20.125rem",
  };
  const img_right = {
    ...img_style,
    transform: "scaleX(-1)",
  };
  const div_style = {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.625rem",
  };
  const div_right = {
    ...div_style,
    alignItems: "flex-end",
  };
  return (
    <div
      style={{
        display: "flex",
        width: "90rem",
        height: "53.75rem",
        padding: "4rem 3rem",
        justifyContent: "center",
        alignItems: "center",
        gap: "9.58rem",
        background: `url(${BG}) -15rem -15rem no-repeat`,
      }}
    >
      <img src={WorkImg} />
      <div style={{ display: "flex", flexDirection: "column", gap: "3.63rem" }}>
        <h2>How We Work- 4 easy steps</h2>
        <div style={{ display: "flex", position: "relative" }}>
          <hr
            style={{
              width: "0.4375rem",
              height: "38.25rem",
              flexShrink: "0",
              opacity: "0.1",
              background:
                "linear-gradient(295deg, #4563FF 9.05%, #4388DD 79.28%)",
              position: "absolute",
              margin: "0",
              left: "18.9375rem",
            }}
          />
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOut="animate__fadeOutLeft"
            >
              <div style={{ ...div_style, marginBottom: "10.6rem" }}>
                <h3 style={h3_style}>01</h3>
                <h5 style={h5_style}>
                  Initial consultation and assessment process
                </h5>
                <img src={Line} style={img_style} />
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              animateOut="animate__fadeOutLeft"
            >
              <div style={div_style}>
                <h3 style={h3_style}>03</h3>
                <h5 style={h5_style}>Ongoing progress monitoring</h5>
                <img src={Line} style={img_style} />
              </div>
            </AnimationOnScroll>
            <a href={"/how-we-work"}>
              <button
                style={{
                  width: "16.75rem",
                  position: "relative",
                  top: "7.5rem",
                }}
                class={"button-p"}
              >
                Learn more
              </button>
            </a>
          </div>
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              gap: "10.6rem",
              paddingTop: "10.6rem",
              position: "relative",
              left: "-1.9375rem",
            }}
          >
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              animateOut="animate__fadeOutRight"
            >
              <div style={div_right}>
                <h3 style={h3_style}>02</h3>
                <h5 style={h5_right}>Individualized treatment plans</h5>
                <img src={Line} style={img_right} />
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              animateOut="animate__fadeOutRight"
            >
              <div style={div_right}>
                <h3 style={h3_style}>04</h3>
                <h5 style={h5_right}>Family involvement and training</h5>
                <img src={Line} style={img_right} />
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
