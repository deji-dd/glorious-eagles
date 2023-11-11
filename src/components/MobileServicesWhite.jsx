export default function MobileServicesWhite(props) {
  return (
    <div
      style={{
        width: "30rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "3.84rem",
        flexDirection: "column",
        padding: "3.5rem 0",
      }}
    >
      <img style={{ width: "26.71624rem" }} src={props.img} />
      <div
        style={{
          display: "flex",
          gap: "1.92rem",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0.64rem",
            flexDirection: "column",
          }}
        >
          <h2 style={{ fontSize: "1.92rem" }}>{props.title}</h2>
          <p
            style={{
              width: "25.6rem",
              fontSize: "1.28rem",
              lineHeight: "2.0312rem",
            }}
          >
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
