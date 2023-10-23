import BG from "../assets/services-purple-bg.svg";
import Img from "../assets/member.svg";
import PeopleCard from "./PeopleCard";

export default function People() {
  return (
    <div
      style={{
        display: "flex",
        background: `url(${BG}) 0 2rem no-repeat`,
        backgroundColor: "var(--Light-primary, #F6F5FF)",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "4.38rem",
        height: "46.875rem",
      }}
    >
      <h2>Team Members</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.875rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "2rem",
          }}
        >
          <PeopleCard img={Img} title={"CEO/Founder"} />
          <PeopleCard img={Img} title={"Co-Founder"} />
          <PeopleCard img={Img} title={"Program Director"} />
          <PeopleCard img={Img} title={"QSP"} />
        </div>
      </div>
    </div>
  );
}
