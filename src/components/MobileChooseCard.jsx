export default function MobileChooseCard(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        width: "27.28rem",
        height: "15.5rem",
        borderRadius: "0.80432rem",
        background: "var(--Light-purple, #F1EBFE)",
        flexDirection: "column",
        gap: "1.2rem",
        padding: "0.65rem 1rem",
      }}
    >
      <img src={props.img} style={{ width: "2.88rem" }} />
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h4
          style={{
            color: "var(--Primary-colour, #180344)",
            fontSize: "1.60864rem",
            lineHeight: "1.20648rem",
            letterSpacing: "-0.01768rem",
          }}
        >
          {props.title}
        </h4>
        <p
          style={{
            color: "var(--Text, #4D4D4D)",
            fontSize: "1.20648rem",
            lineHeight: "2.0108rem",
            width: "24.64rem",
          }}
        >
          {props.desc}
        </p>
      </div>
    </div>
  );
}
