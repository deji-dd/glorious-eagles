export default function OfferCard(props) {
  return (
    <div
      style={{
        background: `url(${props.img})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "26.25rem",
        height: "30.8125rem",
        flexShrink: "0",
      }}
    >
      <h3 style={{ color: "#FFF" }}>{props.desc}</h3>
    </div>
  );
}
