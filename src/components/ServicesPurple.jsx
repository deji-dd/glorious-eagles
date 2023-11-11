import BG from "../assets/services-purple-bg.svg";

export default function ServicesPurple(props) {
  return (
    <div
      style={{
        width: "90rem",
        height: "53.75rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `url(${BG}) 21rem 3rem no-repeat`,
        gap: "7.5rem",
        backgroundColor: "var(--Light-primary, #F6F5FF)",
      }}
    >
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
      </div>
      <img src={props.img} />
    </div>
  );
}
