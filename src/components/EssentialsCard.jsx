export default function EssentialsCard(props) {
  return (
    <div
      style={{
        width: "19.3125rem",
        height: "17.5rem",
        borderRadius: "1rem",
        display: "flex",
        alignItems: "flex-end",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        className={"img-hover-zoom--fast"}
        src={props.img}
        style={{ position: "absolute", zIndex: "0" }}
      />
      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(53, 49, 49, 0.46) 0%, rgba(53, 49, 49, 0.38) 93.56%)",
          height: "6.5rem",
          width: "19.3125rem",
          flexShrink: "0",
          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
          padding: "0.5rem 0.94rem",
          display: "inline-flex",
          gap: "0.25rem",
          flexDirection: "column",
          zIndex: "1",
        }}
      >
        <h3 style={{ color: "#FFF", lineHeight: "125%" }}>{props.num}</h3>
        <h4
          style={{
            color: "#FFF",
            lineHeight: "1.5rem",
            letterSpacing: "-0.0165rem",
          }}
        >
          {props.desc}
        </h4>
      </div>
    </div>
  );
}
