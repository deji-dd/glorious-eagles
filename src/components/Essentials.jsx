import BG from "../assets/elipses.svg";
import EssentialsCard from "./EssentialsCard";
import Essential1 from "../assets/essential1.svg";
import Essential2 from "../assets/essential2.svg";
import Essential3 from "../assets/essential3.svg";
import Essential5 from "../assets/essential5.svg";
import Essential7 from "../assets/essential7.svg";
import Essential8 from "../assets/essential8.svg";

export default function Essentials() {
  return (
    <div
      style={{
        maxWidth: "90rem",
        width: "100%",
        height: "53.75rem",
        background: `url(${BG}) -5rem -5rem no-repeat`,
        padding: "4.35rem 4.12rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "3.75rem",
      }}
    >
      <h1 style={{ lineHeight: "4.28125rem" }}>
        Some essentials services we render
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.5rem",
          }}
        >
          <EssentialsCard
            img={Essential1}
            num={"01"}
            desc={"Language Acquisition"}
          />
          <EssentialsCard
            img={Essential2}
            num={"02"}
            desc={"School-Age Programs"}
          />
          <EssentialsCard
            img={Essential3}
            num={"03"}
            desc={"Functional Living Skills"}
          />
          <EssentialsCard
            img={Essential1}
            num={"04"}
            desc={"Parent Training"}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.5rem",
          }}
        >
          <EssentialsCard
            img={Essential5}
            num={"05"}
            desc={"School Readiness"}
          />
          <EssentialsCard
            img={Essential8}
            num={"06"}
            desc={"Personalised Therapy"}
          />
          <EssentialsCard
            img={Essential7}
            num={"07"}
            desc={"Behaviour Reduction"}
          />
          <EssentialsCard
            img={Essential8}
            num={"08"}
            desc={"Toilet training"}
          />
        </div>
      </div>
    </div>
  );
}
