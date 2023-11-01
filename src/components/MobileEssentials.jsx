import MobileEssentialsCard from "./MobileEssentialsCard";
import Essential1 from "../assets/essential1.svg";
import Essential2 from "../assets/essential2.svg";
import Essential3 from "../assets/essential3.svg";
import Essential5 from "../assets/essential5.svg";
import Essential7 from "../assets/essential7.svg";
import Essential8 from "../assets/essential8.svg";

export default function MobileEssentials() {
  const div_style = {
    display: "flex",
    gap: "1.19rem",
  };
  return (
    <div
      style={{
        width: "30rem",
        height: "65.24rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2.56rem",
      }}
    >
      <h1
        style={{
          lineHeight: "3.0256rem",
          width: "26.30704rem",
          fontSize: "2.4rem",
          letterSpacing: "0.024rem",
          textAlign: "center",
        }}
      >
        Some essentials services we render
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.02rem",
        }}
      >
        <div style={div_style}>
          <MobileEssentialsCard
            img={Essential1}
            num={"01"}
            desc={"Language Acquisition"}
          />
          <MobileEssentialsCard
            img={Essential2}
            num={"02"}
            desc={"School-Age Programs"}
          />
        </div>
        <div style={div_style}>
          <MobileEssentialsCard
            img={Essential3}
            num={"03"}
            desc={"Functional Living Skills"}
          />
          <MobileEssentialsCard
            img={Essential1}
            num={"04"}
            desc={"Parent Training"}
          />
        </div>
        <div style={div_style}>
          <MobileEssentialsCard
            img={Essential5}
            num={"05"}
            desc={"School Readiness"}
          />
          <MobileEssentialsCard
            img={Essential8}
            num={"06"}
            desc={"Personalised Therapy"}
          />
        </div>
        <div style={div_style}>
          {" "}
          <MobileEssentialsCard
            img={Essential7}
            num={"07"}
            desc={"Behaviour Reduction"}
          />
          <MobileEssentialsCard
            img={Essential8}
            num={"08"}
            desc={"Toilet training"}
          />
        </div>
      </div>
    </div>
  );
}
