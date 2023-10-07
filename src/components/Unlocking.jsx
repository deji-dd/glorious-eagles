import BG from "../assets/elipses.svg";
import img1 from "../assets/unlocking-1.svg";
import img2 from "../assets/unlocking-2.svg";
import img3 from "../assets/unlocking-3.svg";
import img4 from "../assets/unlocking-4.svg";
import img5 from "../assets/unlocking-5.svg";
import img6 from "../assets/unlocking-6.svg";

export default function Unlocking() {
  const div = {
    display: "flex",
    gap: "1rem",
    flexShrink: "0",
  };
  const div_col = { ...div, flexDirection: "column" };
  return (
    <div
      style={{
        width: "90rem",
        height: "64rem",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "3.56rem",
        background: `url(${BG}) 8rem 8rem no-repeat`,
        paddingTop: "8.19rem",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1.75rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            width: "68.4375rem",
            letterSpacing: "0.04rem",
          }}
        >
          Unlocking Potential, One Step at a Time: Your Partner in ABA Therapy"
        </h1>
        <p style={{ color: "#4D4D4D", fontSize: "1.5rem", lineHeight: "2rem" }}>
          Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar
          vel.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.5rem",
          }}
        >
          <button className={"button-p"}>Contact us</button>
          <button className={"button-s"}>Learn more</button>
        </div>
      </div>
      <div style={div}>
        <div style={div_col}>
          <div style={div}>
            <img src={img1} />
            <img src={img2} />
          </div>
          <img src={img3} />
        </div>
        <img src={img4} />
        <div style={div_col}>
          <img src={img5} />
          <img src={img6} />
        </div>
      </div>
    </div>
  );
}
