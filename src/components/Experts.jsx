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
            Our commitment to excellence, innovation, and client-centered care
            sets us apart. With a team of dedicated professionals and a passion
            for transformative solutions, we stand ready to exceed your
            expectations. Discover the exceptional difference that sets us apart
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
        <img
          className={"img-hover-zoom--slowmo"}
          style={{ alignSelf: "flex-start" }}
          src={Img1}
        />
        <img
          className={"img-hover-zoom--slowmo"}
          style={{ alignSelf: "flex-end" }}
          src={Img2}
        />
      </div>
    </div>
  );
}
