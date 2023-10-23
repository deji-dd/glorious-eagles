import BG from "../assets/transform-bg.svg";
import Gif from "../assets/career.gif";

export default function Transform() {
  return (
    <div
      style={{
        display: "inline-flex",
        padding: "7rem 2.3rem",
        alignItems: "center",
        justifyContent: "center",
        width: "90rem",
        height: "69.1875rem",
        flexDirection: "column",
        gap: "3.38rem",
      }}
    >
      <h2 style={{ lineHeight: "2.875rem" }}>Career</h2>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: `url(${BG})`,
          width: "85.3125rem",
          height: "56.4375rem",
          flexShrink: "0",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "3.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <img style={{ height: "14.375rem" }} src={Gif} />
            <h1
              style={{
                lineHeight: "120%",
                textTransform: "capitalize",
                width: "64.625rem",
                color: "#FFF",
                textAlign: "center",
              }}
            >
              Work with Us to Transform Lives Through ABA Excellence
            </h1>
            <p
              style={{
                color: "#FFF",
                textAlign: "center",
                lineHeight: "160%",
                fontSize: "1.5rem",
                width: "60.8125rem",
              }}
            >
              Join our team and become a part of something extraordinary. We are
              passionate about making a positive impact on the lives of
              individuals and families through Applied Behavior Analysis (ABA)
              therapy. If you're dedicated, compassionate, and eager to
              contribute your expertise to our mission, we invite you to explore
              the rewarding career opportunities we offer.
            </p>
          </div>
          <a href={"/career"}>
            <button
              style={{
                color: "var(--Primary-colour, #180344)",
                background: "#FFF",
                width: "21.4rem",
              }}
              className={"button-p"}
            >
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
