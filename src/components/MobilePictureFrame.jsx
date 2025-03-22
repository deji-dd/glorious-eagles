export default function PictureFrame(props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        flexDirection: "column",
        backgroundColor: "#F1EBFE",
        border: "2px solid #E0CAFE",
        borderRadius: "1.5rem",
        padding: "1rem",
        width: "25rem",
      }}
    >
      <img src={props.img} />
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          flexDirection: "column",
        }}
      >
        <h4 style={{ lineHeight: "24px" }}>{props.title}</h4>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "21px",
            color: "#4D4D4D",
          }}
        >
          {props.desc}
        </p>
      </div>
    </div>
  );
}
