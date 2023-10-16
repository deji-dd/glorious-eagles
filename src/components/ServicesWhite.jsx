import BG from "../assets/elipses.svg";

export default function ServicesWhite(props) {
  return (
    <div
      style={{
        width: "90rem",
        height: "53.75rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `url(${BG}) -22rem -11rem no-repeat`,
        gap: "7.5rem",
      }}
    >
      <img src={props.img} />
      <div
        style={{
          display: "flex",
          gap: "4rem",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            flexDirection: "column",
          }}
        >
          <h2>{props.title}</h2>
          <p
            style={{
              width: "36.3125rem",
              fontSize: "1.5rem",
              lineHeight: "2.3125rem",
            }}
          >
            {props.desc}
          </p>
        </div>
        <button style={{ width: "16.75rem" }} className={"button-p"}>
          Learn more
        </button>
      </div>
    </div>
  );
}
