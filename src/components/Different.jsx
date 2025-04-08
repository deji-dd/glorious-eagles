import blue_circle from "../assets/blue-circle.png";
import orange_circle from "../assets/orange-circle.png";

export default function Different() {
  const circle_div = {
    width: "15rem",
    height: "15rem",
    flexShrink: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    textAlign: "center",
    fontSize: "1.875rem",
    lineHeight: "2.5rem",
    letterSpacing: "-0.00938rem",
    padding: "5rem 1.1rem",
  };
  const blue = {
    ...circle_div,
    background: `url(${blue_circle})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const orange = {
    ...circle_div,
    background: `url(${orange_circle})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "3.75rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "12.5rem",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "12.5rem",
        }}
      >
        <div className={"circle-expand"} style={blue}>
          <p>Innovative Techniques</p>
        </div>
        <div className={"circle-expand"} style={orange}>
          <p>Evidence Based</p>
        </div>
        <div className={"circle-expand"} style={blue}>
          <p>Compassionate Professionals</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "12.5rem",
        }}
      >
        <div className={"circle-expand"} style={orange}>
          <p>Inclusion and Diversity</p>
        </div>
        <div className={"circle-expand"} style={blue}>
          <p>Client Centered</p>
        </div>
        <div className={"circle-expand"} style={orange}>
          <p>Collaborative Care</p>
        </div>
      </div>
    </div>
  );
}
