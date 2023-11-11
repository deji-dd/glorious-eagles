import img1 from "../assets/mobile-unlocking-1.svg";
import img2 from "../assets/mobile-unlocking-2.svg";
import img3 from "../assets/mobile-unlocking-3.svg";
import img4 from "../assets/mobile-unlocking-4.svg";
import img5 from "../assets/mobile-unlocking-5.svg";
import img6 from "../assets/mobile-unlocking-6.svg";

export default function MobileUnlocking() {
  const div = {
    display: "flex",
    gap: "0.5rem",
    flexShrink: "0",
  };
  const div_col = { ...div, flexDirection: "column" };
  return (
    <div
      style={{
        width: "30rem",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2.37rem",
        paddingTop: "3.16rem",
        paddingBottom: "5.12rem",
        backgroundColor: "#E5E2FD",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1.28rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            width: "26.30704rem",
            letterSpacing: "0.0256rem",
            fontSize: "2.56rem",
            lineHeight: "3.0256rem",
          }}
        >
          Unlocking Potential, One Step at a Time: Your Partner in ABA Therapy
        </h1>
        <p
          style={{
            color: "#4D4D4D",
            fontSize: "1.28rem",
            lineHeight: "2rem",
            width: "25.56224rem",
          }}
        >
          Discover personalized care that empowers you or your loved one. Let's
          make a brighter tomorrow a reality for you and your family
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.9rem",
          }}
        >
          <a href={"/contact-us"}>
            <button className={"button-p button-mobile"}>Contact us</button>
          </a>
          <a href={"/services"}>
            <button className={"button-s button-mobile"}>Learn more</button>
          </a>
        </div>
      </div>
      <div style={div}>
        <div style={div_col}>
          <img src={img1} />
          <img src={img2} />
        </div>
        <div style={div_col}>
          <img src={img3} />
          <img src={img4} />
        </div>
        <div style={div_col}>
          <img src={img5} />
          <img src={img6} />
        </div>
      </div>
    </div>
  );
}
