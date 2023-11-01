import WorkImg from "../assets/work-img.svg";
import Line from "../assets/work-line.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function MobileWork() {
  const h3_style = {
    fontSize: "1.92rem",
    color: "var(--Secondary-orange, #FD7528)",
  };
  const h5_style = {
    color: "var(--Primary-colour, #180344)",
    width: "12.22128rem",
    fontSize: "0.96rem",
  };
  const h5_right = {
    ...h5_style,
    textAlign: "right",
  };
  const img_style = {
    width: "14.1284rem",
  };
  const img_right = {
    ...img_style,
    transform: "scaleX(-1)",
  };
  const div_style = {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };
  const div_right = {
    ...div_style,
    alignItems: "flex-end",
  };
  return (
    <div
      style={{
        display: "flex",
        width: "30rem",
        padding: "4rem 1.4rem",
        justifyContent: "center",
        alignItems: "center",
        gap: "2.4rem",
        flexDirection: "column",
      }}
    >
      <img src={WorkImg} style={{ width: "24.22752rem", height: "31.28rem" }} />
      <h2
        style={{
          width: "26.30704rem",
          textAlign: "center",
          fontSize: "2.4rem",
          lineHeight: "3.0256rem",
          letterSpacing: "0.024rem",
        }}
      >
        How We Work- 4 easy steps
      </h2>
      <div
        style={{ display: "flex", position: "relative", overflow: "hidden" }}
      >
        <hr
          style={{
            width: "0.296rem",
            height: "27rem",
            flexShrink: "0",
            opacity: "0.1",
            background:
              "linear-gradient(295deg, #4563FF 9.05%, #4388DD 79.28%)",
            position: "absolute",
            margin: "0",
            left: "13.2rem",
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
            <div style={{ ...div_style, marginBottom: "6.47rem" }}>
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
        </div>
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            gap: "6.47rem",
            paddingTop: "6.47rem",
            position: "relative",
            left: "-1.5rem",
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
  );
}
