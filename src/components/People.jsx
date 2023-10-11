import BG from "../assets/services-purple-bg.svg";
import Card1 from "../assets/people-card1.svg";
import Card2 from "../assets/people-card2.svg";
import Card3 from "../assets/people-card3.svg";
import Card4 from "../assets/people-card4.svg";
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.625rem",
        }}
      >
        <p
          style={{
            color: "var(--Text, #4D4D4D)",
            fontSize: "1.25rem",
            lineHeight: "150.6%",
          }}
        >
          Team Members
        </p>
        <h2>
          We Have{" "}
          <span
            style={{
              color: "var(--Secondary-orange, #FD7528)",
            }}
          >
            Some Awesome
          </span>{" "}
          People in charge here
        </h2>
      </div>
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
          <PeopleCard
            img={Card1}
            title={"CEO/Founder"}
            name={"Gustavo Herwitz"}
          />
          <PeopleCard
            img={Card2}
            title={"Co-Founder"}
            name={"Gustavo Herwitz"}
            social={false}
          />
          <PeopleCard
            img={Card3}
            title={"Therapist"}
            name={"Gustavo Herwitz"}
            social={false}
          />
          <PeopleCard
            img={Card4}
            title={"Therapist"}
            name={"Gustavo Herwitz"}
            social={false}
          />
        </div>
      </div>
    </div>
  );
}
