import blue_circle from "../assets/blue-circle.png";
import orange_circle from "../assets/orange-circle.png";

export default function MobileDifferent() {
  const circle_div = {
    width: "12.56024rem",
    height: "12.56024rem",
    flexShrink: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    textAlign: "center",
    fontSize: "1.6rem",
    lineHeight: "2.09336rem",
    letterSpacing: "-0.008rem",
    padding: "4rem 1rem",
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
  const div_style = {
    display: "flex",
    alignItems: "flex-start",
    gap: "2.34928rem",
  };
  return (
    <div
      style={{
        display: "flex",
        padding: "3.68rem 1.28rem 4.9592rem 1.25016rem",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.4rem",
        width: "30rem",
      }}
    >
      <h1
        style={{
          width: "26.30704rem",
          fontSize: "2.4rem",
          lineHeight: "3.0256rem",
          letterSpacing: "0.024rem",
          textAlign: "center",
        }}
      >
        A different approach to Applied Behaviour Analysis Therapy
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2.24rem",
        }}
      >
        <div style={div_style}>
          <div style={blue}>
            <p>Innovative Techniques</p>
          </div>
          <div style={orange}>
            <p>Evidence Based</p>
          </div>
        </div>
        <div style={div_style}>
          <div style={blue}>
            <p>Compassionate Professionals</p>
          </div>
          <div style={orange}>
            <p>Inclusion and Diversity</p>
          </div>
        </div>
        <div style={div_style}>
          <div style={blue}>
            <p>Client Centered</p>
          </div>
          <div style={orange}>
            <p>Collaborative Care</p>
          </div>
        </div>
      </div>
    </div>
  );
}
