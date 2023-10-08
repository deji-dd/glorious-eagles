import BG from "../assets/transform-bg.svg";

export default function Transform(props) {
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
              {props.title}
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
              {props.desc}
            </p>
          </div>
          <button
            style={{
              color: "var(--Primary-colour, #180344)",
              background: "#FFF",
            }}
            className={"button-p"}
          >
            {props.btn}
          </button>
        </div>
      </div>
    </div>
  );
}
