export default function MobileEssentialsCard(props) {
  return (
    <a href={"/services"}>
      <div
        style={{
          width: "13.1688rem",
          height: "11.93288rem",
          borderRadius: "1rem",
          display: "flex",
          alignItems: "flex-end",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={props.img}
          style={{
            position: "absolute",
            zIndex: "0",
            width: "13.1688rem",
            height: "11.93288rem",
          }}
        />
        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(53, 49, 49, 0.46) 0%, rgba(53, 49, 49, 0.38) 93.56%)",
            height: "4.43224rem",
            width: "13.1688rem",
            flexShrink: "0",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            padding: "0.35rem 0.6rem",
            display: "inline-flex",
            gap: "0.17048rem",
            flexDirection: "column",
            zIndex: "1",
          }}
        >
          <h3
            style={{
              color: "#FFF",
              fontSize: "2.0456rem",
              lineHeight: "normal",
            }}
          >
            {props.num}
          </h3>
          <h4
            style={{
              color: "#FFF",
              lineHeight: "1.0228rem",
              letterSpacing: "-0.01232rem",
              fontSize: "1.12rem",
            }}
          >
            {props.desc}
          </h4>
        </div>
      </div>
    </a>
  );
}
