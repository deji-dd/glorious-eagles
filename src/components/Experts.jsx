import Arrow from "../assets/down-arrow.svg";
import Img1 from "../assets/experts1.svg";
import Img2 from "../assets/experts2.svg";

export default function Experts(props) {
  return (
    <div
      style={{
        display: "flex",
        width: "90rem",
        alignItems: "center",
        justifyContent: "center",
        gap: "4.06rem",
        background: "var(--Light-purple, #F1EBFE)",
        height: "53.77rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3.75rem",
          height: "35.2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            width: "32.9375rem",
          }}
        >
          <h1 style={{ lineHeight: "5.375rem" }}>
            We are experts with a difference
          </h1>
          <p
            style={{
              color: "var(--Text, #4D4D4D)",
              fontSize: "1.5rem",
              lineHeight: "2.5rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur ipiscing elit. Cursus
            imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
            nec gravida ipsum pulvinar vel non.Faucibus nec gravida ipsum
            pulvinar vel.
          </p>
        </div>
        <div style={{ display: "flex", gap: "4rem", alignItems: "center" }}>
          <button className={"button-p"}>Contact us</button>
          <img
            style={{
              width: "4rem",
              height: "4rem",
              cursor: "pointer",
            }}
            src={Arrow}
            onClick={props.scroll}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "2.5rem",
          height: "35.2rem",
        }}
      >
        <img style={{ alignSelf: "flex-start" }} src={Img1} />
        <img style={{ alignSelf: "flex-end" }} src={Img2} />
      </div>
    </div>
  );
}
