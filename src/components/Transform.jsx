import BG from "../assets/transform-bg.svg";

export default function Transform() {
  return (
    <div
      style={{
        display: "inline-flex",
        padding: "7rem 2.3rem",
        alignItems: "center",
        justifyContent: "center",
        width: "90rem",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: `url(${BG})`,
          width: "85.3125rem",
          height: "39.5rem",
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
              gap: "2.5rem",
            }}
          >
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
              “Lobortis leo pretium facilisis amet nisl at nec. Scelerisque
              risus tortor donec ipsum consequat semper consequat adipiscing
              ultrices Scelerisque risus tortor donec ipsum consequat semper
              consequatScelerisque risus tortor donec ipsum consequat semper
              consequat.”
            </p>
          </div>
          <button
            style={{
              color: "var(--Primary-colour, #180344)",
              background: "#FFF",
            }}
            className={"button-p"}
          >
            Apply to work with us
          </button>
        </div>
      </div>
    </div>
  );
}
