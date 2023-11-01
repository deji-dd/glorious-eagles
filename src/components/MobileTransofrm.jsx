import Gif from "../assets/career.gif";

export default function MobileTransform() {
  return (
    <div
      style={{
        display: "inline-flex",
        padding: "1.5rem 1.3rem",
        alignItems: "center",
        justifyContent: "center",
        width: "30rem",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--Primary-colour, #180344)",
          width: "27.36rem",
          height: "55.5rem",
          flexShrink: "0",
          borderRadius: "1.38688rem",
          border: "0.51px solid var(--neutral-300, #EFF0F6)",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.7rem",
          }}
        >
          <img style={{ height: "9.92rem" }} src={Gif} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.65rem",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                lineHeight: "3.0256rem",
                textTransform: "capitalize",
                width: "25.2rem",
                color: "#FFF",
                textAlign: "center",
                fontSize: "2.24rem",
                letterSpacing: "0.0224rem",
              }}
            >
              Work with Us to Transform Lives Through ABA Excellence
            </h1>
            <p
              style={{
                color: "#FFF",
                textAlign: "center",
                lineHeight: "2.0888rem",
                fontSize: "1.28rem",
                width: "24.08rem",
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
        </div>
        <a href={"/career"}>
          <button
            style={{
              color: "var(--Primary-colour, #180344)",
              background: "#E0D3FD",
              width: "22.48rem",
              height: "4.8rem",
            }}
            className={"button-p"}
          >
            Apply
          </button>
        </a>
      </div>
    </div>
  );
}
