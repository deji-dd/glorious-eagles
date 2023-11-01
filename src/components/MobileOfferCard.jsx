export default function MobileOfferCard(props) {
  return (
    <div
      style={{
        background: `url(${props.img})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "8.86008rem",
        height: "10.4rem",
        flexShrink: "0",
        backgroundSize: "8.86008rem 10.4rem",
      }}
    >
      <h3 style={{ color: "#FFF", fontSize: "1.2rem" }}>{props.desc}</h3>
    </div>
  );
}
